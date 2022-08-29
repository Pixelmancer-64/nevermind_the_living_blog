export const Theme = {
  dark: {
    name: 'dark',
    colors: {
      primary: "#d5043c",
      secondary: "hsl(333deg, 100%, 52%)",
      tertiary: "rgb(15, 73, 197)",
      text: "hsl(0deg, 0%, 100%)",
      background: {
        primary: "#141414",
        secondary: "#0E141B",
      },
      info: "hsl(230deg, 100%, 69%)",
      sucess: "hsl(160deg, 100%, 40%)",
      error: "hsl(340deg, 95%, 60%)",
      alert: "hsl(30deg, 100%, 50%)",
    },
  },
  light: {
    name: 'light',
    colors: {
      primary: "#d5043c",
      secondary: "hsl(333deg, 100%, 52%)",
      tertiary: "rgb(15, 73, 197)",
      text: "#091540",
      background: {
        primary: "#FFF",
        secondary: "#F8F7F9",
      },
      info: "hsl(230deg, 100%, 69%)",
      sucess: "hsl(160deg, 100%, 40%)",
      error: "hsl(340deg, 95%, 60%)",
      alert: "hsl(30deg, 100%, 50%)",
    },
  },
};

import { css } from "styled-components";

export const darkTheme = css`
  --primary: ${({ theme }) => theme.dark.colors.primary};
  --secondary: ${({ theme }) => theme.dark.colors.secondary};
  --tertiary: ${({ theme }) => theme.dark.colors.tertiary};
  --text: ${({ theme }) => theme.dark.colors.text};
  --background-primary: ${({ theme }) => theme.dark.colors.background.primary};
  --background-secondary: ${({ theme }) => theme.dark.colors.background.secondary};
  --info: ${({ theme }) => theme.dark.colors.info};
  --sucess: ${({ theme }) => theme.dark.colors.sucess};
  --error: ${({ theme }) => theme.dark.colors.error};
  --alert: ${({ theme }) => theme.dark.colors.alert};
  --inverse: brightness(0) invert(1);
`;

export const lightTheme = css`
  --primary: ${({ theme }) => theme.light.colors.primary};
  --secondary: ${({ theme }) => theme.light.colors.secondary};
  --tertiary: ${({ theme }) => theme.light.colors.tertiary};
  --text: ${({ theme }) => theme.light.colors.text};
  --background-primary: ${({ theme }) => theme.light.colors.background.primary};
  --background-secondary: ${({ theme }) => theme.light.colors.background.secondary};
  --info: ${({ theme }) => theme.light.colors.info};
  --sucess: ${({ theme }) => theme.light.colors.sucess};
  --error: ${({ theme }) => theme.light.colors.error};
  --alert: ${({ theme }) => theme.light.colors.alert};
  --inverse: brightness(0) invert(0);
`;
