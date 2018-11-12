import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';

const Header = (props) => {

  const StyledHeader = styled.div `
    .header-logo {
      width: 300px;
      padding: 30px;
    }

    .navbar {
      float: right;
      padding: 30px;
    }
  `
  
  const pages = ['donate', 'gallery', 'our work', 'who we are'];

  return (
    <StyledHeader>
      <img className="header-logo" src={props.logo} alt="logo" />
      <div className="navbar">
        <NavBar
          children={pages}
        />
      </div>
    </StyledHeader>
  );
}

export default Header;
