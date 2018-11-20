import React from 'react';
import { Switch, Route } from 'react-router-dom'
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Home from './Home';
import Donate from './Donate';
import Gallery from './Gallery';
import OurWork from './OurWork';
import WhoWeAre from './WhoWeAre';
import OWSchoolLunches from './OWSchoolLunches';
import OWFarmerGroups from './OWFarmerGroups';
import OWComplimentaryInterventions from './OWComplimentaryInterventions';
import WWAContact from './WWAContact';
import WWAHistory from './WWAHistory';
import WWAMeetUs from './WWAMeetUs';


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
        <Route exact path="/our-work/complimentary-interventions" component={OWComplimentaryInterventions} />
        <Route exact path="/our-work/farmer-groups" component={OWFarmerGroups} />
        <Route exact path="/our-work/school-lunches" component={OWSchoolLunches} />
        <Route exact path="/who-we-are/meet-us" component={WWAMeetUs} />
        <Route exact path="/who-we-are/history" component={WWAHistory} />
        <Route exact path="/who-we-are/contact" component={WWAContact} />
      </Switch>

      <Header
        logo={logo}
        />

      <Home 
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
