import React from 'react';
import styled from 'styled-components';

import TextBox from './TextBox';
import Picture from './Picture';

import donatePic from './Assets/Images/DSCN3968.jpg';

import { colors } from './Assets/Assets';

const Donate = (props) => {

  const StyledDonate = styled.div`
    }
  `

  return (
    <StyledDonate>
      <div className="background-pic">
        <Picture
          pic={donatePic}
        />
      </div>
      <div>
        <TextBox
          border={`right`}
          side={`left`}
          width={`400px`}
          title={`how you can help`}
          subtitle={`subtitle`}
          text={`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ullamcorper malesuada proin libero nunc consequat interdum varius sit amet. Lacinia at quis risus sed vulputate odio ut enim blandit. Faucibus in ornare quam viverra orci sagittis eu volutpat. Nulla facilisi cras fermentum odio eu feugiat pretium. Velit scelerisque in dictum non consectetur a erat nam at. Sed cras ornare arcu dui vivamus arcu. Eget velit aliquet sagittis id consectetur purus ut faucibus. A arcu cursus vitae congue mauris rhoncus. Donec et odio pellentesque diam volutpat commodo. Ultricies leo integer malesuada nunc.`}
        />
      </div>
    </StyledDonate>
  );
}

export default Donate;
