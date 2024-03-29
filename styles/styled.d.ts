import "styled-components";

declare module "styled-components" {
  export interface DefaultTheme {
    dark: {
      name: string,
      colors: {
        primary: string;
        primary_filter: string;
        secondary: string;
        tertiary: string;
        text: string;
        background: {
          primary: string;
          secondary: string;
        };
        info: string;
        success: string;
        error: string;
        alert: string;
      };
    };
    light: {
      name: string,
      colors: {
        primary: string;
        primary_filter: string;
        secondary: string;
        tertiary: string;
        text: string;
        background: {
          primary: string;
          secondary: string;
        };
        info: string;
        success: string;
        error: string;
        alert: string;
      };
    };
  }
}
