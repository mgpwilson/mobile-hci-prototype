import { useState, useEffect } from "react";
import styled from "styled-components";
import "./main.css";

import banana_png from "./assets/banana.png";
import coin_gif from "./assets/coin.gif";
import jump_wav from "./assets/jump.wav";

import useInterval from "./hooks/useInterval";
import Glasses from "./components/Glasses";
import Watch from "./components/Watch";
import BackgroundVideo from "./components/BackgroundVideo";
import Item from "./components/Item";
import GhostRunner from "./components/GhostRunner";
import LeaderBoardGlasses from "./components/LeaderBoardGlasses";

const App = () => {
  const [jumping, setJumping] = useState(false);
  const [obstacleOnScreen, setObstacleOnScreen] = useState(false);
  const [obstacleInRange, setObstacleInRange] = useState(false);
  const [obstacleAvoided, setObstacleAvoided] = useState(false);
  const [coinOnScreen, setCoinOnScreen] = useState(false);
  const [showLeaderboard, setShowLeaderboard] = useState(false);

  const [coins, setCoins] = useState(0);
  const [seconds, setSeconds] = useState(0);
  const [km, setKm] = useState(0);

  const jump_sound = new Audio(jump_wav);

  useEffect(() => {
    if (obstacleInRange) {
      setObstacleAvoided(true);
    }
  }, [jumping, obstacleInRange]);

  // Create obstacle or coin every 7 seconds
  // Ratio: 3 obstacles : 7 coins
  useInterval(() => {
    let random = Math.random();
    if (random >= 0.7) {
      createObstacle();
      setTimeout(() => setObstacleInRange(true), 3500);
    } else {
      createCoin();
    }
  }, 7000);

  useInterval(() => {
    setSeconds(seconds + 1);
    setKm((parseFloat(km) + 0.003).toFixed(3));
  }, 1000);

  const createObstacle = () => {
    setObstacleOnScreen(true);
    setTimeout(() => {
      if (obstacleAvoided === false) setCoins(coins - 5);
    }, 3750);
  };

  const createCoin = () => {
    setCoinOnScreen(true);
    setTimeout(() => setCoins(coins + 1), 5000);
  };

  return (
    <Container>
      <BackgroundVideo jumping={jumping} setJumping={setJumping} />

      {obstacleOnScreen && (
        <Item
          obstacle
          jumping={jumping}
          setItemOnScreen={setObstacleOnScreen}
          image={banana_png}
          setObstacleInRange={setObstacleInRange}
          obstacleAvoided={obstacleAvoided}
          setObstacleAvoided={setObstacleAvoided}
        />
      )}

      {coinOnScreen && (
        <Item
          jumping={jumping}
          setItemOnScreen={setCoinOnScreen}
          image={coin_gif}
        />
      )}

      {showLeaderboard && (
        <LeaderBoardGlasses style={{zIndex: 999}}
          showLeaderboard={showLeaderboard}
          setShowLeaderboard={setShowLeaderboard}
        />
      )}

      <Glasses coins={coins} seconds={seconds} km={km} />
      <Watch coins={coins} seconds={seconds} km={km} setShowLeaderboard={setShowLeaderboard}/>


      <GhostRunner />

      <ControlPanel>
        <button
          type="button"
          onClick={() => {
            setJumping(true);
            jump_sound.play();
          }}
        >
          {jumping ? "You're jumping" : "Jump"}
        </button>
      </ControlPanel>
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
  font-family: -apple-system, BlinkMacSystemFont, "Nunito", "Segoe UI", Roboto,
    Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
`;

const ControlPanel = styled.div`
  position: fixed;
  bottom: 0;
`;
