import type { AppProps } from "next/app";
import Theme from "../styles/Theme";
import { ThemeProvider } from "styled-components";
import Template from "../components/styled/template";
import GlobalStyle from "../styles/GlobalStyle";

function MyApp({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={Theme}>
        <Template>
          <Component {...pageProps} />
        </Template>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
