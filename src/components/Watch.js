import * as React from 'react';
import styled from 'styled-components';

export const Watch = (props) => {
  return (
    <Wrapper>
      <div className="watchScreen">
        <p>Watch Screen</p>
      </div>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  bottom: 5px;
  right: 5px;
  border: 1px solid white;
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.31);
  height: 200px;
  width: 200px;
  font-size: calc(5px + 2vmin);
  color: #fff;
  text-align: center;
  z-index: 7 !important;
`;