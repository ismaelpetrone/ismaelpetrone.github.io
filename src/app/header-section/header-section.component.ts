import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";
import { LanguageService } from "../language.service";
import { allInformation } from "../../information";

@Component({
  selector: 'app-header',
  templateUrl: './header-section.component.html',
  styleUrls: ['./header-section.component.scss']
})
export class HeaderSectionComponent implements OnInit {
  isDark: boolean;
  greeting = allInformation.en.introduction;
  information = {
    navLinks: allInformation.en.navLinks,
    introduction: allInformation.en.introduction,
    socialMediaLinks: allInformation.en.socialMediaLinks,
    splashScreen: allInformation.en.splashScreen,
    skillsSection: allInformation.en.skillsSection,
    myJourney: allInformation.en.myJourney,
    openSource: allInformation.en.openSource,
    achievementSection: allInformation.en.achievementSection,
    majorProjects: allInformation.en.majorProjects
  }

  constructor(public theme: ThemeService, public languageService: LanguageService) { }

  ngOnInit(): void {
    this.isDark = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDark = mode == true;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.greeting = allInformation[lang].introduction;
      this.information = {
        navLinks: allInformation[lang].navLinks,
        introduction: allInformation[lang].introduction,
        socialMediaLinks: allInformation[lang].socialMediaLinks,
        splashScreen: allInformation[lang].splashScreen,
        skillsSection: allInformation[lang].skillsSection,
        myJourney: allInformation[lang].myJourney,
        openSource: allInformation[lang].openSource,
        achievementSection: allInformation[lang].achievementSection,
        majorProjects: allInformation[lang].majorProjects
      };
    });
  }

  toggleLanguage() {
    const nextLang = this.languageService.getLanguage() === 'en' ? 'es' : 'en';
    this.languageService.setLanguage(nextLang);
  }
}
