// Mellius - Aplicativo de Saúde Mental e Bem-estar
// Implementação JavaScript Vanilla

//JS FEITO PARA PÁGINA DE CRONOGRAMA
class AplicativoMellius {
    constructor() {
        this.idiomaAtual = 'pt';
        this.temaAtual = 'claro';
        this.corTemaAtual = 'roxo';
        this.dataAtual = new Date();
        this.eventos = [];
        this.lembretes = [];
        this.adesivoArrastado = null;
        this.dataSelecionada = null;
        this.eventoEditando = null;
        this.intervalosNotificacao = [];
        
        this.adesivosDisponiveis = ['🌱', '💜', '🌸', '⭐', '🌙', '☀️', '🎯', '📝', '💭', '🌈'];
        
        this.textos = {
            pt: {
                configuracoes: 'Configurações',
                idioma: 'Idioma',
                'gradiente-fundo': 'Gradiente de Fundo',
                'cores-personalizacao': 'Personalização de Cores',
                'cor-inicial': 'Cor Inicial',
                'cor-final': 'Cor Final',
                'cor-fonte': 'Cor da Fonte',
                'cor-icones': 'Cor dos Ícones',
                aplicar: 'Aplicar',
                resetar: 'Resetar',
                'aplicar-cores': 'Aplicar Cores',
                'resetar-cores': 'Resetar Cores',
                'horario-lembrete': 'Horário do Lembrete',
                'bem-vindo': 'Bem-vindo ao Mellius',
                subtitulo: 'Sua jornada de cuidado com a saúde mental começa aqui',
                descricao: 'Organize sua rotina, acompanhe seu bem-estar e cuide de si mesmo com carinho e atenção.',
                'pagina-inicial': '🏠 Página Inicial',
                'login-nav': '👤 Login',
                'dark-mode': 'Dark Mode',
                'quizzes-nav': '📝 Quizzes',
                'jogos-nav': '🎮 Jogos',
                'acessar-calendario': '📅 Acessar Calendário',
                'titulo-calendario': 'Calendário Personalizado',
                'desc-calendario': 'Organize compromissos e atividades de autocuidado',
                'titulo-bem-estar': 'Foco no Bem-estar',
                'desc-bem-estar': 'Ferramentas dedicadas à sua saúde mental',
                'titulo-acompanhamento': 'Acompanhamento Diário',
                'desc-acompanhamento': 'Monitore seu progresso e crescimento pessoal',
                calendario: 'Calendário de Bem-estar',
                editar: 'Editar',
                salvar: 'Salvar',
                excluir: 'Excluir',
                'adicionar-evento': 'Adicionar Evento',
                'titulo-evento': 'Título do Evento',
                'descricao-evento': 'Descrição',
                adesivos: 'Adesivos',
                'arrastar-adesivo': 'Arraste os adesivos para o calendário',
                imprimir: 'Imprimir',
                'meus-lembretes': 'Meus Lembretes',
                'novo-lembrete': 'Novo Lembrete',
                'nome-lembrete': 'Nome do Lembrete',
                'data-lembrete': 'Data',
                'hora-lembrete': 'Horário',
                'salvar-lembrete': 'Salvar Lembrete',
                'editar-lembrete': 'Editar',
                'excluir-lembrete': 'Excluir',
                cancelar: 'Cancelar',
                'lembrete-ativo': 'Lembrete!',
                'chegou-hora': 'Chegou a hora do seu lembrete',
                //Botões da parte Nav do Mellius
                'inicioBtn':'Inicio',
                'loginBtn':'Login',
                'QuizzesBtn':'Quizzes',
                'cronoBtn':'Cronograma',
                //Outras paginas
                'titulo-mellius':'Mellius',
                'subtitulo-hero':'Sua jornada para melhorar começa aqui',
                'descricao-hero':'Descubra um espaço seguro e acolhedor para cuidar da sua saúde mental. Com ferramentas práticas e personalizadas, o Mellius te acompanha em cada passo da sua jornada para combater a demência digital e autoconhecimento da sua mente',
                'sobre-mellius':'Sobre o Mellius',
                'paragrafo-destaque':'O Mellius nasceu da necessidade de tornar o cuidado com a saúde mental mais acessível, prático e efetivo. Nossa plataforma te auxilia para manter melhor uma rotina e ajudar o seu fortalecimento psíquico.',
                'paragrafo-secundario':'Aqui você encontra um ambiente seguro para desenvolver hábitos saudáveis, acompanhar seu progresso psíquico e descobrir ferramentas personalizadas que se adaptam ao seu ritmo de vida.',
                'citacao-destaque':'"Sua mente merece o melhor cuidado. \nNós estamos aqui para te ajudar nessa jornada."',
                'titulo-ferramentas':'Suas Ferramentas',
                'subtitulo-ferramentas':'Descubra funcionalidades pensadas especialmente para apoiar sua jornada de crescimento pessoal e saúde mental.',
                'titulo-calendario-personalizado':'Calendário Personalizado',
                'desc-calendario-personalizado':'Organize sua rotina com lembretes, quizzes para saber como você está e momentos de pausa. Acompanhe seu progresso diário e semanal.',
                'titulo-quizzes':'Quizzes de Bem-estar',
                'desc-quizzes':'Desafie sua mente com quizzes de raciocínio lógico e questionários de autoconhecimento. Monitore seu estado emocional e desenvolva habilidades cognitivas.',
                'titulo-lembretes':'Lembretes Inteligentes',
                'desc-lembretes':'Receba notificações personalizadas para manter seus hábitos saudáveis. Alarmes suaves para hidratação, pausas mentais e práticas de mindfulness.',
                'rodape':'© 2024 Mellius - Cuidando da sua mente com carinho <Criado por> Giulia e Leticia 2025 </>',
                'bem-vindo-login':'Bem-vindo',
                'subtitle-login':'Cuide da sua mente',
                'btn-entrar':'Entrar',
                'btn-registrar':'Registre-se',
                'footer-login':'Sua jornada de bem-estar começa aqui',
                'titulo-quizzes-pagina':'Quizzes',
                'desc-quizzes-pagina':'Aqui você poderá responder quizzes sobre saúde mental e bem-estar.',
            },
            en: {
                configuracoes: 'Settings',
                idioma: 'Language',
                'gradiente-fundo': 'Background Gradient',
                'cores-personalizacao': 'Color Customization',
                'cor-inicial': 'Start Color',
                'cor-final': 'End Color',
                'cor-fonte': 'Text Color',
                'cor-icones': 'Icons Color',
                aplicar: 'Apply',
                resetar: 'Reset',
                'aplicar-cores': 'Apply Colors',
                'resetar-cores': 'Reset Colors',
                'horario-lembrete': 'Reminder Time',
                'bem-vindo': 'Welcome to Mellius',
                subtitulo: 'Your mental health care journey starts here',
                descricao: 'Organize your routine, track your well-being, and take care of yourself with love and attention.',
                'pagina-inicial': '🏠 Home',
                'login-nav': '👤 Login',
                'dark-mode': 'Dark Mode',
                'quizzes-nav': '📝 Quizzes',
                'jogos-nav': '🎮 Games',
                'acessar-calendario': '📅 Access Calendar',
                'titulo-calendario': 'Custom Calendar',
                'desc-calendario': 'Organize appointments and self-care activities',
                'titulo-bem-estar': 'Wellness Focus',
                'desc-bem-estar': 'Tools dedicated to your mental health',
                'titulo-acompanhamento': 'Daily Tracking',
                'desc-acompanhamento': 'Monitor your progress and personal growth',
                calendario: 'Wellness Calendar',
                editar: 'Edit',
                salvar: 'Save',
                excluir: 'Delete',
                'adicionar-evento': 'Add Event',
                'titulo-evento': 'Event Title',
                'descricao-evento': 'Description',
                adesivos: 'Stickers',
                'arrastar-adesivo': 'Drag stickers to calendar',
                imprimir: 'Print',
                'meus-lembretes': 'My Reminders',
                'novo-lembrete': 'New Reminder',
                'nome-lembrete': 'Reminder Name',
                'data-lembrete': 'Date',
                'hora-lembrete': 'Time',
                'salvar-lembrete': 'Save Reminder',
                'editar-lembrete': 'Edit',
                'excluir-lembrete': 'Delete',
                cancelar: 'Cancel',
                'lembrete-ativo': 'Reminder!',
                'chegou-hora': 'Its time for your reminder',
                //botões da Nav Mellius (em inglês)
                'inicioBtn':'Home',
                'loginBtn':'Login',
                'quizzesBtn':'Quiz',
                'cronoBtn':'Calendar',
                //outras páginas tradução para ingles
                 //Outras paginas
                'titulo-mellius':'Mellius',
                'subtitulo-hero':'Your mental well-being journey begins here',
                'descricao-hero':'Discover a safe and welcoming space to take care of your mental health. With practical and personalized tools, Mellius accompanies you every step of your journey of self-discovery and well-being.',
                'sobre-mellius':'About Mellius',
                'paragrafo-destaque':'Mellius was born out of the need to make mental health care more accessible, practical, and effective. Our platform combines modern technology with proven well-being practices.',
                'paragrafo-secundario':'Here you will find a safe environment to develop healthy habits, track your emotional progress, and discover personalized tools that adapt to your lifestyle.',
                'citacao-destaque':'"Your mind deserves the best care. \nWe are here to help you on this journey."',
                'titulo-ferramentas':'Your Well-being Tools',
                'subtitulo-ferramentas':'Discover features designed especially to support your journey of personal growth and mental health.',
                'titulo-calendario-personalizado':'Personalized Calendar',
                'desc-calendario-personalizado':'Organize your self-care routine with smart reminders for meditation, exercise, and moments of rest. Track your daily and weekly progress.',
                'titulo-quizzes':'Well-being Quizzes',
                'desc-quizzes':'Challenge your mind with logic quizzes and self-discovery questionnaires. Monitor your emotional state and develop cognitive skills.',
                'titulo-lembretes':'Smart Reminders',
                'desc-lembretes':'Receive personalized notifications to maintain your healthy habits. Gentle alarms for hydration, mental breaks, and mindfulness practices.',
                'rodape':'© 2024 Mellius - Caring for your mind with love <Created by> Giulia and Leticia 2025 </>',
                'bem-vindo-login':'Welcome',
                'subtitle-login':'Take care of your mind',
                'btn-entrar':'Log in',
                'btn-registrar':'Sign up',
                'footer-login':'Your well-being journey begins here',
                'titulo-quizzes-pagina':'Quizzes',
                'desc-quizzes-pagina':'Here you can take quizzes about mental health and well-being.',
            },
            es: {
                configuracoes: 'Configuración',
                idioma: 'Idioma',
                'gradiente-fundo': 'Gradiente de Fondo',
                'cores-personalizacao': 'Personalización de Colores',
                'cor-inicial': 'Color Inicial',
                'cor-final': 'Color Final',
                'cor-fonte': 'Color del Texto',
                'cor-icones': 'Color de los Íconos',
                aplicar: 'Aplicar',
                resetar: 'Restablecer',
                'aplicar-cores': 'Aplicar Colores',
                'resetar-cores': 'Restablecer Colores',
                'horario-lembrete': 'Hora del Recordatorio',
                'bem-vindo': 'Bienvenido a Mellius',
                subtitulo: 'Tu viaje de cuidado de la salud mental comienza aquí',
                descricao: 'Organiza tu rutina, monitorea tu bienestar y cuídate con amor y atención.',
                'pagina-inicial': '🏠 Inicio',
                'login-nav': '👤 Login',
                'dark-mode': 'Modo Oscuro',
                'quizzes-nav': '📝 Cuestionarios',
                'jogos-nav': '🎮 Juegos',
                'acessar-calendario': '📅 Acceder al Calendario',
                'titulo-calendario': 'Calendario Personalizado',
                'desc-calendario': 'Organiza citas y actividades de autocuidado',
                'titulo-bem-estar': 'Enfoque en Bienestar',
                'desc-bem-estar': 'Herramientas dedicadas a tu salud mental',
                'titulo-acompanhamento': 'Seguimiento Diario',
                'desc-acompanhamento': 'Monitorea tu progreso y crecimiento personal',
                calendario: 'Calendario de Bienestar',
                editar: 'Editar',
                salvar: 'Guardar',
                excluir: 'Eliminar',
                'adicionar-evento': 'Agregar Evento',
                'titulo-evento': 'Título del Evento',
                'descricao-evento': 'Descripción',
                adesivos: 'Pegatinas',
                'arrastar-adesivo': 'Arrastra las pegatinas al calendario',
                imprimir: 'Imprimir',
                'meus-lembretes': 'Mis Recordatorios',
                'novo-lembrete': 'Nuevo Recordatorio',
                'nome-lembrete': 'Nombre del Recordatorio',
                'data-lembrete': 'Fecha',
                'hora-lembrete': 'Hora',
                'salvar-lembrete': 'Guardar Recordatorio',
                'editar-lembrete': 'Editar',
                'excluir-lembrete': 'Eliminar',
                cancelar: 'Cancelar',
                'lembrete-ativo': '¡Recordatorio!',
                'chegou-hora': 'Es hora de tu recordatorio',
                //Botões nav Mellius só que em espanhol
                'inicioBtn':'enecio',
                'loginBtn':'Logino',
                'quizzesBtn':'Quizzeis',
                'cronoBtn':'Cronogramar',
                //outras páginas traduzidas para espanhol
                'titulo-mellius':'Mellius',
                'subtitulo-hero':'Tu viaje de bienestar mental comienza aquí',
                'descricao-hero':'Descubre un espacio seguro y acogedor para cuidar tu salud mental. Con herramientas prácticas y personalizadas, Mellius te acompaña en cada paso de tu camino de autoconocimiento y bienestar.',
                'sobre-mellius':'Sobre Mellius',
                'paragrafo-destaque':'Mellius nació de la necesidad de hacer el cuidado de la salud mental más accesible, práctico y efectivo. Nuestra plataforma combina tecnología moderna con prácticas de bienestar comprobadas.',
                'paragrafo-secundario':'Aquí encontrarás un entorno seguro para desarrollar hábitos saludables, seguir tu progreso emocional y descubrir herramientas personalizadas que se adapten a tu estilo de vida.',
                'citacao-destaque':'"Tu mente merece el mejor cuidado. \nEstamos aquí para ayudarte en este viaje."',
                'titulo-ferramentas':'Tus Herramientas de Bienestar',
                'subtitulo-ferramentas':'Descubre funciones diseñadas especialmente para apoyar tu camino de crecimiento personal y salud mental.',
                'titulo-calendario-personalizado':'Calendario Personalizado',
                'desc-calendario-personalizado':'Organiza tu rutina de autocuidado con recordatorios inteligentes para meditación, ejercicios y momentos de pausa. Sigue tu progreso diario y semanal.',
                'titulo-quizzes':'Cuestionarios de Bienestar',
                'desc-quizzes':'Desafía tu mente con cuestionarios de lógica y autoconocimiento. Monitorea tu estado emocional y desarrolla habilidades cognitivas.',
                'titulo-lembretes':'Recordatorios Inteligentes',
                'desc-lembretes':'Recibe notificaciones personalizadas para mantener tus hábitos saludables. Alarmas suaves para hidratación, pausas mentales y prácticas de mindfulness.',
                'rodape':'© 2024 Mellius - Cuidando de tu mente con cariño <Creado por> Giulia e Leticia 2025 </>',
                'bem-vindo-login':'Bienvenido',
                'subtitle-login':'Cuida tu mente',
                'btn-entrar':'Iniciar sesión',
                'btn-registrar':'Regístrate',
                'footer-login':'Tu viaje de bienestar comienza aquí',
                'titulo-quizzes-pagina':'Cuestionarios',
                'desc-quizzes-pagina':'Aquí podrás responder cuestionarios sobre salud mental y bienestar.',
            }
        };
        
        this.nomesMeses = {
            pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            en: ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'],
            es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        
        this.diasSemana = {
            pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
        };
        
        this.inicializar();
    }
    
    inicializar() {
        this.carregarConfiguracoesSalvas();
        this.configurarEventListeners();
        this.atualizarTextos();
        this.renderizarCalendario();
        this.renderizarAdesivos();
        this.renderizarListaLembretes();
        this.iniciarVerificadorLembretes();
        this.inicializarGradientePersonalizado();
        this.solicitarPermissaoNotificacao();
    }
    
    inicializarGradientePersonalizado() {
        // Inicializar o preview do gradiente
        setTimeout(() => {
            if (document.getElementById('cor-inicial') && document.getElementById('cor-final')) {
                this.atualizarGradientePersonalizado();
            }
        }, 100);
    }
    
    carregarConfiguracoesSalvas() {
        // Carregar configurações salvas do localStorage
        const temaSalvo = localStorage.getItem('mellius-tema');
        const idiomasSalvo = localStorage.getItem('mellius-idioma');
        const corTemaSalva = localStorage.getItem('mellius-cor-tema');
        const eventosSalvos = localStorage.getItem('mellius-eventos-calendario');
        const gradientePersonalizado = localStorage.getItem('mellius-gradiente-personalizado');
        const coresPersonalizadas = localStorage.getItem('mellius-cores-personalizadas');
        
        if (temaSalvo) {
            this.temaAtual = temaSalvo;
            if (temaSalvo === 'escuro') {
                document.documentElement.classList.add('escuro');
            }
        }
        
        if (idiomasSalvo) {
            this.idiomaAtual = idiomasSalvo;
        }
        
        if (corTemaSalva === 'personalizado' && gradientePersonalizado) {
            const dados = JSON.parse(gradientePersonalizado);
            this.corTemaAtual = 'personalizado';
            
            // Restaurar valores dos inputs
            setTimeout(() => {
                document.getElementById('cor-inicial').value = dados.corInicial;
                document.getElementById('cor-final').value = dados.corFinal;
                this.atualizarGradientePersonalizado();
                this.aplicarGradientePersonalizado();
            }, 100);
        } else if (corTemaSalva && corTemaSalva !== 'personalizado') {
            this.corTemaAtual = corTemaSalva;
            this.aplicarCorTema(corTemaSalva);
        }
        
        // Carregar cores personalizadas
        if (coresPersonalizadas) {
            const dadosCores = JSON.parse(coresPersonalizadas);
            setTimeout(() => {
                document.getElementById('cor-fonte').value = dadosCores.corFonte;
                document.getElementById('cor-icones').value = dadosCores.corIcones;
                this.atualizarCoresPersonalizadas();
                this.aplicarCoresPersonalizadas();
            }, 100);
        }
        
        if (eventosSalvos) {
            this.eventos = JSON.parse(eventosSalvos);
        }
        
        // Carregar lembretes salvos
        const lembretesSalvos = localStorage.getItem('mellius-lembretes');
        if (lembretesSalvos) {
            this.lembretes = JSON.parse(lembretesSalvos);
        }
        
        this.atualizarIconeTema();
    }
    
    configurarEventListeners() {
        // Alternar tema
        document.getElementById('alternar-tema').addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            this.alternarTema();
        });
        
        // Dropdown de configurações
        const botaoConfiguracoes = document.getElementById('botao-configuracoes');
        const dropdownConfiguracoes = document.getElementById('dropdown-configuracoes');
        
        botaoConfiguracoes.addEventListener('click', (e) => {
            e.stopPropagation();
            dropdownConfiguracoes.classList.toggle('ativo');
        });
        
        // Fechar dropdown ao clicar fora
        document.addEventListener('click', (e) => {
            if (!dropdownConfiguracoes.contains(e.target) && !botaoConfiguracoes.contains(e.target)) {
                dropdownConfiguracoes.classList.remove('ativo');
            }
        });
        
        // Event listeners do modal
        this.configurarEventListenersModal();
    }
    
    configurarEventListenersModal() {
        const modal = document.getElementById('modal-evento');
        const fecharModal = document.getElementById('fechar-modal');
        const salvarEvento = document.getElementById('salvar-evento');
        const excluirEvento = document.getElementById('excluir-evento');
        
        fecharModal.addEventListener('click', () => {
            this.fecharModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.fecharModal();
            }
        });
        
        salvarEvento.addEventListener('click', () => {
            this.salvarEvento();
        });
        
        excluirEvento.addEventListener('click', () => {
            this.excluirEvento();
        });
    }
    
    alternarTema() {
        this.temaAtual = this.temaAtual === 'claro' ? 'escuro' : 'claro';
        
        if (this.temaAtual === 'escuro') {
            document.documentElement.classList.add('escuro');
        } else {
            document.documentElement.classList.remove('escuro');
        }
        
        localStorage.setItem('mellius-tema', this.temaAtual);
        this.atualizarIconeTema();
    }
    
    atualizarIconeTema() {
        const icone = document.getElementById('icone-tema');
        
        if (this.temaAtual === 'escuro') {
            icone.innerHTML = `
                <circle cx="12" cy="12" r="5"/>
                <line x1="12" y1="1" x2="12" y2="3"/>
                <line x1="12" y1="21" x2="12" y2="23"/>
                <line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
                <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/>
                <line x1="1" y1="12" x2="3" y2="12"/>
                <line x1="21" y1="12" x2="23" y2="12"/>
                <line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
                <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
            `;
        } else {
            icone.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            `;
        }
    }
    
    aplicarCorTema(cor) {
        const raiz = document.documentElement;
        
        const mapeamentoCores = {
            roxo: {
                primario: '270 70% 60%',
                brilhoPrimario: '280 60% 75%',
                anel: '270 70% 60%'
            },
            lavanda: {
                primario: '280 60% 65%',
                brilhoPrimario: '285 50% 80%',
                anel: '280 60% 65%'
            },
            violeta: {
                primario: '260 75% 60%',
                brilhoPrimario: '265 55% 75%',
                anel: '260 75% 60%'
            },
            ametista: {
                primario: '290 65% 60%',
                brilhoPrimario: '295 50% 75%',
                anel: '290 65% 60%'
            }
        };
        
        const valoresCor = mapeamentoCores[cor];
        if (valoresCor) {
            raiz.style.setProperty('--primario', valoresCor.primario);
            raiz.style.setProperty('--brilho-primario', valoresCor.brilhoPrimario);
            raiz.style.setProperty('--anel', valoresCor.anel);
            raiz.style.setProperty('--bem-estar-roxo', valoresCor.primario);
        }
    }
    
    atualizarGradientePersonalizado() {
        const corInicial = document.getElementById('cor-inicial').value;
        const corFinal = document.getElementById('cor-final').value;
        const preview = document.getElementById('preview-gradiente');
        
        // Converter hex para HSL para manter consistência
        const hslInicial = this.hexParaHsl(corInicial);
        const hslFinal = this.hexParaHsl(corFinal);
        
        const gradiente = `linear-gradient(135deg, ${corInicial}, ${corFinal})`;
        preview.style.background = gradiente;
    }
    
    aplicarGradientePersonalizado() {
        const corInicial = document.getElementById('cor-inicial').value;
        const corFinal = document.getElementById('cor-final').value;
        const raiz = document.documentElement;
        
        // Converter hex para HSL
        const hslInicial = this.hexParaHsl(corInicial);
        const hslFinal = this.hexParaHsl(corFinal);
        
        // Aplicar as cores personalizadas
        raiz.style.setProperty('--primario', `${hslInicial.h} ${hslInicial.s}% ${hslInicial.l}%`);
        raiz.style.setProperty('--brilho-primario', `${hslFinal.h} ${hslFinal.s}% ${hslFinal.l}%`);
        raiz.style.setProperty('--anel', `${hslInicial.h} ${hslInicial.s}% ${hslInicial.l}%`);
        raiz.style.setProperty('--bem-estar-roxo', `${hslInicial.h} ${hslInicial.s}% ${hslInicial.l}%`);
        raiz.style.setProperty('--calendario-primario', `${hslInicial.h} ${hslInicial.s}% ${hslInicial.l}%`);
        
        // Atualizar gradientes incluindo a seção herói
        const gradienteHeroi = `linear-gradient(135deg, hsl(${hslInicial.h}, ${hslInicial.s}%, ${hslInicial.l}%), hsl(${hslFinal.h}, ${hslFinal.s}%, ${hslFinal.l}%))`;
        const gradienteBemEstar = `linear-gradient(135deg, hsla(${hslInicial.h}, ${hslInicial.s}%, ${hslInicial.l}%, 0.15), hsla(${hslFinal.h}, ${hslFinal.s}%, ${hslFinal.l}%, 0.15))`;
        
        raiz.style.setProperty('--gradiente-heroi', gradienteHeroi);
        raiz.style.setProperty('--gradiente-bem-estar', gradienteBemEstar);
        
        // Aplicar diretamente na seção herói
        const secaoHeroi = document.querySelector('.heroi');
        if (secaoHeroi) {
            secaoHeroi.style.background = gradienteHeroi;
        }
        
        // Salvar no localStorage
        localStorage.setItem('mellius-gradiente-personalizado', JSON.stringify({
            corInicial: corInicial,
            corFinal: corFinal,
            ativo: true
        }));
        
        this.corTemaAtual = 'personalizado';
        localStorage.setItem('mellius-cor-tema', 'personalizado');
    }
    
    resetarGradiente() {
        // Resetar para o tema roxo padrão
        this.aplicarCorTema('roxo');
        this.corTemaAtual = 'roxo';
        
        // Resetar valores dos inputs
        document.getElementById('cor-inicial').value = '#8B5CF6';
        document.getElementById('cor-final').value = '#A855F7';
        this.atualizarGradientePersonalizado();
        
        // Resetar também a seção herói
        const secaoHeroi = document.querySelector('.heroi');
        if (secaoHeroi) {
            secaoHeroi.style.removeProperty('background');
        }
        
        // Remover do localStorage
        localStorage.removeItem('mellius-gradiente-personalizado');
        localStorage.setItem('mellius-cor-tema', 'roxo');
    }
    
    hexParaHsl(hex) {
        // Converter hex para RGB
        const r = parseInt(hex.slice(1, 3), 16) / 255;
        const g = parseInt(hex.slice(3, 5), 16) / 255;
        const b = parseInt(hex.slice(5, 7), 16) / 255;
        
        const max = Math.max(r, g, b);
        const min = Math.min(r, g, b);
        let h, s, l = (max + min) / 2;
        
        if (max === min) {
            h = s = 0; // acromático
        } else {
            const d = max - min;
            s = l > 0.5 ? d / (2 - max - min) : d / (max + min);
            
            switch (max) {
                case r: h = (g - b) / d + (g < b ? 6 : 0); break;
                case g: h = (b - r) / d + 2; break;
                case b: h = (r - g) / d + 4; break;
            }
            h /= 6;
        }
        
        return {
            h: Math.round(h * 360),
            s: Math.round(s * 100),
            l: Math.round(l * 100)
        };
    }
    
    atualizarCoresPersonalizadas() {
        // Esta função só atualiza os valores visuais, não aplica as cores
        // A aplicação acontece quando o usuário clica em "Aplicar Cores"
    }
    
    aplicarCoresPersonalizadas() {
        const corFonte = document.getElementById('cor-fonte').value;
        const corIcones = document.getElementById('cor-icones').value;
        
        // Remover estilos customizados anteriores
        let estiloCustomizado = document.getElementById('estilos-cores-customizadas');
        if (estiloCustomizado) {
            estiloCustomizado.remove();
        }
        
        // Criar novo elemento de estilo
        estiloCustomizado = document.createElement('style');
        estiloCustomizado.id = 'estilos-cores-customizadas';
        
        // Aplicar cor da fonte apenas aos títulos específicos
        const cssPersonalizado = `
            .titulo-heroi,
            .subtitulo-heroi,
            .titulo-calendario,
            .titulo-bem-estar,
            .titulo-acompanhamento,
            .titulo-recurso {
                color: ${corFonte} !important;
            }
            
            /* Ícones acima dos títulos */
            .icone-logo-navegacao,
            .fundo-icone-heroi,
            .icone-recurso {
                color: ${corIcones} !important;
            }
            
            /* Ícones SVG específicos */
            .icone-recurso svg,
            .fundo-icone-heroi svg,
            .icone-logo-navegacao svg {
                color: ${corIcones} !important;
            }
        `;
        
        estiloCustomizado.textContent = cssPersonalizado;
        document.head.appendChild(estiloCustomizado);
        
        // Aplicar no gradiente da seção herói também
        const secaoHeroi = document.querySelector('.heroi');
        if (secaoHeroi) {
            const raiz = document.documentElement;
            const gradienteAtual = raiz.style.getPropertyValue('--gradiente-heroi');
            if (gradienteAtual) {
                secaoHeroi.style.background = gradienteAtual;
            }
        }
        
        // Salvar no localStorage
        localStorage.setItem('mellius-cores-personalizadas', JSON.stringify({
            corFonte: corFonte,
            corIcones: corIcones
        }));
    }
    
    resetarCores() {
        // Remover estilos customizados
        const estiloCustomizado = document.getElementById('estilos-cores-customizadas');
        if (estiloCustomizado) {
            estiloCustomizado.remove();
        }
        
        // Resetar valores dos inputs
        document.getElementById('cor-fonte').value = '#2D1B69';
        document.getElementById('cor-icones').value = '#8B5CF6';
        
        // Resetar o fundo da seção herói
        const secaoHeroi = document.querySelector('.heroi');
        if (secaoHeroi) {
            secaoHeroi.style.removeProperty('background');
        }
        
        // Remover do localStorage
        localStorage.removeItem('mellius-cores-personalizadas');
    }
    
    atualizarTextos() {
        const elementos = document.querySelectorAll('[data-i18n]');
        const textos = this.textos[this.idiomaAtual];
        
        elementos.forEach(el => {
            const chave = el.getAttribute('data-i18n');
            if (textos[chave]) {
                el.textContent = textos[chave];
            }
        });
        
        // Atualizar placeholders
        const inputTitulo = document.getElementById('titulo-evento');
        const inputDescricao = document.getElementById('descricao-evento');
        const inputHorario = document.getElementById('horario-lembrete');
        
        if (inputTitulo && textos['titulo-evento']) {
            inputTitulo.placeholder = textos['titulo-evento'];
        }
        
        if (inputDescricao && textos['descricao-evento']) {
            inputDescricao.placeholder = textos['descricao-evento'];  
        }
        
        if (inputHorario && textos['horario-lembrete']) {
            inputHorario.title = textos['horario-lembrete'];
        }
    }
    
    renderizarCalendario() {
        const containerCalendario = document.getElementById('calendario-bem-estar');
        const textos = this.textos[this.idiomaAtual];
        
        containerCalendario.innerHTML = `
            <div class="cabecalho-calendario">
                <div class="linha-titulo-calendario">
                    <div class="titulo-calendario">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>${textos.calendario}</span>
                    </div>
                    <div class="controles-calendario">
                        <button class="botao" onclick="aplicativo.imprimirCalendario()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <polyline points="6,9 6,2 18,2 18,9"/>
                                <path d="M6,18H4a2,2,0,0,1-2-2v-5a2,2,0,0,1,2-2H20a2,2,0,0,1,2,2v5a2,2,0,0,1-2,2H18"/>
                                <polyline points="6,14 6,22 18,22 18,14"/>
                            </svg>
                            ${textos.imprimir}
                        </button>
                        <button class="botao" onclick="aplicativo.salvarNoLocalStorage()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                                <polyline points="17,21 17,13 7,13 7,21"/>
                                <polyline points="7,3 7,8 15,8"/>
                            </svg>
                            ${textos.salvar}
                        </button>
                    </div>
                </div>
                
                <div class="navegacao-calendario">
                    <button class="botao-navegacao-calendario" onclick="aplicativo.navegarMes('anterior')">‹</button>
                    <div class="mes-calendario">
                        ${this.nomesMeses[this.idiomaAtual][this.dataAtual.getMonth()]} ${this.dataAtual.getFullYear()}
                    </div>
                    <button class="botao-navegacao-calendario" onclick="aplicativo.navegarMes('proximo')">›</button>
                </div>
            </div>
            
            <div class="corpo-calendario">
                <div class="grade-calendario">
                    ${this.renderizarDiasSemana()}
                    ${this.renderizarDiasCalendario()}
                </div>
            </div>
        `;
        
        this.renderizarAdesivos();
    }
    
    renderizarDiasSemana() {
        const diasSemana = this.diasSemana[this.idiomaAtual];
        return diasSemana.map(dia => 
            `<div class="dia-semana-calendario">${dia}</div>`
        ).join('');
    }
    
    renderizarDiasCalendario() {
        const dias = this.obterDiasDoMes();
        
        return dias.map((dia, indice) => {
            if (!dia) {
                return '<div class="dia-calendario"></div>';
            }
            
            const evento = this.obterEventoParaData(dia);
            const stringData = this.formatarStringData(dia);
            
            return `
                <div class="dia-calendario ${evento ? 'tem-evento' : ''}" 
                     data-date="${stringData}"
                     ondrop="aplicativo.lidarSoltarCalendario(event, '${stringData}')"
                     ondragover="aplicativo.lidarArrastarSobre(event)"
                     ondragleave="aplicativo.lidarSairArrasto(event)">
                    <div class="numero-dia">${dia}</div>
                    ${evento ? `
                        <div class="conteudo-dia">
                            <div class="titulo-evento">${evento.titulo}</div>
                            <div class="descricao-evento">${evento.descricao}</div>
                        </div>
                        <button class="botao-editar-evento" onclick="aplicativo.editarEvento('${stringData}')">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                        </button>
                        ${this.renderizarAdesivosParaData(evento)}
                    ` : `
                        <button class="botao-adicionar-evento" onclick="aplicativo.adicionarEvento('${stringData}')">+</button>
                    `}
                </div>
            `;
        }).join('');
    }
    
    renderizarAdesivosParaData(evento) {
        if (!evento.adesivos) return '';
        
        return evento.adesivos.map(adesivo => `
            <div class="adesivo-no-calendario" style="left: ${adesivo.x}px; top: ${adesivo.y}px;">
                ${adesivo.emoji}
            </div>
        `).join('');
    }
    
    renderizarAdesivos() {
        const htmlAdesivos = `
            <div class="painel-adesivos">
                <div class="cabecalho-adesivos">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="8"/>
                        <path d="M8 12h8"/>
                        <path d="M12 8v8"/>
                    </svg>
                    <span class="titulo-adesivos">${this.textos[this.idiomaAtual].adesivos}</span>
                </div>
                <div class="subtitulo-adesivos">${this.textos[this.idiomaAtual]['arrastar-adesivo']}</div>
                <div class="grade-adesivos">
                    ${this.adesivosDisponiveis.map(adesivo => `
                        <div class="adesivo" 
                             draggable="true" 
                             ondragstart="aplicativo.lidarInicioArrastoAdesivo('${adesivo}')">
                            ${adesivo}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Adicionar painel de adesivos após o calendário
        const containerCalendario = document.getElementById('calendario-bem-estar');
        if (!document.querySelector('.painel-adesivos')) {
            containerCalendario.insertAdjacentHTML('afterend', htmlAdesivos);
        }
    }
    
    obterDiasDoMes() {
        const ano = this.dataAtual.getFullYear();
        const mes = this.dataAtual.getMonth();
        const primeiroDia = new Date(ano, mes, 1);
        const ultimoDia = new Date(ano, mes + 1, 0);
        const diasNoMes = ultimoDia.getDate();
        const diaSemanaInicio = primeiroDia.getDay();
        
        const dias = [];
        
        // Dias vazios no início
        for (let i = 0; i < diaSemanaInicio; i++) {
            dias.push(null);
        }
        
        // Dias do mês
        for (let dia = 1; dia <= diasNoMes; dia++) {
            dias.push(dia);
        }
        
        return dias;
    }
    
    formatarStringData(dia) {
        const ano = this.dataAtual.getFullYear();
        const mes = String(this.dataAtual.getMonth() + 1).padStart(2, '0');
        const diaFormatado = String(dia).padStart(2, '0');
        return `${ano}-${mes}-${diaFormatado}`;
    }
    
    obterEventoParaData(dia) {
        const stringData = this.formatarStringData(dia);
        return this.eventos.find(evento => evento.data === stringData);
    }
    
    navegarMes(direcao) {
        if (direcao === 'anterior') {
            this.dataAtual.setMonth(this.dataAtual.getMonth() - 1);
        } else {
            this.dataAtual.setMonth(this.dataAtual.getMonth() + 1);
        }
        this.renderizarCalendario();
    }
    
    adicionarEvento(data) {
        this.dataSelecionada = data;
        this.eventoEditando = null;
        this.abrirModal();
    }
    
    editarEvento(data) {
        const evento = this.eventos.find(e => e.data === data);
        if (evento) {
            this.dataSelecionada = data;
            this.eventoEditando = evento;
            this.preencherModal(evento);
            this.abrirModal();
        }
    }
    
    abrirModal() {
        const modal = document.getElementById('modal-evento');
        modal.classList.add('ativo');
        
        // Limpar campos se for novo evento
        if (!this.eventoEditando) {
            document.getElementById('titulo-evento').value = '';
            document.getElementById('descricao-evento').value = '';
            document.getElementById('horario-lembrete').value = '';
        }
    }
    
    preencherModal(evento) {
        document.getElementById('titulo-evento').value = evento.titulo || '';
        document.getElementById('descricao-evento').value = evento.descricao || '';
        document.getElementById('horario-lembrete').value = evento.horario || '';
    }
    
    fecharModal() {
        const modal = document.getElementById('modal-evento');
        modal.classList.remove('ativo');
        this.dataSelecionada = null;
        this.eventoEditando = null;
    }
    
    salvarEvento() {
        const titulo = document.getElementById('titulo-evento').value.trim();
        const descricao = document.getElementById('descricao-evento').value.trim();
        const horario = document.getElementById('horario-lembrete').value;
        
        if (!titulo) {
            alert('Por favor, insira um título para o evento.');
            return;
        }
        
        const evento = {
            data: this.dataSelecionada,
            titulo: titulo,
            descricao: descricao,
            horario: horario,
            adesivos: this.eventoEditando ? this.eventoEditando.adesivos || [] : []
        };
        
        if (this.eventoEditando) {
            // Atualizar evento existente
            const indice = this.eventos.findIndex(e => e.data === this.dataSelecionada);
            this.eventos[indice] = evento;
        } else {
            // Adicionar novo evento
            this.eventos.push(evento);
        }
        
        this.salvarNoLocalStorage();
        this.renderizarCalendario();
        this.fecharModal();
    }
    
    excluirEvento() {
        if (this.eventoEditando) {
            this.eventos = this.eventos.filter(e => e.data !== this.dataSelecionada);
            this.salvarNoLocalStorage();
            this.renderizarCalendario();
            this.fecharModal();
        }
    }
    
    salvarNoLocalStorage() {
        localStorage.setItem('mellius-eventos-calendario', JSON.stringify(this.eventos));
        localStorage.setItem('mellius-lembretes', JSON.stringify(this.lembretes));
    }
    
    // Sistema de Lembretes
    abrirModalLembrete() {
        document.getElementById('modal-lembrete').classList.add('ativo');
    }
    
    fecharModalLembrete() {
        document.getElementById('modal-lembrete').classList.remove('ativo');
        // Limpar campos
        document.getElementById('nome-lembrete').value = '';
        document.getElementById('data-lembrete').value = '';
        document.getElementById('hora-lembrete').value = '';
    }
    
    salvarLembrete() {
        const nome = document.getElementById('nome-lembrete').value.trim();
        const data = document.getElementById('data-lembrete').value;
        const hora = document.getElementById('hora-lembrete').value;
        
        if (!nome || !data || !hora) {
            alert('Por favor, preencha todos os campos!');
            return;
        }
        
        const lembrete = {
            id: Date.now(),
            nome: nome,
            data: data,
            hora: hora,
            ativo: true
        };
        
        this.lembretes.push(lembrete);
        this.salvarNoLocalStorage();
        this.renderizarListaLembretes();
        this.fecharModalLembrete();
        this.iniciarVerificadorLembretes();
    }
    
    excluirLembrete(id) {
        this.lembretes = this.lembretes.filter(lembrete => lembrete.id !== id);
        this.salvarNoLocalStorage();
        this.renderizarListaLembretes();
    }
    
    renderizarListaLembretes() {
        const container = document.getElementById('lista-lembretes');
        const textos = this.textos[this.idiomaAtual];
        
        if (this.lembretes.length === 0) {
            container.innerHTML = `
                <div style="text-align: center; color: var(--texto-suavizado); padding: 40px;">
                    <p>Nenhum lembrete criado ainda.</p>
                    <p>Clique em "Novo Lembrete" para adicionar seu primeiro lembrete.</p>
                </div>
            `;
            return;
        }
        
        container.innerHTML = this.lembretes.map(lembrete => {
            const dataFormatada = new Date(lembrete.data + 'T00:00:00').toLocaleDateString(this.idiomaAtual === 'pt' ? 'pt-BR' : 'en-US');
            
            return `
                <div class="item-lembrete">
                    <div class="info-lembrete">
                        <div class="nome-lembrete">${lembrete.nome}</div>
                        <div class="data-hora-lembrete">${dataFormatada} às ${lembrete.hora}</div>
                    </div>
                    <div class="acoes-lembrete">
                        <button class="botao-acao-lembrete perigo" onclick="aplicativo.excluirLembrete(${lembrete.id})" data-i18n="excluir-lembrete">
                            ${textos['excluir-lembrete'] || 'Excluir'}
                        </button>
                    </div>
                </div>
            `;
        }).join('');
    }
    
    mostrarPopupNotificacao(titulo, mensagem) {
        const popup = document.getElementById('popup-notificacao');
        const tituloElemento = document.getElementById('titulo-popup');
        const mensagemElemento = document.getElementById('mensagem-popup');
        
        tituloElemento.textContent = titulo;
        mensagemElemento.textContent = mensagem;
        
        popup.classList.add('ativo');
        
        // Auto-fechar após 5 segundos
        setTimeout(() => {
            this.fecharPopupNotificacao();
        }, 5000);
    }
    
    fecharPopupNotificacao() {
        document.getElementById('popup-notificacao').classList.remove('ativo');
    }
    
    // Funções de arrastar e soltar adesivos
    lidarInicioArrastoAdesivo(emoji) {
        this.adesivoArrastado = emoji;
    }
    
    lidarArrastarSobre(event) {
        event.preventDefault();
        event.currentTarget.classList.add('arrastando-sobre');
    }
    
    lidarSairArrasto(event) {
        event.currentTarget.classList.remove('arrastando-sobre');
    }
    
    lidarSoltarCalendario(event, data) {
        event.preventDefault();
        event.currentTarget.classList.remove('arrastando-sobre');
        
        if (this.adesivoArrastado) {
            let evento = this.eventos.find(e => e.data === data);
            
            // Se não existe evento nesta data, criar um
            if (!evento) {
                evento = {
                    data: data,
                    titulo: 'Lembrete',
                    descricao: '',
                    horario: '',
                    adesivos: []
                };
                this.eventos.push(evento);
            }
            
            if (!evento.adesivos) {
                evento.adesivos = [];
            }
            
            const rect = event.currentTarget.getBoundingClientRect();
            const x = Math.max(5, Math.min(event.clientX - rect.left, rect.width - 20));
            const y = Math.max(20, Math.min(event.clientY - rect.top, rect.height - 20));
            
            evento.adesivos.push({
                emoji: this.adesivoArrastado,
                x: x,
                y: y
            });
            
            this.salvarNoLocalStorage();
            this.renderizarCalendario();
            this.adesivoArrastado = null;
        }
    }
    
    // Sistema de lembretes
    iniciarVerificadorLembretes() {
        // Limpar intervalos anteriores
        this.intervalosNotificacao.forEach(intervalo => clearInterval(intervalo));
        this.intervalosNotificacao = [];

        // Verificar lembretes a cada segundo para garantir precisão
        const intervalo = setInterval(() => {
            this.verificarLembretes();
        }, 1000);

        this.intervalosNotificacao.push(intervalo);

        // Verificar imediatamente na inicialização
        this.verificarLembretes();
    }
    
    verificarLembretes() {
        const agora = new Date();
        const dataHoje = agora.toISOString().split('T')[0];
        const horarioAtual = agora.getHours().toString().padStart(2, '0') + ':' + agora.getMinutes().toString().padStart(2, '0');
        this.lembretes.forEach(lembrete => {
            if (lembrete.ativo && lembrete.data === dataHoje && lembrete.hora === horarioAtual) {
                this.mostrarLembrete(lembrete);
                this.reproduzirSomLembrete();
                lembrete.ativo = false;
                this.salvarNoLocalStorage();
            }
        });
    }
    
    mostrarLembrete(lembrete) {
        const textos = this.textos[this.idiomaAtual];
        
        // Mostrar popup personalizado
        this.mostrarPopupNotificacao(
            textos['lembrete-ativo'] || 'Lembrete!',
            `${textos['chegou-hora'] || 'Chegou a hora do seu lembrete'}: ${lembrete.nome}`
        );
        
        // Mostrar notificação do navegador se permitido
        if (Notification.permission === 'granted') {
            new Notification('Lembrete - Mellius', {
                body: `${textos['chegou-hora'] || 'Chegou a hora do seu lembrete'}: ${lembrete.nome}`,
                icon: 'data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjQiIGhlaWdodD0iMjQiIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0ibm9uZSIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPHBhdGggZD0iTTE5IDE0YzEuNDkzLTEuNDYgMy0zLjI3IDMtNS41QTUuNSA1LjUgMCAwIDAgMTYuNSBjLTEuNzYgMC0zIC41LTQuNSAyLTEuNS0xLjUtMi43NC0yLTQuNS0yQTUuNSA1LjUgMCAwIDAgMiA4LjVjMCAyLjIzIDEuNTEgNC4wNCAzIDUuNWw3IDdaIiBmaWxsPSIjODA2OGY0Ii8+Cjwvc3ZnPgo='
            });
        }
    }
    
    reproduzirSomLembrete() {
        // Criar contexto de áudio e reproduzir som
        const contextoAudio = new (window.AudioContext || window.webkitAudioContext)();
        const oscilador = contextoAudio.createOscillator();
        const ganho = contextoAudio.createGain();
        
        oscilador.connect(ganho);
        ganho.connect(contextoAudio.destination);
        
        oscilador.frequency.setValueAtTime(800, contextoAudio.currentTime);
        ganho.gain.setValueAtTime(0.1, contextoAudio.currentTime);
        
        oscilador.start();
        oscilador.stop(contextoAudio.currentTime + 0.3);
        
        // Som adicional
        setTimeout(() => {
            const oscilador2 = contextoAudio.createOscillator();
            const ganho2 = contextoAudio.createGain();
            
            oscilador2.connect(ganho2);
            ganho2.connect(contextoAudio.destination);
            
            oscilador2.frequency.setValueAtTime(600, contextoAudio.currentTime);
            ganho2.gain.setValueAtTime(0.1, contextoAudio.currentTime);
            
            oscilador2.start();
            oscilador2.stop(contextoAudio.currentTime + 0.3);
        }, 400);
    }
    
    solicitarPermissaoNotificacao() {
        if ('Notification' in window && Notification.permission !== 'granted') {
            Notification.requestPermission();
        }
    }
    
    irParaCalendario() {
        const calendario = document.getElementById('calendario-bem-estar');
        if (calendario) {
            calendario.scrollIntoView({ 
                behavior: 'smooth',
                block: 'start'
            });
        }
    }
}

// Método para imprimir o calendário
AplicativoMellius.prototype.imprimirCalendario = function() {
    // Criar uma nova janela para impressão
    const janelaImpressao = window.open('', '_self');
    
    const tituloMes = `${this.nomesMeses[this.idiomaAtual][this.dataAtual.getMonth()]} ${this.dataAtual.getFullYear()}`;
    
    // Esta estrutura HTML foi feita para alterar o design e o calendário <3 claro, da escolha do usuário
    const htmlImpressao = `
        <!DOCTYPE html>
        <html lang="${this.idiomaAtual}">
        <head>
            <meta charset="UTF-8">
            <title>Calendário Mellius - ${tituloMes}</title>
            <style>
                * { margin: 0; padding: 0; box-sizing: border-box; }
                
                body {
                    font-family: 'Arial', sans-serif;
                    background: white;
                    color: #000000ff;
                    padding: 20px;
                }
                
                .cabecalho-impressao {
                    text-align: center;
                    margin-bottom: 30px;
                    border-bottom: 2px solid #6625fdff;
                    padding-bottom: 20px;
                }
                
                .titulo-impressao {
                    font-size: 28px;
                    font-weight: bold;
                    color: #8B5CF6;
                    margin-bottom: 10px;
                }
                
                .subtitulo-impressao {
                    font-size: 18px;
                    color: #666;
                }
                
                .calendario-impressao {
                    width: 100%;
                    border-collapse: collapse;
                    margin-bottom: 20px;
                }
                
                .calendario-impressao th,
                .calendario-impressao td {
                    border: 1px solid #ddd;
                    padding: 8px;
                    text-align: left;
                    vertical-align: top;
                    height: 120px;
                    width: 14.28%;
                }
                
                .calendario-impressao th {
                    background-color: #f8f9fa;
                    font-weight: bold;
                    height: 40px;
                    text-align: center;
                    color: #8B5CF6;
                }
                
                .numero-dia-impressao {
                    font-weight: bold;
                    font-size: 14px;
                    margin-bottom: 5px;
                    color: #ffffffff;
                }
                
                .evento-impressao {
                    font-size: 11px;
                    background-color: #f3f4f6;
                    padding: 3px 5px;
                    border-radius: 3px;
                    margin-bottom: 3px;
                    border-left: 3px solid #8B5CF6;
                }
                
                .titulo-evento-impressao {
                    font-weight: bold;
                    color: #8B5CF6;
                }
                
                .descricao-evento-impressao {
                    color: #666;
                    margin-top: 2px;
                }
                
                .adesivos-impressao {
                    margin-top: 5px;
                }
                
                .adesivo-impressao {
                    display: inline-block;
                    margin-right: 3px;
                    font-size: 12px;
                }
                
                .rodape-impressao {
                    text-align: center;
                    margin-top: 30px;
                    font-size: 12px;
                    color: #999;
                }
                
                @media print {
                    body { margin: 0; padding: 15px; }
                    .cabecalho-impressao { page-break-inside: avoid; }
                    .calendario-impressao { page-break-inside: auto; }
                    .calendario-impressao tr { page-break-inside: avoid; }
                }
            </style>
        </head>
        <body>
            <div class="cabecalho-impressao">
                <div class="titulo-impressao">Mellius - Calendário de Bem-estar</div>
                <div class="subtitulo-impressao">${tituloMes}</div>
            </div>
            
            <table class="calendario-impressao">
                <thead>
                    <tr>
                        ${this.diasSemana[this.idiomaAtual].map(dia => `<th>${dia}</th>`).join('')}
                    </tr>
                </thead>
                <tbody>
                    ${this.gerarLinhasCalendarioImpressao()}
                </tbody>
            </table>
            
            <div class="rodape-impressao">
                Gerado por Mellius - ${new Date().toLocaleDateString(this.idiomaAtual === 'pt' ? 'pt-BR' : this.idiomaAtual === 'en' ? 'en-US' : 'es-ES')}
            </div>
        </body>
        </html>
    `;
    
    janelaImpressao.document.write(htmlImpressao);
    janelaImpressao.document.close();
    
    // Aguardar o carregamento e imprimir
    janelaImpressao.onload = function() {
        janelaImpressao.print();
    };
};

// Método auxiliar para gerar as linhas do calendário para impressão
AplicativoMellius.prototype.gerarLinhasCalendarioImpressao = function() {
    const dias = this.obterDiasDoMes();
    let html = '';
    let linhaAtual = '';
    let contadorDias = 0;
    
    // Processar dias em grupos de 7 (uma semana)
    for (let i = 0; i < dias.length; i++) {
        const dia = dias[i];
        
        if (!dia) {
            linhaAtual += '<td></td>';
        } else {
            const evento = this.obterEventoParaData(dia);
            let conteudoCelula = `<div class="numero-dia-impressao">${dia}</div>`;
            
            if (evento) {
                conteudoCelula += `
                    <div class="evento-impressao">
                        <div class="titulo-evento-impressao">${evento.titulo}</div>
                        ${evento.descricao ? `<div class="descricao-evento-impressao">${evento.descricao}</div>` : ''}
                        ${evento.horario ? `<div class="horario-evento-impressao">⏰ ${evento.horario}</div>` : ''}
                    </div>
                `;
                
                if (evento.adesivos && evento.adesivos.length > 0) {
                    conteudoCelula += '<div class="adesivos-impressao">';
                    evento.adesivos.forEach(adesivo => {
                        conteudoCelula += `<span class="adesivo-impressao">${adesivo.emoji}</span>`;
                    });
                    conteudoCelula += '</div>';
                }
            }
            
            linhaAtual += `<td>${conteudoCelula}</td>`;
        }
        
        contadorDias++;
        
        // Se completou uma semana (7 dias), fechar a linha
        if (contadorDias === 7) {
            html += `<tr>${linhaAtual}</tr>`;
            linhaAtual = '';
            contadorDias = 0;
        }
    }
    
    // Se sobrou uma linha incompleta, completar com células vazias
    if (linhaAtual) {
        while (contadorDias < 7) {
            linhaAtual += '<td></td>';
            contadorDias++;
        }
        html += `<tr>${linhaAtual}</tr>`;
    }
    
    return html;
};

// Funções globais para compatibilidade
function alterarIdioma(idioma) {
    aplicativo.idiomaAtual = idioma;
    localStorage.setItem('mellius-idioma', idioma);
    aplicativo.atualizarTextos();
    aplicativo.renderizarCalendario();
}

function alterarCorTema(cor) {
    aplicativo.corTemaAtual = cor;
    localStorage.setItem('mellius-cor-tema', cor);
    aplicativo.aplicarCorTema(cor);
}

// Inicializar aplicativo
let aplicativo;
document.addEventListener('DOMContentLoaded', () => {
    aplicativo = new AplicativoMellius();
    
    // Solicitar permissão de notificação ao carregar a página
    aplicativo.solicitarPermissaoNotificacao();
});
//FIM DO JS DA PÁGINA DE CALENDÁRIO

//JS FEITO PARA PÁGINA DE LOGIN 

// CJS feito para trocar páginas <3
        const mapaPaginas = {
            inicio: 'pagina-inicio',
            login: 'pagina-login',
            quizzes: 'pagina-quizzes',
            cronograma: 'pagina-cronograma'
        };

        function mostrarPagina(pagina) {
            document.querySelectorAll('.pagina-spa').forEach(sec => sec.style.display = 'none');
            document.getElementById(mapaPaginas[pagina]).style.display = '';
        }

        document.querySelectorAll('.botao-navegacao').forEach((btn, idx) => {
            btn.addEventListener('click', function() {
                let page = 'inicio';
                if (idx === 1) page = 'login';
                if (idx === 2) page = 'quizzes';
                if (idx === 3) page = 'cronograma';
                mostrarPagina(page);
            });
        });
        // Mostra home ao carregar
        mostrarPagina('inicio');

//JS DA PÁGINA DE QUIZZES
function startQuiz(quizType) {
    // Funcionalidade será implementada futuramente
    console.log(`Iniciando quiz: ${quizType}`);
    
    // Adicionar feedback visual temporário
    const button = event.target;
    const originalText = button.textContent;
    
    button.textContent = 'Carregando...';
    button.disabled = true;
    
    // Simular carregamento
    setTimeout(() => {
        button.textContent = originalText;
        button.disabled = false;
        alert(`Quiz "${getQuizTitle(quizType)}" será implementado em breve!`);
    }, 1000);
}

// Função auxiliar para obter o título do quiz
function getQuizTitle(quizType) {
    const titles = {
        'mathematical': 'Lógica Matemática',
        'logic': 'Lógica Normal',
        'wellness': 'Bem-estar'
    };
    return titles[quizType] || quizType;
}

// Adicionar animações de entrada quando a página carregar
document.addEventListener('DOMContentLoaded', function() {
    // Animar cards com delay escalonado
    const cards = document.querySelectorAll('.quiz-card');
    cards.forEach((card, index) => {
        card.style.opacity = '0';
        card.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        }, index * 200);
    });
    
    // Animar seção de informações
    const infoSection = document.querySelector('.info-section');
    if (infoSection) {
        infoSection.style.opacity = '0';
        infoSection.style.transform = 'translateY(20px)';
        
        setTimeout(() => {
            infoSection.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            infoSection.style.opacity = '1';
            infoSection.style.transform = 'translateY(0)';
        }, cards.length * 200 + 300);
    }
});

// Adicionar efeitos de hover melhorados
document.querySelectorAll('.quiz-card').forEach(card => {
    card.addEventListener('mouseenter', function() {
        this.style.transform = 'translateY(-8px) scale(1.02)';
    });
    
    card.addEventListener('mouseleave', function() {
        this.style.transform = 'translateY(0) scale(1)';
    });
});

// Accessibility: Adicionar suporte para navegação por teclado
document.addEventListener('keydown', function(e) {
    if (e.key === 'Enter' && e.target.classList.contains('quiz-card')) {
        const button = e.target.querySelector('.quiz-button');
        if (button) {
            button.click();
        }
    }
});

// Tornar os cards focáveis para acessibilidade
document.querySelectorAll('.quiz-card').forEach(card => {
    card.setAttribute('tabindex', '0');
    card.setAttribute('role', 'button');
    card.setAttribute('aria-label', `Selecionar quiz: ${card.querySelector('.card-title').textContent}`);
    
    card.addEventListener('click', function(e) {
        if (e.target === this) {
            const button = this.querySelector('.quiz-button');
            if (button) {
                button.click();
            }
        }
    });
});