import React from 'react';
import styled from 'styled-components';

const Picture = (props) => {
  const StyledPic = styled.div`
    width: 100vw;
    height: 40vh;
    background-image: url(${props.pic});
    background-position: right center;
    background-size: cover;
  `

  return (
    <StyledPic />
  );
}

export default Picture;
