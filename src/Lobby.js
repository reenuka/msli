import React from 'react';
import styled from 'styled-components';

import NavBar from './NavBar';
import Picture from './Picture';

const Lobby = (props) => {

  const StyledLobby = styled.div`
    z-index: 999;

    .content {
      width: 960px;
      margin: auto;
    }
  `

  return (
    <StyledLobby>
      <div className="background-pic">
        <Picture 
          pic={props.backgroundPic}
        />
      </div>
      <div className="content">
        { (props) => (props.children) ? <NavBar /> : null }
        Lobby
      </div>
    </StyledLobby>
  );
}

export default Lobby;
