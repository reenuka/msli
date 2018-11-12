import React from 'react';
import styled from 'styled-components';

const Footer = (props) => {
  const StyledFooter = styled.div`
    color: magenta;

    hr {
      border: 2px solid rgb(40, 60, 15);
    }

    .footer-logo {
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
      <img className="footer-logo" src={props.logo} alt="logo" />
      <p className="already-on-this-site">www.mozambiqueschoollunchinitiative.com</p>
    </StyledFooter>
  );
}

export default Footer;
