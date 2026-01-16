import * as en from './information.en';
import * as es from './information.es';

export const allInformation: any = {
  en,
  es
};

// Default exports for backward compatibility (will point to English by default)
export const navLinks = en.navLinks;
export const introduction = en.introduction;
export const socialMediaLinks = en.socialMediaLinks;
export const skillsSection = en.skillsSection;
export const myJourney = en.myJourney;
export const majorProjects = en.majorProjects;
export const openSource = en.openSource;
export const achievementSection = en.achievementSection;
export const splashScreen = en.splashScreen;
