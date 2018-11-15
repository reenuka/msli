import React from 'react';
import styled from 'styled-components';

import stroke from './Assets/Stroke.png'

const Picture = (props) => {
  const StyledPic = styled.div`
    width: 100vw;
    height: 500px;
    background-image: url(${props.pic});
    background-position: 50% 35%;
    background-size: cover;

    .top-border {
      width: 110vw;
      position: absolute;
      top: 40px;
      left: -50px;
    }
    .bottom-border {
      width: 110vw;
      position: absolute;
      top: 540px;
      left: -50px;
    }
  `

  return (
    <div>
      <StyledPic>
      <img src={stroke} className="top-border" />

      <img src={stroke} className="bottom-border" />
      </StyledPic>
    </div>
  );
}

export default Picture;
