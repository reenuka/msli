import React from 'react';
import styled from 'styled-components';

import { colors } from './Assets/Assets';

const TextBox = (props) => {
  const StyledTextBox = styled.div`
    background: white;
    padding: 50px;
    width: ${ props.width };
    transform: translate(400px, -100px);
  
    border-radius: 5px;
    border-${ props.border }: 5px solid ${ colors.darkGreen };

    .text {
      line-height: 30px;
      width: 300px;
      
    }

    .image {
      width: 500px;
      display: inline-block;
      transform: translate(${ (props.side === 'right') ? '-500px, -300px' : '500px, 100px' });
    }
  `

  return (
    <StyledTextBox className="text-box">
      <div className="title">
        {props.title}
      </div>
      <div className="subtitle">
        {props.subtitle}
      </div>
      <div className="text">
        {props.text}
      </div>
      <img src={props.pic} className="image" />
    </StyledTextBox>
  );
}

export default TextBox;
