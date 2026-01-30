import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { LanguageService } from '../language.service';
import { allInformation } from '../../information';

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
    messages: Message[] = [];
    sessionId: string;
    isTyping = false;
    information = allInformation.en;

    private apiUrl = 'https://n8n-agentdragon.cgm783.easypanel.host/webhook/f2198185-b2b1-4987-b61d-3da520f13f4d';

    constructor(private http: HttpClient, private languageService: LanguageService) {
        console.log('ChatbotComponent initialized');
    }

    ngOnInit(): void {
        this.sessionId = sessionStorage.getItem('chatSessionId');
        if (!this.sessionId) {
            this.sessionId = this.generateUUID();
            sessionStorage.setItem('chatSessionId', this.sessionId);
        }

        this.languageService.currentLanguage$.subscribe(lang => {
            this.information = allInformation[lang];
            // If it's the first initialization or if the only message is the initial one, update it
            if (this.messages.length === 0) {
                this.messages = [
                    { text: this.information.chatbot.initialMessage, sender: 'bot', time: new Date() }
                ];
            } else if (this.messages.length === 1 &&
                (this.messages[0].text === allInformation.en.chatbot.initialMessage ||
                    this.messages[0].text === allInformation.es.chatbot.initialMessage)) {
                this.messages[0].text = this.information.chatbot.initialMessage;
            }
        });
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
                // Check if response is empty, undefined, or just whitespace
                const botResponse = (response && response.trim()) ? response : this.information.chatbot.error;
                this.messages.push({ text: botResponse, sender: 'bot', time: new Date() });
                this.isTyping = false;
                this.scrollToBottom();
            },
            (error) => {
                console.error('Error sending message:', error);
                // Showing the requested error message even on network failure as per requirements
                this.messages.push({ text: this.information.chatbot.error, sender: 'bot', time: new Date() });
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
