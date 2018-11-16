import React from 'react';

import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';

import NavBar from './NavBar';

const Header = (props) => {

  const StyledHeader = styled.div `
    z-index: 999;

    .header-logo {
      width: 300px;
      padding: 10px 30px 10px 0;
    }

    .navbar {
      text-align: right;
      padding: 30px;
    }
  `
  
  const pages = ['donate', 'gallery', 'our work', 'who we are'];

  return (
    <Container>
      <StyledHeader>
        <Row>
          <Col
            xs={12} sm={12} md={6} lg={6} 
          >
            <img className="header-logo" src={props.logo} alt="logo" />
          </Col>
          <Col
            className="navbar"
            xs={12} sm={12} md={6} lg={6} 
          >
            <NavBar
              children={pages}
            />
          </Col>
        </Row>
      </StyledHeader>
    </Container>
  );
}

export default Header;
