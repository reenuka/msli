import React from 'react';
import styled from 'styled-components';

import { colors } from './Assets/Assets';

const NavBar = (props) => {
  const StyledNavBar = styled.ul`
    text-transform: uppercase;
    list-style-type: none;
    margin: 0;
    padding: 0;
    overflow: hidden;
  
    li {
      font-size: 12px;
      color: ${colors.blackBrown};
      display: inline;
      text-align: center;
      padding: 14px 16px;
      margin: 0;
      line-height: 30px;
      text-decoration: none;
    }

    li:hover {
      background-color: rgb(249, 223, 12);
      cursor: pointer;
    }
  `

  return (
    <StyledNavBar>
      {props.children.map((child) => <li>{child}</li>)}
    </StyledNavBar>
  );
}

export default NavBar;
