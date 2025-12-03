<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title> Mellius - Avalie seu Estado Emocional</title>
    <meta name="description" content="Avalie seu bem-estar emocional com este quiz interativo. Descubra como estão seus sentimentos e estado mental.">
    <link rel="stylesheet" href="../../assets/css/quizzBemEstar.css">
    </head>
<!--Inicio da página inicial-->
    <body>
    <div class="overlay" id="overlay"></div>
    <!--Container da sidebar-->
    <div class="app-container">
        <nav class="sidebar" id="sidebar">
            <div class="sidebar-header">
                <h2 class="sidebar-title" data-translate="menu_title">Menu</h2>
            </div>
            <div class="menu-items">
                <!--Menu inicial icone-->
                <div class="sidebar-menu">
                <button class="menu-item" onclick="window.open('../../index.php', '_self')">
                    <span class="menu-icon">🏠</span>
                    <span data-translate="menu-home">Menu Inicial</span>
                </button>
                <!--Botão de quizzes-->
                <button class="menu-item" onclick="window.open('logic_quiz.php', '_self')">
                    <span class="menu-icon">🧩</span>
                    <span data-translate="menu-quizLogica">Quiz de Lógica</span>
                </button>
                <button class="menu-item" onclick="window.open('math_quiz.php', '_self')">
                    <span class="menu-icon">🧮</span>
                    <span data-translate="menu-logicaMath">Quiz de lógica Matemática</span>
                </button>
                <button class="menu-item" onclick="alert('Você já está nesta página <3')">
                    <span class="menu-icon">🧠</span>
                    <span data-translate="menu-BemEstar">Quiz de Bem-Estar</span>
                </button>
            <!--Botões de Dark Mode entre outros-->
                <button class="menu-item" onclick="toggleDarkMode()">
                    <span class="menu-icon">🌓</span>
                    <span data-translate="menu_darkmode">Modo Escuro</span>
                </button>
                <div class="menu-item" style="flex-direction: column; align-items: flex-start;">
                    <div style="display: flex; align-items: center; margin-bottom: 0.5rem;">
                        <span class="menu-icon">🌐</span>
                        <span data-translate="menu_language">Idioma</span>
                    </div>
                    <div class="language-selector">
                        <button class="lang-btn active" onclick="changeLanguage('pt')">PT</button>
                        <button class="lang-btn" onclick="changeLanguage('en')">EN</button>
                        <button class="lang-btn" onclick="changeLanguage('es')">ES</button>
                    </div>
                </div>
            </div>
        </nav>

        <main class="main-content">
            <header class="header">

                <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
                <h1 class="page-title" data-translate="page_title">Quiz de Bem-Estar</h1>
            </header>

            <div class="content">
                <div class="quiz-container">
                    <div class="mb-8">
                <!--icone do site-->
                <div class="logo-site">
                    <div class="icone-mellius">
                                <svg class="cerebro-icon" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                            </svg>
                    </div>
                </div>
                <!--Conteúdo dentro do container-->
                    <div id="welcomeScreen" class="welcome-screen">
                        <h1 class="welcome-title" data-translate="welcome_title">Quiz de Bem-Estar Emocional</h1>
                        <p class="welcome-subtitle" data-translate="welcome_subtitle">
                            Avalie seu estado emocional atual através de perguntas sobre seus sentimentos e bem-estar. 
                            Este quiz ajudará você a entender melhor como está se sentindo.
                        </p>
                    <!--Caixinha para guardar informações de como funciona-->    
                    <div class="info-box">
                        <h3 data-translate="how-it-works">Como funciona:</h3>
                        <div class="info-item" data-translate="info-questions"> ❤️ 10 perguntas de Para saber como você está!</div>
                        <div class="info-item" data-translate="info-feedback"> 💗 Resposta final de acordo com seu resulltado</div>
                        <div class="info-item" data-translate="info-results"> 🧠Cuide bem de si mesmo! Faça sem pressa e sem peso </div>
                    </div>
                        <button class="btn" onclick="startQuiz()" data-translate="start_quiz">
                            <span>🧠</span> Começar Quiz
                        </button>
                    </div>

                    <div id="quizScreen" style="display: none;">
                        <div class="progress-bar">
                            <div class="progress-fill" id="progressBar"></div>
                        </div>
                        
                        <div class="question-header">
                            <div class="question-number" id="questionNumber"></div>
                            <h2 class="question-text" id="questionText"></h2>
                        </div>

                        <div class="options-container" id="optionsContainer"></div>

                        <div style="display: flex; justify-content: space-between; align-items: center;">
                            <button class="btn" onclick="nextQuestion()" id="nextButton" disabled data-translate="next_question">
                                Próxima Pergunta
                            </button>
                        </div>
                    </div>

                    <div id="resultsScreen" style="display: none;">
                        <h1 class="results-title" data-translate="results_title">Resultados do Quiz</h1>
                        
                        <div class="quiz-stats">
                            <div class="stat-card">
                                <div class="stat-value" id="finalScore">0</div>
                                <div class="stat-label" data-translate="total_score">Pontuação Total</div>
                            </div>
                            <div class="stat-card">
                                <div class="stat-value" id="wellbeingLevel">-</div>
                                <div class="stat-label" data-translate="wellbeing_level">Nível de Bem-Estar</div>
                            </div>
                        </div>

                        <div class="score-message" id="scoreMessage"></div>

                        <button class="btn" onclick="resetQuiz()" data-translate="restart_quiz">
                            <span>🔄</span> Fazer Quiz Novamente
                        </button>
                    </div>
                </div>
            </div>
        </main>
    </div>

    <script src="../../assets/js/quizzBemEstar.js"> // SCRIPT pra fazer quizes e menu lateral funcionarem bem    </script>
</body>
</html>