// Mellius - Mental Health & Wellness App
// Vanilla JavaScript Implementation

class MelliusApp {
    constructor() {
        this.currentLanguage = 'pt';
        this.currentTheme = 'light';
        this.currentThemeColor = 'mint';
        this.currentDate = new Date();
        this.events = [];
        this.draggedSticker = null;
        this.selectedDate = null;
        this.editingEvent = null;
        
        this.availableStickers = ['🌱', '💚', '🌸', '⭐', '🌙', '☀️', '🎯', '📝', '💭', '🌈'];
        
        this.texts = {
            pt: {
                settings: 'Configurações',
                language: 'Idioma',
                'theme-color': 'Cor do Tema',
                'reminder-time': 'Horário do Lembrete',
                welcome: 'Bem-vindo ao Mellius',
                subtitle: 'Sua jornada de cuidado com a saúde mental começa aqui',
                description: 'Organize sua rotina, acompanhe seu bem-estar e cuide de si mesmo com carinho e atenção.',
                'calendar-title': 'Calendário Personalizado',
                'calendar-desc': 'Organize compromissos e atividades de autocuidado',
                'wellness-title': 'Foco no Bem-estar',
                'wellness-desc': 'Ferramentas dedicadas à sua saúde mental',
                'tracking-title': 'Acompanhamento Diário',
                'tracking-desc': 'Monitore seu progresso e crescimento pessoal',
                calendar: 'Calendário de Bem-estar',
                edit: 'Editar',
                save: 'Salvar',
                delete: 'Excluir',
                'add-event': 'Adicionar Evento',
                'event-title': 'Título do Evento',
                'event-description': 'Descrição',
                stickers: 'Adesivos',
                'drag-sticker': 'Arraste os adesivos para o calendário'
            },
            en: {
                settings: 'Settings',
                language: 'Language',
                'theme-color': 'Theme Color',
                'reminder-time': 'Reminder Time',
                welcome: 'Welcome to Mellius',
                subtitle: 'Your mental health care journey starts here',
                description: 'Organize your routine, track your well-being, and take care of yourself with love and attention.',
                'calendar-title': 'Custom Calendar',
                'calendar-desc': 'Organize appointments and self-care activities',
                'wellness-title': 'Wellness Focus',
                'wellness-desc': 'Tools dedicated to your mental health',
                'tracking-title': 'Daily Tracking',
                'tracking-desc': 'Monitor your progress and personal growth',
                calendar: 'Wellness Calendar',
                edit: 'Edit',
                save: 'Save',
                delete: 'Delete',
                'add-event': 'Add Event',
                'event-title': 'Event Title',
                'event-description': 'Description',
                stickers: 'Stickers',
                'drag-sticker': 'Drag stickers to calendar'
            },
            es: {
                settings: 'Configuración',
                language: 'Idioma',
                'theme-color': 'Color del Tema',
                'reminder-time': 'Hora del Recordatorio',
                welcome: 'Bienvenido a Mellius',
                subtitle: 'Tu viaje de cuidado de la salud mental comienza aquí',
                description: 'Organiza tu rutina, monitorea tu bienestar y cuídate con amor y atención.',
                'calendar-title': 'Calendario Personalizado',
                'calendar-desc': 'Organiza citas y actividades de autocuidado',
                'wellness-title': 'Enfoque en Bienestar',
                'wellness-desc': 'Herramientas dedicadas a tu salud mental',
                'tracking-title': 'Seguimiento Diario',
                'tracking-desc': 'Monitorea tu progreso y crecimiento personal',
                calendar: 'Calendario de Bienestar',
                edit: 'Editar',
                save: 'Guardar',
                delete: 'Eliminar',
                'add-event': 'Agregar Evento',
                'event-title': 'Título del Evento',
                'event-description': 'Descripción',
                stickers: 'Pegatinas',
                'drag-sticker': 'Arrastra las pegatinas al calendario'
            }
        };
        
        this.monthNames = {
            pt: ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 
                'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro'],
            en: ['January', 'February', 'March', 'April', 'May', 'June', 
                'July', 'August', 'September', 'October', 'November', 'December'],
            es: ['Enero', 'Febrero', 'Marzo', 'Abril', 'Mayo', 'Junio', 
                'Julio', 'Agosto', 'Septiembre', 'Octubre', 'Noviembre', 'Diciembre']
        };
        
        this.weekDays = {
            pt: ['Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb'],
            en: ['Sun', 'Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat'],
            es: ['Dom', 'Lun', 'Mar', 'Mié', 'Jue', 'Vie', 'Sáb']
        };
        
        this.init();
    }
    
    init() {
        this.loadSavedSettings();
        this.setupEventListeners();
        this.updateTexts();
        this.renderCalendar();
        this.renderStickers();
        this.startReminderChecker();
    }
    
    loadSavedSettings() {
        // Load saved settings from localStorage
        const savedTheme = localStorage.getItem('mellius-theme');
        const savedLanguage = localStorage.getItem('mellius-language');
        const savedThemeColor = localStorage.getItem('mellius-theme-color');
        const savedEvents = localStorage.getItem('mellius-calendar-events');
        
        if (savedTheme) {
            this.currentTheme = savedTheme;
            if (savedTheme === 'dark') {
                document.documentElement.classList.add('dark');
            }
        }
        
        if (savedLanguage) {
            this.currentLanguage = savedLanguage;
        }
        
        if (savedThemeColor) {
            this.currentThemeColor = savedThemeColor;
            this.applyThemeColor(savedThemeColor);
        }
        
        if (savedEvents) {
            this.events = JSON.parse(savedEvents);
        }
        
        this.updateThemeIcon();
    }
    
    setupEventListeners() {
        // Theme toggle
        document.getElementById('theme-toggle').addEventListener('click', () => {
            this.toggleTheme();
        });
        
        // Settings dropdown
        const settingsBtn = document.getElementById('settings-btn');
        const settingsDropdown = document.getElementById('settings-dropdown');
        
        settingsBtn.addEventListener('click', (e) => {
            e.stopPropagation();
            settingsDropdown.classList.toggle('active');
        });
        
        // Close dropdown when clicking outside
        document.addEventListener('click', (e) => {
            if (!settingsDropdown.contains(e.target) && !settingsBtn.contains(e.target)) {
                settingsDropdown.classList.remove('active');
            }
        });
        
        // Modal event listeners
        this.setupModalEventListeners();
    }
    
    setupModalEventListeners() {
        const modal = document.getElementById('event-modal');
        const closeModal = document.getElementById('close-modal');
        const saveEvent = document.getElementById('save-event');
        const deleteEvent = document.getElementById('delete-event');
        
        closeModal.addEventListener('click', () => {
            this.closeModal();
        });
        
        modal.addEventListener('click', (e) => {
            if (e.target === modal) {
                this.closeModal();
            }
        });
        
        saveEvent.addEventListener('click', () => {
            this.saveEvent();
        });
        
        deleteEvent.addEventListener('click', () => {
            this.deleteEvent();
        });
    }
    
    toggleTheme() {
        this.currentTheme = this.currentTheme === 'light' ? 'dark' : 'light';
        
        if (this.currentTheme === 'dark') {
            document.documentElement.classList.add('dark');
        } else {
            document.documentElement.classList.remove('dark');
        }
        
        localStorage.setItem('mellius-theme', this.currentTheme);
        this.updateThemeIcon();
    }
    
    updateThemeIcon() {
        const themeIcon = document.getElementById('theme-icon');
        
        if (this.currentTheme === 'dark') {
            themeIcon.innerHTML = `
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
            themeIcon.innerHTML = `
                <path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/>
            `;
        }
    }
    
    applyThemeColor(color) {
        const root = document.documentElement;
        
        const colorMappings = {
            mint: {
                primary: '155 65% 55%',
                primaryGlow: '155 45% 75%',
                ring: '155 65% 55%'
            },
            lavender: {
                primary: '260 50% 65%',
                primaryGlow: '260 35% 80%',
                ring: '260 50% 65%'
            },
            sky: {
                primary: '200 75% 55%',
                primaryGlow: '200 55% 75%',
                ring: '200 75% 55%'
            },
            warm: {
                primary: '25 75% 55%',
                primaryGlow: '25 55% 75%',
                ring: '25 75% 55%'
            }
        };
        
        const colorValues = colorMappings[color];
        if (colorValues) {
            root.style.setProperty('--primary', colorValues.primary);
            root.style.setProperty('--primary-glow', colorValues.primaryGlow);
            root.style.setProperty('--ring', colorValues.ring);
            root.style.setProperty('--wellness-mint', colorValues.primary);
            root.style.setProperty('--calendar-primary', colorValues.primary);
        }
    }
    
    updateTexts() {
        const elements = document.querySelectorAll('[data-i18n]');
        const texts = this.texts[this.currentLanguage];
        
        elements.forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (texts[key]) {
                el.textContent = texts[key];
            }
        });
        
        // Update placeholders
        const titleInput = document.getElementById('event-title');
        const descInput = document.getElementById('event-description');
        const timeInput = document.getElementById('reminder-time');
        
        if (titleInput && texts['event-title']) {
            titleInput.placeholder = texts['event-title'];
        }
        
        if (descInput && texts['event-description']) {
            descInput.placeholder = texts['event-description'];
        }
        
        if (timeInput && texts['reminder-time']) {
            timeInput.title = texts['reminder-time'];
        }
    }
    
    renderCalendar() {
        const calendarContainer = document.getElementById('wellness-calendar');
        const texts = this.texts[this.currentLanguage];
        
        calendarContainer.innerHTML = `
            <div class="calendar-header">
                <div class="calendar-title-row">
                    <div class="calendar-title">
                        <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                            <rect x="3" y="4" width="18" height="18" rx="2" ry="2"/>
                            <line x1="16" y1="2" x2="16" y2="6"/>
                            <line x1="8" y1="2" x2="8" y2="6"/>
                            <line x1="3" y1="10" x2="21" y2="10"/>
                        </svg>
                        <span>${texts.calendar}</span>
                    </div>
                    <div class="calendar-controls">
                        <button class="btn" onclick="app.saveToLocalStorage()">
                            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z"/>
                                <polyline points="17,21 17,13 7,13 7,21"/>
                                <polyline points="7,3 7,8 15,8"/>
                            </svg>
                            ${texts.save}
                        </button>
                    </div>
                </div>
                
                <div class="calendar-nav">
                    <button class="nav-btn" onclick="app.navigateMonth('prev')">‹</button>
                    <div class="calendar-month">
                        ${this.monthNames[this.currentLanguage][this.currentDate.getMonth()]} ${this.currentDate.getFullYear()}
                    </div>
                    <button class="nav-btn" onclick="app.navigateMonth('next')">›</button>
                </div>
            </div>
            
            <div class="calendar-body">
                <div class="calendar-grid">
                    ${this.renderWeekDays()}
                    ${this.renderCalendarDays()}
                </div>
            </div>
        `;
        
        this.renderStickers();
    }
    
    renderWeekDays() {
        const weekDays = this.weekDays[this.currentLanguage];
        return weekDays.map(day => 
            `<div class="calendar-weekday">${day}</div>`
        ).join('');
    }
    
    renderCalendarDays() {
        const days = this.getDaysInMonth();
        
        return days.map((day, index) => {
            if (!day) {
                return '<div class="calendar-day"></div>';
            }
            
            const event = this.getEventForDate(day);
            const dateString = this.formatDateString(day);
            
            return `
                <div class="calendar-day ${event ? 'has-event' : ''}" 
                     data-date="${dateString}"
                     ondrop="app.handleCalendarDrop(event, '${dateString}')"
                     ondragover="app.handleDragOver(event)">
                    <div class="day-number">${day}</div>
                    ${event ? `
                        <div class="day-content">
                            <div class="event-title">${event.title}</div>
                            <div class="event-description">${event.description}</div>
                        </div>
                        <button class="edit-event-btn" onclick="app.editEvent('${dateString}')">
                            <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                                <path d="M11 4H4a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2v-7"/>
                                <path d="M18.5 2.5a2.121 2.121 0 0 1 3 3L12 15l-4 1 1-4 9.5-9.5z"/>
                            </svg>
                        </button>
                        ${this.renderStickersForDate(event)}
                    ` : `
                        <button class="add-event-btn" onclick="app.addEvent('${dateString}')">+</button>
                    `}
                </div>
            `;
        }).join('');
    }
    
    renderStickersForDate(event) {
        if (!event.stickers) return '';
        
        return event.stickers.map(sticker => `
            <div class="sticker-on-calendar" style="left: ${sticker.x}px; top: ${sticker.y}px;">
                ${sticker.emoji}
            </div>
        `).join('');
    }
    
    renderStickers() {
        const stickersHTML = `
            <div class="stickers-panel">
                <div class="stickers-header">
                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                        <circle cx="12" cy="12" r="8"/>
                        <path d="M8 12h8"/>
                        <path d="M12 8v8"/>
                    </svg>
                    <span class="stickers-title">${this.texts[this.currentLanguage].stickers}</span>
                </div>
                <div class="stickers-subtitle">${this.texts[this.currentLanguage]['drag-sticker']}</div>
                <div class="stickers-grid">
                    ${this.availableStickers.map(sticker => `
                        <div class="sticker" 
                             draggable="true" 
                             ondragstart="app.handleStickerDragStart('${sticker}')">
                            ${sticker}
                        </div>
                    `).join('')}
                </div>
            </div>
        `;
        
        // Append stickers panel after calendar
        const calendarContainer = document.getElementById('wellness-calendar');
        if (!document.querySelector('.stickers-panel')) {
            calendarContainer.insertAdjacentHTML('afterend', stickersHTML);
        }
    }
    
    getDaysInMonth() {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth();
        const firstDay = new Date(year, month, 1);
        const lastDay = new Date(year, month + 1, 0);
        const daysInMonth = lastDay.getDate();
        const startingDay = firstDay.getDay();
        
        const days = [];
        
        // Add empty cells for days before the first day of the month
        for (let i = 0; i < startingDay; i++) {
            days.push(null);
        }
        
        // Add all days of the month
        for (let day = 1; day <= daysInMonth; day++) {
            days.push(day);
        }
        
        return days;
    }
    
    formatDateString(day) {
        const year = this.currentDate.getFullYear();
        const month = this.currentDate.getMonth() + 1;
        return `${year}-${month.toString().padStart(2, '0')}-${day.toString().padStart(2, '0')}`;
    }
    
    getEventForDate(day) {
        if (typeof day === 'string') {
            return this.events.find(event => event.date === day);
        }
        const dateString = this.formatDateString(day);
        return this.events.find(event => event.date === dateString);
    }
    
    navigateMonth(direction) {
        if (direction === 'prev') {
            this.currentDate.setMonth(this.currentDate.getMonth() - 1);
        } else {
            this.currentDate.setMonth(this.currentDate.getMonth() + 1);
        }
        this.renderCalendar();
    }
    
    addEvent(dateString) {
        this.selectedDate = dateString;
        this.editingEvent = null;
        
        // Clear form
        document.getElementById('event-title').value = '';
        document.getElementById('event-description').value = '';
        document.getElementById('reminder-time').value = '';
        document.getElementById('delete-event').style.display = 'none';
        
        this.openModal();
    }
    
    editEvent(dateString) {
        this.selectedDate = dateString;
        this.editingEvent = this.getEventForDate(dateString);
        
        if (this.editingEvent) {
            document.getElementById('event-title').value = this.editingEvent.title;
            document.getElementById('event-description').value = this.editingEvent.description;
            document.getElementById('reminder-time').value = this.editingEvent.reminderTime || '';
            document.getElementById('delete-event').style.display = 'block';
        }
        
        this.openModal();
    }
    
    openModal() {
        const modal = document.getElementById('event-modal');
        modal.classList.add('active');
    }
    
    closeModal() {
        const modal = document.getElementById('event-modal');
        modal.classList.remove('active');
        this.selectedDate = null;
        this.editingEvent = null;
    }
    
    saveEvent() {
        const title = document.getElementById('event-title').value.trim();
        const description = document.getElementById('event-description').value.trim();
        const reminderTime = document.getElementById('reminder-time').value;
        
        if (!title && !description) return;
        
        if (this.editingEvent) {
            // Update existing event
            this.editingEvent.title = title;
            this.editingEvent.description = description;
            this.editingEvent.reminderTime = reminderTime;
            this.editingEvent.reminded = false; // Reset reminder status
        } else {
            // Create new event
            const newEvent = {
                id: Date.now().toString(),
                date: this.selectedDate,
                title,
                description,
                reminderTime,
                reminded: false,
                color: '#6EE7B7',
                stickers: []
            };
            
            // Remove any existing event for this date
            this.events = this.events.filter(event => event.date !== this.selectedDate);
            this.events.push(newEvent);
        }
        
        this.closeModal();
        this.renderCalendar();
        this.saveToLocalStorage();
    }
    
    deleteEvent() {
        if (this.editingEvent) {
            this.events = this.events.filter(event => event.id !== this.editingEvent.id);
            this.closeModal();
            this.renderCalendar();
            this.saveToLocalStorage();
        }
    }
    
    handleStickerDragStart(sticker) {
        this.draggedSticker = sticker;
    }
    
    handleCalendarDrop(e, dateString) {
        e.preventDefault();
        
        if (!this.draggedSticker) return;
        
        const rect = e.currentTarget.getBoundingClientRect();
        const x = e.clientX - rect.left - 12; // Center the sticker
        const y = e.clientY - rect.top - 12;
        
        const newSticker = {
            id: Date.now().toString(),
            emoji: this.draggedSticker,
            x: x,
            y: y
        };
        
        let event = this.getEventForDate(dateString);
        
        if (event) {
            // Add sticker to existing event
            if (!event.stickers) event.stickers = [];
            event.stickers.push(newSticker);
        } else {
            // Create new event with sticker
            const newEvent = {
                id: Date.now().toString(),
                date: dateString,
                title: '',
                description: '',
                color: '#6EE7B7',
                stickers: [newSticker]
            };
            this.events.push(newEvent);
        }
        
        this.draggedSticker = null;
        this.renderCalendar();
        this.saveToLocalStorage();
    }
    
    handleDragOver(e) {
        e.preventDefault();
        e.currentTarget.classList.add('drag-over');
        
        // Remove drag-over class after a short delay
        setTimeout(() => {
            e.currentTarget.classList.remove('drag-over');
        }, 200);
    }
    
    saveToLocalStorage() {
        localStorage.setItem('mellius-calendar-events', JSON.stringify(this.events));
        
        // Show save confirmation (simple alert for now)
        const saveBtn = document.querySelector('.calendar-controls .btn');
        const originalText = saveBtn.innerHTML;
        saveBtn.innerHTML = `
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                <polyline points="20,6 9,17 4,12"/>
            </svg>
            Salvo!
        `;
        
        setTimeout(() => {
            saveBtn.innerHTML = originalText;
        }, 2000);
    }
    
    startReminderChecker() {
        // Check reminders every minute
        setInterval(() => {
            this.checkReminders();
        }, 60000);
        
        // Also check immediately on start
        this.checkReminders();
    }
    
    checkReminders() {
        const now = new Date();
        
        this.events.forEach(event => {
            if (event.reminderTime && !event.reminded) {
                const eventDate = new Date(event.date + 'T' + event.reminderTime);
                
                // Check if reminder time has passed (within 1 minute)
                const timeDiff = now.getTime() - eventDate.getTime();
                if (timeDiff >= 0 && timeDiff < 60000) {
                    this.triggerReminder(event);
                    event.reminded = true;
                    this.saveToLocalStorage();
                }
            }
        });
    }
    
    triggerReminder(event) {
        // Play notification sound
        this.playNotificationSound();
        
        // Show alert
        const reminderMessage = `🔔 Lembrete: ${event.title}\n${event.description}`;
        alert(reminderMessage);
        
        // Optional: Show a more styled notification if browser supports it
        if ('Notification' in window && Notification.permission === 'granted') {
            new Notification('Mellius - Lembrete', {
                body: `${event.title}\n${event.description}`,
                icon: 'data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M9.5 2A2.5 2.5 0 0 1 12 4.5v15a2.5 2.5 0 0 1-4.96.44 2.5 2.5 0 0 1-2.96-3.08 3 3 0 0 1-.34-5.58 2.5 2.5 0 0 1 1.32-4.24 2.5 2.5 0 0 1 1.98-3A2.5 2.5 0 0 1 9.5 2Z"/><path d="M14.5 2A2.5 2.5 0 0 0 12 4.5v15a2.5 2.5 0 0 0 4.96.44 2.5 2.5 0 0 0 2.96-3.08 3 3 0 0 0 .34-5.58 2.5 2.5 0 0 0-1.32-4.24 2.5 2.5 0 0 0-1.98-3A2.5 2.5 0 0 0 14.5 2Z"/></svg>'
            });
        }
    }
    
    playNotificationSound() {
        // Create audio context and generate a pleasant notification sound
        try {
            const audioContext = new (window.AudioContext || window.webkitAudioContext)();
            
            // Create a pleasant chime sound
            const oscillator1 = audioContext.createOscillator();
            const oscillator2 = audioContext.createOscillator();
            const gainNode = audioContext.createGain();
            
            oscillator1.connect(gainNode);
            oscillator2.connect(gainNode);
            gainNode.connect(audioContext.destination);
            
            // Frequencies for a pleasant chime
            oscillator1.frequency.setValueAtTime(880, audioContext.currentTime); // A5
            oscillator2.frequency.setValueAtTime(1320, audioContext.currentTime); // E6
            
            oscillator1.type = 'sine';
            oscillator2.type = 'sine';
            
            // Envelope
            gainNode.gain.setValueAtTime(0, audioContext.currentTime);
            gainNode.gain.linearRampToValueAtTime(0.3, audioContext.currentTime + 0.1);
            gainNode.gain.exponentialRampToValueAtTime(0.01, audioContext.currentTime + 1);
            
            oscillator1.start(audioContext.currentTime);
            oscillator2.start(audioContext.currentTime);
            
            oscillator1.stop(audioContext.currentTime + 1);
            oscillator2.stop(audioContext.currentTime + 1);
        } catch (error) {
            // Fallback: Try to play a simple beep sound
            console.log('Reminder!');
        }
    }
    
    requestNotificationPermission() {
        if ('Notification' in window && Notification.permission === 'default') {
            Notification.requestPermission();
        }
    }
}

// Global functions for HTML event handlers
function changeLanguage(lang) {
    app.currentLanguage = lang;
    localStorage.setItem('mellius-language', lang);
    app.updateTexts();
    app.renderCalendar();
    
    // Close dropdown
    document.getElementById('settings-dropdown').classList.remove('active');
}

function changeThemeColor(color) {
    app.currentThemeColor = color;
    app.applyThemeColor(color);
    localStorage.setItem('mellius-theme-color', color);
    
    // Close dropdown
    document.getElementById('settings-dropdown').classList.remove('active');
}

// Initialize the app when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.app = new MelliusApp();
    
    // Request notification permission on page load
    app.requestNotificationPermission();
});