        // Tradução do teste de linguagem
        const translations = {
            pt: {
                'welcome-title': 'Quiz de Lógica Matemática',
                'welcome-subtitle': 'Teste seu raciocínio lógico com equações matemáticas de forma divertida! 🔢',
                'how-it-works': 'Como funciona:',
                'info-questions': '📋 20 perguntas de lógica matemática',
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
                'per-question': 'por pergunta',
                // Troca de Linguagem dentro do teste lógico PT-BR
                'question-counter':'Perguntas de 1 a 20',
                'question-text' : 'Carregando pergunta...',
                'score-message': 'Carregando Resultado...',
                // Perguntas do Quiz
                'q-arithmetic': 'Quanto é {a} {op} {b}? 🧮',
                'q-sequence': 'Qual é o próximo número na sequência: {seq}, ? 📈',
                'q-percentage': 'Quanto é {p}% de {t}? 📊',
                'q-equation': 'Se x + {b} = {r}, qual é o valor de x? ✖️',
                'feedback-correct': '✅ Correto!',
                'feedback-incorrect': '❌ Resposta correta: {ans}'
            },
            en: {
                'welcome-title': 'Math Logic Quiz',
                'welcome-subtitle': 'Test your logical reasoning with math equations in a fun way! 🔢',
                'how-it-works': 'How it works:',
                'info-questions': '📋 20 mathematical logic questions',
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
                'per-question': 'per question',
                // Troca de Linguagem dentro do teste lógico INGLÊS
                'question-counter':'Preguntas del 1 al 20',
                'question-text' : 'Loading Questions...',
                'score-message': 'Loading Results...',
                // Tradução das perguntas em inglês
                'q-arithmetic': 'What is {a} {op} {b}? 🧮',
                'q-sequence': 'What is the next number in the sequence: {seq}, ? 📈',
                'q-percentage': 'What is {p}% of {t}? 📊',
                'q-equation': 'If x + {b} = {r}, what is the value of x? ✖️',
                'feedback-correct': '✅ Correct!',
                'feedback-incorrect': '❌ Correct answer: {ans}',
             },

            es: {
                'welcome-title': 'Quiz de Lógica Matemática',
                'welcome-subtitle': '¡Prueba tu razonamiento lógico con ecuaciones matemáticas de forma divertida! 🔢',
                'how-it-works': 'Cómo funciona:',
                'info-questions': '📋 20 preguntas de lógica matemática',
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
                'per-question': 'por pregunta',
                 // Troca de Linguagem dentro do teste lógico ESPANHOL
                 'question-counter':'Preguntas del 1 al 20',
                 'question-text' : 'Cargando preguntas...',
                 'score-message': 'Cargando resultados...',
                  // Preguntas del Quiz
                'q-arithmetic': '¿Cuánto es {a} {op} {b}? 🧮',
                'q-sequence': '¿Cuál es el siguiente número en la secuencia: {seq}, ? 📈',
                'q-percentage': '¿Cuánto es el {p}% de {t}? 📊',
                'q-equation': 'Si x + {b} = {r}, ¿cuál es el valor de x? ✖️',
                'feedback-correct': '✅ ¡Correcto!',
                'feedback-incorrect': '❌ Respuesta correcta: {ans}'
            }
        };
            //ATEÇÃO! sempre que usar a "," significa que você irá traduzir outra coisa embaixo, quando acabar, não finalize com , (REFERENTE A TRADUÇÃO!)
        let currentLanguage = 'pt'; //<--- A linguagem padrão é Português! isso irá fazer com que o site abra em português toda vez que for aberto
        
        //Observação importante ---> Toda vez que o site for atualizado, não mudará a linguagem escolhida pelo usuário :)        

        // Geração aleratória e número dos quizes de matemática
        function generateRandomNumber(min, max) {
            return Math.floor(Math.random() * (max - min + 1)) + min;
        }

        function generateArithmeticQuestion() {
            const operations = ['+', '-', '*'];
            const op = operations[Math.floor(Math.random() * operations.length)];
            let a, b, result;
            
            switch(op) {
                case '+':
                    a = generateRandomNumber(10, 99);
                    b = generateRandomNumber(10, 99);
                    result = a + b;
                    break;
                case '-':
                    a = generateRandomNumber(50, 99);
                    b = generateRandomNumber(10, a-10);
                    result = a - b;
                    break;
                case '*':
                    a = generateRandomNumber(2, 12);
                    b = generateRandomNumber(2, 12);
                    result = a * b;
                    break;
            }
            
            const wrongAnswers = [
                result + generateRandomNumber(1, 10),
                result - generateRandomNumber(1, 10),
                result + generateRandomNumber(11, 20)
            ];
            
            const options = [result, ...wrongAnswers].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(result);
            
            return {
                question: `Quanto é ${a} ${op} ${b}? 🧮`,
                options: options.map(opt => opt.toString()),
                correctAnswer: correctIndex
            };
        }

        function generateSequenceQuestion() {
            const start = generateRandomNumber(2, 10);
            const step = generateRandomNumber(2, 5);
            const sequence = [start, start + step, start + 2*step, start + 3*step];
            const nextValue = start + 4*step;
            
            const wrongAnswers = [
                nextValue + step,
                nextValue - step,
                nextValue + 2*step
            ];
            
            const options = [nextValue, ...wrongAnswers].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(nextValue);
            
            return {
                question: `Qual é o próximo número na sequência: ${sequence.join(', ')}, ? 📈`,
                options: options.map(opt => opt.toString()),
                correctAnswer: correctIndex
            };
        }

        function generatePercentageQuestion() {
            const total = generateRandomNumber(100, 500);
            const percentage = [10, 20, 25, 30, 40, 50][Math.floor(Math.random() * 6)];
            const result = (total * percentage) / 100;
            
            const wrongAnswers = [
                result + generateRandomNumber(5, 20),
                result - generateRandomNumber(5, 20),
                (total * (percentage + 10)) / 100
            ];
            
            const options = [result, ...wrongAnswers].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(result);
            
            return {
                question: `Quanto é ${percentage}% de ${total}? 📊`,
                options: options.map(opt => opt.toString()),
                correctAnswer: correctIndex
            };
        }

        function generateEquationQuestion() {
            const a = generateRandomNumber(2, 10);
            const b = generateRandomNumber(1, 20);
            const result = generateRandomNumber(10, 50);
            const x = result - b;
            
            const wrongAnswers = [
                x + generateRandomNumber(1, 5),
                x - generateRandomNumber(1, 5),
                x + generateRandomNumber(6, 10)
            ];
            
            const options = [x, ...wrongAnswers].sort(() => Math.random() - 0.5);
            const correctIndex = options.indexOf(x);
            
            return {
                question: `Se x + ${b} = ${result}, qual é o valor de x? ✖️`,
                options: options.map(opt => opt.toString()),
                correctAnswer: correctIndex
            };
        }

    function generateArithmeticQuestion() {
    const operations = ['+', '-', '*'];
    const op = operations[Math.floor(Math.random() * operations.length)];
    let a, b, result;

    switch(op) {
        case '+':
            a = generateRandomNumber(10, 99);
            b = generateRandomNumber(10, 99);
            result = a + b;
            break;
        case '-':
            a = generateRandomNumber(50, 99);
            b = generateRandomNumber(10, a - 10);
            result = a - b;
            break;
        case '*':
            a = generateRandomNumber(2, 12);
            b = generateRandomNumber(2, 12);
            result = a * b;
            break;
    }

    const wrongAnswers = [
        result + generateRandomNumber(1, 10),
        result - generateRandomNumber(1, 10),
        result + generateRandomNumber(11, 20)
    ];

    const options = [result, ...wrongAnswers].sort(() => Math.random() - 0.5);
    const correctIndex = options.indexOf(result);

    // Usa tradução conforme idioma atual
    const questionText = translations[currentLanguage]['q-arithmetic']
        .replace('{a}', a)
        .replace('{op}', op)
        .replace('{b}', b);

    return {
        question: questionText,
        options: options.map(opt => opt.toString()),
        correctAnswer: correctIndex
    };
}


        // Para gerar as questões do QUIZ
        function generateQuizQuestions() {
            const questions = [];
            const questionTypes = [
                generateArithmeticQuestion,
                generateSequenceQuestion,
                generatePercentageQuestion,
                generateEquationQuestion
            ];
            
            for (let i = 0; i < 20; i++) {
                const questionType = questionTypes[Math.floor(Math.random() * questionTypes.length)];
                const question = questionType();
                questions.push({
                    id: i + 1,
                    ...question
                });
            }
            
            return questions;
        }

        let quizQuestions = generateQuizQuestions();

        // Sidebar functions
        function toggleSidebar() { //Este botão é responsável por abrir o menu assim que o usuário clicar
            const sidebar = document.getElementById('sidebar');
            const overlay = document.querySelector('.sidebar-overlay');
            sidebar.classList.toggle('open');
            overlay.classList.toggle('active');
        }
        // Função para fechar a barra lateral
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
            else if (percentage >= 70) message = "Muito bem! Você entende bem a lógica matemática! 💡";
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