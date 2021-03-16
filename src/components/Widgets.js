import React, { useState, useEffect } from 'react';
import { Widget } from './Widget';
import { Heart, TrendingUp, Music, AlertCircle } from 'react-feather';
import { Stars, DirectionsRun } from "@material-ui/icons";
import IconButton from "@material-ui/core/IconButton";
import useInterval from '../hooks/useInterval';

const widgetVectors = {
  L_TopLeft: { x: 60, y: 280, width: 160, height: 160, textAlignment: 'right' },
  L_TopCenter: { x: 650, y: 140, width: 220, height: 30, textAlignment: 'left' },
  L_Center: { x: 650, y: 280, width: 250, height: 150, textAlignment: 'left' },
  R_Center: { x: 2950, y: 280, width: 250, height: 150, textAlignment: 'left' },
  R_TopRight: { x: 3500, y: 280, width: 200, height: 170, textAlignment: 'left' },
  R_TopCenter: { x: 2950, y: 140, width: 220, height: 30, textAlignment: 'left' },
}

const initialRanking = [
  { name: "Emily", coins: 23 },
  { name: "Jamie", coins: 18 },
  { name: "Stephan", coins: 5 },
  { name: "Aaron", coins: 2 },
  { name: "Me", coins: 0 }
]

export const Widgets = ({ widthFactor, heightFactor, seconds, km, coins }) => {
  const [heartRate, setHeartRate] = useState(132);
  const [pace, setPace] = useState(7.45);
  const [alert, setAlert] = useState(false);
  const [ranking, setRanking] = useState(initialRanking);

  useInterval(() => {
    const min = -2;
    const max = 2;
    const random = Math.floor(Math.random() * (max - min + 1)) + min;
    const newHeartRate = (heartRate + random <= 60) || (heartRate + random >= 190) ? 130 : heartRate + random;
    setHeartRate(newHeartRate);

    const newPace = pace + (random / 100);
    setPace(Math.round(newPace * 100) / 100);
  }, 2000)

  useInterval(() => {
    if (!alert) {
      setAlert(true);
      const timer = setTimeout(() => {
        setAlert(false);
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, 20000)

  useEffect(() => {
    // Deep copy of ranking array
    let clonedRanking = JSON.parse(JSON.stringify(ranking));

    // Update coins
    var index = clonedRanking.findIndex(x => x.name === "Me");
    clonedRanking[index].coins = coins;

    // Sort rankings by number of coins
    clonedRanking.sort((a, b) => b.coins - a.coins);
    setRanking(clonedRanking);
  }, [coins]);

  return (
    <>
      <Widget widthFactor={widthFactor} heightFactor={heightFactor} vector={widgetVectors.L_TopLeft} staticSize={false} dark={true}>
        {heartRate} <Heart color="red" size={20 * widthFactor} /><br />
        {pace}km/h <TrendingUp color="orange" size={20 * widthFactor} /><br /><br />
        &nbsp;Happy mix <Music color="green" size={20 * widthFactor} />
      </Widget>
      {alert &&
        <Widget widthFactor={widthFactor} heightFactor={heightFactor} vector={widgetVectors.L_TopCenter} staticSize={false} dark={true}>
          <AlertCircle color="red" size={20 * widthFactor} /> Aaron (-250m)
        </Widget>
      }
      <Widget widthFactor={widthFactor} heightFactor={heightFactor} vector={widgetVectors.R_TopRight} staticSize={true} dark={true}>
        {ranking.map((person, i) => (
          <IconButton style={{ fontSize: 'inherit', fontWeight: person.name === "Me" ? 700 : 400, color: '#bcbcbc', padding: '1px 0px' }} size="medium">
            {i + 1}. {person.name}&nbsp;&nbsp;<Stars fontVariant="caption" fontSize="small" />&nbsp;{person.coins}
          </IconButton>
        ))}
      </Widget>
    </>
  )
}