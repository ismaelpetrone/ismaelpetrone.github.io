import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";
import { LanguageService } from "../language.service";
import { allInformation } from "../../information";

@Component({
  selector: 'app-software-skills',
  templateUrl: './software-skills.component.html',
  styleUrls: ['./software-skills.component.scss']
})
export class SoftwareSkillsComponent implements OnInit {
  skills = allInformation.en.skillsSection;
  softwareSkills = this.skills.softwareSkills;
  skillsSectionHeading = this.skills.softwareSkillsHeader;
  isDark: boolean;

  constructor(private theme: ThemeService, private languageService: LanguageService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode == true;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.skills = allInformation[lang].skillsSection;
      this.softwareSkills = this.skills.softwareSkills;
      this.skillsSectionHeading = this.skills.softwareSkillsHeader;
    });
  }
}
