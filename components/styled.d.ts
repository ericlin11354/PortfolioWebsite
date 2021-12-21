import 'styled-components';
import { MainThemeInterface } from './Themes';

// Add theme to 'styled-components'
declare module 'styled-components' {
    export interface DefaultTheme extends MainThemeInterface {}
}
