import React from 'react';
import styled from 'styled-components';

import { colors } from './Assets/Assets';
import TextBox from './TextBox';

const OWComplimentaryInterventions = (props) => {

  const StyledOWComplimentaryInterventions = styled.div`
  `

  return (
    <StyledOWComplimentaryInterventions>
      Complimentary Interventions
      <TextBox />
      <TextBox />
      <TextBox />
    </StyledOWComplimentaryInterventions>
  );
}

export default OWComplimentaryInterventions;
