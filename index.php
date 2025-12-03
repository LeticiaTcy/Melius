<?php session_start(); ?>
<!DOCTYPE html>
<html>
<head>
    <title>Mellius - Sua jornada começa aqui!</title>
    <link rel="stylesheet" href="assets/css/siteprincipal.css">
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&display=swap" rel="stylesheet">
    <link href="https://fonts.googleapis.com/css2?family=Arima+Madurai:wght@400;700&display=swap" rel="stylesheet"> <!--Link para ter acesso a fonte Anima Madurai-->
    <link rel="stylesheet" href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&display=swap"> <!--Link para ter acesso a fonte Poppins-->
    <link href="https://fonts.googleapis.com/css2?family=Nunito:wght@300;400;500;600;700&display=swap" rel="stylesheet">
</head>
<body>
 <!-- Navigation -->
 <nav class="nav">
    <!--PHP Para verificar se o usuário está logado e mostrar o nome dele na tela-->
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
    <nav class="navegacao">
        <div class="container-navegacao">
            <div class="conteudo-navegacao">
                <!-- Logo -->
                <div class="logo-navegacao">
                    <div class="icone-logo-navegacao">
                        <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" class="Icone-principal">
                            <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                            <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                        </svg>
                    </div>
                    <h1 class="titulo-navegacao">Mellius</h1>
                    </div>
        <nav class="navegacao-principal">
                        <!-- Os botões foram desenvolvidos com SVG ao invés de emojis para dar um ar mais sério e tranquilo ao mesmo tempo!-->
        
                            <!--SVG do botão inicial-->
                            <button class="botao-navegacao" data-page="inicio">
                                <svg class="IconesSVG" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/>
                                    <polyline points="9,22 9,12 15,12 15,22"/>
                                </svg>
                                <span data-i18n="inicioBtn" class="btn-mellius">Início</span> <!--Colocando Id's de identificação para cada btn-->
                            </button>
        
                            <!--SVG do botão inicial-->
                            <button class="botao-navegacao" data-page="login">
                                <svg class="IconesSVG" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"/>
                                    <circle cx="12" cy="7" r="4"/>
                                </svg>
                                <span data-i18n="loginBtn" class="btn-mellius">Login</span>
                            </button>
        
                            <!--SVG do botão inicial-->
                            <button class="botao-navegacao" data-page="quizzes">
                                <svg class="IconesSVG" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                                </svg>
                                <span data-i18n="QuizzesBtn" class="btn-mellius">Quizzes</span>
                            </button>
        
                            <!--SVG do botão inicial-->
                            <button class="botao-navegacao" data-page="cronograma">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                            <line x1="16" y1="2" x2="16" y2="6"/>
                                            <line x1="8" y1="2" x2="8" y2="6"/>
                                            <line x1="3" y1="10" x2="21" y2="10"/>
                                        </svg>
                                <span data-i18n="cronoBtn" class="btn-mellius">Cronograma</span>
                            </button>
                            
                        </nav>
        
                        <!-- Controles -->
                        <div class="controles-navegacao">
                            <!-- Botão de configuração -->
                            <button id="alternar-tema" class="botao-controle-navegacao">
                                <svg id="icone-tema" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
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
        
                            <!-- Dropdown de Configurações -->
                            <div class="dropdown">
                                <button id="botao-configuracoes" class="botao-controle-navegacao">
                                    <!--Botão de config-->
                                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.8" stroke-linecap="round" stroke-linejoin="round">
                                        <!-- Círculo central -->
                                        <circle cx="12" cy="12" r="3"/>        
                                        <!-- Dentes da engrenagem -->
                                        <path d="M19.4 12a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 1 1-2.83 2.83l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 1 1-4 0v-.09a1.65 1.65 0 0 0-1-1.51 1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 1 1-2.83-2.83l.06-.06a1.65 1.65 0 0 0 .33-1.82 1.65 1.65 0 0 0-1.51-1H3a2 2 0 1 1 0-4h.09a1.65 1.65 0 0 0 1.51-1 1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 1 1 2.83-2.83l.06.06a1.65 1.65 0 0 0 1.82.33h.09a1.65 1.65 0 0 0 1-1.51V3a2 2 0 1 1 4 0v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 1 1 2.83 2.83l-.06.06a1.65 1.65 0 0 0-.33 1.82v.09a1.65 1.65 0 0 0 1.51 1H21a2 2 0 1 1 0 4h-.09a1.65 1.65 0 0 0-1.51 1z"/>
                                    </svg>                                 
                                </button>
                                <div id="dropdown-configuracoes" class="conteudo-dropdown">
                                    <div class="secao-dropdown">
                                        <p class="titulo-dropdown" data-i18n="configuracoes">Configurações</p>
                                    </div>
                                    
                                    <!-- Seleção de Idioma -->
                                    <div class="secao-dropdown">
                                        <p class="subtitulo-dropdown">
                                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                                <circle cx="12" cy="12" r="10"/>
                                                <line x1="2" y1="12" x2="22" y2="12"/>
                                                <path d="m8 12-2-5 2-5 2 5-2 5z"/>
                                                <path d="m16 12 2-5-2-5-2 5 2 5z"/>
                                            </svg>
                                            <span data-i18n="idioma">Idioma</span>
                                        </p>
                                        <button class="item-dropdown" onclick="alterarIdioma('pt')">Português</button>
                                        <button class="item-dropdown" onclick="alterarIdioma('en')">English</button>
                                        <button class="item-dropdown" onclick="alterarIdioma('es')">Español</button>
                                    </div>
        
                                    <!-- Gradiente para mudar cor de fundo -->
                                    <div class="secao-dropdown">
                                        <p class="subtitulo-dropdown" data-i18n="gradiente-fundo">Gradiente de Fundo</p>
                                        <div class="controles-gradiente">
                                            <div class="seletor-cor-gradiente">
                                                <label data-i18n="cor-inicial">Cor Inicial:</label>
                                                <input type="color" id="cor-inicial" value="#8B5CF6" onchange="aplicativo.atualizarGradientePersonalizado()">
                                            </div>
                                            <div class="seletor-cor-gradiente">
                                                <label data-i18n="cor-final">Cor Final:</label>
                                                <input type="color" id="cor-final" value="#A855F7" onchange="aplicativo.atualizarGradientePersonalizado()">
                                            </div>
                                        </div>
                                        <div class="preview-gradiente" id="preview-gradiente"></div>
                                        <div class="botoes-gradiente">
                                            <button class="botao-pequeno" onclick="aplicativo.aplicarGradientePersonalizado()" data-i18n="aplicar">Aplicar</button>
                                            <button class="botao-pequeno" onclick="aplicativo.resetarGradiente()" data-i18n="resetar">Resetar</button>
                                        </div>
                                    </div>
        
                                    <!-- Personalização de Cores -->
                                    <div class="secao-dropdown">
                                        <p class="subtitulo-dropdown" data-i18n="cores-personalizacao">Personalização de Cores</p>
                                        <div class="controles-gradiente">
                                            <div class="seletor-cor-gradiente">
                                                <label data-i18n="cor-fonte">Cor da Fonte:</label>
                                                <input type="color" id="cor-fonte" value="#2D1B69" onchange="aplicativo.atualizarCoresPersonalizadas()">
                                            </div>
                                            <div class="seletor-cor-gradiente">
                                                <label data-i18n="cor-icones">Cor dos Ícones:</label>
                                                <input type="color" id="cor-icones" value="#8B5CF6" onchange="aplicativo.atualizarCoresPersonalizadas()">
                                            </div>
                                        </div>
                                        <div class="botoes-gradiente">
                                            <button class="botao-pequeno" onclick="aplicativo.aplicarCoresPersonalizadas()" data-i18n="aplicar-cores">Aplicar Cores</button>
                                            <button class="botao-pequeno" onclick="aplicativo.resetarCores()" data-i18n="resetar-cores">Resetar Cores</button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </nav>
        </div>
    </nav>

    <!-- Main Content -->
            <!-- INÍCIO PÁGINA INICIO -->
            <section id="pagina-inicio" class="pagina-spa" style="display:none">
    <main>
        <!-- Seção Hero -->
        <section class="secao-hero">
            <div class="fundo-hero">  
                <div class="imagem-hero">

                </div>
                <div class="gradiente-hero"></div>
            </div>
            
            <div class="conteudo-hero">
                <div class="icone-inicioAlinha">    
                    <div class="icone-inicio">
                            <svg class="inicioSVG" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                                <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                            </svg>
                    </div>
                </div>
                <div class="texto-principal animacao-aparecer" data-delay="200">
                    <h1 class="titulo-mellius" data-i18n="titulo-mellius">MELLIUS</h1>
                    <p class="subtitulo-hero" data-i18n="subtitulo-hero">
                        <b> Sua jornada para melhorar começa aqui </b>
                        </p>
                    <div class="linha-decorativa"></div>
                </div>
                
                <div class="descricao-hero-home animacao-aparecer" data-i18n="descricao-hero-home" data-delay="600">
                    <p> <b>
                        Descubra um espaço seguro e acolhedor para cuidar da sua saúde mental. 
                        Com ferramentas práticas e personalizadas, o Mellius te acompanha 
                        em cada passo da sua jornada de autoconhecimento e bem-estar.
                        </b>
                    </p>
                </div>
            </div>
            
            <!-- Elementos decorativos -->
            <div class="elemento-decorativo elemento-1"></div>
            <div class="elemento-decorativo elemento-2"></div>
        </section>
        
        <!-- Seção Sobre -->
        <section class="secao-sobre">
            <div class="container-sobre">
                <div class="titulo-secao animacao-aparecer" data-delay="200">
                    <h2 data-i18n="sobre-mellius">Sobre o Mellius</h2>
                    <div class="linha-titulo"></div>
                </div>
                
                <div class="conteudo-sobre animacao-aparecer" data-delay="400">
                    <p class="paragrafo-destaque" data-i18n="paragrafo-destaque">
                        O Mellius nasceu da necessidade de tornar o cuidado com a saúde mental 
                        mais acessível, receba auxílio e ajuda para combater a demência digital e 
                        manter uma rotina mais saudável.
                    </p>
                    
                    <p class="paragrafo-secundario" data-i18n="paragrafo-secundario">
                        Aqui você encontra um ambiente seguro para desenvolver hábitos saudáveis, 
                        acompanhar seu progresso e descobrir ferramentas personalizadas 
                        que se adaptam ao seu ritmo de vida.
                    </p>
                    
                    <div class="citacao-destaque-home" data-i18n="citacao-destaque-home">
                        <p>
                            "Sua mente merece o melhor cuidado. 
                            <br>
                            Nós estamos aqui para te ajudar nessa jornada."
                        </p>
                    </div>
                </div>
            </div>
        </section>
        
        <!-- Seção Funcionalidades -->
        <section class="secao-funcionalidades">
            <div class="container-funcionalidades">
                <div class="titulo-funcionalidades">
                    <div class="animacao-aparecer" data-delay="100">
                        <h2 data-i18n="titulo-ferramentas">Suas Ferramentas</h2>
                        <div class="linha-titulo"></div>
                        <p data-i18n="subtitulo-ferramentas">
                            Descubra funcionalidades pensadas especialmente para apoiar 
                            sua jornada de crescimento pessoal.
                        </p>
                    </div>
                </div>
                
                <div class="grid-funcionalidades">
                    <!-- Card 1: Calendário -->
                    <div class="card-funcionalidade animacao-aparecer" data-delay="200">
                        <div class="icone-card">
                            <svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <h3 data-i18n="titulo-calendario-personalizado">Calendário Personalizado</h3>
                        <p data-i18n="desc-calendario-personalizado">
                            Organize sua rotina de autocuidado com lembretes inteligentes para meditação, 
                            exercícios e momentos de pausa. Acompanhe seu progresso diário e semanal.
                        </p>
                    </div>
                    
                    <!-- Card 2: Quizzes -->
                    <div class="card-funcionalidade animacao-aparecer" data-delay="400">
                        <div class="icone-card">
                            <svg width="80" height="80" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
                                <path d="M25 40 L35 50 L55 30"
                                    stroke="black"
                                    stroke-width="6"
                                    fill="none"
                                    stroke-linecap="round"
                                    stroke-linejoin="round"/>
                            </svg>

                        </div>
                        <h3 data-i18n="titulo-quizzes">Quizzes de Bem-estar</h3>
                        <p data-i18n="desc-quizzes">
                            Desafie sua mente com quizzes de raciocínio lógico e questionários de autoconhecimento. 
                            Monitore seu estado emocional e desenvolva habilidades cognitivas.
                        </p>
                    </div>
                    
                    <!-- Card 3: Lembretes -->
                    <div class="card-funcionalidade animacao-aparecer" data-delay="600">
                        <div class="icone-card">
                            <svg class="icone-svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M18 8A6 6 0 0 0 6 8c0 7-3 9-3 9h18s-3-2-3-9"></path>
                                <path d="M13.73 21a2 2 0 0 1-3.46 0"></path>
                            </svg>
                        </div>
                        <h3 data-i18n="titulo-lembretes" >Lembretes Inteligentes</h3>
                        <p data-i18n="desc-lembretes">
                            Receba notificações personalizadas para manter seus hábitos saudáveis. 
                            Alarmes suaves para hidratação, pausas mentais e práticas de mindfulness.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    </main>
    
        
        </section>
        <!-- FIM PÁGINA INICIO -->

        <!-- INÍCIO PÁGINA LOGIN -->
        <section id="pagina-login" class="pagina-spa" style="display:none">
            <div class="container">
          <!-- Padrão de fundo decorativo -->
          <div class="background-pattern">
              <div class="floating-circle circle-1"></div>
              <div class="floating-circle circle-2"></div>
              <div class="floating-circle circle-3"></div>
          </div>
  
          <!-- Cartão de Login -->
          <div class="login-wrapper">
              <div class="login-card">
                  <!-- Cabeçalho com ícone -->
                  <div class="header">
                      <div class="icon-container-align">
                          <div class="icon-container">
                              <svg class="brain-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"/>
                                  <path d="M12 5a3 3 0 1 1 5.997.125 4 4 0 0 1 2.526 5.77 4 4 0 0 1-.556 6.588A4 4 0 1 1 12 18Z"/>
                                  <path d="M15 13a4.5 4.5 0 0 1-3-4 4.5 4.5 0 0 1-3 4"/>
                                  <path d="M17.599 6.5a3 3 0 0 0 .399-1.375"/>
                                  <path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"/>
                                  <path d="M3.477 10.896a4 4 0 0 1 .585-.396"/>
                                  <path d="M19.938 10.5a4 4 0 0 1 .585.396"/>
                                  <path d="M6 18a4 4 0 0 1-1.967-.516"/>
                                  <path d="M19.967 17.484A4 4 0 0 1 18 18"/>
                              </svg>
                          </div>
                      </div>
                      <h2 class="title" data-i18n="bem-vindo-login">Bem-vindo</h2>
                      <p class="subtitle" data-i18n="subtitle-login">Cuide da sua mente</p>
                  </div>
  
                  <!-- Formulário -->
                      <!-- Botões -->
                      <div class="buttons-group">
                          <a class="btn-primary" id="btnEntrar" href="public/login.php" target="_self">
                              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7Z"/>
                              </svg>
                              <span class="btn-texto" data-i18n="btn-entrar">Entrar</span>
                            </a>
  
                          <a class="btn-secondary" id="btnRegistro" href="public/register.php" target="_self">
                              <svg class="btn-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                  <path d="M9.937 15.5A2 2 0 0 0 8.5 14.063l-6.135-1.582a.5.5 0 0 1 0-.962L8.5 9.936A2 2 0 0 0 9.937 8.5l1.582-6.135a.5.5 0 0 1 .963 0L14.063 8.5A2 2 0 0 0 15.5 9.937l6.135 1.582a.5.5 0 0 1 0 .962L15.5 14.063a2 2 0 0 0-1.437 1.437l-1.582 6.135a.5.5 0 0 1-.963 0L9.937 15.5Z"/>
                              </svg>
                              <span class="btn-texto" data-i18n="btn-registrar">Registre-se</span>
                            </a>
                      </div>
  
                  <!-- Rodapé -->
                  <div class="footer">
                      <p data-i18n="footer-login">
                          <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                          </svg>
                          Sua jornada de bem-estar começa aqui
                          <svg class="footer-icon" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                              <path d="M11 20A7 7 0 0 1 9.8 6.1C15.5 5 17 4.48 19 2c1 2 2 4.18 2 8 0 5.5-4.78 10-10 10Z"/>
                              <path d="M2 21c0-3 1.85-5.36 5.08-6C9.5 14.52 12 13 13 12"/>
                          </svg>
                      </p>
                  </div>
              </div>
  
              <!-- Efeito de brilho -->
              <div class="glow-effect"></div>
          </div>
      </div>
  </section>       
  <!-- FIM PÁGINA LOGIN -->
        
        <!-- INÍCIO PÁGINA QUIZZES -->

        <!--Icone SVG quebra-cabeça-->
        <section id="pagina-quizzes" class="pagina-spa" style="display:none">
          <div class="app">
        <!-- Header -->
        <header class="header-quizzes">
            <!-- Cabeçalho com ícone -->
        <div class="header">
            <div class="icon-container-align">
                <div class="icon-container-quizPage">
                    <svg class="quebra-icon" viewBox="0 0 64 64" fill="none" stroke="currentColor" stroke-width="2">

                           <path d="M 46.208 33 c 1.7325 0 3.3243 0.795898 4.3672 2.1836 c 0.189499 0.251999 0.485401 0.399399 0.799801 0.399399 h 3.875 c 0.552811 0 1 -0.447201 1 -1 V 16.5 c 0 -0.5527 -0.447189 -1 -1 -1 H 36.875 v -2.3974 c 1.6475 -1.4199 2.583 -3.4492 2.583 -5.6446 C 39.458 3.3457 36.1123 0 32 0 c -4.1133 0 -7.459 3.3457 -7.459 7.458 c 0 2.1954 0.9356 4.2256 2.584 5.6456 V 15.5 h -18.375 c -0.5527 0 -1 0.4473 -1 1 v 18.083 c 0 0.552799 0.4473 1 1 1 h 3.875 c 0.3145 0 0.610399 -0.148399 0.799811 -0.399399 C 14.4668 33.7959 16.0586 33 17.791 33 C 20.8008 33 23.25 35.4483 23.25 38.458 c 0 3.0098 -2.44919 5.4581 -5.459 5.4581 c -1.7324 0 -3.32419 -0.795898 -4.36619 -2.1836 c -0.189412 -0.251 -0.485312 -0.399498 -0.799811 -0.399498 h -3.875 c -0.5527 0 -1 0.4473 -1 1 V 63 c 0 0.552799 0.4473 1 1 1 h 19.375 c 0.552813 0 1 -0.447201 1 -1 v -2.5839 c 0 -0.314499 -0.148399 -0.610401 -0.399401 -0.7999 c -1.3887 -1.0419 -2.1846 -2.6337 -2.1846 -4.3662 c 0 -3.0097 2.4493 -5.4589 5.459 -5.4589 c 3.00981 0 5.458 2.4492 5.458 5.4589 c 0 1.7325 -0.795898 3.3243 -2.1836 4.3662 C 35.0225 59.8057 34.875 60.1016 34.875 60.4161 V 63 c 0 0.552799 0.4473 1 1 1 H 55.25 c 0.552811 0 1 -0.447201 1 -1 V 42.333 c 0 -0.5527 -0.447189 -1 -1 -1 h -3.875 c -0.3144 0 -0.610302 0.147499 -0.799801 0.399498 c -1.0429 1.3877 -2.6347 2.1836 -4.3672 2.1836 c -3.0097 0 -5.458 -2.4483 -5.458 -5.4581 C 40.75 35.4483 43.1983 33 46.208 33 Z M 38.75 38.458 c 0 4.1123 3.3457 7.4581 7.458 7.4581 c 2.1963 0 4.2256 -0.9356 5.6455 -2.5831 H 54.25 V 62 H 36.875 v -1.1054 c 1.6475 -1.419 2.583 -3.4493 2.583 -5.6446 c 0 -4.1132 -3.3457 -7.4589 -7.458 -7.4589 c -4.1133 0 -7.459 3.3457 -7.459 7.4589 c 0 2.1953 0.9356 4.2256 2.584 5.6446 V 62 h -17.375 V 43.333 h 2.3965 c 1.419 1.6475 3.44831 2.5831 5.6445 2.5831 c 4.1133 0 7.459 -3.3458 7.459 -7.4581 S 21.9043 31 17.791 31 c -2.19619 0 -4.2255 0.9356 -5.6445 2.583 H 9.75 V 17.5 h 18.375 c 0.552813 0 1 -0.447201 1 -1 v -3.875 c 0 -0.3144 -0.1474 -0.6103 -0.399401 -0.7998 c -1.3887 -1.0429 -2.1846 -2.6347 -2.1846 -4.3672 C 26.541 4.4483 28.9903 2 32 2 c 3.00981 0 5.458 2.4483 5.458 5.458 c 0 1.7325 -0.795898 3.3243 -2.1836 4.3682 C 35.0225 12.0147 34.875 12.3106 34.875 12.625 V 16.5 c 0 0.552799 0.4473 1 1 1 H 54.25 v 16.083 h -2.3965 C 50.4336 31.9356 48.4043 31 46.208 31 C 42.0957 31 38.75 34.3457 38.75 38.458 Z"
                            />
                            
                    </svg>
                </div>
            </div>

            <div class="container-quizzes">
                <h1 class="header-title">Quizzes Mellius</h1>
                <p class="header-description">
                    Explore diferentes tipos de desafios pensados especialmente para estimular sua mente de forma acolhedora e acessível.
                </p>
            </div>
        </header>

        <!-- Main Content -->
        <main class="main-quizzes">
            <div class="container-quizzes">
                <!-- Quizzes Grid -->
                <div class="quizzes-grid">
                    <!-- Quiz Card: Lógica Matemática -->
                    <div class="quiz-card math-card" data-quiz-type="mathematical">
                        <div class="card-content">
                            <div class="icon-container-quizzes">
                                <div class="icon-wrapper">
                                    <svg class="icon math-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                        <rect width="16" height="10" x="2" y="3" rx="2"/>
                                        <path d="m9 9 5 0"/>
                                        <path d="m9 15 5 0"/>
                                        <path d="M17 3v18"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div class="card-text">
                                <h3 class="card-title">Lógica Matemática</h3>
                                <p class="card-description">
                                    Exercite sua mente com desafios matemáticos e problemas lógicos que estimulam o raciocínio numérico.
                                </p>
                            </div>
                            
                            <button class="quiz-button math-button" onclick="window.open('public/quiz/math_quiz.php', '_self')">
                                Iniciar Quiz
                            </button>
                        </div>
                    </div>

                    <!-- Quiz Card: Lógica Normal -->
                    <div class="quiz-card logic-card" data-quiz-type="logic">
                        <div class="card-content">
                            <div class="icon-container-quizzes">
                                <div class="icon-wrapper">
                                    <svg class="icon logic-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path d="M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2z"/>
                                        <path d="m9 9 5 5"/>
                                        <path d="m14 9-5 5"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div class="card-text">
                                <h3 class="card-title">Lógica Normal</h3>
                                <p class="card-description">
                                    Resolva quebra-cabeças e problemas de raciocínio que desenvolvem o pensamento crítico e analítico.
                                </p>
                            </div>
                            
                            <button class="quiz-button logic-button" onclick="window.open('public/quiz/logic_quiz.php', '_self')">
                                Iniciar Quiz
                            </button>
                        </div>
                    </div>

                    <!-- Quiz Card: Bem-estar -->
                    <div class="quiz-card wellness-card" data-quiz-type="wellness">
                        <div class="card-content">
                            <div class="icon-container-quizzes">
                                <div class="icon-wrapper">
                                    <svg class="icon wellness-icon" width="48" height="48" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                                        <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.29 1.51 4.04 3 5.5l7 7 7-7Z"/>
                                    </svg>
                                </div>
                            </div>
                            
                            <div class="card-text">
                                <h3 class="card-title">Bem-estar</h3>
                                <p class="card-description">
                                    Descubra práticas e conhecimentos para cuidar da sua saúde mental e desenvolver hábitos saudáveis.
                                </p>
                            </div>
                            
                            <button class="quiz-button wellness-button" onclick="window.open('public/quiz/quizzBemEstar.php', '_self')">
                                Iniciar Quiz
                            </button>
                        </div>
                    </div>
                </div>

            </div>
        </main>
    </div>
        </section>
        <!-- FIM PÁGINA QUIZZES -->


    <!--INICIO DA PÁGINA CRONOGRAMA-->
        <!-- Página de cronograma -->
    <main>
        <section id="pagina-cronograma" class="pagina-spa">
            <!-- Seção página principal (heroi, recursos, calendário, lembretes) -->
            <section class="heroi">
                <div class="container-heroi">
                    <div class="conteudo-heroi">
                        <div class="texto-heroi">
                            <h1 class="titulo-heroi" data-i18n="bem-vindo">Bem-vindo ao Mellius</h1>
                            <p class="subtitulo-heroi" data-i18n="subtitulo">Sua jornada de cuidado com a saúde mental começa aqui</p>
                        </div>
                        
                        <p class="descricao-heroi" data-i18n="descricao">Organize sua rotina, acompanhe seu bem-estar e cuide de si mesmo com carinho e atenção.</p>

                        <div class="icone-heroi">
                            <div class="fundo-icone-heroi">
                                <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M19 14c1.49-1.46 3-3.27 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.23 1.51 4.04 3 5.5l7 7Z"/>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <!-- Seção de Recursos -->
            <section class="recursos">
                <div class="container-recursos">
                    <div class="grade-recursos">
                        <div class="cartao-recurso">
                            <div class="icone-recurso violeta">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                                    <line x1="16" y1="2" x2="16" y2="6"/>
                                    <line x1="8" y1="2" x2="8" y2="6"/>
                                    <line x1="3" y1="10" x2="21" y2="10"/>
                                </svg>
                            </div>
                            <h3 class="titulo-recurso" data-i18n="titulo-calendario">Calendário Personalizado</h3>
                            <p class="descricao-recurso" data-i18n="desc-calendario">Organize compromissos e atividades de autocuidado</p>
                        </div>

                        <div class="cartao-recurso">
                            <div class="icone-recurso violeta">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/>
                                    <path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/>
                                </svg>
                            </div>
                            <h3 class="titulo-recurso" data-i18n="titulo-bem-estar">Foco no Bem-estar</h3>
                            <p class="descricao-recurso" data-i18n="desc-bem-estar">Ferramentas dedicadas à sua saúde mental</p>
                        </div>

                        <div class="cartao-recurso">
                            <div class="icone-recurso violeta">
                                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                    <circle cx="12" cy="12" r="10"/>
                                    <circle cx="12" cy="12" r="6"/>
                                    <circle cx="12" cy="12" r="2"/>
                                </svg>
                            </div>
                            <h3 class="titulo-recurso" data-i18n="titulo-acompanhamento">Acompanhamento Diário</h3>
                            <p class="descricao-recurso" data-i18n="desc-acompanhamento">Monitore seu progresso e crescimento pessoal</p>
                        </div>
                    </div>
                    
                    <!-- Componente do Calendário -->
                    <div class="envoltorio-calendario">
                        <div id="calendario-bem-estar" class="container-calendario">
                            <!-- O conteúdo do calendário será gerado pelo JavaScript -->
                        </div>

                        <!-- Seção de Lembretes -->
                        <div class="container-lembretes">
                            <div class="cabecalho-lembretes">
                                <h3 class="titulo-lembretes" data-i18n="meus-lembretes">Meus Lembretes</h3>
                                <button class="botao botao-primario" onclick="aplicativo.abrirModalLembrete()" data-i18n="novo-lembrete">Novo Lembrete</button>
                            </div>
                            <div id="lista-lembretes" class="lista-lembretes">
                                <!-- Os lembretes serão gerados pelo JavaScript -->
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </section>


    <!-- Modal de Evento -->
    <div id="modal-evento" class="modal">
        <div class="conteudo-modal">
            <div class="cabecalho-modal">
                <h3 data-i18n="adicionar-evento">Adicionar Evento</h3>
                <button id="fechar-modal" class="botao-fechar">&times;</button>
            </div>
            <div class="corpo-modal">
                <div class="grupo-formulario">
                    <label data-i18n="titulo-evento">Título do Evento</label>
                    <input type="text" id="titulo-evento" placeholder="">
                </div>
                <div class="grupo-formulario">
                    <label data-i18n="descricao-evento">Descrição</label>
                    <textarea id="descricao-evento" rows="3" placeholder=""></textarea>
                </div>
                <div class="grupo-formulario">
                    <label data-i18n="horario-lembrete">Horário do Lembrete</label>
                    <input type="time" id="horario-lembrete" placeholder="">
                </div>
                <div class="botoes-modal">
                    <button id="excluir-evento" class="botao-perigo" data-i18n="excluir">Excluir</button>
                    <button id="salvar-evento" class="botao-primario" data-i18n="salvar">Salvar</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Modal de Lembrete -->
    <div id="modal-lembrete" class="modal">
        <div class="conteudo-modal">
            <div class="cabecalho-modal">
                <h3 data-i18n="novo-lembrete">Novo Lembrete</h3>
                <button class="botao-fechar" onclick="aplicativo.fecharModalLembrete()">&times;</button>
            </div>
            <div class="corpo-modal">
                <div class="grupo-formulario">
                    <label data-i18n="nome-lembrete">Nome do Lembrete</label>
                    <input type="text" id="nome-lembrete" placeholder="">
                </div>
                <div class="grupo-formulario">
                    <label data-i18n="data-lembrete">Data</label>
                    <input type="date" id="data-lembrete" placeholder="">
                </div>
                <div class="grupo-formulario">
                    <label data-i18n="hora-lembrete">Horário</label>
                    <input type="time" id="hora-lembrete" placeholder="">
                </div>
                <div class="botoes-modal">
                    <button class="botao" onclick="aplicativo.fecharModalLembrete()" data-i18n="cancelar">Cancelar</button>
                    <button class="botao-primario" onclick="aplicativo.salvarLembrete()" data-i18n="salvar-lembrete">Salvar Lembrete</button>
                </div>
            </div>
        </div>
    </div>

    <!-- Pop-up de Notificação -->
    <div id="popup-notificacao" class="popup-notificacao">
        <div class="conteudo-popup">
            <div class="icone-popup">
                <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                    <path d="M6 8a6 6 0 0 1 12 0c0 7 3 9 3 9H3s3-2 3-9"/>
                    <path d="M10.3 21a1.94 1.94 0 0 0 3.4 0"/>
                </svg>
            </div>
            <div class="texto-popup">
                <h4 id="titulo-popup"></h4>
                <p id="mensagem-popup"></p>
            </div>
            <button class="botao-fechar-popup" onclick="aplicativo.fecharPopupNotificacao()">&times;</button>
        </div>
    </div>
    <!--FIM DO CRONOGRAMA-->

        <!-- Rodapé 4 -->
        <footer class="rodape">
            <div class="animacao-aparecer" data-delay="200">
                <p data-i18n="rodape">© 2024 Mellius - Cuidando da sua mente com carinho</p>
            </div>
        </footer>
    </main>
    <!-- Scripts -->
    <script src="assets/js/siteprincipal.js"></script>
</body>
</html>
</body>
</html>
