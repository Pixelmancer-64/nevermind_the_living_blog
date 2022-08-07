import { createGlobalStyle } from "styled-components";

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
}
p,
h1,
h2,
h3,
h4,
h5,
h6 {
    overflow-wrap: break-word;
    color: ${(props) => props.theme.colors.text};

}

h1, h2, h3, h4, h5, h6, strong{
    font-weight: var(--font-weight-bold);
    color: ${(props) => props.theme.colors.text};

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
  transition: color 350ms ease 0s, background 350ms ease 0s;
  background-color: ${(props) => props.theme.colors.background.primary};
}
`;

export default GlobalStyle;
