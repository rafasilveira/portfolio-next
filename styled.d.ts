import 'styled-components'
import Theme from './shared/interfaces/theme.interface';

declare module 'styled-components' {
  export interface DefaultTheme extends Theme {
    
  }
}