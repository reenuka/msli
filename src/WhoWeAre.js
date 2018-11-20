import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom';

import TextBox from './TextBox';
import Picture from './Picture';
import NavBar from './NavBar';
import WWAContact from './WWAContact';
import WWAHistory from './WWAHistory';
import WWAMeetUs from './WWAMeetUs';

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

      <Switch>
        <Route exact path="/who-we-are/meet-us" component={WWAMeetUs} />
        <Route exact path="/who-we-are/history" component={WWAHistory} />
        <Route exact path="/who-we-are/contact" component={WWAContact} />
      </Switch>

      <div>
        Who we are text.
      </div>
    </StyledWhoWeAre>
  );
}

export default WhoWeAre;
