class SchoolChatbot {
    constructor() {
        this.chatButton = document.getElementById('chatbotButton');
        this.chatModal = document.getElementById('chatbotModal');
        this.closeButton = document.getElementById('closeChat');
        this.messageInput = document.getElementById('messageInput');
        this.sendButton = document.getElementById('sendButton');
        this.messagesContainer = document.getElementById('chatMessages');

        this.isOpen = false;
        this.responses = this.initializeResponses();

        this.init();
    }

    init() {
        // Event listeners
        this.chatButton.addEventListener('click', () => this.toggleChat());
        this.closeButton.addEventListener('click', () => this.closeChat());
        this.sendButton.addEventListener('click', () => this.sendMessage());
        this.messageInput.addEventListener('keypress', (e) => {
            if (e.key === 'Enter') this.sendMessage();
        });

        // Mostrar botão em telas pequenas SEM depender do footer
        this.handleMobileVisibility();
        window.addEventListener('resize', () => this.handleMobileVisibility());

        // Fechar modal ao clicar fora
        document.addEventListener('click', (e) => {
            if (this.isOpen && !this.chatModal.contains(e.target) && !this.chatButton.contains(e.target)) {
                this.closeChat();
            }
        });
    }

    initializeResponses() {
        return {
            'olá': 'Olá! Como posso ajudá-lo hoje?',
            'oi': 'Olá! Como posso ajudá-lo hoje?',
            'tudo bem?': 'Olá! Como posso ajudá-lo hoje?',
            'boa tarte': 'Olá! Como posso ajudá-lo hoje?',
            'boa noite': 'Olá! Como posso ajudá-lo hoje?',
            'bom dia': 'Olá! Como posso ajudá-lo hoje?',
            'é como?': 'Olá! Como posso ajudá-lo hoje?',
            'tranquilo?': 'Olá! Como posso ajudá-lo hoje?',
            'suave': 'Olá! Como posso ajudá-lo hoje?',
            'horario': 'Nosso horário de funcionamento é de segunda a sexta das 8h às 16h e aos sábados das 8h às 12h.',
            'classe': 'Temos classes do 1º e 2º Ano do Ensino Fundamental, e da 10ª à 13ª classe.',
            'curso': 'Oferecemos os seguintes cursos: Informática, Direito, Estomatologia, Fisioterapia, Farmácia, Nutrição e Dietética, Ciências Económicas e Jurídicas, Contabilidade e Gestão, Administração e Gestão Empresarial, Estatísticas e Planificação, Secretariado, Ciências Físicas e Biológicas.',
            'endereco': 'Estamos localizados na Rua Hoji-Ya-Henda, Avenida Brasil, Vila Alice - Luanda.',
            'contato': 'Pode contactar a secretaria pelo telefone ou WhatsApp: +244 922 468 686.',
            'matricula': 'A matrícula pode ser feita presencialmente ou com pré-matrícula online. Depois, deve dirigir-se à escola para concluir.',
            'professor': 'Para saber sobre os professores e suas turmas, entre em contacto com a secretaria pelo telefone ou WhatsApp: +244 922 468 686.',
            'avaliacao': 'Para informações sobre avaliações, dirija-se à escola.',
            'falta professor': 'Se um professor faltar, deve procurar a direção para mais informações.',
            'calendario': 'As aulas iniciam no dia 1 de setembro de cada ano letivo.',
            'evento': 'Sobre eventos e excursões, entre em contacto com a secretaria.',
            'declaracao': 'Leve uma cópia do seu BI e dirija-se à secretaria. Pode haver um custo, verifique lá.',
            'historico': 'Leve uma cópia do seu BI e vá à secretaria. Pode haver um custo, confira no local.',
            'atestado': 'Sim, fornecemos atestado de frequência. Para mais informações, contacte a secretaria.',
            'boletim': 'O boletim escolar é entregue apenas aos encarregados de educação na escola.',
            'falta aluno': 'O aluno não deve faltar sem justificativa. Traga um documento para comprovar a ausência.',
            'nota': 'Para recuperar uma nota baixa, procure a secretaria.',
            'portal': 'O portal do estudante está em manutenção no momento.',
            'material': 'Para acessar o material didático, vá à biblioteca ou contacte a secretaria.',
            'contato professor': 'Não é possível contactar professores diretamente pelo site ou portal do aluno.',
            'obrigado': 'De nada! Fico feliz em ajudar. Há mais alguma coisa que gostaria de saber?',
            'tchau': 'Até logo! Estarei aqui sempre que precisar. Tenha um ótimo dia!',
            'mensalidade': 'A mensalidade varia de acordo ao nível, pra mais informações contacte a secretaria. ',
            'propina': 'A mensalidade varia de acordo ao nível, pra mais informações contacte a secretaria. ',
            'até logo': 'Até logo! Estarei aqui sempre que precisar. Tenha um ótimo dia!',
            'default': 'Desculpe, não entendi sua pergunta. Você pode perguntar sobre: horário, cursos, matrícula, endereço, documentos, professores, boletim, eventos ou secretaria.'
        };
    }


    toggleChat() {
        if (this.isOpen) {
            this.closeChat();
        } else {
            this.openChat();
        }
    }

    openChat() {
        this.chatModal.classList.add('show');
        this.isOpen = true;
        this.messageInput.focus();
    }

    closeChat() {
        this.chatModal.classList.remove('show');
        this.isOpen = false;
    }

    sendMessage() {
        const message = this.messageInput.value.trim();
        if (!message) return;

        this.addMessage(message, 'user');
        this.messageInput.value = '';
        this.showTypingIndicator();

        setTimeout(() => {
            this.hideTypingIndicator();
            const response = this.generateResponse(message);
            this.addMessage(response, 'bot');
        }, 1000 + Math.random() * 1000);
    }

    addMessage(content, sender) {
        const messageDiv = document.createElement('div');
        messageDiv.className = `message ${sender}`;

        messageDiv.innerHTML = sender === 'bot'
            ? `<div class="message-avatar"><i class="bi bi-robot"></i></div><div class="message-content">${content}</div>`
            : `<div class="message-content">${content}</div>`;

        this.messagesContainer.appendChild(messageDiv);
        this.scrollToBottom();
    }

    showTypingIndicator() {
        const typingDiv = document.createElement('div');
        typingDiv.className = 'message bot';
        typingDiv.id = 'typingIndicator';
        typingDiv.innerHTML = `
            <div class="message-avatar">
                <i class="bi bi-robot"></i>
            </div>
            <div class="typing-indicator" style="display: block;">
                <div class="typing-dots">
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                    <div class="typing-dot"></div>
                </div>
            </div>
        `;

        this.messagesContainer.appendChild(typingDiv);
        this.scrollToBottom();
    }

    hideTypingIndicator() {
        const typingIndicator = document.getElementById('typingIndicator');
        if (typingIndicator) typingIndicator.remove();
    }

    generateResponse(message) {
        const lowerMessage = message.toLowerCase();

        for (const [key, response] of Object.entries(this.responses)) {
            if (key !== 'default' && lowerMessage.includes(key)) return response;
        }

        if (lowerMessage.includes('obrigad')) return 'De nada! Fico feliz em ajudar. Há mais alguma coisa que gostaria de saber?';
        if (lowerMessage.includes('tchau') || lowerMessage.includes('ate logo')) return 'Até logo! Estarei aqui sempre que precisar. Tenha um ótimo dia!';

        return this.responses.default;
    }

    scrollToBottom() {
        this.messagesContainer.scrollTop = this.messagesContainer.scrollHeight;
    }

    handleMobileVisibility() {
        if (window.innerWidth <= 500) {
            this.chatButton.classList.add('show-mobile'); // Sempre mostra no mobile
        } else {
            this.chatButton.classList.remove('show-mobile');
        }
    }
}

// Inicializar o chatbot quando a página carregar
document.addEventListener('DOMContentLoaded', () => {
    new SchoolChatbot();
});
