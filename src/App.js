import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Lobby from './Lobby';

import logo from './Assets/logos/Version2_US.jpg';
import homePic from './Assets/Images/DSCN2974.jpg';
import whoWeAre from './Assets/Images/DSCN3750.jpg'

import { setConfiguration } from 'react-grid-system';

setConfiguration({ gutterWidth: 0 });

const App = () => {
  return (
    <div>
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
