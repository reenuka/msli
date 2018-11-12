import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import logo from './logos/Version2_US.jpg';

const Header = () => {

  const StyledHeader = styled.div `
    .logo {
      width: 300px;
      padding: 30px;
    }
  `
  
  const pages = ['donate', 'gallery', 'our work', 'who we are']

  return (
    <StyledHeader>
      <img className="logo" src={logo} alt="logo" />
      <NavBar 
        children={pages}
      />
    </StyledHeader>
  );
}

export default Header;
