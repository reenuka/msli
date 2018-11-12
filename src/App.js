import React from 'react';
import './App.css';

import Header from './Header';
import Footer from './Footer';

import logo from './logos/Version2_US.jpg';

const App = () => {
  return (
    <div>
      <Header
        logo={logo}
        />
      <Footer
        logo={logo}
      />
    </div>
  );
}

export default App;
