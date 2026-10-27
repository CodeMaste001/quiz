const express = require('express');
const session = require('express-session');
const path = require('path');
const fs = require('fs');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 3000;
const appUsername = process.env.APP_USERNAME || 'owner';
const appPassword = process.env.APP_PASSWORD || 'change-me';
const sessionSecret = process.env.SESSION_SECRET || 'dev-secret';
const sessionTtlMs = Number(process.env.SESSION_TTL_MS || 30 * 60 * 1000);

const loginFailures = new Map();
const MAX_FAILURES = 5;
const LOCK_MS = 5 * 60 * 1000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(
  session({
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    rolling: true,
    cookie: {
      httpOnly: true,
      secure: false,
      sameSite: 'lax',
      maxAge: sessionTtlMs,
    },
  })
);

function getClientKey(req) {
  return (req.headers['x-forwarded-for'] || req.socket.remoteAddress || 'unknown').toString();
}

function isLocked(key) {
  const info = loginFailures.get(key);
  if (!info) return false;
  return Date.now() < info.lockUntil;
}

function markFailure(key) {
  const now = Date.now();
  const info = loginFailures.get(key) || { count: 0, lockUntil: 0 };
  const nextCount = info.count + 1;
  if (nextCount >= MAX_FAILURES) {
    loginFailures.set(key, { count: nextCount, lockUntil: now + LOCK_MS });
    return true;
  }
  loginFailures.set(key, { count: nextCount, lockUntil: 0 });
  return false;
}

function resetFailure(key) {
  loginFailures.delete(key);
}

function requireAuth(req, res, next) {
  if (req.session && req.session.authenticated) {
    return next();
  }
  return res.status(401).json({ ok: false, message: 'No autenticado.' });
}

app.get('/api/health', (req, res) => {
  res.json({ ok: true, status: 'ok' });
});

app.post('/api/login', (req, res) => {
  const { username, password } = req.body || {};
  const clientKey = getClientKey(req);

  if (isLocked(clientKey)) {
    return res.status(429).json({
      ok: false,
      message: 'Demasiados intentos. Inténtalo más tarde.',
    });
  }

  const isValid = username === appUsername && password === appPassword;

  if (!isValid) {
    const locked = markFailure(clientKey);
    const remaining = Math.max(0, MAX_FAILURES - (loginFailures.get(clientKey)?.count || 0));
    return res.status(401).json({
      ok: false,
      message: locked
        ? 'Cuenta bloqueada temporalmente por varios intentos fallidos.'
        : `Credenciales incorrectas. Te quedan ${remaining} intentos.`,
    });
  }

  resetFailure(clientKey);
  req.session.authenticated = true;
  req.session.username = username;
  req.session.lastActivity = Date.now();
  res.json({ ok: true, username, message: 'Sesión iniciada.' });
});

app.post('/api/logout', (req, res) => {
  req.session.destroy(() => {
    res.json({ ok: true, message: 'Sesión cerrada.' });
  });
});

app.get('/api/session', (req, res) => {
  if (req.session && req.session.authenticated) {
    return res.json({ ok: true, authenticated: true, username: req.session.username });
  }
  return res.json({ ok: true, authenticated: false });
});

app.get('/api/private', requireAuth, (req, res) => {
  res.json({ ok: true, content: 'Acceso autorizado.', user: req.session.username });
});

app.get('/logout', (req, res) => {
  req.session.destroy(() => {
    res.redirect('/');
  });
});

app.get('/', (req, res) => {
  if (req.session && req.session.authenticated) {
    return res.redirect('/study.html');
  }
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

app.get('/study.html', requireAuth, (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'study.html'));
});

app.use(express.static(path.join(__dirname, 'public')));

app.use((req, res) => {
  if (req.path.startsWith('/api')) {
    return res.status(404).json({ ok: false, message: 'Ruta no encontrada.' });
  }
  res.status(404).send('Ruta no encontrada.');
});

app.listen(PORT, () => {
  console.log(`Servidor activo en http://localhost:${PORT}`);
});
