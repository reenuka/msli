import React from 'react';
import styled from 'styled-components';

import { Container, Row, Col } from 'react-grid-system';

import { colors } from './Assets/Assets';

const Footer = (props) => {
  
  const StyledFooter = styled.div`
    color: ${colors.blackBrown}
    font-size: 12px;

    hr {
      border: 2px solid rgb(40, 60, 15);
    }

    .footer-logo {
      width: 300px;
    }

    .web-address {
      text-align: right;
    }
  `

  return (
    <Container>
      <StyledFooter>
        <Row>
          <Col
            xs={12} sm={12} md={12} lg={12}
          >
            <hr />
          </Col>
        </Row>
        <Row>
          <Col
            xs={12} sm={12} md={6} lg={6}
          >
            <img className="footer-logo" src={props.logo} alt="logo" />
          </Col>
          <Col
            xs={12} sm={12} md={6} lg={6}
          >
            <p className="web-address">
              www.mozambiqueschoollunchinitiative.com
            </p>
          </Col>
        </Row>
      </StyledFooter>
    </Container>
  );
}

export default Footer;
