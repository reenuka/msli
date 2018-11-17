import React from 'react';
import styled from 'styled-components';

import stroke from './Assets/Stroke.png'

const Picture = (props) => {
  const StyledPic = styled.div`
    width: 100vw;
    height: 600px;
    background-image: url(${props.pic});
    background-position: fixed;
    background-size: cover;

    .clouds-top {
      width: 110vw;
      align: center;
      position: relative;
      top: -50px;
      left: -50px;
      opacity: 0.95;
      overflow: hidden;
    }
    
    .clouds-bottom {
      width: 110vw;
      align: center;
      position: relative;
      top: 420px;
      left: -50px;
      opacity: 0.95;
      overflow: hidden;
    }
  `

  return (
    <div className="box">
      <StyledPic>
      <img src={stroke} className="clouds-top" />

      <img src={stroke} className="clouds-bottom" />
      </StyledPic>
    </div>
  );
}

export default Picture;
