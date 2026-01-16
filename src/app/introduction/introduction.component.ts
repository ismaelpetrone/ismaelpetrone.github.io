import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";
import { LanguageService } from "../language.service";
import { allInformation } from "../../information";

@Component({
  selector: 'app-introduction',
  templateUrl: './introduction.component.html',
  styleUrls: ['./introduction.component.scss']
})
export class IntroductionComponent implements OnInit {
  isDark = true;
  greeting = allInformation.en.introduction;

  constructor(private theme: ThemeService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode == true;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.greeting = allInformation[lang].introduction;
    });
  }
}
