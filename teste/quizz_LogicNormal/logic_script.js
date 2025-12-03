       // Language translations
       const translations = {
        pt: {
            'welcome-title': 'Quiz de Lógica',
            'welcome-subtitle': 'Teste seu raciocínio lógico com perguntas de lógica clássica aqui no Mellius!',
            'how-it-works': 'Como funciona:',
            'info-questions': '📋 20 perguntas de lógica',
            'info-timer': '⏱️ Cronômetro para medir seu tempo',
            'info-feedback': '🎯 Resposta imediata com explicação',
            'info-results': '🏆 Resultado final com pontuação',
            'start-quiz': 'Iniciar Quiz 🚀',
            'menu-home': 'Menu Inicial',
            'menu-games': 'Jogos',
            'menu-login': 'Login',
            'menu-dark': 'Dark Mode',
            'menu-language': 'Idioma',
            'question-of': 'Pergunta {0} de 20',
            'congratulations': 'Parabéns!',
            'try-again': 'Tentar Novamente 🔄',
            'correct-answers': 'Respostas Corretas',
            'total-time': 'Tempo Total',
            'per-question': 'por pergunta'
        },
        en: {
            'welcome-title': 'Logic Quiz',
            'welcome-subtitle': 'Test your logical reasoning with classic logic questions here at Mellius!',
            'how-it-works': 'How it works:',
            'info-questions': '📋 20 logic questions',
            'info-timer': '⏱️ Timer to measure your time',
            'info-feedback': '🎯 Immediate answer with explanation',
            'info-results': '🏆 Final result with score',
            'start-quiz': 'Start Quiz 🚀',
            'menu-home': 'Home Menu',
            'menu-games': 'Games',
            'menu-login': 'Login',
            'menu-dark': 'Dark Mode',
            'menu-language': 'Language',
            'question-of': 'Question {0} of 20',
            'congratulations': 'Congratulations!',
            'try-again': 'Try Again 🔄',
            'correct-answers': 'Correct Answers',
            'total-time': 'Total Time',
            'per-question': 'per question'
        },
        es: {
            'welcome-title': 'Quiz de Lógica',
            'welcome-subtitle': '¡Prueba tu razonamiento lógico con preguntas de lógica clásica aquí en Mellius!',
            'how-it-works': 'Cómo funciona:',
            'info-questions': '📋 20 preguntas de lógica',
            'info-timer': '⏱️ Cronómetro para medir tu tiempo',
            'info-feedback': '🎯 Respuesta inmediata con explicación',
            'info-results': '🏆 Resultado final con puntuación',
            'start-quiz': 'Iniciar Quiz 🚀',
            'menu-home': 'Menú Inicial',
            'menu-games': 'Juegos',
            'menu-login': 'Iniciar Sesión',
            'menu-dark': 'Modo Oscuro',
            'menu-language': 'Idioma',
            'question-of': 'Pregunta {0} de 20',
            'congratulations': '¡Felicitaciones!',
            'try-again': 'Intentar Nuevamente 🔄',
            'correct-answers': 'Respuestas Correctas',
            'total-time': 'Tiempo Total',
            'per-question': 'por pregunta'
        }
    };

    let currentLanguage = 'pt';

   // Lista fixa de 10 questões
const logicQuestions = {
    pt: [
        {
            question: "Qual é o próximo número da sequência? 2 - 6 - 12 - 20 - 30 - ❓",
            options: ["40", "42", "36", "38"],
            answer: 0
        },
        {
            question: "Três amigos foram a um restaurante e a conta deu R$ 90,00. Cada um pagou R$ 30,00. O garçom percebeu que houve um erro e devolveu R$ 5,00, mas eles deram R$ 2,00 de gorjeta e dividiram os R$ 3,00 restantes entre si. No final, cada um pagou R$ 29,00, totalizando R$ 87,00. Mas se R$ 87,00 + R$ 2,00 da gorjeta = R$ 89,00, onde está o real que falta?",
            options: ["Não falta nada", "Está na gorjeta", "Foi um erro de cálculo", "Foi esquecido"],
            answer: 0
        },
        {
            question: "Se João é mais alto que Pedro e Pedro é mais alto que Ana, então podemos concluir que:",
            options: ["João é mais alto que Ana", "Ana é mais alta que Pedro", "Pedro é mais alto que João", "Não é possível concluir"],
            answer: 0
        },
        {
            question: "Se hoje é segunda-feira, qual será o dia da semana daqui a 10 dias?",
            options: ["Quarta-feira", "Sábado", "Domingo", "Terça-feira"],
            answer: 2
        },
        {
            question: "Se A = {2, 4, 6, 8, 10} e B = {1, 2, 3, 4, 5}, qual é a união A ∪ B?",
            options: ["{1, 2, 3, 4, 5, 6, 8, 10}", "{2, 4, 6, 8, 10}", "{1, 2, 3, 4, 5}", "{1, 2, 3, 4, 5, 6, 8}"],
            answer: 0
        },
        {
            question: "Um número somado com seu dobro resulta em 36. Qual é esse número?",
            options: ["12", "18", "24", "6"],
            answer: 0
        },
        {
            question: "Em uma corrida, Ana chegou antes de Bia, e Bia chegou antes de Carla. Se Débora chegou depois de Carla, quem chegou em terceiro lugar?",
            options: ["Ana", "Bia", "Carla", "Débora"],
            answer: 2
        },
        {
            question: "Se todos os gatos miam e alguns animais miam, qual das seguintes afirmações é necessariamente verdadeira?",
            options: ["Alguns gatos são animais", "Todos os animais são gatos", "Alguns animais não miam", "Todos os gatos são animais"],
            answer: 3
        },
        {
            question: "Em um estacionamento, há carros e motos. Ao todo, são 20 veículos e 60 rodas. Quantos carros e quantas motos há no estacionamento?",
            options: ["10 carros e 10 motos", "15 carros e 5 motos", "20 carros e 0 motos", "12 carros e 8 motos"],
            answer: 1
        },
        {
            question: "Em uma prateleira, há 5 livros: Matemática, História, Ciências, Português e Geografia. Sabe-se que: O livro de Matemática está à esquerda do livro de Ciências. O livro de História está à direita do livro de Português. O livro de Geografia está no meio da prateleira. O livro de Português não está na extremidade da prateleira. Qual é a ordem dos livros na prateleira?",
            options: ["Matemática, Ciências, Geografia, Português, História", "História, Português, Geografia, Matemática, Ciências", "Português, Matemática, Geografia, Ciências, História", "Matemática, Geografia, Ciências, História, Português"],
            answer: 0
        }
    ],
    en: [
        // Adicione as perguntas em inglês se necessário
    ],
    es: [
        // Adicione as perguntas em espanhol se necessário
    ]
};

// Gerador do quiz
function generateQuizQuestions() {
    const selected = logicQuestions.pt; // Seleciona as perguntas em português
    const shuffled = [...selected].sort(() => Math.random() - 0.5);
    const chosen = shuffled.slice(0, 10); // pega 10 perguntas

    return chosen.map((q, i) => ({
        id: i + 1,
        question: q.question,
        options: q.options,
        correctAnswer: q.answer
    }));
}

let quizQuestions = generateQuizQuestions();


    // Sidebar functions
    function toggleSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        sidebar.classList.toggle('open');
        overlay.classList.toggle('active');
    }

    function closeSidebar() {
        const sidebar = document.getElementById('sidebar');
        const overlay = document.querySelector('.sidebar-overlay');
        sidebar.classList.remove('open');
        overlay.classList.remove('active');
    }

    // Dark mode toggle
    function toggleDarkMode() {
        document.body.classList.toggle('dark-mode');
        localStorage.setItem('darkMode', document.body.classList.contains('dark-mode'));
    }

    // Language functions
    function toggleLanguage() {
        // Language selection handled by dropdown
    }

    function changeLanguage(lang) {
        currentLanguage = lang;
        updateLanguage();
        localStorage.setItem('language', lang);
    }

    function updateLanguage() {
        const elements = document.querySelectorAll('[data-translate]');
        elements.forEach(element => {
            const key = element.getAttribute('data-translate');
            if (translations[currentLanguage] && translations[currentLanguage][key]) {
                if (key.includes('question-of')) {
                    element.textContent = translations[currentLanguage][key].replace('{0}', currentQuestion + 1);
                } else {
                    element.textContent = translations[currentLanguage][key];
                }
            }
        });
    }

    // Initialize on page load
    document.addEventListener('DOMContentLoaded', function() {
        // Load saved preferences
        const savedDarkMode = localStorage.getItem('darkMode') === 'true';
        const savedLanguage = localStorage.getItem('language') || 'pt';
        
        if (savedDarkMode) {
            document.body.classList.add('dark-mode');
        }
        
        currentLanguage = savedLanguage;
        document.querySelector('.language-selector').value = savedLanguage;
        updateLanguage();
    });

    // Quiz state
    let currentQuestion = 0;
    let score = 0;
    let startTime = 0;
    let timerInterval = null;
    let selectedAnswer = null;
    let showingAnswer = false;

    // DOM elements
    const welcomeScreen = document.getElementById('welcome-screen');
    const quizScreen = document.getElementById('quiz-screen');
    const resultsScreen = document.getElementById('results-screen');
    const startBtn = document.getElementById('start-btn');
    const restartBtn = document.getElementById('restart-btn');
    const questionCounter = document.getElementById('question-counter');
    const progressPercentage = document.getElementById('progress-percentage');
    const progressFill = document.getElementById('progress-fill');
    const timerDisplay = document.getElementById('timer-display');
    const questionText = document.getElementById('question-text');
    const answersContainer = document.getElementById('answers-container');
    const feedbackContainer = document.getElementById('feedback-container');
    const scoreMessage = document.getElementById('score-message');
    const scoreValue = document.getElementById('score-value');
    const percentageValue = document.getElementById('percentage-value');
    const timeValue = document.getElementById('time-value');
    const avgTimeValue = document.getElementById('avg-time-value');

    // Event listeners
    startBtn.addEventListener('click', startQuiz);
    restartBtn.addEventListener('click', resetQuiz);

    function startQuiz() {
        welcomeScreen.classList.add('hidden');
        quizScreen.classList.remove('hidden');
        
        currentQuestion = 0;
        score = 0;
        startTime = Date.now();
        
        startTimer();
        showQuestion();
    }

    function startTimer() {
        timerInterval = setInterval(() => {
            const elapsed = Math.floor((Date.now() - startTime) / 1000);
            const minutes = Math.floor(elapsed / 60);
            const seconds = elapsed % 60;
            timerDisplay.textContent = `${minutes.toString().padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
        }, 1000);
    }

    function showQuestion() {
        const question = quizQuestions[currentQuestion];
        
        // Update progress
        const progress = ((currentQuestion + 1) / quizQuestions.length) * 100;
        const questionText = translations[currentLanguage]['question-of'].replace('{0}', currentQuestion + 1);
        questionCounter.textContent = questionText;
        progressPercentage.textContent = `${Math.round(progress)}%`;
        progressFill.style.width = `${progress}%`;
        
        // Show question
        document.getElementById('question-text').textContent = question.question;
        
        // Clear previous answers and feedback
        answersContainer.innerHTML = '';
        feedbackContainer.innerHTML = '';
        selectedAnswer = null;
        showingAnswer = false;
        
        // Create answer buttons
        question.options.forEach((option, index) => {
            const button = document.createElement('button');
            button.className = 'btn btn-answer';
            button.innerHTML = `<span class="answer-letter">${String.fromCharCode(65 + index)})</span><span>${option}</span>`;
            button.addEventListener('click', () => selectAnswer(index));
            answersContainer.appendChild(button);
        });
    }

    function selectAnswer(answerIndex) {
        if (showingAnswer) return;
        
        selectedAnswer = answerIndex;
        showingAnswer = true;
        
        const question = quizQuestions[currentQuestion];
        const buttons = answersContainer.querySelectorAll('.btn-answer');
        
        // Update button styles
        buttons.forEach((button, index) => {
            button.disabled = true;
            
            if (index === question.correctAnswer) {
                button.className = 'btn btn-correct';
            } else if (index === selectedAnswer && selectedAnswer !== question.correctAnswer) {
                button.className = 'btn btn-incorrect';
            }
        });
        
        // Check if answer is correct
        if (answerIndex === question.correctAnswer) {
            score++;
        }
        
        // Show feedback
        const feedbackDiv = document.createElement('div');
        feedbackDiv.className = 'feedback-box';
        
        if (answerIndex === question.correctAnswer) {
            feedbackDiv.innerHTML = '<span class="feedback-correct">✅ Correto!</span>';
        } else {
            feedbackDiv.innerHTML = `<span class="feedback-incorrect">❌ Resposta correta: ${String.fromCharCode(65 + question.correctAnswer)}</span>`;
        }
        
        feedbackContainer.appendChild(feedbackDiv);
        
        // Auto advance after 2 seconds
        setTimeout(() => {
            nextQuestion();
        }, 2000);
    }

    function nextQuestion() {
        if (currentQuestion < quizQuestions.length - 1) {
            currentQuestion++;
            showQuestion();
        } else {
            endQuiz();
        }
    }

    function endQuiz() {
        clearInterval(timerInterval);
        
        quizScreen.classList.add('hidden');
        resultsScreen.classList.remove('hidden');
        
        const totalTime = Math.floor((Date.now() - startTime) / 1000);
        const percentage = (score / quizQuestions.length) * 100;
        
        // Update results
        scoreValue.textContent = `${score}/${quizQuestions.length}`;
        percentageValue.textContent = `${percentage.toFixed(1)}%`;
        
        const minutes = Math.floor(totalTime / 60);
        const seconds = totalTime % 60;
        timeValue.textContent = `${minutes}m ${seconds}s`;
        
        const avgTime = (totalTime / quizQuestions.length).toFixed(1);
        avgTimeValue.textContent = `${avgTime}s ${translations[currentLanguage]['per-question']}`;
        
        // Update results screen translations
        updateLanguage();
        
        // Score message
        let message = "";
        if (percentage >= 90) message = "Incrível! Você tem uma mente brilhante! 🌟";
        else if (percentage >= 80) message = "Excelente! Seu raciocínio matemático é impressionante! 🎯";
        else if (percentage >= 70) message = "Muito bem! Você entende bem a lógica! 💡";
        else if (percentage >= 60) message = "Bom trabalho! Continue praticando! 🧠";
        else message = "Continue estudando! A prática leva à perfeição! 📚";
        
        scoreMessage.textContent = message;
    }

    function resetQuiz() {
        resultsScreen.classList.add('hidden');
        welcomeScreen.classList.remove('hidden');
        
        if (timerInterval) {
            clearInterval(timerInterval);
        }
        
        // Regenerate questions for next quiz
        quizQuestions = generateQuizQuestions();
    }