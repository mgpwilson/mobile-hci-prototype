import styled from "styled-components";

import Glasses from "./components/Glasses";
import Video from "./components/Video";
import Watch from "./components/Watch";

const App = () => {
  return (
    <Container>
      <Video />
      <Glasses />
      <Watch />
    </Container>
  );
};

export default App;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  overflow: hidden;
`;
