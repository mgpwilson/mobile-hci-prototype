import React, { useState } from 'react';
import styled from 'styled-components';
import { Heart, Activity, Music } from 'react-feather';
import useInterval from '../hooks/useInterval';

export const WidgetTopLeft = ({ widthFactor, heightFactor }) => {
  const [heartRate, setHeartRate] = useState(132);

  useInterval(() => {
    const min = -2;
    const max = 2;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    const newHeartRate = (heartRate + random <= 60) || (heartRate + random >= 190) ? 130 : heartRate + random;
    setHeartRate(newHeartRate);
  }, 2000)

  return (
    <Wrapper widthFactor={widthFactor} heightFactor={heightFactor}>
      {heartRate} <Heart color="red" size={20 * widthFactor} />
      <br />
      Bla bla <Activity color="orange" size={20 * widthFactor} />
      <br />
      <br />
      <br />
      Running mix <Music color="green" size={20 * widthFactor} />
    </Wrapper>
  )
}

const Wrapper = styled.div`
  position: absolute;
  top: 40px;
  top: ${p => 40 + ((180 / 2) * p.heightFactor)}px;
  left: ${p => ((60 / 2) * p.widthFactor)}px;
  width: ${p => 160 * p.widthFactor}px;
  height: ${p => 160 * p.heightFactor}px;

  padding: 2px 4px 2px 1px;
  color: #282c34;
  text-align: right;
  font-size: ${p => (23 * p.widthFactor)}px;
  border: 1px solid rgba(255, 255, 255, 0.6);
  border-radius: 8px;
  background-color: rgba(255, 255, 255, 0.4);
  z-index: 5 !important;
`;