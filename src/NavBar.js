import React from 'react';
import styled from 'styled-components';

const NavBar = (props) => {
  const StyledNavBar = styled.ul`
    text-transform: uppercase;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  
    li {
      float: right;
      color: orange;
      display: block;
      text-align: center;
      padding: 14px 16px;
      text-decoration: none;
    }

    li:hover {
        background-color: #111;
    }
  `

  return (
    <StyledNavBar>
      {props.children.map((child) => <li>{child}</li>)}
    </StyledNavBar>
  );
}

export default NavBar;
