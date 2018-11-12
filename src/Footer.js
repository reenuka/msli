import React from 'react';
import styled from 'styled-components';

import logo from './logos/Version2_US.jpg';

const Footer = () => {
  const StyledFooter = styled.div`
    color: magenta;

    hr {
      border: 2px solid rgb(40, 60, 15);
    }

    .logo {
      width: 300px;
      float: left;
      padding: 30px;
    }

    .already-on-this-site {
      font-size: 12px;
      color: rgb(40, 60, 15);
      float: right;
      padding: 30px;
    }
  `

  return (
    <StyledFooter>
      <hr />
      <img className="logo" src={logo} alt="logo" />
      <p className="already-on-this-site">www.mozambiqueschoollunchinitiative.com</p>
    </StyledFooter>
  );
}

export default Footer;
