const page = document.body.dataset.page;
const isStaticDemo = new URLSearchParams(window.location.search).get('demo') === '1';

const progressKey = 'privateStudyProgress';
const animalFarmProgressKey = 'animalFarmProgress';

const defaultProgress = {
  sessions: 0,
  questionsAnswered: 0,
  mistakes: 0,
  weakTopics: {},
  history: [],
};

const questionBank = [
  {
    id: 'q-narration-1',
    concept: 'narración',
    type: 'multiple-choice',
    prompt: 'En el fragmento “Primero recogió la mochila, luego caminó hasta la escuela y por último llegó a la puerta”, ¿qué prototipo textual predomina?',
    options: ['Descripción', 'Argumentación', 'Narración', 'Diálogo'],
    correctIndex: 2,
    explanation: 'La narración presenta hechos en secuencia temporal. El texto organiza acciones siguiendo un orden cronológico.',
    hint: 'Piensa en si se relata una secuencia de acciones en el tiempo.',
  },
  {
    id: 'q-description-1',
    concept: 'descripción',
    type: 'multiple-choice',
    prompt: '¿Qué prototipo predomina en este enunciado? “El aula era amplia, con ventanas grandes, pupitres de madera y un mapa del mundo en la pared.”',
    options: ['Descripción', 'Exposición', 'Diálogo', 'Argumentación'],
    correctIndex: 0,
    explanation: 'La descripción presenta características de un lugar. Se enfoca en cómo es el aula, no en explicar ideas ni defender una posición.',
    hint: 'Busca si el texto describe rasgos físicos o detalles de un lugar.',
  },
  {
    id: 'q-exposition-1',
    concept: 'exposición',
    type: 'multiple-choice',
    prompt: '¿Cuál es el prototipo dominante en la siguiente explicación? “La fotosíntesis es el proceso mediante el cual las plantas convierten la energía solar en alimento.”',
    options: ['Narración', 'Descripción', 'Exposición', 'Poética'],
    correctIndex: 2,
    explanation: 'La exposición informa y explica un concepto; su objetivo es facilitar la comprensión.',
    hint: 'Si el texto enseña un concepto para entenderlo, probablemente es exposición.',
  },
  {
    id: 'q-argumentation-1',
    concept: 'argumentación',
    type: 'multiple-choice',
    prompt: '¿Qué prototipo predomina en el siguiente texto? “Es necesario reducir el uso de plásticos porque contaminan el mar y afectan la salud de los animales.”',
    options: ['Argumentación', 'Diálogo', 'Narración', 'Metalingüística'],
    correctIndex: 0,
    explanation: 'La argumentación defiende una postura con razones. El texto aporta motivos para justificar la propuesta.',
    hint: 'Busca una opinión con motivos o razones de apoyo.',
  },
  {
    id: 'q-dialogue-1',
    concept: 'diálogo',
    type: 'multiple-choice',
    prompt: '¿Qué prototipo corresponde a un texto formado por intervenciones de varios hablantes?',
    options: ['Exposición', 'Diálogo', 'Descriptivo', 'Fática'],
    correctIndex: 1,
    explanation: 'El diálogo representa conversaciones entre participantes. La clave es la alternancia de voces.',
    hint: 'Piénsalo como un intercambio entre dos o más personas.',
  },
  {
    id: 'q-function-referential-1',
    concept: 'función referencial',
    type: 'multiple-choice',
    prompt: '¿Qué función del lenguaje predomina en la frase “La capital de Chile es Santiago”?',
    options: ['Emotiva', 'Metalingüística', 'Referencial', 'Apelativa'],
    correctIndex: 2,
    explanation: 'La función referencial comunica información objetiva sobre hechos o temas. El enunciado informa algo verificable.',
    hint: 'Si el mensaje transmite datos, la función es referencial.',
  },
  {
    id: 'q-function-emotive-1',
    concept: 'función emotiva',
    type: 'multiple-choice',
    prompt: '¿Qué función del lenguaje predomina en “¡Estoy tan feliz de que hayas venido!”?',
    options: ['Apelativa', 'Emotiva', 'Fática', 'Poética'],
    correctIndex: 1,
    explanation: 'La función emotiva expresa sentimientos y actitudes del emisor. El mensaje revela alegría.',
    hint: 'Busca la expresión de emoción o estado interno.',
  },
  {
    id: 'q-function-apelative-1',
    concept: 'función apelativa',
    type: 'multiple-choice',
    prompt: 'En el aviso “Por favor, trae tu cuaderno y escucha con atención”, ¿qué función del lenguaje predomina?',
    options: ['Fática', 'Apelativa', 'Poética', 'Metalingüística'],
    correctIndex: 1,
    explanation: 'La función apelativa busca influir en el receptor o pedirle algo. El mensaje orienta al oyente a actuar.',
    hint: 'La clave es una instrucción o llamado a la acción.',
  },
  {
    id: 'q-function-fatic-1',
    concept: 'función fática',
    type: 'true-false',
    prompt: 'La oración “¿Me escuchas bien?” tiene como finalidad comprobar o mantener el contacto comunicativo.',
    options: ['Verdadero', 'Falso'],
    correctIndex: 0,
    explanation: 'La función fática se centra en abrir, mantener o verificar la comunicación. La pregunta confirma que se está conectando con el receptor.',
    hint: 'Si el mensaje busca asegurar que la comunicación sigue activa, es fática.',
  },
  {
    id: 'q-function-metalinguistic-1',
    concept: 'función metalingüística',
    type: 'multiple-choice',
    prompt: '¿Qué función predomina en “La palabra ‘casa’ es un sustantivo femenino”?',
    options: ['Poética', 'Metalingüística', 'Referencial', 'Apelativa'],
    correctIndex: 1,
    explanation: 'La función metalingüística habla sobre el lenguaje mismo: sus palabras, reglas o significados.',
    hint: 'Cuando se habla del lenguaje como objeto de análisis, es metalingüística.',
  },
  {
    id: 'q-function-poetic-1',
    concept: 'función poética',
    type: 'multiple-choice',
    prompt: '¿Qué función del lenguaje predomina en “El viento me susurra secretos entre los árboles”?',
    options: ['Poética', 'Referencial', 'Fática', 'Emotiva'],
    correctIndex: 0,
    explanation: 'La función poética destaca la belleza expresiva y la forma del mensaje. El texto usa imágenes evocadoras y una metáfora.',
    hint: 'Si el lenguaje llama la atención por su musicalidad o imágenes, es poética.',
  },
  {
    id: 'q-distinction-1',
    concept: 'diferencia prototipo vs función',
    type: 'multiple-choice',
    prompt: '¿Qué diferencia es correcta?',
    options: [
      'Los prototipos muestran cómo se organiza un texto; las funciones indican el propósito comunicativo predominante.',
      'Los prototipos describen la intención del emisor; las funciones son solo tipo de narración.',
      'Las funciones del lenguaje solo se usan en poemas y las narraciones en textos expositivos.',
      'No existe diferencia entre ambos conceptos.',
    ],
    correctIndex: 0,
    explanation: 'Los prototipos textuales se refieren a la forma en que se organiza un texto; las funciones del lenguaje se refieren a la finalidad comunicativa predominante.',
    hint: 'Una idea útil: el prototipo responde “¿cómo está construido?” y la función responde “¿para qué se usa?”',
  },
  {
    id: 'q-mix-1',
    concept: 'exposición vs argumentación',
    type: 'multiple-choice',
    prompt: 'En el fragmento “La contaminación del aire aumenta en invierno por la combustión de combustibles fósiles y la baja ventilación; por ello, es importante usar transporte público”, ¿qué predomina?',
    options: ['Exposición', 'Argumentación', 'Diálogo', 'Descripción'],
    correctIndex: 1,
    explanation: 'Aunque explica causas, la finalidad principal es defender una postura y proponer una acción. El texto ofrece razones, por lo que predomina la argumentación.',
    hint: 'Busca si se está persuadiendo o justificando una idea con razones.',
  },
  {
    id: 'q-scenario-1',
    concept: 'fática',
    type: 'multiple-choice',
    prompt: 'Un estudiante dice: “¿Se oye bien? ¿Puedo seguir explicando?” ¿Qué función del lenguaje está usando?',
    options: ['Referencial', 'Fática', 'Poética', 'Emotiva'],
    correctIndex: 1,
    explanation: 'El estudiante insiste en verificar la comunicación y mantener el contacto, por eso la función fática predomina.',
    hint: 'Piénsalo como una comprobación de que la conversación sigue activa.',
  },
  {
    id: 'q-comparison-1',
    concept: 'referencial vs emotiva',
    type: 'multiple-choice',
    prompt: '¿Cuál opción diferencia mejor la función referencial de la emotiva?',
    options: [
      'La referencial entrega información objetiva; la emotiva expresa sentimientos del emisor.',
      'La referencial siempre se usa en poemas; la emotiva solo aparece en preguntas.',
      'La referencial intenta convencer al receptor; la emotiva se usa para explicar ideologías.',
      'La referencial es un documento legal; la emotiva es únicamente una conferencia.'
    ],
    correctIndex: 0,
    explanation: 'La función referencial transmite hechos y datos; la emotiva manifiesta emoción o actitud. La diferencia clave está en el propósito del mensaje.',
    hint: 'Pregunta: ¿el texto informa o expresa sentimientos?',
  },
  {
    id: 'q-situational-1',
    concept: 'narración vs descripción',
    type: 'multiple-choice',
    prompt: 'Un texto empieza con “A las siete, Ana se levantó, tomó el desayuno y salió temprano. Era una mañana fría y su mochila estaba húmeda” ¿qué prototipo predomina?',
    options: ['Narración', 'Descripción', 'Argumentación', 'Metalingüística'],
    correctIndex: 0,
    explanation: 'Aunque incluye algunas características, lo central es la sucesión de acciones temporales. Por eso predomina la narración.',
    hint: 'Si se cuentan acciones en orden, es narración.',
  },
  {
    id: 'q-poetry-1',
    concept: 'poética',
    type: 'true-false',
    prompt: 'En un poema, la función poética suele destacarse mediante imágenes, ritmo y recursos expresivos.',
    options: ['Verdadero', 'Falso'],
    correctIndex: 0,
    explanation: 'La función poética se centra en la forma y la belleza del lenguaje. Por eso suele emplear metáforas, ritmo y imágenes.',
    hint: 'Busca una expresión que resalte la forma del mensaje más que la información.',
  },
  {
    id: 'q-argumentation-2',
    concept: 'argumentación',
    type: 'multiple-choice',
    prompt: '¿Qué texto se acerca más a una argumentación?',
    options: [
      'El río corría entre rocas y árboles altos.',
      'La historia cuenta cómo Pedro llegó tarde a la escuela.',
      'Debemos cuidar el bosque porque protege a los animales y mantiene el equilibrio del ecosistema.',
      'La palabra “árbol” significa planta de tronco leñoso.'
    ],
    correctIndex: 2,
    explanation: 'Aquí se presenta una postura con razones para justificarla. La idea principal es convencer o defender una decisión.',
    hint: 'Busca una opinión sostenida por razones.',
  },
  {
    id: 'q-metalinguistic-2',
    concept: 'metalingüística',
    type: 'multiple-choice',
    prompt: 'Si alguien dice “La palabra ‘río’ es un sustantivo común y masculino”, ¿qué función del lenguaje está usando?',
    options: ['Apelativa', 'Metalingüística', 'Emotiva', 'Fática'],
    correctIndex: 1,
    explanation: 'El hablante explica el uso o la categoría de una palabra; por eso habla del lenguaje mismo.',
    hint: 'Pregunta: ¿está hablando sobre la palabra y su estructura?',
  },
  {
    id: 'q-dialogue-2',
    concept: 'diálogo',
    type: 'multiple-choice',
    prompt: '¿Qué enunciado se parece más a una escena de diálogo?',
    options: [
      'El libro explica cómo se forma una tormenta.',
      '—¿Ya terminaste la tarea? —preguntó María. —Casi. La estoy revisando.',
      'La playa tenía arena fina y una bandera azul.',
      'El poema compara la noche con un manto negro.'
    ],
    correctIndex: 1,
    explanation: 'El diálogo está compuesto por interacciones entre personas, con intercambio de preguntas y respuestas.',
    hint: 'Busca turnos de habla entre dos personas.',
  },
  {
    id: 'q-fatic-2',
    concept: 'función fática',
    type: 'multiple-choice',
    prompt: '¿Cuál de estas frases tiene principalmente función fática?',
    options: ['La luna gira alrededor de la Tierra.', '¿Sigues ahí?', 'Me siento muy nervioso.', 'La metáfora hace más bella la imagen.'],
    correctIndex: 1,
    explanation: '“¿Sigues ahí?” busca comprobar y mantener la conexión comunicativa. Por eso su función es fática.',
    hint: 'Cuando se comprueba que la otra persona está escuchando, es fática.',
  },
  {
    id: 'q-exposition-2',
    concept: 'exposición',
    type: 'multiple-choice',
    prompt: '¿Qué texto es más claramente expositivo?',
    options: [
      'El jardín olía a tierra mojada y flores blancas.',
      'La democracia es un sistema en el que el poder se ejerce mediante la participación ciudadana.',
      '¡Qué alegría que llegues! Te extrañé mucho.',
      'Mi abuelo dijo que la vida es una aventura.'
    ],
    correctIndex: 1,
    explanation: 'La exposición explica un concepto de forma clara e informativa. La definición de democracia cumple ese propósito.',
    hint: 'Si busca informar o explicar, es exposición.',
  },
  {
    id: 'q-description-2',
    concept: 'descripción',
    type: 'multiple-choice',
    prompt: '¿Cuál es un ejemplo típico de descripción?',
    options: [
      'La niña abrió la puerta y salió al patio.',
      'La biblioteca tenía estantes altos, mesas de madera y una ventana que daba al jardín.',
      'Debemos cuidar el agua para proteger la vida.',
      '¿Me entiendes si te lo explico de otra forma?'
    ],
    correctIndex: 1,
    explanation: 'La descripción presenta detalles físicos y características de un lugar. El texto describe la biblioteca con rasgos concretos.',
    hint: 'Busca un texto lleno de atributos o detalles del entorno.',
  },
];

function getStoredProgress() {
  try {
    const raw = localStorage.getItem(progressKey);
    if (!raw) return { ...defaultProgress };
    const parsed = JSON.parse(raw);
    return { ...defaultProgress, ...parsed, history: Array.isArray(parsed.history) ? parsed.history : [] };
  } catch (error) {
    return { ...defaultProgress };
  }
}

function saveProgress(progress) {
  localStorage.setItem(progressKey, JSON.stringify(progress));
}

function updateProgressSummary() {
  const summary = getStoredProgress();
  const sessionsCount = document.getElementById('sessionsCount');
  const questionsCount = document.getElementById('questionsCount');
  const mistakesCount = document.getElementById('mistakesCount');
  const weakTopics = document.getElementById('weakTopics');

  if (sessionsCount) sessionsCount.textContent = String(summary.sessions);
  if (questionsCount) questionsCount.textContent = String(summary.questionsAnswered);
  if (mistakesCount) mistakesCount.textContent = String(summary.mistakes);

  const weakEntries = Object.entries(summary.weakTopics || {}).sort(([, a], [, b]) => b - a).slice(0, 5);
  if (weakTopics) {
    weakTopics.innerHTML = weakEntries.length
      ? weakEntries.map(([topic, count]) => `<li>${topic} (${count})</li>`).join('')
      : '<li>Sin fallas aún.</li>';
  }
}

function buildReviewSummary() {
  const summary = getStoredProgress();
  const reviewSummary = document.getElementById('reviewSummary');
  if (!reviewSummary) return;

  if (!summary.history.length) {
    reviewSummary.innerHTML = '<p>Sin historial previo. Comenzaremos con una evaluación diagnóstica y ajustaremos la próxima sesión según tus resultados.</p>';
    return;
  }

  const last = summary.history[summary.history.length - 1];
  const weakTopics = Object.entries(last.weakTopics || {}).sort(([, a], [, b]) => b - a).slice(0, 3);

  reviewSummary.innerHTML = `
    <p>Última sesión: ${last.score}/10. Se observaron ${last.correct} aciertos y ${last.incorrect} errores.</p>
    <p>Temas clave: ${weakTopics.length ? weakTopics.map(([topic]) => topic).join(', ') : 'mantienes buena comprensión.'}</p>
  `;
}

function getWeightedPool(history) {
  const totalHistory = history || [];
  const weakCounts = {};

  totalHistory.forEach((session) => {
    Object.entries(session.weakTopics || {}).forEach(([topic, count]) => {
      weakCounts[topic] = (weakCounts[topic] || 0) + count;
    });
  });

  const usedQuestionIds = totalHistory.flatMap((session) => session.questions || []).map((q) => q.id);

  const sorted = questionBank
    .filter((question) => !usedQuestionIds.includes(question.id))
    .map((question) => {
      const weightBoost = weakCounts[question.concept] || 0;
      return { question, score: 1 + weightBoost * 2 };
    })
    .sort((a, b) => b.score - a.score);

  return sorted.map((item) => item.question);
}

function generateQuiz() {
  const history = getStoredProgress().history;
  const weightedPool = getWeightedPool(history);
  const selected = [];
  const seen = new Set();

  while (selected.length < 10 && weightedPool.length) {
    const candidates = weightedPool.filter((question) => !seen.has(question.id));
    if (!candidates.length) break;

    const index = Math.floor(Math.random() * candidates.length);
    const nextQuestion = candidates[index];
    seen.add(nextQuestion.id);
    selected.push(nextQuestion);
  }

  if (selected.length < 10) {
    questionBank.forEach((question) => {
      if (!seen.has(question.id) && selected.length < 10) {
        selected.push(question);
      }
    });
  }

  return selected.slice(0, 10);
}

function renderQuiz(quiz) {
  const container = document.getElementById('quizContainer');
  const intro = document.getElementById('quizIntro');

  if (!container || !intro) return;

  intro.classList.add('hidden');
  container.classList.remove('hidden');
  container.innerHTML = '';

  quiz.forEach((question, index) => {
    const card = document.createElement('article');
    card.className = 'question-card';
    card.dataset.id = question.id;
    card.dataset.type = question.type;

    const optionMarkup = question.options
      .map(
        (option, optionIndex) => `
          <button type="button" class="option-button" data-option-index="${optionIndex}">${option}</button>
        `
      )
      .join('');

    card.innerHTML = `
      <div class="question-meta">
        <span>Pregunta ${index + 1}</span>
        <span>${question.concept}</span>
      </div>
      <h3>${question.prompt}</h3>
      <div class="option-list">${optionMarkup}</div>
      <button type="button" class="hint-button">Solicitar pista</button>
      <div class="hint-box hidden"></div>
    `;

    container.appendChild(card);

    const buttons = card.querySelectorAll('.option-button');
    buttons.forEach((button) => {
      button.addEventListener('click', () => {
        buttons.forEach((btn) => btn.classList.remove('selected'));
        button.classList.add('selected');
        const selectedOptionIndex = Number(button.dataset.optionIndex);
        const questionState = { questionId: question.id, selectedOptionIndex };
        card.dataset.selectedIndex = String(selectedOptionIndex);
        card.__state = questionState;
      });
    });

    const hintButton = card.querySelector('.hint-button');
    const hintBox = card.querySelector('.hint-box');
    hintButton.addEventListener('click', () => {
      hintBox.textContent = question.hint;
      hintBox.classList.remove('hidden');
    });
  });

  const finishButton = document.createElement('button');
  finishButton.type = 'button';
  finishButton.className = 'primary-button';
  finishButton.textContent = 'Enviar respuestas';

  const actions = document.createElement('div');
  actions.className = 'quiz-actions';
  actions.appendChild(finishButton);
  container.appendChild(actions);

  finishButton.addEventListener('click', () => gradeQuiz(quiz));
}

function gradeQuiz(quiz) {
  const cards = document.querySelectorAll('.question-card');
  let correct = 0;
  let incorrect = 0;
  const review = [];
  const weakTopics = {};

  cards.forEach((card) => {
    const question = quiz.find((item) => item.id === card.dataset.id);
    const selectedIndex = Number(card.dataset.selectedIndex ?? -1);
    const isCorrect = selectedIndex === question.correctIndex;

    if (isCorrect) {
      correct += 1;
      card.querySelectorAll('.option-button').forEach((button, index) => {
        if (index === question.correctIndex) button.classList.add('correct');
      });
    } else {
      incorrect += 1;
      weakTopics[question.concept] = (weakTopics[question.concept] || 0) + 1;
      card.querySelectorAll('.option-button').forEach((button, index) => {
        if (index === question.correctIndex) button.classList.add('correct');
        if (index === selectedIndex) button.classList.add('wrong');
      });
    }

    const answerText = question.options[question.correctIndex];
    const selectedText = selectedIndex >= 0 ? question.options[selectedIndex] : 'Sin respuesta';

    review.push({
      id: question.id,
      text: question.prompt,
      correct: isCorrect,
      correctAnswer: answerText,
      selectedAnswer: selectedText,
      explanation: question.explanation,
      concept: question.concept,
    });

    const feedback = document.createElement('div');
    feedback.className = `feedback-panel ${isCorrect ? 'correct' : 'wrong'}`;
    feedback.innerHTML = `
      <strong>${isCorrect ? 'Correcto' : 'Incorrecto'}:</strong>
      <p>${isCorrect ? 'Explicación breve: ' + question.explanation : 'La respuesta correcta era: ' + answerText + '. ' + question.explanation}</p>
    `;
    card.appendChild(feedback);

    const optionButtons = card.querySelectorAll('.option-button');
    optionButtons.forEach((button) => {
      button.disabled = true;
    });
    card.querySelector('.hint-button').disabled = true;
  });

  const score = Number(((correct / 10) * 10).toFixed(1));
  const summary = getStoredProgress();
  summary.sessions += 1;
  summary.questionsAnswered += quiz.length;
  summary.mistakes += incorrect;
  summary.history.push({
    date: new Date().toISOString(),
    score,
    correct,
    incorrect,
    weakTopics,
    questions: quiz,
  });

  const allWeak = summary.history.reduce((acc, session) => {
    Object.entries(session.weakTopics || {}).forEach(([topic, count]) => {
      acc[topic] = (acc[topic] || 0) + count;
    });
    return acc;
  }, {});

  summary.weakTopics = allWeak;
  saveProgress(summary);

  updateProgressSummary();
  buildReviewSummary();
  renderCorrections(review, score, correct, incorrect, weakTopics);
  renderFlashcards(weakTopics, score);
  renderClosing(score, correct, incorrect, weakTopics);

  const finishButton = document.querySelector('.quiz-actions .primary-button');
  if (finishButton) finishButton.disabled = true;
}

function renderCorrections(review, score, correct, incorrect, weakTopics) {
  const section = document.getElementById('correctionSection');
  const container = document.getElementById('correctionContent');
  if (!section || !container) return;

  section.classList.remove('hidden');
  container.innerHTML = `
    <p><strong>Calificación final:</strong> ${score}/10</p>
    <p><strong>Respuestas correctas:</strong> ${correct} · <strong>Incorrectas:</strong> ${incorrect}</p>
    <div class="answer-grid">
      ${review
        .map(
          (item) => `
            <div class="review-item ${item.correct ? 'correct' : 'incorrect'}">
              <h4>${item.text}</h4>
              <p><strong>Tu respuesta:</strong> ${item.selectedAnswer}</p>
              <p><strong>Correcta:</strong> ${item.correctAnswer}</p>
              <p>${item.explanation}</p>
            </div>
          `
        )
        .join('')}
    </div>
  `;
}

function renderFlashcards(weakTopics, score) {
  const section = document.getElementById('flashcardSection');
  const container = document.getElementById('flashcards');
  if (!section || !container) return;

  const topics = Object.entries(weakTopics).length ? Object.entries(weakTopics) : [['narración', 1], ['función referencial', 1]];
  section.classList.remove('hidden');

  const cards = topics.slice(0, 5).map(([topic, count]) => {
    const cardText = getFlashcardText(topic);
    return `
      <article class="flashcard">
        <h4>${topic}</h4>
        <p>${cardText}</p>
      </article>
    `;
  });

  container.innerHTML = cards.join('');
}

function getFlashcardText(topic) {
  const dict = {
    narración: 'Recuerda: la narración cuenta hechos en orden temporal. Pregúntate: ¿qué pasó primero, después y al final?',
    descripción: 'La descripción presenta características. Busca detalles de cómo es una persona, un lugar u objeto.',
    exposición: 'La exposición informa y explica. Tiene como objetivo ayudar a entender un tema con claridad.',
    argumentación: 'La argumentación defiende una postura con razones y evidencias. Busca convencer o justificar.',
    diálogo: 'El diálogo reproduce una conversación entre dos o más personas. La clave es el intercambio de palabras.',
    'función referencial': 'La función referencial comunica información sobre hechos o temas de forma clara y objetiva.',
    'función emotiva': 'La emotiva expresa sentimientos del emisor: alegría, tristeza, enfado o sorpresa.',
    'función apelativa': 'La apelativa busca provocar una respuesta o influir en el receptor con instrucciones o llamados.',
    'función fática': 'La fática mantiene la comunicación y comprueba que el contacto entre hablantes está activo.',
    'función metalingüística': 'La metalingüística habla del lenguaje mismo: sus palabras, reglas o significados.',
    'función poética': 'La poética resalta la forma y la expresión estética del mensaje con imágenes y ritmo.',
  };

  return dict[topic] || 'Revisa con atención la diferencia entre forma y propósito del texto.';
}

function renderClosing(score, correct, incorrect, weakTopics) {
  const section = document.getElementById('closingSection');
  const container = document.getElementById('closingContent');
  if (!section || !container) return;

  section.classList.remove('hidden');

  let label = 'Reforzar los conocimientos y aumentar gradualmente la dificultad.';
  if (score >= 7 && score <= 8) label = 'Continuar practicando y trabajar las confusiones detectadas.';
  if (score <= 6) label = 'Repasar los fundamentos y ofrecer ejercicios guiados antes de aumentar la dificultad.';

  const topics = Object.entries(weakTopics).length ? Object.entries(weakTopics).slice(0, 3) : [['narración', 1], ['función referencial', 1]];

  container.innerHTML = `
    <p><strong>Resultado:</strong> ${score}/10 con ${correct} aciertos y ${incorrect} errores.</p>
    <p><strong>Nivel orientativo:</strong> ${label}</p>
    <p><strong>Conviene repasar:</strong> ${topics.map(([topic]) => topic).join(', ')}.</p>
    <p><strong>Recomendación para la próxima sesión:</strong> volver a practicar con ejemplos breves de los conceptos más débiles y variar contextos para comprobar que la comprensión se mantiene.</p>
  `;
}

function initLoginPage() {
  const form = document.getElementById('loginForm');
  const feedback = document.getElementById('feedback');
  const togglePassword = document.getElementById('togglePassword');
  const passwordInput = document.getElementById('password');
  const loginButton = document.getElementById('loginButton');

  if (!form) return;

  togglePassword.addEventListener('click', () => {
    const type = passwordInput.type === 'password' ? 'text' : 'password';
    passwordInput.type = type;
    togglePassword.textContent = type === 'password' ? 'Mostrar' : 'Ocultar';
  });

  form.addEventListener('submit', async (event) => {
    event.preventDefault();
    const username = document.getElementById('username').value.trim();
    const password = passwordInput.value;
    loginButton.disabled = true;
    feedback.textContent = 'Validando credenciales…';

    try {
      const response = await fetch('/api/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ username, password }),
      });
      const data = await response.json();

      if (!response.ok || !data.ok) {
        feedback.textContent = data.message || 'Credenciales incorrectas.';
        loginButton.disabled = false;
        return;
      }

      window.location.href = '/study.html';
    } catch (error) {
      feedback.textContent = 'No fue posible iniciar sesión. Inténtalo de nuevo.';
      loginButton.disabled = false;
    }
  });
}

function initStudyPage() {
  const startQuizBtn = document.getElementById('startQuizBtn');
  if (!startQuizBtn) return;

  updateProgressSummary();
  buildReviewSummary();

  startQuizBtn.addEventListener('click', () => {
    const quiz = generateQuiz();
    renderQuiz(quiz);
  });

  document.getElementById('logoutBtn').addEventListener('click', async () => {
    if (isStaticDemo) return;
    await fetch('/api/logout', { method: 'POST' });
    window.location.href = '/';
  });

  document.getElementById('exportProgressBtn').addEventListener('click', () => {
    const data = JSON.stringify({
      version: 2,
      studyProgress: getStoredProgress(),
      animalFarmProgress: JSON.parse(localStorage.getItem(animalFarmProgressKey) || '{"sessions":[]}'),
    }, null, 2);
    const blob = new Blob([data], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'progreso-estudio.json';
    a.click();
    URL.revokeObjectURL(url);
  });

  document.getElementById('importProgressBtn').addEventListener('click', () => {
    document.getElementById('importProgressInput').click();
  });

  document.getElementById('importProgressInput').addEventListener('change', (event) => {
    const [file] = event.target.files;
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const parsed = JSON.parse(reader.result);
        const studyProgress = parsed.studyProgress || parsed;
        const nextProgress = {
          ...defaultProgress,
          ...studyProgress,
          history: Array.isArray(studyProgress.history) ? studyProgress.history : [],
        };
        saveProgress(nextProgress);
        if (parsed.animalFarmProgress && Array.isArray(parsed.animalFarmProgress.sessions)) {
          localStorage.setItem(animalFarmProgressKey, JSON.stringify(parsed.animalFarmProgress));
        }
        updateProgressSummary();
        buildReviewSummary();
        if (typeof renderAnimalFarmProgress === 'function') renderAnimalFarmProgress();
      } catch (error) {
        alert('El archivo de progreso no es válido.');
      }
      event.target.value = '';
    };
    reader.readAsText(file);
  });
}

if (page === 'login') {
  initLoginPage();
}

if (page === 'study') {
  if (isStaticDemo) {
    document.getElementById('staticDemoNotice').classList.remove('hidden');
    document.getElementById('logoutBtn').classList.add('hidden');
  }
  initStudyPage();
}

window.addEventListener('load', async () => {
  if (page === 'study' && !isStaticDemo) {
    try {
      const response = await fetch('/api/session');
      const data = await response.json();
      if (!data.authenticated) {
        window.location.href = '/';
      }
    } catch (error) {
      window.location.href = '/';
    }
  }
});
