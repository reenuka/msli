import React from 'react';
import styled from 'styled-components';
import { Container, Row, Col } from 'react-grid-system';
import { Link } from 'react-router-dom'

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
  const pageRoutes = ['/donate', '/gallery', '/our-work', '/who-we-are'];

  return (
    <Container>

      <StyledHeader>
        <Row>

          <Col
            xs={12} sm={12} md={6} lg={6} 
          >
            <Link to='/'>
              <img className="header-logo" src={props.logo} alt="logo" />
            </Link>
          </Col>

          <Col
            className="navbar"
            xs={12} sm={12} md={6} lg={6} 
          >
            <NavBar
              children={pages}
              pageRoutes={pageRoutes}
            />

          </Col>

        </Row>

      </StyledHeader>

    </Container>
  );
}

export default Header;
