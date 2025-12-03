<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title> Mellius - Quiz de lógica</title>
        <meta name="description" content="Quiz fofo e divertido para testar seu raciocínio lógico com perguntas de lógica clássica. 20 perguntas com cronômetro e feedback imediato!" />
    <link rel="stylesheet" href="../../assets/css/logic_quiz_css.css">
</head>
<body>
    <!-- Menu Toggle Button -->
    <button class="menu-toggle" onclick="toggleSidebar()">☰</button>
    
    <!-- Sidebar Overlay -->
    <div class="sidebar-overlay" onclick="closeSidebar()"></div>
    
    <!-- Sidebar -->
    <div class="sidebar" id="sidebar">
        <div class="sidebar-header">
            <div class="sidebar-title">Mellius</div>
        </div>
        <!--Menu inicial icone-->
        <div class="sidebar-menu">
            <button class="sidebar-item" onclick="window.open('../../index.php', '_self')">
                <span class="sidebar-icon">🏠</span>
                <span data-translate="menu-home">Menu Inicial</span>
            </button>
            <!--Botão de quizzes-->
            <button class="sidebar-item" onclick="alert('Você já está nesta página <3')">
                <span class="sidebar-icon">🧩</span>
                <span data-translate="menu-quizLogica">Quiz de Lógica</span>
            </button>
            <button class="sidebar-item" onclick="window.open('math_quiz.php', '_self')">
                <span class="sidebar-icon">🧮</span>
                <span data-translate="menu-logicaMath">Quiz de lógica Matemática</span>
            </button>
            <button class="sidebar-item" onclick="window.open('quizzBemEstar.php', '_self')">
                <span class="sidebar-icon">🧠</span>
                <span data-translate="menu-BemEstar">Quiz de Bem-Estar</span>
            </button>
            
            <button class="sidebar-item" onclick="toggleDarkMode()">
                <span class="sidebar-icon">🌙</span>
                <span data-translate="menu-dark">Dark Mode</span>
            </button>
            <button class="sidebar-item" onclick="toggleLanguage()">
                <span class="sidebar-icon">🌍</span>
                <span data-translate="menu-language">Idioma</span>
                <select class="language-selector" onclick="event.stopPropagation()" onchange="changeLanguage(this.value)">
                    <option value="pt">PT</option>
                    <option value="en">EN</option>
                    <option value="es">ES</option>
                </select>
            </button>
        </div>
    </div>

    <!-- Tela inicial -->
    <div id="welcome-screen" class="container">
        <div class="quiz-card text-center">
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

                <h1 data-translate="welcome-title">Quiz de Lógica</h1>
                <p class="subtitle" data-translate="welcome-subtitle">
                    Teste seu raciocínio lógico com perguntas de lógica clássica aqui no
                </p>
            </div>
            
            <div class="info-box">
                <h3 data-translate="how-it-works">Como funciona:</h3>
                <div class="info-item" data-translate="info-questions">📋 20 perguntas de lógica</div>
                <div class="info-item" data-translate="info-timer">⏱️ Cronômetro para medir seu tempo</div>
                <div class="info-item" data-translate="info-feedback">🎯 Resposta imediata com explicação</div>
                <div class="info-item" data-translate="info-results">🏆 Resultado final com pontuação</div>
            </div>

            <button id="start-btn" class="btn btn-primary pulse-glow" data-translate="start-quiz">
                Iniciar Quiz 🚀
            </button>
        </div>
    </div>

    <!-- Quiz Screen -->
    <div id="quiz-screen" class="container hidden">
        <div class="quiz-card quiz-card-large">
            <div class="progress-section">
                <div class="progress-header">
                    <div style="flex: 1; margin-right: 2rem;">
                        <div class="progress-info">
                            <span id="question-counter">Pergunta 1 de 20</span>
                            <span id="progress-percentage">5%</span>
                        </div>
                        <div class="progress-bar">
                            <div id="progress-fill" class="progress-fill" style="width: 5%"></div>
                        </div>
                    </div>
                    <div class="timer">
                        <span class="timer-icon">⏱️</span>
                        <span id="timer-display" class="timer-display">00:00</span>
                    </div>
                </div>
            </div>

            <h2 id="question-text">Carregando pergunta...</h2>
            
            <div id="answers-container">
                <!-- Answers will be inserted here -->
            </div>

            <div id="feedback-container"></div>
        </div>
    </div>

    <!-- Results Screen -->
    <div id="results-screen" class="container hidden">
        <div class="quiz-card text-center">
            <div class="mb-8">
                <div class="emoji float-animation">🎉</div>
                <h1 style="font-size: 2rem;" data-translate="congratulations">Parabéns!</h1>
                <p id="score-message" class="subtitle">
                    Carregando resultado...
                </p>
            </div>

            <div class="results-grid">
                <div class="stat-card">
                    <div id="score-value" class="stat-value">0/20</div>
                    <div class="stat-label" data-translate="correct-answers">Respostas Corretas</div>
                    <div id="percentage-value" class="stat-detail">0%</div>
                </div>
                
                <div class="stat-card">
                    <div id="time-value" class="stat-value">0m 0s</div>
                    <div class="stat-label" data-translate="total-time">Tempo Total</div>
                    <div id="avg-time-value" class="stat-detail">0s por pergunta</div>
                </div>
            </div>

            <button id="restart-btn" class="btn btn-primary pulse-glow" data-translate="try-again">
                Tentar Novamente 🔄
            </button>
        </div>
    </div>

    <script src="../../assets/js/logic_script.js"></script>
</body>
</html>