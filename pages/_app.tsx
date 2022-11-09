import type { AppProps } from "next/app";
import styled, { createGlobalStyle, ThemeProvider } from "styled-components";
import { Roboto_Flex } from "@next/font/google";
import reset from "styled-reset";
import Head from "next/head";
import { useState } from "react";

import DarkModeSwitch from "../components/DarkModeSwitch";

import { dark, light } from "../theme";

const roboto = Roboto_Flex({
  subsets: ["latin"],
  axes: ["wdth"],
  variable: "--roboto-font",
});

const GlobalStyles = createGlobalStyle`
  ${reset}
  html {
    font-family: ${roboto.style.fontFamily};
  }
`;

const Container = styled.main`
  min-height: 100vh;
  min-width: 100vw;
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.5s ease-out;
`;

const Navbar = styled.nav`
  background-color: ${(props) => props.theme.colors.background};
  transition: background-color 0.5s ease-out;
`;

const NavbarContent = styled.div`
  min-height: 4em;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  max-width: 1440px;
  margin: 0 auto;
`;

export default function App({ Component, pageProps }: AppProps) {
  const [darkMode, setDarkMode] = useState(true);

  return (
    <>
      <GlobalStyles />
      <ThemeProvider theme={darkMode ? dark : light}>
        <Head>
          <title>ThunderProof Blog</title>
          <meta
            name="description"
            content="A blog for learning about STB app development in Lightning.js"
          />
          <link rel="icon" href="/favicon.ico" />
        </Head>

        <Navbar>
          <NavbarContent>
            <DarkModeSwitch value={darkMode} toggle={setDarkMode} />
          </NavbarContent>
        </Navbar>

        <Container>
          <Component {...pageProps} />
        </Container>

        <footer></footer>
      </ThemeProvider>
    </>
  );
}
