<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <title>Seja Bem-Vindo ao Melius!!</title>
    <link rel="stylesheet" href="assets/css/style.css">
</head>
<body>
 <!-- Navigation -->
 <nav class="nav">
        <div class="nav-container">
            <div class="nav-content">
                <!-- Logo -->
                <div class="nav-logo">
                    <div class="nav-logo-icon">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                        </svg>
                    </div>
                    <h1 class="nav-title">Mellius</h1>
                </div>

                <!-- Navigation Menu -->
                <nav class="main-nav">
					<?php
						if(isset($_SESSION['valid'])) {			
						?>
									
							Seja Bem-Vindo <?php echo htmlspecialchars($_SESSION['name']) ?> !<br/>
							<br/>
							<?php if (isset($_SESSION['role']) && $_SESSION['role'] === 'admin'): ?>
								<a href='admin/users.php'>Ver usuários</a><br/>
							<?php endif; ?>
							<br/><br/>
						<?php	
						}
    				?>
                    <button class="nav-btn">Jogos</button>
                    <button class="nav-btn">Quizzes</button>
                    <a href='public/login.php'><button class="nav-btn">Login</button></a>
					<a href='public/register.php'><button class="nav-btn">Cadastrar</button></a>
                </nav>

                <!-- Controls -->
                <div class="nav-controls">
                    <!-- Dark Mode Toggle -->
                    <button id="theme-toggle" class="nav-control-btn">
                        <svg id="theme-icon" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <circle cx="12" cy="12" r="5"/>
                            <line x1="12" y1="1" x2="12" y2="3"/>
                            <line x1="12" y1="21" x2="12" y2="23"/>
                            <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                            <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                            <line x1="1" y1="12" x2="3" y2="12"/>
                            <line x1="21" y1="12" x2="23" y2="12"/>
                            <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                            <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
                        </svg>
                    </button>

                    <!-- Settings Dropdown -->
                    <div class="dropdown">
                        <button id="settings-btn" class="nav-control-btn">
                            <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="3"/>
                                <path d="m12 1 1.45 3.43L17 3.5 15.5 7l3.43 1L18 12l.93 3.43L15.5 17 17 20.5 13.45 19.93 12 23l-1.45-3.43L7 20.5 8.5 17l-3.43-1L6 12l-.93-3.43L8.5 7 7 3.5l3.55.93L12 1z"/>
                            </svg>
                        </button>
                        <div id="settings-dropdown" class="dropdown-content">
                            <div class="dropdown-section">
                                <p class="dropdown-title" data-i18n="settings">Configurações</p>
                            </div>
                            
                            <!-- Language Selection -->
                            <div class="dropdown-section">
                                <p class="dropdown-subtitle">
                                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                        <circle cx="12" cy="12" r="10"/>
                                        <line x1="2" y1="12" x2="22" y2="12"/>
                                        <path d="m8 12-2-5 2-5 2 5-2 5z"/>
                                        <path d="m16 12 2-5-2-5-2 5 2 5z"/>
                                    </svg>
                                    <span data-i18n="language">Idioma</span>
                                </p>
                                <button class="dropdown-item" onclick="changeLanguage('pt')">Português</button>
                                <button class="dropdown-item" onclick="changeLanguage('en')">English</button>
                                <button class="dropdown-item" onclick="changeLanguage('es')">Español</button>
                            </div>

                            <!-- Theme Colors -->
                            <div class="dropdown-section">
                                <p class="dropdown-subtitle" data-i18n="theme-color">Cor do Tema</p>
                                <div class="color-buttons">
                                    <button class="color-btn mint" onclick="changeThemeColor('mint')" title="Mint"></button>
                                    <button class="color-btn lavender" onclick="changeThemeColor('lavender')" title="Lavender"></button>
                                    <button class="color-btn sky" onclick="changeThemeColor('sky')" title="Sky"></button>
                                    <button class="color-btn warm" onclick="changeThemeColor('warm')" title="Warm"></button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </nav>

    <!-- Main Content -->
    <main>
        <!-- Hero Section -->
        <section class="hero">
            <div class="hero-container">
                <div class="hero-content">
                    <div class="hero-text">
                        <h1 class="hero-title" data-i18n="welcome">Bem-vindo ao Mellius</h1>
                        <p class="hero-subtitle" data-i18n="subtitle">Sua jornada de cuidado com a saúde mental começa aqui</p>
                    </div>
                    
                    <p class="hero-description" data-i18n="description">Organize sua rotina, acompanhe seu bem-estar e cuide de si mesmo com carinho e atenção.</p>

                    <div class="hero-icon">
                        <div class="hero-icon-bg">
                            <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M19 14c1.49-1.46 3-3.27 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.23 1.51 4.04 3 5.5l7 7Z"/>
                            </svg>
                        </div>
                    </div>
                </div>
            </div>
        </section>

        <!-- Features Section -->
        <section class="features">
            <div class="features-container">
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon mint">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                <line x1="16" y1="2" x2="16" y2="6"/>
                                <line x1="8" y1="2" x2="8" y2="6"/>
                                <line x1="3" y1="10" x2="21" y2="10"/>
                            </svg>
                        </div>
                        <h3 class="feature-title" data-i18n="calendar-title">Calendário Personalizado</h3>
                        <p class="feature-description" data-i18n="calendar-desc">Organize compromissos e atividades de autocuidado</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon lavender">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                            </svg>
                        </div>
                        <h3 class="feature-title" data-i18n="wellness-title">Foco no Bem-estar</h3>
                        <p class="feature-description" data-i18n="wellness-desc">Ferramentas dedicadas à sua saúde mental</p>
                    </div>

                    <div class="feature-card">
                        <div class="feature-icon sky">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <circle cx="12" cy="12" r="10"/>
                                <circle cx="12" cy="12" r="6"/>
                                <circle cx="12" cy="12" r="2"/>
                            </svg>
                        </div>
                        <h3 class="feature-title" data-i18n="tracking-title">Acompanhamento Diário</h3>
                        <p class="feature-description" data-i18n="tracking-desc">Monitore seu progresso e crescimento pessoal</p>
                    </div>
                </div>
                
                <!-- Calendar Component -->
                <div class="calendar-wrapper">
                    <div id="wellness-calendar" class="calendar-container">
                        <!-- Calendar content will be generated by JavaScript -->
                    </div>
                </div>
            </div>
        </section>
    </main>

    <!-- Event Modal -->
    <div id="event-modal" class="modal">
        <div class="modal-content">
            <div class="modal-header">
                <h3 data-i18n="add-event">Adicionar Evento</h3>
                <button id="close-modal" class="close-btn">&times;</button>
            </div>
            <div class="modal-body">
                <div class="form-group">
                    <label data-i18n="event-title">Título do Evento</label>
                    <input type="text" id="event-title" placeholder="">
                </div>
                <div class="form-group">
                    <label data-i18n="event-description">Descrição</label>
                    <textarea id="event-description" rows="3" placeholder=""></textarea>
                </div>
                <div class="form-group">
                    <label data-i18n="reminder-time">Horário do Lembrete</label>
                    <input type="time" id="reminder-time" placeholder="">
                </div>
                <div class="modal-buttons">
                    <button id="delete-event" class="btn-danger" data-i18n="delete">Excluir</button>
                    <button id="save-event" class="btn-primary" data-i18n="save">Salvar</button>
                </div>
            </div>
        </div>
    </div>
    <script src="assets/js/calendar_quiz.js"></script>
</body>
</html>
</body>
</html>
