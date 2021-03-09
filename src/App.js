import { useState } from "react";
import styled from "styled-components";

import Glasses from "./components/Glasses";
import { Movement } from "./components/MovementHandler";
import Video from "./components/Video";
import Watch from "./components/Watch";
import BackgroundVideo from "./components/BackgroundVideo";

const App = () => {
  const [jump, setJump] = useState(false);

  return (
    <Container>
      <BackgroundVideo jump={jump} setJump={setJump} />
      <Glasses />
      <Watch />
      <Movement />
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
