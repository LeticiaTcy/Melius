   // Traduções da página principal e menu lateral
   const translations = {
    pt: {
        menu_title: "Menu",
        menu_home: "Menu Inicial",
        menu_wellbeing: "Mellius",
        menu_games: "Jogos",
        menu_login: "Login",
        menu_darkmode: "Modo Escuro",
        menu_language: "Idioma",
        page_title: "Mellius",
        welcome_title: "Quiz de Bem-Estar Emocional",
        welcome_subtitle: "Avalie seu estado emocional atual através de perguntas sobre seus sentimentos e bem-estar. Este quiz ajudará você a entender melhor como está se sentindo.",
        start_quiz: "Começar Quiz",
        next_question: "Próxima Pergunta",
        finish_quiz: "Finalizar Quiz",
        results_title: "Resultados do Quiz",
        total_score: "Pontuação Total",
        wellbeing_level: "Nível de Bem-Estar",
        restart_quiz: "Fazer Quiz Novamente",
        question_of: "Pergunta {current} de {total}",
        very_low: "Muito Baixo",
        low: "Baixo", 
        moderate: "Moderado",
        good: "Bom",
        excellent: "Excelente"
    },
    en: {
        menu_title: "Menu",
        menu_home: "Home",
        menu_wellbeing: "Mellius",
        menu_games: "Games",
        menu_login: "Login",
        menu_darkmode: "Dark Mode",
        menu_language: "Language",
        page_title: "Mellius",
        welcome_title: "Emotional Wellbeing Quiz",
        welcome_subtitle: "Assess your current emotional state through questions about your feelings and wellbeing. This quiz will help you better understand how you're feeling.",
        start_quiz: "Start Quiz",
        next_question: "Next Question",
        finish_quiz: "Finish Quiz",
        results_title: "Quiz Results",
        total_score: "Total Score",
        wellbeing_level: "Wellbeing Level",
        restart_quiz: "Take Quiz Again",
        question_of: "Question {current} of {total}",
        very_low: "Very Low",
        low: "Low",
        moderate: "Moderate", 
        good: "Good",
        excellent: "Excellent"
    },
    es: {
        menu_title: "Menú",
        menu_home: "Inicio",
        menu_wellbeing: "Mellius",
        menu_games: "Juegos",
        menu_login: "Iniciar Sesión",
        menu_darkmode: "Modo Oscuro",
        menu_language: "Idioma",
        page_title: "Mellius - Quiz de Bienestar",
        welcome_title: "Quiz de Bienestar Emocional",
        welcome_subtitle: "Evalúa tu estado emocional actual a través de preguntas sobre tus sentimientos y bienestar. Este quiz te ayudará a entender mejor cómo te sientes.",
        start_quiz: "Comenzar Quiz",
        next_question: "Siguiente Pregunta",
        finish_quiz: "Finalizar Quiz",
        results_title: "Resultados del Quiz",
        total_score: "Puntuación Total",
        wellbeing_level: "Nivel de Bienestar",
        restart_quiz: "Hacer Quiz Nuevamente",
        question_of: "Pregunta {current} de {total}",
        very_low: "Muy Bajo",
        low: "Bajo",
        moderate: "Moderado",
        good: "Bueno", 
        excellent: "Excelente"
    }
};

// Perguntas do quiz em múltiplos idiomas
const wellbeingQuestions = {
    pt: [
        {
            question: "Como você se sente em relação à sua energia para atividades diárias?",
            options: [
                { text: "Completamente sem energia", score: 1 },
                { text: "Com pouca energia", score: 2 },
                { text: "Energia moderada", score: 3 },
                { text: "Boa energia", score: 4 },
                { text: "Muita energia e disposição", score: 5 }
            ]
        },
        {
            question: "Com que frequência você se sente feliz ou contente?",
            options: [
                { text: "Nunca", score: 1 },
                { text: "Raramente", score: 2 },
                { text: "Às vezes", score: 3 },
                { text: "Frequentemente", score: 4 },
                { text: "Quase sempre", score: 5 }
            ]
        },
        {
            question: "Como está sua qualidade de sono ultimamente?",
            options: [
                { text: "Muito ruim, não consigo dormir", score: 1 },
                { text: "Ruim, durmo pouco", score: 2 },
                { text: "Regular, acordo cansado", score: 3 },
                { text: "Boa, durmo bem na maioria das noites", score: 4 },
                { text: "Excelente, sempre acordo descansado", score: 5 }
            ]
        },
        {
            question: "Como você se sente em relação ao seu futuro?",
            options: [
                { text: "Muito pessimista", score: 1 },
                { text: "Pessimista", score: 2 },
                { text: "Neutro", score: 3 },
                { text: "Otimista", score: 4 },
                { text: "Muito otimista", score: 5 }
            ]
        },
        {
            question: "Com que frequência você sente ansiedade ou preocupação?",
            options: [
                { text: "Constantemente", score: 1 },
                { text: "Frequentemente", score: 2 },
                { text: "Às vezes", score: 3 },
                { text: "Raramente", score: 4 },
                { text: "Nunca", score: 5 }
            ]
        },
        {
            question: "Como você avalia seus relacionamentos pessoais?",
            options: [
                { text: "Muito ruins, me sinto isolado", score: 1 },
                { text: "Ruins, poucos amigos", score: 2 },
                { text: "Regulares, alguns conflitos", score: 3 },
                { text: "Bons, relacionamentos saudáveis", score: 4 },
                { text: "Excelentes, me sinto amado e apoiado", score: 5 }
            ]
        },
        {
            question: "Como está sua autoestima?",
            options: [
                { text: "Muito baixa", score: 1 },
                { text: "Baixa", score: 2 },
                { text: "Moderada", score: 3 },
                { text: "Boa", score: 4 },
                { text: "Muito alta", score: 5 }
            ]
        },
        {
            question: "Com que frequência você pratica atividades que lhe dão prazer?",
            options: [
                { text: "Nunca", score: 1 },
                { text: "Raramente", score: 2 },
                { text: "Às vezes", score: 3 },
                { text: "Frequentemente", score: 4 },
                { text: "Diariamente", score: 5 }
            ]
        },
        {
            question: "Como você lida com o estresse?",
            options: [
                { text: "Muito mal, me sinto sobrecarregado", score: 1 },
                { text: "Com dificuldade", score: 2 },
                { text: "Razoavelmente", score: 3 },
                { text: "Bem, tenho estratégias", score: 4 },
                { text: "Muito bem, mantenho a calma", score: 5 }
            ]
        },
        {
            question: "Como você se sente em relação à sua vida em geral?",
            options: [
                { text: "Muito insatisfeito", score: 1 },
                { text: "Insatisfeito", score: 2 },
                { text: "Neutro", score: 3 },
                { text: "Satisfeito", score: 4 },
                { text: "Muito satisfeito", score: 5 }
            ]
        }
    ],
    // EM INGLÊS
    en: [
        {
            question: "How do you feel about your energy for daily activities?",
            options: [
                { text: "Completely without energy", score: 1 },
                { text: "With little energy", score: 2 },
                { text: "Moderate energy", score: 3 },
                { text: "Good energy", score: 4 },
                { text: "Lots of energy and disposition", score: 5 }
            ]
        },
        {
            question: "How often do you feel happy or content?",
            options: [
                { text: "Never", score: 1 },
                { text: "Rarely", score: 2 },
                { text: "Sometimes", score: 3 },
                { text: "Frequently", score: 4 },
                { text: "Almost always", score: 5 }
            ]
        },
        {
            question: "How is your sleep quality lately?",
            options: [
                { text: "Very bad, can't sleep", score: 1 },
                { text: "Bad, sleep little", score: 2 },
                { text: "Regular, wake up tired", score: 3 },
                { text: "Good, sleep well most nights", score: 4 },
                { text: "Excellent, always wake up rested", score: 5 }
            ]
        },
        {
            question: "How do you feel about your future?",
            options: [
                { text: "Very pessimistic", score: 1 },
                { text: "Pessimistic", score: 2 },
                { text: "Neutral", score: 3 },
                { text: "Optimistic", score: 4 },
                { text: "Very optimistic", score: 5 }
            ]
        },
        {
            question: "How often do you feel anxiety or worry?",
            options: [
                { text: "Constantly", score: 1 },
                { text: "Frequently", score: 2 },
                { text: "Sometimes", score: 3 },
                { text: "Rarely", score: 4 },
                { text: "Never", score: 5 }
            ]
        },
        {
            question: "How do you rate your personal relationships?",
            options: [
                { text: "Very bad, feel isolated", score: 1 },
                { text: "Bad, few friends", score: 2 },
                { text: "Regular, some conflicts", score: 3 },
                { text: "Good, healthy relationships", score: 4 },
                { text: "Excellent, feel loved and supported", score: 5 }
            ]
        },
        {
            question: "How is your self-esteem?",
            options: [
                { text: "Very low", score: 1 },
                { text: "Low", score: 2 },
                { text: "Moderate", score: 3 },
                { text: "Good", score: 4 },
                { text: "Very high", score: 5 }
            ]
        },
        {
            question: "How often do you practice activities that give you pleasure?",
            options: [
                { text: "Never", score: 1 },
                { text: "Rarely", score: 2 },
                { text: "Sometimes", score: 3 },
                { text: "Frequently", score: 4 },
                { text: "Daily", score: 5 }
            ]
        },
        {
            question: "How do you deal with stress?",
            options: [
                { text: "Very badly, feel overwhelmed", score: 1 },
                { text: "With difficulty", score: 2 },
                { text: "Reasonably", score: 3 },
                { text: "Well, have strategies", score: 4 },
                { text: "Very well, stay calm", score: 5 }
            ]
        },
        {
            question: "How do you feel about your life in general?",
            options: [
                { text: "Very dissatisfied", score: 1 },
                { text: "Dissatisfied", score: 2 },
                { text: "Neutral", score: 3 },
                { text: "Satisfied", score: 4 },
                { text: "Very satisfied", score: 5 }
            ]
        }
    ],
    // Em espanhol
    es: [
        {
            question: "¿Cómo te sientes en relación a tu energía para actividades diarias?",
            options: [
                { text: "Completamente sin energía", score: 1 },
                { text: "Con poca energía", score: 2 },
                { text: "Energía moderada", score: 3 },
                { text: "Buena energía", score: 4 },
                { text: "Mucha energía y disposición", score: 5 }
            ]
        },
        {
            question: "¿Con qué frecuencia te sientes feliz o contento?",
            options: [
                { text: "Nunca", score: 1 },
                { text: "Raramente", score: 2 },
                { text: "A veces", score: 3 },
                { text: "Frecuentemente", score: 4 },
                { text: "Casi siempre", score: 5 }
            ]
        },
        {
            question: "¿Cómo está tu calidad de sueño últimamente?",
            options: [
                { text: "Muy mala, no puedo dormir", score: 1 },
                { text: "Mala, duermo poco", score: 2 },
                { text: "Regular, despierto cansado", score: 3 },
                { text: "Buena, duermo bien la mayoría de las noches", score: 4 },
                { text: "Excelente, siempre despierto descansado", score: 5 }
            ]
        },
        {
            question: "¿Cómo te sientes en relación a tu futuro?",
            options: [
                { text: "Muy pesimista", score: 1 },
                { text: "Pesimista", score: 2 },
                { text: "Neutral", score: 3 },
                { text: "Optimista", score: 4 },
                { text: "Muy optimista", score: 5 }
            ]
        },
        {
            question: "¿Con qué frecuencia sientes ansiedad o preocupación?",
            options: [
                { text: "Constantemente", score: 1 },
                { text: "Frecuentemente", score: 2 },
                { text: "A veces", score: 3 },
                { text: "Raramente", score: 4 },
                { text: "Nunca", score: 5 }
            ]
        },
        {
            question: "¿Cómo evalúas tus relaciones personales?",
            options: [
                { text: "Muy malas, me siento aislado", score: 1 },
                { text: "Malas, pocos amigos", score: 2 },
                { text: "Regulares, algunos conflictos", score: 3 },
                { text: "Buenas, relaciones saludables", score: 4 },
                { text: "Excelentes, me siento amado y apoyado", score: 5 }
            ]
        },
        {
            question: "¿Cómo está tu autoestima?",
            options: [
                { text: "Muy baja", score: 1 },
                { text: "Baja", score: 2 },
                { text: "Moderada", score: 3 },
                { text: "Buena", score: 4 },
                { text: "Muy alta", score: 5 }
            ]
        },
        {
            question: "¿Con qué frecuencia practicas actividades que te dan placer?",
            options: [
                { text: "Nunca", score: 1 },
                { text: "Raramente", score: 2 },
                { text: "A veces", score: 3 },
                { text: "Frecuentemente", score: 4 },
                { text: "Diariamente", score: 5 }
            ]
        },
        {
            question: "¿Cómo manejas el estrés?",
            options: [
                { text: "Muy mal, me siento abrumado", score: 1 },
                { text: "Con dificultad", score: 2 },
                { text: "Razonablemente", score: 3 },
                { text: "Bien, tengo estrategias", score: 4 },
                { text: "Muy bien, mantengo la calma", score: 5 }
            ]
        },
        {
            question: "¿Cómo te sientes en relación a tu vida en general?",
            options: [
                { text: "Muy insatisfecho", score: 1 },
                { text: "Insatisfecho", score: 2 },
                { text: "Neutral", score: 3 },
                { text: "Satisfecho", score: 4 },
                { text: "Muy satisfecho", score: 5 }
            ]
        }
    ]
};

// Estado do quiz
let currentLanguage = 'pt'; // <--- Deixa a atual linguagem do site em português
let currentQuestion = 0;
let totalScore = 0;
let selectedAnswer = null;
let questions = [];

// Inicialização
document.addEventListener('DOMContentLoaded', function() {
    updateLanguage();
    loadQuestions();
});

// Funções da barra lateral
function toggleSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.toggle('open');
    overlay.classList.toggle('active');
}

function closeSidebar() {
    const sidebar = document.getElementById('sidebar');
    const overlay = document.getElementById('overlay');
    
    sidebar.classList.remove('open');
    overlay.classList.remove('active');
}

// Event listener para fechar sidebar clicando no overlay
document.getElementById('overlay').addEventListener('click', closeSidebar); // usado pra fechar e abrir a sidebar

// Função para modo escuro
function toggleDarkMode() {
    document.body.classList.toggle('dark');
    localStorage.setItem('darkMode', document.body.classList.contains('dark'));
}

// Carregar modo escuro salvo
if (localStorage.getItem('darkMode') === 'true') {
    document.body.classList.add('dark');
}

// Funções de idioma
function changeLanguage(lang) {
    currentLanguage = lang;
    localStorage.setItem('language', lang);
    
    // Atualizar botões de idioma
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    updateLanguage();
    loadQuestions();
}

function updateLanguage() {
    const lang = translations[currentLanguage];
    document.querySelectorAll('[data-translate]').forEach(element => {
        const key = element.getAttribute('data-translate');
        if (lang[key]) {
            element.textContent = lang[key];
        }
    });
}

function loadQuestions() {
    questions = wellbeingQuestions[currentLanguage];
}

// Carregar idioma salvo
const savedLang = localStorage.getItem('language');
if (savedLang && translations[savedLang]) {
    currentLanguage = savedLang;
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.classList.remove('active');
        if (btn.textContent.toLowerCase() === savedLang) {
            btn.classList.add('active');
        }
    });
}

// Funções do quiz
function startQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    selectedAnswer = null;
    
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'block';
    document.getElementById('resultsScreen').style.display = 'none';
    
    showQuestion();
}

function showQuestion() {
    const question = questions[currentQuestion];
    const totalQuestions = questions.length;
    
    // Atualizar progresso
    const progress = ((currentQuestion + 1) / totalQuestions) * 100;
    document.getElementById('progressBar').style.width = progress + '%';
    
    // Atualizar pergunta
    const questionNumber = translations[currentLanguage].question_of
        .replace('{current}', currentQuestion + 1)
        .replace('{total}', totalQuestions);
    document.getElementById('questionNumber').textContent = questionNumber;
    document.getElementById('questionText').textContent = question.question;
    
    // Criar opções
    const container = document.getElementById('optionsContainer');
    container.innerHTML = '';
    
    question.options.forEach((option, index) => {
        const button = document.createElement('button');
        button.className = 'option-button';
        button.textContent = option.text;
        button.onclick = () => selectAnswer(index);
        container.appendChild(button);
    });
    
    // Resetar seleção
    selectedAnswer = null;
    document.getElementById('nextButton').disabled = true;
    
    // Atualizar texto do botão
    const nextButton = document.getElementById('nextButton');
    if (currentQuestion === totalQuestions - 1) {
        nextButton.textContent = translations[currentLanguage].finish_quiz;
    } else {
        nextButton.textContent = translations[currentLanguage].next_question;
    }
}

function selectAnswer(answerIndex) {
    selectedAnswer = answerIndex;
    
    // Remover seleção anterior
    document.querySelectorAll('.option-button').forEach(btn => {
        btn.classList.remove('selected');
    });
    
    // Adicionar seleção atual
    document.querySelectorAll('.option-button')[answerIndex].classList.add('selected');
    
    // Habilitar botão de próxima
    document.getElementById('nextButton').disabled = false;
}

function nextQuestion() {
    if (selectedAnswer === null) return;
    
    // Adicionar pontuação
    const question = questions[currentQuestion];
    totalScore += question.options[selectedAnswer].score;
    
    currentQuestion++;
    
    if (currentQuestion < questions.length) {
        showQuestion();
    } else {
        showResults();
    }
}

function showResults() {
    document.getElementById('welcomeScreen').style.display = 'none';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'block';
    
    // Calcular nível de bem-estar
    const maxScore = questions.length * 5;
    const percentage = (totalScore / maxScore) * 100;
    
    let wellbeingLevel, message, levelKey;
    
    if (percentage <= 20) {
        levelKey = 'very_low';
        message = getWellbeingMessage('very_low');
    } else if (percentage <= 40) {
        levelKey = 'low';
        message = getWellbeingMessage('low');
    } else if (percentage <= 60) {
        levelKey = 'moderate';
        message = getWellbeingMessage('moderate');
    } else if (percentage <= 80) {
        levelKey = 'good';
        message = getWellbeingMessage('good');
    } else {
        levelKey = 'excellent';
        message = getWellbeingMessage('excellent');
    }
    
    wellbeingLevel = translations[currentLanguage][levelKey];
    
    // Mostrar resultados
    document.getElementById('finalScore').textContent = totalScore + '/' + maxScore; // Cálculo feito de acordo com as respostas do usuário
    document.getElementById('wellbeingLevel').textContent = wellbeingLevel;
    document.getElementById('scoreMessage').innerHTML = message;
}

function getWellbeingMessage(level) {
    const messages = { // Mensagem final que aparece de acordo com as respostas dadas pelo usuário (tradução nas tres linguagens)
        pt: {
        
            very_low: '<h3>Bem-estar Muito Baixo</h3><p>Seus resultados indicam que você pode estar passando por um período difícil. É importante buscar apoio de amigos, família ou um profissional de saúde mental. Lembre-se de que é normal ter altos e baixos, e buscar ajuda é um sinal de força.</p>',
        
            low: '<h3>Bem-estar Baixo</h3><p>Você pode estar enfrentando alguns desafios em sua vida. Considere praticar atividades de autocuidado, como exercícios, meditação ou hobbies que você gosta. Se os sentimentos persistirem, conversar com alguém de confiança pode ajudar.</p>',
        
            moderate: '<h3>Bem-estar Moderado</h3><p>Você está em um estado equilibrado, mas há espaço para melhorias. Tente identificar áreas da sua vida que podem ser fortalecidas e considere estabelecer pequenas metas para aumentar seu bem-estar geral.</p>',
        
            good: '<h3>Bem-estar Bom</h3><p>Parabéns! Você está em um bom estado emocional. Continue mantendo as práticas que estão funcionando para você e lembre-se de cuidar de si mesmo regularmente.</p>',
        
            excellent: '<h3>Bem-estar Excelente</h3><p>Fantástico! Você está em um excelente estado de bem-estar emocional. Continue fazendo o que está funcionando e considere compartilhar suas estratégias positivas com outros que possam se beneficiar.</p>'
        },
        en: {
        
            very_low: '<h3>Very Low Wellbeing</h3><p>Your results indicate you may be going through a difficult period. It\'s important to seek support from friends, family, or a mental health professional. Remember that it\'s normal to have ups and downs, and seeking help is a sign of strength.</p>',
        
            low: '<h3>Low Wellbeing</h3><p>You may be facing some challenges in your life. Consider practicing self-care activities like exercise, meditation, or hobbies you enjoy. If feelings persist, talking to someone you trust can help.</p>',
        
            moderate: '<h3>Moderate Wellbeing</h3><p>You\'re in a balanced state, but there\'s room for improvement. Try to identify areas of your life that can be strengthened and consider setting small goals to increase your overall wellbeing.</p>',
        
            good: '<h3>Good Wellbeing</h3><p>Congratulations! You\'re in a good emotional state. Keep maintaining the practices that are working for you and remember to take care of yourself regularly.</p>',
        
            excellent: '<h3>Excellent Wellbeing</h3><p>Fantastic! You\'re in an excellent state of emotional wellbeing. Keep doing what\'s working and consider sharing your positive strategies with others who might benefit.</p>'
        },

        es: {
            very_low: '<h3>Bienestar Muy Bajo</h3><p>Tus resultados indican que puedes estar pasando por un período difícil. Es importante buscar apoyo de amigos, familia o un profesional de salud mental. Recuerda que es normal tener altibajos, y buscar ayuda es una señal de fortaleza.</p>',
           
            low: '<h3>Bienestar Bajo</h3><p>Puedes estar enfrentando algunos desafíos en tu vida. Considera practicar actividades de autocuidado como ejercicio, meditación o pasatiempos que disfrutes. Si los sentimientos persisten, hablar con alguien de confianza puede ayudar.</p>',
           
            moderate: '<h3>Bienestar Moderado</h3><p>Estás en un estado equilibrado, pero hay espacio para mejorar. Trata de identificar áreas de tu vida que pueden fortalecerse y considera establecer pequeñas metas para aumentar tu bienestar general.</p>',
           
            good: '<h3>Bienestar Bueno</h3><p>¡Felicitaciones! Estás en un buen estado emocional. Continúa manteniendo las prácticas que están funcionando para ti y recuerda cuidarte regularmente.</p>',
           
            excellent: '<h3>Bienestar Excelente</h3><p>¡Fantástico! Estás en un excelente estado de bienestar emocional. Continúa haciendo lo que está funcionando y considera compartir tus estrategias positivas con otros que puedan beneficiarse.</p>'
        }
    };
    
    return messages[currentLanguage][level];
}

function resetQuiz() {
    currentQuestion = 0;
    totalScore = 0;
    selectedAnswer = null;
    
    document.getElementById('welcomeScreen').style.display = 'block';
    document.getElementById('quizScreen').style.display = 'none';
    document.getElementById('resultsScreen').style.display = 'none';
}