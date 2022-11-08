import type { AppProps } from "next/app";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Roboto_Flex } from "@next/font/google";
import reset from "styled-reset";

import theme from "../theme";
import Head from "next/head";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--roboto-font",
});

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    font-family: ${roboto.style.fontFamily}
  }
`;

const Container = styled.main`
  min-height: 100vh;
  min-width: 100vw;
`;

export default function App({ Component, pageProps }: AppProps) {
  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={theme}>
        <Head>
          <title>ThunderProof Blog</title>
          <meta name="description" content="A blog for learning about STB app development in Lightning.js" />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <nav></nav>

        <Container>
          <Component {...pageProps} />
        </Container>

        <footer></footer>
      </ThemeProvider>
    </>
  );
}
