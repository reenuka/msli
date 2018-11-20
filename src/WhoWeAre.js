import React from 'react';
import styled from 'styled-components';

import TextBox from './TextBox';
import Picture from './Picture';
import NavBar from './NavBar';

import whoWeArePic from './Assets/Images/DSCN3968.jpg';

import { colors } from './Assets/Assets';

const WhoWeAre = (props) => {

  const StyledWhoWeAre = styled.div`
    .secondary-navigation {
      align-items: center; 
    }
  `

  const WWApages = ['meet us', 'history', 'contact'];
  const WWApageRoutes = ['/who-we-are/meet-us', '/who-we-are/history', '/who-we-are/contact'];

  return (
    <StyledWhoWeAre>
      <div className="background-pic">
        <Picture
          pic={whoWeArePic}
        />
      </div>

      <NavBar 
        className='secondary-navigation'
        children={WWApages}
        pageRoutes={WWApageRoutes}
      />

      <div>
        Who we are text.
      </div>
    </StyledWhoWeAre>
  );
}

export default WhoWeAre;
