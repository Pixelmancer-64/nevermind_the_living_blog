import 'styled-components';

declare module 'styled-components'{
  export interface DefaultTheme{
    name: string,
    colors: {
      primary: string,
      secondary: string,
      tertiary: string,
      text: string,
      textLight: string,
      background: string,
      backgroundPost: string,
      info: string,
      sucess: string,
      error: string,
      alert: string,
    },
  }
}