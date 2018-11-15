import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';
import Lobby from './Lobby';

import logo from './Assets/logos/Version2_US.jpg';
import homePic from './Assets/Images/DSCN2974.jpg';

const App = () => {

  return (
    <div>
      <Header
        logo={logo}
        />

      <Lobby 
        backgroundPic={homePic}
      />
      
      <Footer
        logo={logo}
      />
    </div>
  );
}

export default App;
