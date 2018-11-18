import React from 'react';
import styled from 'styled-components';
import { Switch, Route } from 'react-router-dom'

import NavBar from './NavBar';
import Picture from './Picture';
import TextBox from './TextBox';
import Donate from './Donate';
import Gallery from './Gallery';
import OurWork from './OurWork';
import WhoWeAre from './WhoWeAre';

import { colors } from './Assets/Assets';

const Lobby = (props) => {

  const StyledLobby = styled.div`
    .home-overlay {
      z-index: 999;
      position: absolute;
      top: 125px;
      right: 100px;
    }

    .box {
      overflow: hidden;
    }
    
    .eighty {
      text-align: right;
      height: 90px;
      width: 462px;
      font-size: 18px;
      line-height: 30px;
      padding: 10px;
    }
    
    .emphasis {
      background-color: ${colors.darkGreen}
      text-align: left;
      color: white;
      height: 60px;
      width: 500px;
      font-size: 34px;
      font-weight: 600;
      line-height: 60px;
      transform: translate(100px, 0);
      padding-left: 30px;
    }

    .content {
      width: 960px;
      margin: auto;
    }
  `

  return (
    <StyledLobby>
      <Switch>
        {/* <Route exact path="/" component={Lobby} /> */}
        <Route exact path="/donate" component={Donate} />
        <Route exact path="/gallery" component={Gallery} />
        <Route exact path="/our-work" component={OurWork} />
        <Route exact path="/who-we-are" component={WhoWeAre} />
      </Switch>

      <div className="background-pic">
        <Picture 
          pic={props.backgroundPic}
        />
        <div className="home-overlay">
          <div className="eighty">
            80% of the population of Mozambique cannot afford an adequate diet, and almost half of all children are considered chronically malnourished.
          </div>
          <div className="emphasis">
            We're changing that.
          </div>
        </div>
      </div>
      <div className="content">
        { (props) => (props.children) ? <NavBar /> : null }
        <TextBox
          pic={props.whoWeAre}
          border={`bottom`}
          side={`right`}
          width={`400px`}
          title={`who we are`}
          subtitle={`subtitle`}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Lacinia at quis risus sed vulputate odio ut enim blandit. Faucibus in ornare quam viverra orci sagittis eu volutpat. Nulla facilisi cras fermentum odio eu feugiat pretium. Velit scelerisque in dictum non consectetur a erat nam at. Sed cras ornare arcu dui vivamus arcu. Eget velit aliquet sagittis id consectetur purus ut faucibus. A arcu cursus vitae congue mauris rhoncus. Donec et odio pellentesque diam volutpat commodo. Ultricies leo integer malesuada nunc.`}
      />
      </div>
    </StyledLobby>
  );
}

export default Lobby;
