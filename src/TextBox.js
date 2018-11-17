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
    }

    &:after {
      background-image: url(${ props.pic });
      width: 100px;
      height: 100px;
      z-index: 5;
    }
  `

  return (
    <StyledTextBox className="text-box">
      <div className="title">
        {props.title}
        <hr />
      </div>
      <div className="subtitle">
        {props.subtitle}
      </div>
      <div className="text">
        {props.text}
      </div>
    </StyledTextBox>
  );
}

export default TextBox;
