import { Component, OnInit } from '@angular/core';
import { ThemeService } from '../theme.service';
import { LanguageService } from "../language.service";
import { allInformation } from "../../information";

@Component({
    selector: 'app-featured-projects',
    templateUrl: './featured-projects.component.html',
    styleUrls: ['./featured-projects.component.scss']
})
export class FeaturedProjectsComponent implements OnInit {
    projectsSection = allInformation.en.majorProjects;
    isDarkMode: boolean;

    constructor(private theme: ThemeService, private languageService: LanguageService) { }

    ngOnInit(): void {
        this.isDarkMode = this.theme.isDarkMode();
        this.theme.darkTheme$.subscribe((mode) => {
            this.isDarkMode = mode;
        });

        this.languageService.currentLanguage$.subscribe(lang => {
            this.projectsSection = allInformation[lang].majorProjects;
        });
    }
}
