import type { AppProps } from "next/app";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
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

function useToggle(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);
  function toggle() {
    setValue((value: boolean) => !value);
    LocalStorage.set("theme", !value ? "dark" : "light");
  }

  return [value, toggle];
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, toggleIsDark] = useToggle(false);
  useEffect(() => {
    // getComputedStyle(document.querySelector("body")).setProperty(
    //   "--getComputedStyle",
    //   "color 350ms ease 0s, background 350ms ease 0s"
    // );

    const isDarkTheme = LocalStorage.getData("theme") == "dark" ? true : false;
    if (isDarkTheme) {
      toggleIsDark();
      const body = document.querySelector("body");
      if (body)
        body.style.transition = "color 350ms ease 0s, background 350ms ease 0s";
    }
  }, []);

  return (
    <>
      <ThemeProvider theme={isDark ? dark : light}>
        <GlobalStyle />
        <Template toggleDarkMode={toggleIsDark}>
          <Component {...pageProps} />
        </Template>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
