import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";
import { LanguageService } from "../language.service";
import { allInformation } from "../../information";

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.scss']
})
export class WorkExperienceComponent implements OnInit {
  isDark = false;
  workExperience = allInformation.en.myJourney;

  constructor(private theme: ThemeService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode == true;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.workExperience = allInformation[lang].myJourney;
    });
  }
}
