import React from 'react';
import styled from 'styled-components';

import { colors } from './Assets/Assets';
import TextBox from './TextBox';

const WWAContact = (props) => {

  const StyledWWAContact = styled.div`
  `

  return (
    <StyledWWAContact>
      Contact
      <TextBox />
      <TextBox />
      <TextBox />
    </StyledWWAContact>
  );
}

export default WWAContact;
