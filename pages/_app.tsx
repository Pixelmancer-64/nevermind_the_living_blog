import type { AppProps } from "next/app";
import dark from "../styles/themes/dark";
import light from "../styles/themes/light";
import { ThemeProvider } from "styled-components";
import Template from "../components/layouts/template";
import GlobalStyle from "../styles/GlobalStyle";
import { useState } from "react";

function useToggle(defaultValue: any) {
  const [value, setValue] = useState(defaultValue);
  function toggle() {
    setValue((value: boolean) => !value);
  }

  return [value, toggle];
}

function MyApp({ Component, pageProps }: AppProps) {
  const [isDark, toggleIsDark] = useToggle(true);
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
