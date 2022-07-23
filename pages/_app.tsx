import type { AppProps } from "next/app";
import dark from "../styles/themes/dark";
import { ThemeProvider } from "styled-components";
import Template from "../components/layouts/template";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={dark}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
