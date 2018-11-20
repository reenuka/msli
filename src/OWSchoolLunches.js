import React from 'react';
import styled from 'styled-components';

import { colors } from './Assets/Assets';
import TextBox from './TextBox';

const OWSchoolLunches = (props) => {

  const StyledOWSchoolLunches = styled.div`
  `

  return (
    <StyledOWSchoolLunches>
      School Lunches
      <TextBox />
      <TextBox />
      <TextBox />
    </StyledOWSchoolLunches>
  );
}

export default OWSchoolLunches;
