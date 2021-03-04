import React, { useState } from 'react';
import { Widget } from './Widget';
import { Heart, Activity, Music, AlertCircle } from 'react-feather';
import useInterval from '../hooks/useInterval';

const widgetVectors = {
  L_TopLeft: { x: 60, y: 280, width: 160, height: 160, textAlignment: 'right' },
  L_TopCenter: { x: 650, y: 140, width: 220, height: 30, textAlignment: 'left' },
  L_Center: { x: 650, y: 280, width: 250, height: 150, textAlignment: 'left' },
  R_Center: { x: 2950, y: 280, width: 250, height: 150, textAlignment: 'left' },
  R_TopRight: { x: 3500, y: 280, width: 250, height: 150, textAlignment: 'left' },
  R_TopCenter: { x: 2950, y: 140, width: 220, height: 30, textAlignment: 'left' },
}

export const Widgets = ({ widthFactor, heightFactor }) => {
  const [heartRate, setHeartRate] = useState(132);

  useInterval(() => {
    const min = -2;
    const max = 2;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    const newHeartRate = (heartRate + random <= 60) || (heartRate + random >= 190) ? 130 : heartRate + random;
    setHeartRate(newHeartRate);
  }, 2000)

  return (
    <>
      <Widget widthFactor={widthFactor} heightFactor={heightFactor} vector={widgetVectors.L_TopLeft} staticSize={false} dark={true}>
        {heartRate} <Heart color="red" size={20 * widthFactor} /><br />
        Bla bla <Activity color="orange" size={20 * widthFactor} /><br /><br />
        &nbsp;Happy mix <Music color="green" size={20 * widthFactor} />
      </Widget>
      <Widget widthFactor={widthFactor} heightFactor={heightFactor} vector={widgetVectors.L_TopCenter} staticSize={false}>
        <AlertCircle color="red" size={20 * widthFactor} /> Aaron (-250m)
      </Widget>
      <Widget widthFactor={widthFactor} heightFactor={heightFactor} vector={widgetVectors.R_TopRight} staticSize={false}>
        1. Emily (+850m)<br />
        2. Jamie (+607m)<br />
        3. Stephan (+50m)<br />
        <span style={{ fontWeight: 700 }}>4. Alan</span><br />
        5. Aaron (-250m)
      </Widget>
    </>
  )
}