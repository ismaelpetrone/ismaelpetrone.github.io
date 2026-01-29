import { Component, OnInit, ViewChild, ElementRef, AfterViewChecked } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { MatDialogRef } from '@angular/material/dialog';

interface Message {
    text: string;
    sender: 'user' | 'bot';
    time: Date;
}

@Component({
    selector: 'app-chatbot-dialog',
    templateUrl: './chatbot-dialog.component.html',
    styleUrls: ['./chatbot-dialog.component.scss']
})
export class ChatbotDialogComponent implements OnInit, AfterViewChecked {
    @ViewChild('scrollMe') private myScrollContainer: ElementRef;

    userInput = '';
    messages: Message[] = [
        { text: 'Hola, ¿qué información necesitas sobre Ismael?', sender: 'bot', time: new Date() }
    ];
    sessionId: string;
    isTyping = false;

    private apiUrl = 'https://n8n-agentdragon.cgm783.easypanel.host/webhook/f2198185-b2b1-4987-b61d-3da520f13f4d';

    constructor(
        private http: HttpClient,
        public dialogRef: MatDialogRef<ChatbotDialogComponent>
    ) { }

    ngOnInit(): void {
        this.sessionId = sessionStorage.getItem('chatSessionId');
        if (!this.sessionId) {
            this.sessionId = this.generateUUID();
            sessionStorage.setItem('chatSessionId', this.sessionId);
        }
    }

    ngAfterViewChecked() {
        this.scrollToBottom();
    }

    close() {
        this.dialogRef.close();
    }

    sendMessage() {
        if (!this.userInput.trim()) return;

        const userMsg = this.userInput;
        this.messages.push({ text: userMsg, sender: 'user', time: new Date() });
        this.userInput = '';
        this.isTyping = true;

        this.http.post(this.apiUrl, {
            message: userMsg,
            sessionId: this.sessionId
        }, { responseType: 'text' }).subscribe(
            (response: string) => {
                this.messages.push({ text: response, sender: 'bot', time: new Date() });
                this.isTyping = false;
            },
            (error) => {
                console.error('Error sending message:', error);
                this.messages.push({ text: 'Lo siento, hubo un error al conectar con el servidor.', sender: 'bot', time: new Date() });
                this.isTyping = false;
            }
        );
    }

    private scrollToBottom(): void {
        try {
            this.myScrollContainer.nativeElement.scrollTop = this.myScrollContainer.nativeElement.scrollHeight;
        } catch (err) { }
    }

    private generateUUID(): string {
        return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'.replace(/[xy]/g, function (c) {
            var r = Math.random() * 16 | 0, v = c == 'x' ? r : (r & 0x3 | 0x8);
            return v.toString(16);
        });
    }
}
