import { Component, OnInit } from '@angular/core';
import { ThemeService } from "./theme.service";
import { LanguageService } from "./language.service";
import { allInformation } from "../information";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  isDarkMode: boolean;
  selectedTab = 0;
  tabCount = 8;
  information = allInformation.en;

  constructor(private theme: ThemeService, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.isDarkMode = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDarkMode = mode == true;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.information = allInformation[lang];
    });
  }
}
