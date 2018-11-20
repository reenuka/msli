import React from 'react';
import styled from 'styled-components';

import { colors } from './Assets/Assets';
import TextBox from './TextBox';

const OWFarmerGroups = (props) => {

  const StyledOWFarmerGroups = styled.div`
  `

  return (
    <StyledOWFarmerGroups>
      Farmer Groups
      <TextBox />
      <TextBox />
      <TextBox />
    </StyledOWFarmerGroups>
  );
}

export default OWFarmerGroups;
