import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({
    providedIn: 'root'
})
export class LanguageService {
    private currentLanguageSubject = new BehaviorSubject<string>(localStorage.getItem('language') || 'en');
    currentLanguage$ = this.currentLanguageSubject.asObservable();

    constructor() { }

    setLanguage(lang: string) {
        localStorage.setItem('language', lang);
        this.currentLanguageSubject.next(lang);
    }

    getLanguage(): string {
        return this.currentLanguageSubject.value;
    }
}
