import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";
import { LanguageService } from "../language.service";
import { allInformation } from '../../information';

@Component({
  selector: 'app-achievement-section',
  templateUrl: './achievements-section.component.html',
  styleUrls: ['./achievements-section.component.scss']
})
export class AchievementsSectionComponent implements OnInit {
  isDarkMode: boolean;
  achievementSection = allInformation.en.achievementSection;

  constructor(private theme: ThemeService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.isDarkMode = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDarkMode = mode == true;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.achievementSection = allInformation[lang].achievementSection;
    });
  }
}
