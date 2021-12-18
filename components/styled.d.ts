import 'styled-components';
import { MainTheme, MainThemeInterface } from './Themes';

// Add theme to 'styled-components'
declare module 'styled-components' {
    export interface DefaultTheme extends MainThemeInterface { }
}
