import React from 'react'
import styled from "styled-components"

function Footer({ isLight, handleToggleTheme }) {
  return (
    <Wrapper>
        <button onClick={handleToggleTheme}>Switch to {isLight ? "dark" : "light"} theme</button>
    </Wrapper>
  )
}

const Wrapper = styled.footer`
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    border-top: 1px solid;
    padding: 0 25px;
`;

export default Footer