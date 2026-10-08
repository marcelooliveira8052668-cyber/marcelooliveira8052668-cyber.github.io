// Desenvolvido por Prof. Marcelo Oliveira
const lessons = [
  {
    title: 'Saudações',
    category: 'Iniciante',
    time: '8 min',
    description: 'Aprenda a cumprimentar pessoas, apresentar-se e responder com naturalidade.',
    phrase: 'Hello! My name is Ana.'
  },
  {
    title: 'Família',
    category: 'Vocabulário',
    time: '10 min',
    description: 'Conheça membros da família e expressões para falar sobre pessoas.',
    phrase: 'This is my father.'
  },
  {
    title: 'Rotina',
    category: 'Diário',
    time: '12 min',
    description: 'Pratique verbos do cotidiano e frases de rotina simples.',
    phrase: 'I wake up at 7 a.m.'
  },
  {
    title: 'Básico de Gramática',
    category: 'Estrutura',
    time: '15 min',
    description: 'Entenda sujeito, verbo e frases afirmativas em inglês.',
    phrase: 'She works every day.'
  }
];

const lessonExercises = {
  'Saudações': {
    prompt: 'Complete a frase: "___! My name is Ana."',
    options: ['Hello', 'Goodbye', 'Sorry', 'Later'],
    correct: 'Hello',
    explanation: 'Use "Hello" para cumprimentar alguém de forma natural.'
  },
  'Família': {
    prompt: 'Qual palavra completa a frase: "This is my ___."',
    options: ['mother', 'book', 'coffee', 'street'],
    correct: 'mother',
    explanation: 'Em inglês, usamos "mother" para falar da mãe.'
  },
  'Rotina': {
    prompt: 'Complete: "I ___ up at 7 a.m."',
    options: ['wake', 'eat', 'sleep', 'run'],
    correct: 'wake',
    explanation: 'A estrutura correta é "wake up" para indicar acordar.'
  },
  'Básico de Gramática': {
    prompt: 'Qual frase está correta?',
    options: ['She works every day.', 'She work every day.', 'She are working every day.', 'She worked every day.'],
    correct: 'She works every day.',
    explanation: 'Na terceira pessoa do singular, o verbo recebe "s" em frases afirmativas.'
  }
};

const vocab = [
  { word: 'Hello', meaning: 'Olá', example: 'Hello, how are you?', icon: '👋' },
  { word: 'Book', meaning: 'Livro', example: 'I read a good book.', icon: '📚' },
  { word: 'House', meaning: 'Casa', example: 'My house is big.', icon: '🏠' },
  { word: 'Work', meaning: 'Trabalho / trabalhar', example: 'I work from Monday to Friday.', icon: '💼' },
  { word: 'Friend', meaning: 'Amigo', example: 'She is my best friend.', icon: '🤝' },
  { word: 'Water', meaning: 'Água', example: 'Please drink water.', icon: '💧' },
  { word: 'Study', meaning: 'Estudar', example: 'I study English every day.', icon: '📖' },
  { word: 'Breakfast', meaning: 'Café da manhã', example: 'I eat breakfast at 8.', icon: '🥐' }
];

const wordIcons = {
  hello: '👋', morning: '🌅', family: '👨‍👩‍👧‍👦', breakfast: '🥐', coffee: '☕', teacher: '👩‍🏫', student: '🎒', work: '💼', school: '🏫', market: '🛒', doctor: '🩺', hospital: '🏥', travel: '✈️', money: '💰', water: '💧', food: '🍽️', home: '🏠', friend: '🤝', city: '🏙️', street: '🚶', time: '⏰', music: '🎵', movie: '🎬', phone: '📱', computer: '💻', chair: '🪑', table: '🪵', window: '🪟', door: '🚪', garden: '🌿', bus: '🚌', train: '🚆', plane: '✈️', schedule: '📅', pencil: '✏️', paper: '📄', book: '📚', news: '📰', weather: '🌤️', rain: '🌧️', sun: '☀️', park: '🌳', restaurant: '🍽️', kitchen: '🍳', bedroom: '🛏️', 'living room': '🛋️', bathroom: '🛁', shirt: '👕', dress: '👗', shoe: '👟', workout: '🏋️', exercise: '🏃', language: '🗣️', lesson: '📘', practice: '📝', job: '👔', plan: '🗂️', future: '🔮', past: '🕰️', present: '🎁', daily: '📆', routine: '⏱️', commute: '🚗', meeting: '📢', manager: '👩‍💼', team: '👥', project: '📊', email: '📧', message: '💬'
};

function getWordIcon(word) {
  const key = String(word).toLowerCase();
  return wordIcons[key] || '🧠';
}

const baseWords = [
  'morning', 'family', 'breakfast', 'coffee', 'teacher', 'student', 'work', 'school', 'market',
  'doctor', 'hospital', 'travel', 'money', 'water', 'food', 'home', 'friend', 'city', 'street',
  'time', 'music', 'movie', 'phone', 'computer', 'chair', 'table', 'window', 'door', 'garden',
  'bus', 'train', 'plane', 'schedule', 'pencil', 'paper', 'book', 'news', 'weather', 'rain', 'sun',
  'park', 'market', 'restaurant', 'kitchen', 'bedroom', 'living room', 'bathroom', 'shirt', 'dress',
  'shoe', 'workout', 'exercise', 'language', 'lesson', 'practice', 'job', 'plan', 'future', 'past',
  'present', 'daily', 'routine', 'commute', 'meeting', 'manager', 'team', 'project', 'email', 'message'
];

const baseQuestions = [
  'Do you wake up early?', 'Did you study yesterday?', 'Will you call me later?', 'Do you like coffee?',
  'Did they finish the task?', 'Will we travel next month?', 'Do you work every day?', 'Did she cook dinner?',
  'Will they help us?', 'Do you speak English?', 'Did you watch the movie?', 'Will you visit your family?',
  'Do you need more time?', 'Did you go to school?', 'Will he arrive on time?', 'Do we have class today?',
  'Did you sleep well?', 'Will you open the window?', 'Do you drink water?', 'Did you clean the room?'
];

const lessonGrid = document.getElementById('lessonGrid');
const lessonPractice = document.getElementById('lessonPractice');
const vocabGrid = document.getElementById('vocabGrid');
const progressText = document.getElementById('progressText');
const progressFill = document.getElementById('progressFill');
const wordCardsPanel = document.getElementById('wordCardsPanel');
const questionCardsPanel = document.getElementById('questionCardsPanel');
const autocompletePanel = document.getElementById('autocompletePanel');
const modal = document.getElementById('contentModal');
const modalContent = document.getElementById('modalContent');
const closeModal = document.getElementById('closeModal');
const tabButtons = document.querySelectorAll('.tab-button');
const studentNameInput = document.getElementById('studentNameInput');
const studentLevel = document.getElementById('studentLevel');
const welcomeName = document.getElementById('welcomeName');
const loginForm = document.getElementById('loginForm');
const loginButton = document.getElementById('loginButton');

function renderLessonPractice(lessonTitle) {
  const exercise = lessonExercises[lessonTitle];
  if (!exercise) return;

  lessonPractice.classList.remove('hidden');
  lessonPractice.innerHTML = `
    <div class="lesson-practice-wrap">
      <div class="lesson-practice-top">
        <span class="eyebrow">Exercício do módulo</span>
        <button class="button ghost small" id="closeLessonPractice">Fechar</button>
      </div>

      <h3>${lessonTitle}</h3>
      <p class="lesson-practice-text">${lessonExercises[lessonTitle].explanation}</p>

      <div class="quiz-box">
        <p class="quiz-question">${exercise.prompt}</p>
        <div class="quiz-options">
          ${exercise.options
            .map(
              (option) => `
                <button class="quiz-option" data-answer="${option}">${option}</button>
              `
            )
            .join('')}
        </div>
        <div class="quiz-feedback" id="quizFeedback"></div>
        <button class="button primary" id="checkLessonAnswer">Verificar resposta</button>
      </div>
    </div>
  `;

  const optionButtons = lessonPractice.querySelectorAll('.quiz-option');
  let selectedAnswer = '';

  optionButtons.forEach((button) => {
    button.addEventListener('click', () => {
      selectedAnswer = button.dataset.answer;
      optionButtons.forEach((item) => item.classList.toggle('active', item === button));
    });
  });

  const feedback = document.getElementById('quizFeedback');
  document.getElementById('checkLessonAnswer').addEventListener('click', () => {
    if (!selectedAnswer) {
      feedback.textContent = 'Selecione uma opção antes de verificar.';
      feedback.className = 'quiz-feedback warning';
      return;
    }

    const isCorrect = selectedAnswer === exercise.correct;
    feedback.textContent = isCorrect
      ? `Correto! ${exercise.explanation}`
      : `Incorreto. A resposta correta é: ${exercise.correct}`;
    feedback.className = `quiz-feedback ${isCorrect ? 'success' : 'error'}`;

    optionButtons.forEach((button) => {
      const isRight = button.dataset.answer === exercise.correct;
      button.classList.toggle('correct', isRight && isCorrect);
      button.classList.toggle('wrong', button.dataset.answer === selectedAnswer && !isCorrect);
    });
  });

  document.getElementById('closeLessonPractice').addEventListener('click', () => {
    lessonPractice.classList.add('hidden');
  });
}

function renderLessons() {
  lessonGrid.innerHTML = lessons
    .map(
      (lesson, index) => `
        <article class="lesson-card lesson-card-clickable" data-index="${index}">
          <span class="lesson-tag">${lesson.category}</span>
          <h3>${lesson.title}</h3>
          <p>${lesson.description}</p>
          <div class="lesson-meta">
            <span>${lesson.time}</span>
            <strong>${lesson.phrase}</strong>
          </div>
          <div class="lesson-card-actions">
            <button class="button primary lesson-open" data-index="${index}">Abrir módulo</button>
            <button class="button ghost lesson-complete" data-index="${index}">Concluir</button>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.lesson-card-clickable').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.button')) {
        return;
      }
      const lesson = lessons[Number(card.dataset.index)];
      renderLessonPractice(lesson.title);
    });
  });

  document.querySelectorAll('.lesson-open').forEach((button) => {
    button.addEventListener('click', () => {
      const lesson = lessons[Number(button.dataset.index)];
      renderLessonPractice(lesson.title);
    });
  });

  document.querySelectorAll('.lesson-complete').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const currentPercent = Number(progressText.textContent.replace('%', '')) || 35;
      const newPercent = Math.min(currentPercent + 15, 100);
      progressText.textContent = `${newPercent}%`;
      progressFill.style.width = `${newPercent}%`;
      button.textContent = 'Concluído';
      button.disabled = true;
      button.style.opacity = '0.75';
    });
  });
}

function renderVocab() {
  vocabGrid.innerHTML = vocab
    .map(
      (item) => `
        <div class="vocab-item">
          <div class="word-illustration" aria-label="Ilustração da palavra ${item.word}">${item.icon || getWordIcon(item.word)}</div>
          <strong>${item.word}</strong>
          <span><b>Significado:</b> ${item.meaning}</span>
          <span><b>Exemplo:</b> ${item.example}</span>
        </div>
      `
    )
    .join('');
}

function speakEnglish(text) {
  if (!('speechSynthesis' in window)) {
    return;
  }

  window.speechSynthesis.cancel();
  const utterance = new SpeechSynthesisUtterance(text);
  utterance.lang = 'en-US';
  utterance.rate = 0.85;
  utterance.pitch = 1;
  window.speechSynthesis.speak(utterance);
}

function showModal(item, type) {
  let inner = '';

  if (type === 'word') {
    inner = `
      <div class="modal-content-block">
        <span class="card-badge word">Palavra</span>
        <div class="modal-word-visual">${item.icon || getWordIcon(item.word)}</div>
        <h3>${item.word}</h3>
        <p><strong>Significado:</strong> ${item.meaning}</p>
        <p><strong>Pronúncia em português:</strong> ${item.pronunciation}</p>
        <p><strong>Frase:</strong> ${item.example}</p>
        <p><strong>Tradução:</strong> ${item.translation}</p>
        <div class="modal-actions">
          <button class="button primary" data-audio="${item.word}">Escutar inglês</button>
          <button class="button ghost" data-close="true">Fechar</button>
        </div>
      </div>
    `;
  }

  if (type === 'question') {
    inner = `
      <div class="modal-content-block">
        <span class="card-badge question">Pergunta</span>
        <h3>${item.sentence}</h3>
        <p><strong>Tradução:</strong> ${item.translation}</p>
        <p><strong>Explicação:</strong> ${item.explanation}</p>
        <p><strong>Pronúncia em português:</strong> ${item.pronunciation}</p>
        <div class="modal-actions">
          <button class="button primary" data-audio="${item.sentence}">Escutar inglês</button>
          <button class="button ghost" data-close="true">Fechar</button>
        </div>
      </div>
    `;
  }

  modalContent.innerHTML = inner;
  modal.classList.remove('hidden');

  const audioButton = modalContent.querySelector('[data-audio]');
  if (audioButton) {
    audioButton.addEventListener('click', () => speakEnglish(audioButton.dataset.audio));
  }

  const closeBtn = modalContent.querySelector('[data-close="true"]');
  if (closeBtn) {
    closeBtn.addEventListener('click', () => modal.classList.add('hidden'));
  }
}

function buildWordBank() {
  const bank = [];
  for (let i = 0; i < 500; i += 1) {
    const word = baseWords[i % baseWords.length];
    const meaning = {
      morning: 'manhã',
      family: 'família',
      breakfast: 'café da manhã',
      coffee: 'café',
      teacher: 'professor(a)',
      student: 'aluno(a)',
      work: 'trabalho / trabalhar',
      school: 'escola',
      market: 'mercado',
      doctor: 'médico',
      hospital: 'hospital',
      travel: 'viagem / viajar',
      money: 'dinheiro',
      water: 'água',
      food: 'comida',
      home: 'casa',
      friend: 'amigo',
      city: 'cidade',
      street: 'rua',
      time: 'tempo / hora',
      music: 'música',
      movie: 'filme',
      phone: 'telefone',
      computer: 'computador',
      chair: 'cadeira',
      table: 'mesa',
      window: 'janela',
      door: 'porta',
      garden: 'jardim',
      bus: 'ônibus',
      train: 'trem',
      plane: 'avião',
      schedule: 'horário',
      pencil: 'lápis',
      paper: 'papel',
      book: 'livro',
      news: 'notícias',
      weather: 'clima',
      rain: 'chuva',
      sun: 'sol',
      park: 'parque',
      restaurant: 'restaurante',
      kitchen: 'cozinha',
      bedroom: 'quarto',
      'living room': 'sala',
      'bathroom': 'banheiro',
      shirt: 'camisa',
      dress: 'vestido',
      shoe: 'sapato',
      workout: 'treino',
      exercise: 'exercício',
      language: 'idioma',
      lesson: 'lição',
      practice: 'prática',
      job: 'emprego',
      plan: 'plano',
      future: 'futuro',
      past: 'passado',
      present: 'presente',
      daily: 'diário',
      routine: 'rotina',
      commute: 'deslocamento',
      meeting: 'reunião',
      manager: 'gerente',
      team: 'equipe',
      project: 'projeto',
      email: 'e-mail',
      message: 'mensagem'
    }[word] || 'palavra útil';

    const pronunciation = {
      morning: 'mor-ning — “morning”',
      family: 'fa-mi-ly — “famili”',
      breakfast: 'brek-fast — “brefast”',
      coffee: 'cof-fee — “kófi”',
      teacher: 'tee-cher — “ticher”',
      student: 'stoo-dent — “stu-dente”',
      work: 'work — “uark”',
      school: 'school — “skul”',
      market: 'mar-ket — “marquet”',
      doctor: 'doc-tor — “dóctor”',
      hospital: 'hos-pi-tal — “hospitau”',
      travel: 'trav-el — “trável”',
      money: 'mon-ey — “móni”',
      water: 'wa-ter — “wáter”',
      food: 'food — “fud”',
      home: 'home — “home”',
      friend: 'friend — “frend”',
      city: 'cit-y — “siti”',
      street: 'street — “strit”',
      time: 'time — “taim”',
      music: 'mu-sic — “músic”',
      movie: 'mov-ie — “móvi”',
      phone: 'phone — “foun”',
      computer: 'com-pu-ter — “kompiuter”',
      chair: 'chair — “cher”',
      table: 'ta-ble — “téibul”',
      window: 'win-dow — “windou”',
      door: 'door — “dor”',
      garden: 'gar-den — “gárden”',
      bus: 'bus — “bás”',
      train: 'train — “trein”',
      plane: 'plane — “plein”',
      schedule: 'sched-ule — “shediul”',
      pencil: 'pen-cil — “pencil”',
      paper: 'pa-per — “peiper”',
      book: 'book — “buk”',
      news: 'news — “nius”',
      weather: 'weath-er — “wéder”',
      rain: 'rain — “rein”',
      sun: 'sun — “sán”',
      park: 'park — “park”',
      restaurant: 'res-tau-rant — “restorant”',
      kitchen: 'kitch-en — “kitchen”',
      bedroom: 'bed-room — “bedrum”',
      'living room': 'liv-ing room — “livin rôm”',
      'bathroom': 'bath-room — “bátrom”',
      shirt: 'shirt — “xert”',
      dress: 'dress — “dres”',
      shoe: 'shoe — “xú”',
      workout: 'work-out — “workaut”',
      exercise: 'ex-er-cise — “eksersais”',
      language: 'lan-guage — “lânguage”',
      lesson: 'les-son — “lésom”',
      practice: 'prac-tice — “prátice”',
      job: 'job — “job”',
      plan: 'plan — “plan”',
      future: 'fu-ture — “futiu”',
      past: 'past — “past”',
      present: 'pre-sent — “prizent”',
      daily: 'day-ly — “déili”',
      routine: 'rou-tine — “rutin”',
      commute: 'com-mute — “komtiut”',
      meeting: 'meet-ing — “miting”',
      manager: 'man-a-ger — “manéger”',
      team: 'team — “tim”',
      project: 'pro-ject — “projet”',
      email: 'e-mail — “i-meil”',
      message: 'mes-sage — “mesedj”'
    }[word] || 'Pronúncia guiada em português';

    const phrase = `${word.charAt(0).toUpperCase() + word.slice(1)} is very useful.`;
    bank.push({
      id: i + 1,
      word: word.charAt(0).toUpperCase() + word.slice(1),
      meaning,
      pronunciation,
      example: `I use the word "${word}" in my daily life.`,
      translation: `Eu uso a palavra "${word}" no meu dia a dia.`,
      icon: getWordIcon(word)
    });
  }
  return bank;
}

const wordBank = buildWordBank();

function buildQuestionBank() {
  const bank = [];
  for (let i = 0; i < 500; i += 1) {
    const sentence = baseQuestions[i % baseQuestions.length];
    const focus = sentence.startsWith('Do') ? 'do' : sentence.startsWith('Did') ? 'did' : 'will';
    const explanation = {
      do: 'Use “do/does” para perguntas sobre rotina, hábitos e ações do dia a dia.',
      did: 'Use “did” para perguntas sobre ações que aconteceram no passado.',
      will: 'Use “will” para falar sobre decisões, previsões e eventos futuros.'
    }[focus];

    bank.push({
      id: i + 1,
      sentence,
      translation: i % 2 === 0 ? 'Tradução: ' + sentence.replace(/Do|Did|Will/g, 'Você') : 'Tradução: ' + sentence.replace(/Do|Did|Will/g, 'Você'),
      pronunciation: sentence.toLowerCase().replace(/\?/g, '').replace(/do you/gi, 'du iú').replace(/did you/gi, 'did iú').replace(/will you/gi, 'wil iú'),
      explanation,
      focus
    });
  }
  return bank;
}

const questionBank = buildQuestionBank();

function buildAutoCompleteBank() {
  const bank = [];
  const sentencePatterns = [
    { template: 'I ___ coffee every morning.', answer: 'drink', explain: 'Use o verbo “drink” para falar sobre o hábito de tomar café.', translation: 'Eu bebo café todas as manhãs.', pronunciation: 'ai dring kofi evri morning' },
    { template: 'She ___ English every day.', answer: 'studies', explain: 'Use “studies” para a terceira pessoa do singular no presente.', translation: 'Ela estuda inglês todos os dias.', pronunciation: 'xi studiz inglis evri dei' },
    { template: 'We ___ dinner at 8 o’clock.', answer: 'eat', explain: 'Use “eat” para falar sobre comer.', translation: 'Nós jantamos às oito horas.', pronunciation: 'ui it dino at eit oclock' },
    { template: 'They ___ to work by bus.', answer: 'go', explain: 'Use “go” para falar sobre ir de um lugar para outro.', translation: 'Eles vão ao trabalho de ônibus.', pronunciation: 'dei gou tu work bai bas' },
    { template: 'I ___ my homework yesterday.', answer: 'did', explain: 'Use “did” para falar de uma ação no passado.', translation: 'Eu fiz meu dever de casa ontem.', pronunciation: 'ai did mai homwork iesterdai' },
    { template: 'Will you ___ me tomorrow?', answer: 'help', explain: 'Use “help” para falar sobre ajudar no futuro.', translation: 'Você vai me ajudar amanhã?', pronunciation: 'wil iu help mi tumorou' },
    { template: 'Do you ___ English well?', answer: 'speak', explain: 'Use “speak” para falar sobre falar uma língua.', translation: 'Você fala inglês bem?', pronunciation: 'du iu spik inglis wel' },
    { template: 'He ___ not sleep well.', answer: 'did', explain: 'Use “did not” para negar algo no passado.', translation: 'Ele não dormiu bem.', pronunciation: 'hi did not slip wel' },
    { template: 'We ___ travel next month.', answer: 'will', explain: 'Use “will” para expressar o futuro.', translation: 'Nós viajaremos no próximo mês.', pronunciation: 'ui wil travel nekst munth' },
    { template: 'I ___ up at 7 a.m.', answer: 'wake', explain: 'Use “wake up” para falar sobre acordar.', translation: 'Eu acordo às sete da manhã.', pronunciation: 'ai weik ap at seven a em' }
  ];

  for (let i = 0; i < 500; i += 1) {
    const pattern = sentencePatterns[i % sentencePatterns.length];
    const title = `Auto-complete ${i + 1}`;
    bank.push({
      id: i + 1,
      title,
      sentence: pattern.template,
      answer: pattern.answer,
      explanation: pattern.explain,
      translation: pattern.translation,
      pronunciation: pattern.pronunciation,
      prompt: 'Complete a frase com a palavra certa.'
    });
  }
  return bank;
}

const autoCompleteBank = buildAutoCompleteBank();

let wordVisibleCount = 24;
let questionVisibleCount = 24;
let autocompleteVisibleCount = 12;

function renderWordCards() {
  const words = wordBank.slice(0, wordVisibleCount);
  wordCardsPanel.innerHTML = `
    <div class="card-grid">
      ${words
        .map(
          (item) => `
            <article class="content-card" data-type="word" data-id="${item.id}">
              <div class="content-card-head">
                <div class="content-card-title">
                  <span class="word-illustration small-icon">${item.icon || getWordIcon(item.word)}</span>
                  <h3>${item.word}</h3>
                </div>
                <span class="card-badge word">word</span>
              </div>
              <p>${item.meaning}</p>
              <small>${item.translation}</small>
              <div class="modal-actions">
                <button class="pronounce-inline" data-audio="${item.word}" aria-label="Escutar pronúncia">🔊</button>
              </div>
            </article>
          `
        )
        .join('')}
    </div>
    <div class="exercise-actions">
      <button class="button ghost" id="loadMoreWords">Carregar mais palavras</button>
    </div>
  `;

  document.querySelectorAll('[data-type="word"]').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.pronounce-inline')) {
        return;
      }
      const item = wordBank.find((entry) => entry.id === Number(card.dataset.id));
      showModal(item, 'word');
    });
  });

  document.querySelectorAll('[data-audio]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const text = button.dataset.audio;
      speakEnglish(text);
    });
  });

  const loadMoreWords = document.getElementById('loadMoreWords');
  if (loadMoreWords) {
    loadMoreWords.addEventListener('click', () => {
      wordVisibleCount = Math.min(wordVisibleCount + 24, wordBank.length);
      renderWordCards();
    });
  }
}

function renderQuestionCards() {
  const questions = questionBank.slice(0, questionVisibleCount);
  questionCardsPanel.innerHTML = `
    <div class="card-grid">
      ${questions
        .map(
          (item) => `
            <article class="content-card" data-type="question" data-id="${item.id}">
              <div class="content-card-head">
                <h3>${item.focus}</h3>
                <span class="card-badge question">question</span>
              </div>
              <p>${item.sentence}</p>
              <small>${item.translation}</small>
              <div class="modal-actions">
                <button class="pronounce-inline" data-audio="${item.sentence}" aria-label="Escutar pronúncia">🔊</button>
              </div>
            </article>
          `
        )
        .join('')}
    </div>
    <div class="exercise-actions">
      <button class="button ghost" id="loadMoreQuestions">Carregar mais perguntas</button>
    </div>
  `;

  document.querySelectorAll('[data-type="question"]').forEach((card) => {
    card.addEventListener('click', (event) => {
      if (event.target.closest('.pronounce-inline')) {
        return;
      }
      const item = questionBank.find((entry) => entry.id === Number(card.dataset.id));
      showModal(item, 'question');
    });
  });

  document.querySelectorAll('[data-audio]').forEach((button) => {
    button.addEventListener('click', (event) => {
      event.stopPropagation();
      const text = button.dataset.audio;
      speakEnglish(text);
    });
  });

  const loadMoreQuestions = document.getElementById('loadMoreQuestions');
  if (loadMoreQuestions) {
    loadMoreQuestions.addEventListener('click', () => {
      questionVisibleCount = Math.min(questionVisibleCount + 24, questionBank.length);
      renderQuestionCards();
    });
  }
}

function renderAutocomplete() {
  const items = autoCompleteBank.slice(0, autocompleteVisibleCount);
  autocompletePanel.innerHTML = `
    <div class="card-grid">
      ${items
        .map(
          (item, index) => `
            <article class="autocomplete-card">
              <div class="autocomplete-head">
                <h3>Exercício ${item.id}</h3>
                <span class="card-badge ${index % 3 === 0 ? 'do' : index % 3 === 1 ? 'did' : 'will'}">${index % 3 === 0 ? 'do' : index % 3 === 1 ? 'did' : 'will'}</span>
              </div>
              <p>${item.prompt}</p>
              <p><strong>${item.sentence}</strong></p>
              <p>${item.explanation}</p>
              <small>Pronúncia em português: ${item.pronunciation}</small>
              <label for="answer-${item.id}">Resposta</label>
              <input id="answer-${item.id}" data-answer="${item.answer}" placeholder="Digite a palavra correta" />
              <button class="button primary" data-check="${item.id}">Verificar</button>
              <div class="feedback-inline" id="result-${item.id}"></div>
              <button class="pronounce-inline" data-audio="${item.sentence}" aria-label="Escutar pronúncia da frase">🔊</button>
            </article>
          `
        )
        .join('')}
    </div>
    <div class="exercise-actions">
      <button class="button ghost" id="loadMoreAutocomplete">Carregar mais exercícios</button>
    </div>
  `;

  document.querySelectorAll('[data-check]').forEach((button) => {
    button.addEventListener('click', () => {
      const id = Number(button.dataset.check);
      const input = document.getElementById(`answer-${id}`);
      const result = document.getElementById(`result-${id}`);
      const expected = input.dataset.answer;
      const isCorrect = input.value.trim().toLowerCase() === expected.toLowerCase();

      result.textContent = isCorrect ? 'Correto! Excelente.' : `Incorreto. A resposta correta é: ${expected}`;
      result.className = `feedback-inline ${isCorrect ? 'success' : 'error'}`;
    });
  });

  document.querySelectorAll('[data-audio]').forEach((button) => {
    button.addEventListener('click', () => {
      speakEnglish(button.dataset.audio);
    });
  });

  const loadMoreAutocomplete = document.getElementById('loadMoreAutocomplete');
  if (loadMoreAutocomplete) {
    loadMoreAutocomplete.addEventListener('click', () => {
      autocompleteVisibleCount = Math.min(autocompleteVisibleCount + 12, autoCompleteBank.length);
      renderAutocomplete();
    });
  }
}

function renderExerciseBank() {
  const exerciseBank = [];
  const doPatterns = [
    { sentence: 'Do you drink coffee every morning?', translation: 'Você toma café todas as manhãs?', focus: 'do' },
    { sentence: 'Do they work from Monday to Friday?', translation: 'Eles trabalham de segunda a sexta?', focus: 'do' },
    { sentence: 'Do we study English together?', translation: 'Nós estudamos inglês juntos?', focus: 'do' },
    { sentence: 'Does she cook dinner at home?', translation: 'Ela cozinha o jantar em casa?', focus: 'do' },
    { sentence: 'Do you do your homework every day?', translation: 'Você faz o dever de casa todos os dias?', focus: 'do' }
  ];

  const didPatterns = [
    { sentence: 'Did you call your mother yesterday?', translation: 'Você ligou para sua mãe ontem?', focus: 'did' },
    { sentence: 'Did they finish the work on time?', translation: 'Eles terminaram o trabalho na hora?', focus: 'did' },
    { sentence: 'Did she read the book last week?', translation: 'Ela leu o livro na semana passada?', focus: 'did' },
    { sentence: 'Did we arrive before lunch?', translation: 'Nós chegamos antes do almoço?', focus: 'did' },
    { sentence: 'Did he clean the kitchen?', translation: 'Ele limpou a cozinha?', focus: 'did' }
  ];

  const willPatterns = [
    { sentence: 'Will you help me tomorrow?', translation: 'Você vai me ajudar amanhã?', focus: 'will' },
    { sentence: 'Will we travel next month?', translation: 'Nós viajaremos no próximo mês?', focus: 'will' },
    { sentence: 'Will they call us later?', translation: 'Eles vão nos ligar mais tarde?', focus: 'will' },
    { sentence: 'Will she finish the project soon?', translation: 'Ela vai terminar o projeto em breve?', focus: 'will' },
    { sentence: 'Will you open the window?', translation: 'Você vai abrir a janela?', focus: 'will' }
  ];

  [...doPatterns, ...didPatterns, ...willPatterns].forEach((item, index) => {
    exerciseBank.push({
      id: index + 1,
      focus: item.focus,
      phrase: item.sentence,
      translation: item.translation,
      category: item.focus === 'do' ? 'rotina' : item.focus === 'did' ? 'passado' : 'futuro'
    });
  });

  for (let i = 0; i < 495; i += 1) {
    const focus = i % 3 === 0 ? 'do' : i % 3 === 1 ? 'did' : 'will';
    const template = focus === 'do'
      ? 'Do you practice English every day?'
      : focus === 'did'
        ? 'Did you finish your task yesterday?'
        : 'Will you visit your family next weekend?';

    exerciseBank.push({
      id: exerciseBank.length + 1,
      focus,
      phrase: template,
      translation: focus === 'do' ? 'Você pratica inglês todos os dias?' : focus === 'did' ? 'Você terminou sua tarefa ontem?' : 'Você visitará sua família no próximo fim de semana?',
      category: focus === 'do' ? 'rotina' : focus === 'did' ? 'passado' : 'futuro'
    });
  }

  return exerciseBank.slice(0, 500);
}

const exerciseBank = renderExerciseBank();
const exerciseList = document.getElementById('exerciseList');
const loadMoreExercises = document.getElementById('loadMoreExercises');
const filterButtons = document.querySelectorAll('.exercise-filter');

let currentFilter = 'all';
let visibleCount = 40;

function getFilteredExercises() {
  if (currentFilter === 'all') {
    return exerciseBank;
  }
  return exerciseBank.filter((item) => item.focus === currentFilter);
}

function renderExercises() {
  const filtered = getFilteredExercises();
  const items = filtered.slice(0, visibleCount);

  exerciseList.innerHTML = items
    .map(
      (item) => `
        <article class="exercise-card">
          <div class="exercise-card-header">
            <span class="exercise-id">#${String(item.id).padStart(3, '0')}</span>
            <button class="pronounce-btn" data-text="${item.phrase.replace(/"/g, '&quot;')}" aria-label="Escutar pronúncia">🔊</button>
          </div>
          <p class="exercise-phrase">${item.phrase}</p>
          <p class="exercise-translation">${item.translation}</p>
          <div class="exercise-meta">
            <span class="exercise-badge ${item.focus}">${item.focus}</span>
            <span>${item.category}</span>
          </div>
        </article>
      `
    )
    .join('');

  document.querySelectorAll('.pronounce-btn').forEach((button) => {
    button.addEventListener('click', () => {
      const text = button.dataset.text.replace(/&quot;/g, '"');
      speakEnglish(text);
    });
  });

  loadMoreExercises.classList.toggle('hidden', visibleCount >= filtered.length);
}

filterButtons.forEach((button) => {
  button.addEventListener('click', () => {
    currentFilter = button.dataset.filter;
    visibleCount = 40;
    filterButtons.forEach((item) => item.classList.toggle('active', item === button));
    renderExercises();
  });
});

loadMoreExercises.addEventListener('click', () => {
  const filtered = getFilteredExercises();
  visibleCount = Math.min(visibleCount + 40, filtered.length);
  renderExercises();
});

renderLessons();
renderVocab();
renderWordCards();
renderQuestionCards();
renderAutocomplete();
renderExercises();

loginButton.addEventListener('click', () => {
  studentNameInput.focus();
});

loginForm.addEventListener('submit', (event) => {
  event.preventDefault();
  const name = studentNameInput.value.trim() || 'estudante';
  const level = studentLevel.value || 'Iniciante';
  welcomeName.textContent = `Olá, ${name}!`;
  progressText.textContent = level === 'Intermediário' ? '65%' : level === 'Básico' ? '52%' : '35%';
  progressFill.style.width = level === 'Intermediário' ? '65%' : level === 'Básico' ? '52%' : '35%';
  alert(`Perfil salvo: ${name} - ${level}`);
});

closeModal.addEventListener('click', () => modal.classList.add('hidden'));
modal.addEventListener('click', (event) => {
  if (event.target.dataset.close === 'true' || event.target === modal) {
    modal.classList.add('hidden');
  }
});

tabButtons.forEach((button) => {
  button.addEventListener('click', () => {
    tabButtons.forEach((item) => item.classList.toggle('active', item === button));
    const tab = button.dataset.tab;
    document.getElementById('wordCardsPanel').classList.toggle('active', tab === 'words');
    document.getElementById('questionCardsPanel').classList.toggle('active', tab === 'questions');
    document.getElementById('autocompletePanel').classList.toggle('active', tab === 'autocomplete');
  });
});


