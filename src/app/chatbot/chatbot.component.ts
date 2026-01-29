import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';

interface Message {
    text: string;
    sender: 'user' | 'bot';
    time: Date;
}

@Component({
    selector: 'app-chatbot',
    templateUrl: './chatbot.component.html',
    styleUrls: ['./chatbot.component.scss']
})
export class ChatbotComponent implements OnInit, AfterViewChecked {
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    isOpen = false;
    userInput = '';
    messages: Message[] = [
        { text: 'Hola, ¿qué información necesitas sobre Ismael?', sender: 'bot', time: new Date() }
    ];
    sessionId: string;
    isTyping = false;

    private apiUrl = 'https://n8n-agentdragon.cgm783.easypanel.host/webhook/f2198185-b2b1-4987-b61d-3da520f13f4d';

    constructor(private http: HttpClient) {
        console.log('ChatbotComponent initialized');
    }

    ngOnInit(): void {
        this.sessionId = sessionStorage.getItem('chatSessionId');
        if (!this.sessionId) {
            this.sessionId = this.generateUUID();
            sessionStorage.setItem('chatSessionId', this.sessionId);
        }
    }

    ngAfterViewChecked() {
        if (this.isOpen) {
            this.scrollToBottom();
        }
    }

    toggleChat() {
        this.isOpen = !this.isOpen;
        console.log('Chat status:', this.isOpen ? 'Opened' : 'Minimized');
        if (this.isOpen) {
            setTimeout(() => this.scrollToBottom(), 100);
        }
    }

    sendMessage() {
        if (!this.userInput.trim()) return;

        const userMsg = this.userInput;
        this.messages.push({ text: userMsg, sender: 'user', time: new Date() });
        this.userInput = '';
        this.isTyping = true;
        this.scrollToBottom();

        this.http.post(this.apiUrl, {
            message: userMsg,
            sessionId: this.sessionId
        }, { responseType: 'text' }).subscribe(
            (response: string) => {
                this.messages.push({ text: response, sender: 'bot', time: new Date() });
                this.isTyping = false;
                this.scrollToBottom();
            },
            (error) => {
                console.error('Error sending message:', error);
                this.messages.push({ text: 'Lo siento, hubo un error al conectar con el servidor.', sender: 'bot', time: new Date() });
                this.isTyping = false;
                this.scrollToBottom();
            }
        );
    }

    private scrollToBottom(): void {
        try {
            if (this.myScrollContainer) {
                this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
            }
        } catch (err) { }
    }

    private generateUUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
