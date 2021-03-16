import React from 'react';
import styled, { css } from 'styled-components';

export const Widget = ({ widthFactor, heightFactor, vector, staticSize, dark, children }) => {
  return (
    <Wrapper widthFactor={widthFactor} heightFactor={heightFactor} vector={vector} staticSize={staticSize} dark={dark}>
      {children}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: inline-block;
  position: absolute;
  top: ${p => 40 + ((p.vector.y / 2) * p.heightFactor)}px;
  left: ${p => ((p.vector.x / 2) * p.widthFactor)}px;
  ${p => p.staticSize && css`
    width: ${p => p.vector.width * p.widthFactor}px;
    height: ${p => p.vector.height * p.heightFactor}px;
  `};

  padding: 2px 4px;
  color: ${p => p.dark ? '#bcbcbc' : '#282c34'};
  text-align: ${p => p.vector.textAlignment};
  font-size: ${p => (23 * p.widthFactor)}px;
  border: 1px solid ${p => p.dark ? 'rgba(0, 0, 0, 0.2)' : 'rgba(255, 255, 255, 0.1)'};
  border-radius: 5px;
  background-color: ${p => p.dark ? 'rgba(0, 0, 0, 0.5)' : 'rgba(255, 255, 255, 0.3)'};
  z-index: 5 !important;
`;