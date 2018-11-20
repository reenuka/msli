import React from 'react';
import styled from 'styled-components';

import TextBox from './TextBox';
import Picture from './Picture';
import NavBar from './NavBar';

import OurWorkPic from './Assets/Images/DSCN3968.jpg';

import { colors } from './Assets/Assets';

const OurWork = (props) => {

  const StyledOurWork = styled.div`
    .secondary-navigation {
      align-items: center; 
    }
  `

  const OWpages = ['complimentary interventions', 'farmer groups', 'school lunches'];
  const OWpageRoutes = ['/our-work/complimentary-interventions', '/our-work/farmer-groups', '/our-work/school-lunches'];

  return (
    <StyledOurWork>
      <div className="background-pic">
        <Picture
          pic={OurWorkPic}
        />
      </div>

      <NavBar 
        className='secondary-navigation'
        children={OWpages}
        pageRoutes={OWpageRoutes}
      />

      <Picture />
      <TextBox />
      <Picture />
      <TextBox />
    </StyledOurWork>
  );
}

export default OurWork;
