import Template, { ThemeTemplateInterface} from './ThemeTemplate';

export interface MainThemeInterface extends ThemeTemplateInterface {
    colors: {
        primary: string;
        secondary: string;
        text: string;
    }
}

export const MainTheme: MainThemeInterface = {
    ...Template,
    colors: {
        primary: '#0f1111',
        secondary: '#232f3e',
        text: '#ffffff',
    },
}