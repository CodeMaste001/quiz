const animalFarmQuestions = [
  {
    id: 'old-major',
    type: 'multiple',
    topic: 'Old Major',
    prompt: '¿Qué idea impulsa principalmente Old Major en su discurso?',
    options: [
      'Los animales deben expulsar a los humanos y construir una vida más justa.',
      'Los animales deben elegir a Jones como su representante.',
      'La granja debe dividirse entre los animales más fuertes.',
      'Los animales deben abandonar el trabajo del campo.',
    ],
    answer: [0],
    explanation: 'Old Major relaciona los problemas de los animales con el control humano y propone la rebelión como camino hacia una vida distinta.',
  },
  {
    id: 'beasts-of-england',
    type: 'multiple',
    topic: 'La canción',
    prompt: '¿Qué función cumple “Bestias de Inglaterra” para los animales?',
    options: [
      'Les recuerda a Jones las tareas pendientes.',
      'Expresa su esperanza de un futuro libre de la dominación humana.',
      'Es una canción para elegir al nuevo granjero.',
      'Describe las reglas para construir el molino.',
    ],
    answer: [1],
    explanation: 'La canción transmite el ideal de libertad y un futuro mejor que Old Major comparte con los animales.',
  },
  {
    id: 'rebellion-cause',
    type: 'multiple',
    topic: 'La rebelión',
    prompt: '¿Qué situación inmediata contribuye a que estalle la rebelión?',
    options: [
      'Jones y sus hombres olvidan alimentar a los animales y estos irrumpen en busca de comida.',
      'Snowball ordena destruir el granero.',
      'Los animales se niegan a cosechar para Napoleon.',
      'Los humanos incendian el molino.',
    ],
    answer: [0],
    explanation: 'El hambre y el descuido de Jones provocan que los animales entren al almacén; Jones intenta detenerlos y la rebelión comienza.',
  },
  {
    id: 'commandments',
    type: 'multiple',
    topic: 'Los mandamientos',
    prompt: '¿Para qué escriben los cerdos los Siete Mandamientos en el granero?',
    options: [
      'Para dejar por escrito los principios que deben guiar la vida en la granja.',
      'Para enseñar a los humanos cómo cuidar animales.',
      'Para asignar nombres nuevos a los animales.',
      'Para registrar la cantidad de comida de cada establo.',
    ],
    answer: [0],
    explanation: 'Los mandamientos resumen las reglas e ideales del Animalismo que los animales acuerdan seguir.',
  },
  {
    id: 'mollie',
    type: 'multiple',
    topic: 'Mollie',
    prompt: '¿Qué revela la actitud de Mollie ante los cambios de la granja?',
    options: [
      'Valora los adornos, el azúcar y las comodidades que asociaba con los humanos.',
      'Quiere encargarse de enseñar a leer a todos.',
      'Prefiere trabajar en el molino con Snowball.',
      'Desea convertirse en la encargada de las ovejas.',
    ],
    answer: [0],
    explanation: 'Mollie extraña las comodidades y atenciones que tenía antes, lo que muestra que no comparte plenamente los ideales de la rebelión.',
  },
  {
    id: 'boxer',
    type: 'multiple',
    topic: 'Boxer',
    prompt: '¿Qué rasgo caracteriza especialmente a Boxer en estos capítulos?',
    options: [
      'Su fuerza y disposición constante para trabajar.',
      'Su habilidad para cambiar las reglas.',
      'Su desconfianza de todos los animales.',
      'Su deseo de abandonar la granja.',
    ],
    answer: [0],
    explanation: 'Boxer es fuerte y trabajador. Su esfuerzo y lealtad lo vuelven una figura importante para el trabajo de la granja.',
  },
  {
    id: 'windmill',
    type: 'multiple',
    topic: 'El molino',
    prompt: '¿Cuál es uno de los desacuerdos centrales entre Snowball y Napoleon en el capítulo 5?',
    options: [
      'Si construir un molino de viento y cómo organizar el trabajo de la granja.',
      'Si deben cambiar el nombre de Boxer.',
      'Si los animales deben volver a vivir con Jones.',
      'Si se debe borrar toda la cosecha.',
    ],
    answer: [0],
    explanation: 'Snowball defiende el proyecto del molino y presenta sus planes; Napoleon se opone y ambos compiten por influir en los animales.',
  },
  {
    id: 'dogs',
    type: 'multiple',
    topic: 'Napoleon y los perros',
    prompt: '¿Qué sucede cuando Napoleon hace intervenir a los perros durante la reunión?',
    options: [
      'Los perros expulsan a Snowball de la granja.',
      'Los perros protegen el molino de una tormenta.',
      'Los perros obligan a Jones a regresar.',
      'Los perros se unen a la votación de los animales.',
    ],
    answer: [0],
    explanation: 'Napoleon usa a los perros para perseguir a Snowball y poner fin a la discusión pública sobre el molino.',
  },
  {
    id: 'cowshed',
    type: 'multiple',
    topic: 'La batalla',
    prompt: '¿Qué intentan hacer Jones y otros humanos en la Batalla del establo de las vacas?',
    options: [
      'Recuperar la granja después de haber sido expulsados.',
      'Ayudar a los animales a construir el molino.',
      'Firmar los Siete Mandamientos.',
      'Elegir a Snowball como granjero.',
    ],
    answer: [0],
    explanation: 'Los humanos vuelven armados para recuperar la granja, y los animales organizan su defensa.',
  },
  {
    id: 'animalism',
    type: 'multiple',
    topic: 'Animalismo',
    prompt: '¿Qué nombre recibe el conjunto de ideas que los cerdos enseñan a partir del discurso de Old Major?',
    options: ['Animalismo', 'Humanismo', 'Molinería', 'Cosechismo'],
    answer: [0],
    explanation: 'Los cerdos organizan y enseñan las ideas de Old Major bajo el nombre de Animalismo.',
  },
  {
    id: 'benjamin',
    type: 'multiple',
    topic: 'Benjamin',
    prompt: '¿Cuál es la actitud habitual de Benjamin frente a las promesas de cambio?',
    options: [
      'Es escéptico y suele mantenerse distante.',
      'Apoya cada propuesta de Snowball con entusiasmo.',
      'Quiere convertirse en líder de la rebelión.',
      'Insiste en regresar con Jones.',
    ],
    answer: [0],
    explanation: 'Benjamin se muestra reservado y poco convencido por las promesas; suele observar sin participar demasiado.',
  },
  {
    id: 'milk-apples',
    type: 'multiple',
    topic: 'Leche y manzanas',
    prompt: '¿Qué explicación dan los cerdos sobre la leche y las manzanas que reservan para ellos?',
    options: [
      'Que las necesitan para mantenerse sanos y poder dirigir la granja.',
      'Que Jones las dejó como regalo personal.',
      'Que todos los animales las rechazaron.',
      'Que se utilizarán para reparar el granero.',
    ],
    answer: [0],
    explanation: 'Squealer sostiene que los cerdos necesitan esos alimentos para cumplir su trabajo y que, si fallan, Jones podría regresar.',
  },
  {
    id: 'snowball-sunday',
    type: 'multiple',
    topic: 'Snowball',
    prompt: 'Antes de ser expulsado, ¿qué suele hacer Snowball en las reuniones dominicales?',
    options: [
      'Propone planes y participa en los debates sobre la granja.',
      'Evita hablar y se marcha antes de la votación.',
      'Reparte azúcar entre los animales.',
      'Invita a Jones a regresar.',
    ],
    answer: [0],
    explanation: 'Snowball participa activamente en las reuniones, presenta ideas y debate sus propuestas con Napoleon.',
  },
  {
    id: 'equality',
    type: 'multiple',
    topic: 'Igualdad',
    prompt: 'Al comienzo de la nueva organización, ¿qué ideal expresa el principio de que todos los animales son iguales?',
    options: [
      'Que ningún animal debería dominar o explotar a los demás.',
      'Que los cerdos deberían recibir todas las cosechas.',
      'Que solo los animales mayores pueden votar.',
      'Que cada animal debe vivir en un establo distinto.',
    ],
    answer: [0],
    explanation: 'La igualdad es uno de los ideales de la rebelión. Los acontecimientos posteriores ponen a prueba cómo se aplica ese principio.',
  },
  {
    id: 'sheep',
    type: 'multiple',
    topic: 'Las ovejas',
    prompt: '¿Qué efecto tiene el balido repetido de las ovejas durante los debates?',
    options: [
      'Interrumpe y dificulta que se escuchen otros argumentos.',
      'Explica cómo construir el molino.',
      'Organiza a los animales para cosechar.',
      'Ayuda a Snowball a leer los mandamientos.',
    ],
    answer: [0],
    explanation: 'El balido colectivo puede ahogar las discusiones y reducir el espacio para que los animales escuchen ideas distintas.',
  },
  {
    id: 'true-rebellion',
    type: 'truefalse',
    topic: 'La rebelión',
    prompt: 'Tras la rebelión, los animales expulsan a Jones y pasan a controlar la granja.',
    options: ['Verdadero', 'Falso'],
    answer: [0],
    explanation: 'Los animales expulsan a Jones y se hacen cargo de la granja.',
  },
  {
    id: 'true-mollie',
    type: 'truefalse',
    topic: 'Mollie',
    prompt: 'Mollie acepta sin reservas dejar atrás todas las comodidades que disfrutaba con los humanos.',
    options: ['Verdadero', 'Falso'],
    answer: [1],
    explanation: 'Mollie extraña los adornos y las comodidades; su actitud muestra sus dudas frente al nuevo orden.',
  },
  {
    id: 'true-snowball',
    type: 'truefalse',
    topic: 'Snowball',
    prompt: 'Napoleon expulsa a Snowball de la granja durante la discusión sobre el molino.',
    options: ['Verdadero', 'Falso'],
    answer: [0],
    explanation: 'Napoleon hace que sus perros persigan a Snowball y lo expulsen.',
  },
  {
    id: 'true-windmill',
    type: 'truefalse',
    topic: 'El molino',
    prompt: 'En el capítulo 5, todos los animales coinciden desde el principio en que el molino es el mejor plan.',
    options: ['Verdadero', 'Falso'],
    answer: [1],
    explanation: 'El molino es motivo de desacuerdo, especialmente entre Snowball y Napoleon, y los animales no tienen una opinión unánime.',
  },
  {
    id: 'select-principles',
    type: 'multiple-select',
    topic: 'Animalismo',
    prompt: 'Selecciona los dos elementos que se relacionan con las ideas de Old Major y el Animalismo.',
    options: [
      'Liberarse del dominio humano.',
      'Mantener a Jones como dueño de la granja.',
      'Evitar que los animales imiten o adopten costumbres humanas.',
      'Entregar la cosecha a los granjeros vecinos.',
      'Dar más poder a los humanos.',
    ],
    answer: [0, 2],
    explanation: 'Old Major propone la libertad frente a los humanos y advierte contra adoptar sus costumbres.',
  },
  {
    id: 'select-characters',
    type: 'multiple-select',
    topic: 'Personajes',
    prompt: 'Selecciona los dos personajes que compiten por dirigir el rumbo de la granja en el capítulo 5.',
    options: ['Snowball', 'Napoleon', 'Mollie', 'Benjamin', 'Jones'],
    answer: [0, 1],
    explanation: 'Snowball y Napoleon discrepan sobre las decisiones de la granja y compiten por el liderazgo.',
  },
  {
    id: 'select-battle',
    type: 'multiple-select',
    topic: 'La Batalla del establo',
    prompt: 'Selecciona dos hechos relacionados con la Batalla del establo de las vacas.',
    options: [
      'Los humanos intentan recuperar la granja.',
      'Snowball participa en la defensa de los animales.',
      'Napoleon construye el molino durante la batalla.',
      'Old Major regresa para dirigir a los animales.',
      'Mollie lidera a los humanos.',
    ],
    answer: [0, 1],
    explanation: 'Los humanos intentan recuperar la granja y Snowball desempeña un papel activo en la defensa.',
  },
  {
    id: 'select-changes',
    type: 'multiple-select',
    topic: 'Cambios en la granja',
    prompt: 'Selecciona dos cambios que ocurren después de expulsar a Jones.',
    options: [
      'La granja cambia de nombre a Granja Animal.',
      'Los animales escriben sus mandamientos en el granero.',
      'Jones queda elegido como líder de los animales.',
      'Los animales deciden devolver la granja a los humanos.',
      'Se elimina toda reunión entre animales.',
    ],
    answer: [0, 1],
    explanation: 'Los animales renombran la granja y escriben los principios del Animalismo en el granero.',
  },
  {
    id: 'sequence',
    type: 'multiple',
    topic: 'Secuencia de acontecimientos',
    prompt: '¿Qué acontecimiento ocurre después de que Jones es expulsado?',
    options: [
      'Los animales escriben los principios de su nueva organización.',
      'Old Major da por primera vez su discurso.',
      'Napoleon expulsa a Snowball antes de la rebelión.',
      'Los humanos construyen el molino para los animales.',
    ],
    answer: [0],
    explanation: 'Tras la rebelión, los animales organizan la granja y escriben los mandamientos en el granero.',
  },
];

const animalFarmHistoryKey = 'animalFarmRecentQuestionIds';
let activeAnimalFarmQuiz = [];

function shuffle(items) {
  const shuffled = [...items];
  for (let index = shuffled.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1));
    [shuffled[index], shuffled[swapIndex]] = [shuffled[swapIndex], shuffled[index]];
  }
  return shuffled;
}

function createAnimalFarmQuiz() {
  const recentIds = JSON.parse(localStorage.getItem(animalFarmHistoryKey) || '[]');
  let available = animalFarmQuestions.filter((question) => !recentIds.includes(question.id));
  if (available.length < 10) available = animalFarmQuestions;

  const requiredFormats = ['truefalse', 'multiple-select'];
  const variedQuestions = requiredFormats.map((type) => shuffle(available.filter((question) => question.type === type))[0]);
  const selectedIds = new Set(variedQuestions.map((question) => question.id));
  const remainingQuestions = shuffle(available.filter((question) => !selectedIds.has(question.id)));

  activeAnimalFarmQuiz = shuffle([...variedQuestions, ...remainingQuestions.slice(0, 10 - variedQuestions.length)]).map((question) => ({
    ...question,
    options: shuffle(question.options.map((text, index) => ({ text, originalIndex: index }))),
  }));
  localStorage.setItem(animalFarmHistoryKey, JSON.stringify(activeAnimalFarmQuiz.map((question) => question.id)));
  renderAnimalFarmQuiz();
}

function renderAnimalFarmQuiz() {
  const quizContainer = document.getElementById('animalFarmQuiz');
  const results = document.getElementById('animalFarmResults');
  const card = document.getElementById('animalFarmQuizCard');
  document.getElementById('animalFarmStatus').textContent = '';
  card.classList.remove('hidden');
  results.classList.add('hidden');
  results.innerHTML = '';
  quizContainer.innerHTML = '';

  activeAnimalFarmQuiz.forEach((question, questionIndex) => {
    const questionCard = document.createElement('article');
    questionCard.className = 'question-card';
    questionCard.dataset.questionId = question.id;
    const isMulti = question.type === 'multiple-select';
    const instruction = isMulti
      ? 'Selecciona todas las opciones correctas.'
      : question.type === 'truefalse'
        ? 'Elige una opción.'
        : 'Elige la opción que mejor responde.';

    questionCard.innerHTML = `
      <div class="question-meta">
        <span>Pregunta ${questionIndex + 1} de 10</span>
        <span>${question.topic}</span>
      </div>
      <h3>${question.prompt}</h3>
      <p class="question-instruction">${instruction}</p>
      <div class="option-list">
        ${question.options.map((option, index) => `
          <button type="button" class="option-button" data-option-index="${index}" aria-pressed="false">
            ${option.text}
          </button>
        `).join('')}
      </div>
    `;

    const optionButtons = questionCard.querySelectorAll('.option-button');
    optionButtons.forEach((button) => {
      button.addEventListener('click', () => {
        if (!isMulti) {
          optionButtons.forEach((optionButton) => {
            optionButton.classList.remove('selected');
            optionButton.setAttribute('aria-pressed', 'false');
          });
        }
        button.classList.toggle('selected');
        button.setAttribute('aria-pressed', String(button.classList.contains('selected')));
      });
    });

    quizContainer.appendChild(questionCard);
  });

  const submitButton = document.createElement('button');
  submitButton.type = 'button';
  submitButton.className = 'primary-button';
  submitButton.textContent = 'Terminar quiz';
  submitButton.addEventListener('click', submitAnimalFarmQuiz);

  const actions = document.createElement('div');
  actions.className = 'quiz-actions';
  actions.appendChild(submitButton);
  quizContainer.appendChild(actions);
}

function renderAnimalFarmProgress() {
  const summary = document.getElementById('animalFarmProgressSummary');
  if (!summary) return;

  const progress = JSON.parse(localStorage.getItem(animalFarmProgressKey) || '{"sessions":[]}');
  const sessions = Array.isArray(progress.sessions) ? progress.sessions : [];
  if (!sessions.length) {
    summary.innerHTML = '<p>Aún no hay resultados guardados.</p>';
    return;
  }

  summary.innerHTML = `
    <p><strong>Quizzes completados:</strong> ${sessions.length}</p>
    <div class="quiz-results">
      ${sessions.slice(-5).reverse().map((session) => `
        <article class="quiz-result-item">
          <strong>${session.score}/10</strong>
          <span> · ${new Date(session.date).toLocaleString('es')}</span>
          <p>${session.correct} correctas · ${session.incorrect} incorrectas</p>
        </article>
      `).join('')}
    </div>
  `;
}

function submitAnimalFarmQuiz() {
  const unanswered = [...document.querySelectorAll('#animalFarmQuiz .question-card')]
    .some((card) => card.querySelectorAll('.option-button.selected').length === 0);

  if (unanswered) {
    document.getElementById('animalFarmStatus').textContent = 'Responde todas las preguntas antes de terminar.';
    return;
  }

  document.getElementById('animalFarmStatus').textContent = '';
  let score = 0;
  const review = activeAnimalFarmQuiz.map((question) => {
    const card = document.querySelector(`[data-question-id="${question.id}"]`);
    const chosenIndexes = [...card.querySelectorAll('.option-button.selected')]
      .map((button) => Number(button.dataset.optionIndex))
      .map((displayIndex) => question.options[displayIndex].originalIndex)
      .sort((a, b) => a - b);
    const correctIndexes = [...question.answer].sort((a, b) => a - b);
    const correct = chosenIndexes.length === correctIndexes.length
      && chosenIndexes.every((value, index) => value === correctIndexes[index]);
    if (correct) score += 1;

    const chosenText = chosenIndexes.map((index) => question.options.find((option) => option.originalIndex === index).text);
    const correctText = correctIndexes.map((index) => question.options.find((option) => option.originalIndex === index).text);
    return { question, correct, chosenText, correctText };
  });

  document.querySelectorAll('#animalFarmQuiz .option-button').forEach((button) => {
    button.disabled = true;
  });
  document.querySelector('#animalFarmQuiz .quiz-actions').remove();

  const progress = JSON.parse(localStorage.getItem(animalFarmProgressKey) || '{"sessions":[]}');
  const sessions = Array.isArray(progress.sessions) ? progress.sessions : [];
  sessions.push({
    date: new Date().toISOString(),
    score,
    correct: score,
    incorrect: 10 - score,
    answers: review.map(({ question, correct, chosenText, correctText }) => ({
      questionId: question.id,
      prompt: question.prompt,
      topic: question.topic,
      selected: chosenText,
      correctAnswers: correctText,
      correct,
    })),
  });
  localStorage.setItem(animalFarmProgressKey, JSON.stringify({ sessions: sessions.slice(-50) }));
  renderAnimalFarmProgress();

  const results = document.getElementById('animalFarmResults');
  results.classList.remove('hidden');
  results.innerHTML = `
    <h2>Resultado: ${score}/10</h2>
    <p>${score} correctas · ${10 - score} incorrectas</p>
    <div class="quiz-results">
      ${review.map(({ question, correct, chosenText, correctText }) => `
        <article class="quiz-result-item ${correct ? 'correct' : 'incorrect'}">
          <h3>${question.prompt}</h3>
          <p><strong>Tu respuesta:</strong> ${chosenText.join('; ')}</p>
          ${correct ? '' : `<p><strong>Respuesta correcta:</strong> ${correctText.join('; ')}</p>`}
          <p>${question.explanation}</p>
        </article>
      `).join('')}
    </div>
    <div class="quiz-actions">
      <button type="button" class="primary-button" id="newAnimalFarmQuiz">Hacer otro quiz</button>
    </div>
  `;
  document.getElementById('newAnimalFarmQuiz').addEventListener('click', createAnimalFarmQuiz);
}

document.querySelectorAll('.module-tab').forEach((button) => {
  button.addEventListener('click', () => {
    document.querySelectorAll('.module-tab').forEach((tab) => tab.classList.remove('active'));
    button.classList.add('active');
    document.querySelectorAll('#languageModule, #literatureModule').forEach((module) => module.classList.add('hidden'));
    document.getElementById(button.dataset.moduleTarget).classList.remove('hidden');
  });
});

document.getElementById('startAnimalFarmQuiz').addEventListener('click', createAnimalFarmQuiz);
renderAnimalFarmProgress();
