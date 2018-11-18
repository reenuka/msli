import React from 'react';
import { Switch, Route, Router } from 'react-router'
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Lobby from './Lobby';


import logo from './Assets/logos/Version2_US.jpg';
import homePic from './Assets/Images/DSCN2974.jpg';
import whoWeAre from './Assets/Images/DSCN3750.jpg';

import { setConfiguration } from 'react-grid-system';
import Donate from './Donate';
import Gallery from './Gallery';
import OurWork from './OurWork';
import WhoWeAre from './WhoWeAre';
import WWAContact from './WWAContact';
import WWAHistory from './WWAHistory';
import WWAMeetUs from './WWAMeetUs';

setConfiguration({ gutterWidth: 0 });

const App = () => {
  return (
    <div>
      {/* <Router>
        <Switch>
          <Route exact path="/" component={App} />
          <Route path="/donate" component={Donate} />
          <Route path="/gallery" component={Gallery} />
          <Route path="/our-work" component={OurWork} />
          <Route path="/who-we-are" component={WhoWeAre} />
          <Route path="/who-we-are/meet-us" component={WWAMeetUs} />
          <Route path="/who-we-are/history" component={WWAHistory} />
          <Route path="/who-we-are/contact" component={WWAContact} />
        </Switch>
      </Router> */}
      <Header
        logo={logo}
        />

      <Lobby 
        backgroundPic={homePic}
        whoWeAre={whoWeAre}
      />
      
      <Footer
        logo={logo}
      />
    </div>
  );
}

export default App;
