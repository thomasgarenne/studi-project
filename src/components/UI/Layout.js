import React, { useState } from 'react'

import styled, { ThemeProvider } from "styled-components"

import GlobalStyle from './GlobalStyle'

import light from "./themes/light.json"
import dark from "./themes/dark.json"

import Header from 'components/header'
import Footer from 'components/footer'

function Layout({children}) {
    const [isLight, setIsLight] = useState(true);

    function handleToggleTheme() {
        setIsLight(!isLight);
    }
  return (
    <ThemeProvider theme={isLight ? light : dark}>
        <Wrapper>
            <GlobalStyle />
            <Header />
            <Main>
                {children}
            </Main>
            <Footer isLight={isLight} handleToggleTheme={handleToggleTheme}/>
        </Wrapper>
    </ThemeProvider>
  )
}

const Main = styled.div`
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: calc(100vh - 180px);
    width: 90%;
    margin: auto;

`;

const Wrapper = styled.div``

export default Layout