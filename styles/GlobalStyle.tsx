import { createGlobalStyle } from "styled-components";
import { darkTheme, lightTheme } from "./theme";

const GlobalStyle = createGlobalStyle`
*,
*::before,
*::after {
    box-sizing: border-box;
}

* {
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

    [data-theme="dark"] {
    ${darkTheme}
    }

    &.no-js {
    @media (prefers-color-scheme: dark) {
        ${darkTheme}
    }
    }

}

body {
    line-height: 1.5;
    -webkit-font-smoothing: antialiased;
    font-family: 'Rubik', -apple-system, sans-serif;
}
a {
    text-decoration: none;
    color: var(--primary);
    transition: 160ms ;
    &:hover{
      color: var(--secondary);
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

#root,
#__next {
    isolation: isolate;
}
html {
    scroll-behavior: smooth;
}
ul, ol{
    /* list-style: none; */
    list-style-position: inside;
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
