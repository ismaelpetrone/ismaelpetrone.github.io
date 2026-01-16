import { Component, OnInit } from '@angular/core';
import { ThemeService } from "../theme.service";
import { LanguageService } from "../language.service";
import { allInformation } from '../../information';
import { GithubService } from "../github.service";

@Component({
  selector: 'app-passion-projects',
  templateUrl: './passion-projects.component.html',
  styleUrls: ['./passion-projects.component.scss']
})
export class PassionProjectsComponent implements OnInit {
  passionProjects = allInformation.en.openSource;
  repo = [];
  isDarkMode: boolean;
  socialMediaLinks = allInformation.en.socialMediaLinks;

  constructor(private theme: ThemeService, private github: GithubService, private languageService: LanguageService) {
  }

  ngOnInit(): void {
    this.isDarkMode = this.theme.isDarkMode();
    this.theme.darkTheme$.subscribe((mode) => {
      this.isDarkMode = mode == true;
    });

    this.languageService.currentLanguage$.subscribe(lang => {
      this.passionProjects = allInformation[lang].openSource;
      this.socialMediaLinks = allInformation[lang].socialMediaLinks;
    });

    this.github.getData().subscribe((res: any) => this.repo = res);
    this.github.initializeRepoData();
    console.log(this.repo);
  }
}
