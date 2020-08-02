import { ThemeProps } from './types';
import 'styled-components';

declare module 'styled-components' {
  export interface DefaultTheme {
    backgroundColor: string;
  }
}
