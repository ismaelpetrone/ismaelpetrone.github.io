import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";
import { LanguageService } from "../language.service";
import { allInformation } from "../../information";

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.scss']
})
export class SkillsComponent implements OnInit {
  isDark: boolean = false;
  skillsImage: string;
  skillsSection = allInformation.en.skillsSection;

  constructor(private theme: ThemeService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode == true;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.skillsSection = allInformation[lang].skillsSection;
      this.skillsImage = this.skillsSection.skillsAvatar;
    });
  }
}
