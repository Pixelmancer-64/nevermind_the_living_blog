export const Theme = {
  dark: {
    name: "dark",
    colors: {
      primary: "#d5043c",
      primary_filter: "invert(19%) sepia(63%) saturate(5832%) hue-rotate(335deg) brightness(80%) contrast(110%)",
      secondary: "#67f2f4",
      tertiary: "rgb(15, 73, 197)",
      text: "hsl(0deg, 0%, 100%)",
      background: {
        primary: "#141414",
        secondary: "#0E141B",
      },
      info: "hsl(230deg, 100%, 69%)",
      success: "hsl(160deg, 100%, 40%)",
      error: "hsl(340deg, 95%, 60%)",
      alert: "hsl(30deg, 100%, 50%)",
    },
  },
  light: {
    name: "light",
    colors: {
      primary: "#d5043c",
      primary_filter: "invert(19%) sepia(63%) saturate(5832%) hue-rotate(335deg) brightness(80%) contrast(110%)",
      secondary: "#6858e2",
      tertiary: "rgb(15, 73, 197)",
      text: "#091540",
      background: {
        primary: "#FFF",
        secondary: "#F8F7F9",
      },
      info: "hsl(230deg, 100%, 69%)",
      success: "hsl(160deg, 100%, 40%)",
      error: "hsl(340deg, 95%, 60%)",
      alert: "hsl(30deg, 100%, 50%)",
    },
  },
};

import { css } from "styled-components";

export const darkTheme = css`
  --primary: ${({ theme }) => theme.dark.colors.primary};
  --primary-filter: ${({ theme }) => theme.dark.colors.primary_filter};
  --secondary: ${({ theme }) => theme.dark.colors.secondary};
  --tertiary: ${({ theme }) => theme.dark.colors.tertiary};
  --text: ${({ theme }) => theme.dark.colors.text};
  --background-primary: ${({ theme }) => theme.dark.colors.background.primary};
  --background-secondary: ${({ theme }) =>
    theme.dark.colors.background.secondary};
  --info: ${({ theme }) => theme.dark.colors.info};
  --success: ${({ theme }) => theme.dark.colors.success};
  --error: ${({ theme }) => theme.dark.colors.error};
  --alert: ${({ theme }) => theme.dark.colors.alert};
  --inverse: brightness(0) invert(1);
  --theme-icon: url("/icons/moon.svg");
`;

export const lightTheme = css`
  --primary: ${({ theme }) => theme.light.colors.primary};
  --primary-filter: ${({ theme }) => theme.dark.colors.primary_filter};
  --secondary: ${({ theme }) => theme.light.colors.secondary};
  --tertiary: ${({ theme }) => theme.light.colors.tertiary};
  --text: ${({ theme }) => theme.light.colors.text};
  --background-primary: ${({ theme }) => theme.light.colors.background.primary};
  --background-secondary: ${({ theme }) =>
    theme.light.colors.background.secondary};
  --info: ${({ theme }) => theme.light.colors.info};
  --success: ${({ theme }) => theme.light.colors.success};
  --error: ${({ theme }) => theme.light.colors.error};
  --alert: ${({ theme }) => theme.light.colors.alert};
  --inverse: brightness(0) invert(0);
  --theme-icon: url("/icons/sun.svg");
`;
