import styled from "styled-components";

import Glasses from "./components/Glasses";
import { Movement } from "./components/MovementHandler";
import Video from "./components/Video";
import Watch from "./components/Watch";

const App = () => {
  return (
    <Container>
      <Video />
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
  font-family: -apple-system, BlinkMacSystemFont, 'Nunito', 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif
`;
