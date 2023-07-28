import React from 'react'
import { Link, useLocation } from 'react-router-dom';
import styled from "styled-components"

function Header() {
  const location = useLocation();
 
  return (
    <Wrapper>
        <h1>My music app</h1>
        <Nav>
          <Link to={'/'}><MenuEl $isCurrentPage={location.pathname === '/'}>Home</MenuEl></Link>
          <Link to={'/song'}><MenuEl $isCurrentPage={location.pathname === '/song'}>Song</MenuEl></Link>
        </Nav>
    </Wrapper>
  )
}

const Nav = styled.div`
  display: flex;
`;

const Wrapper = styled.header`
    height: 80px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    border-bottom: 1px solid;
    padding: 0 25px;
    & a {
      text-decoration: none;
      color: inherit;
      padding: 0 10px;
    }
`;

const MenuEl = styled.p`
border-bottom: 2px solid ${props => props.$isCurrentPage ? '' : 'transparent'};
&:hover {
  border-bottom: 2px solid;
}
`;

export default Header