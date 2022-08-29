import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}
* {
    /* transition: background 350ms ease 0s; */
    margin: 0;
    padding: 0;
    line-height: calc(1em + 0.725rem);
}
html,
body {
    height: 100%;
}

:root {
    ${lightTheme}

    // override with dark theme values if theme data attribute is set to dark
    [data-theme="dark"] {
    ${darkTheme}
    }

    // support no JavaScript scenario by using media query
    &.no-js {
    @media (prefers-color-scheme: dark) {
        ${darkTheme}
    }
    }

    --font-weight-bold: 600;
    --font-weight-medium: 500;
    --font-weight-light: 400;

    --font-family: 'Rubik', -apple-system, sans-serif;

    --font-size-xs: 0.75rem;    // 12
    --font-size-sm: 0.875rem;   // 14
    --font-size-md: 1rem;       // 16
    --font-size-lg: 1.1875rem;  // 19
    --font-size-xl: 1.3125rem;  // 21
    --font-size-2xl: 1.5rem;    // 24
    --font-size-3xl: 2rem;      // 32
    --font-size-4xl: 2.652rem;  // 42
    --font-size-5xl: 4rem;      // 64
}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: var(--font-family);
}
a {
    text-decoration: none;
    color: inherit;
    transition: 160ms ;
    &:hover{
      color: var(--primary);
    }
}
img,
picture,
video,
canvas,
svg {
    display: block;
    max-width: 100%;
}
canvas {
    height: 100vh;
    width: 100vw;
}
input,
button,
textarea,
select {
    font: inherit;
}
button {
  background: none;
  cursor: pointer;
  border: none;
}
p,
h1,
h2,
h3,
h4,
h5,
h6,
button {
    overflow-wrap: break-word;
    color: var(--text);

}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: var(--font-weight-bold);
    color: var(--text);

}

#root,
#__next {
    isolation: isolate;
}
html {
    scroll-behavior: smooth;
}
ul, ol{
    list-style: none;
}

#__next{
    height: 100%;
    display: grid;
    grid-template-rows: auto 1fr auto;
}

body{
    --transitionActive: color 350ms ease 0s, background 350ms ease 0s;
    --transitionInactive: none;

    transition: var(--transitionInactive);
    background-color: var(--background-primary);

.toggled{
    color: var(--info);

    li {
        opacity: 1;
    }
}

.ch-editor-button, .ch-code-button{
    visibility: hidden;
  opacity: 0;
  transition: visibility 0s, opacity 200ms linear;
}

.ch-codegroup:hover .ch-editor-button, .ch-code:hover .ch-code-button {
    visibility: visible;
  opacity: 1;
}

}
`;

export default GlobalStyle;
