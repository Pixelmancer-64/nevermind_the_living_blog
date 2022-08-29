import "@code-hike/mdx/dist/index.css"

import type { AppProps } from "next/app";
import { Theme } from "../styles/theme";
import { ThemeProvider } from "styled-components";
import Template from "../components/layouts/template";
import GlobalStyle from "../styles/GlobalStyle";
import { useEffect, useState } from "react";

class LocalStorage {
  static getData(name: string) {
    const response = localStorage.getItem(name);
    if (!response) return [];
    return JSON.parse(response);
  }

  static set(name: string, item: string) {
    localStorage.setItem(name, JSON.stringify(item));
  }

  static add(name: string, item: string) {
    const response = LocalStorage.getData(name);

    response.push(item);

    localStorage.setItem(name, JSON.stringify(response));
  }

  static remove(item: string, key: number) {
    const response = LocalStorage.getData(item);
    response.forEach((e: Array<any>, i: number) => {
      if (e[key] === item) {
        response.splice(i, 1);
      }
    });
  }
}

function useToggle(defaultValue: any = "") {
  const [value, setValue] = useState(defaultValue);

  function toggle(newValue: any) {
    setValue(newValue);
    LocalStorage.set("theme", newValue);
  }

  return [value, toggle];
}

declare global {
  interface Window {
    __theme: any;
    __setPreferredTheme: any;
  }
}

function MyApp({ Component, pageProps }: AppProps) {
  const [theme, toggleTheme] = useState<any>();

  useEffect(() => {
    toggleTheme(window.__theme);
    window.__setPreferredTheme(window.__theme);
    const body = document.querySelector("body");
    if (body) body.style.transition = "var(--transitionActive)";
  }, []);

  useEffect(() => {
    document.body.setAttribute("data-theme", theme);
  }, [theme]);

  return (
    <>
      <ThemeProvider theme={Theme}>
        <GlobalStyle />
        <Template
          toggleDarkMode={() => {
            window.__setPreferredTheme(theme == "dark" ? "light" : "dark");
            toggleTheme(theme == "dark" ? "light" : "dark");
            return true;
          }}
        >
          <Component {...pageProps} />
        </Template>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
