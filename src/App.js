import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Lobby from './Lobby';
import Donate from './Donate';
import Gallery from './Gallery';
import OurWork from './OurWork';
import WhoWeAre from './WhoWeAre';


import logo from './Assets/logos/Version2_US.jpg';
import homePic from './Assets/Images/DSCN2974.jpg';
import whoWeAre from './Assets/Images/DSCN3750.jpg';

import { setConfiguration } from 'react-grid-system';

setConfiguration({ gutterWidth: 0 });

const App = () => {
  return (
    <div>
      <Switch>
        <Route exact path="/" component={App} />
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/our-work" component={OurWork} />
        <Route exact path="/who-we-are" component={WhoWeAre} />
      </Switch>

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
