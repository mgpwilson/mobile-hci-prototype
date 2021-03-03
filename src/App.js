import styled from 'styled-components';
import './App.css';
import { Glasses } from './components/Glasses';
import { Video } from './components/Video';
import { Watch } from "./components/Watch";

function App() {
  return (
    <div className="App">
      <Container>
        <Video />
        <Glasses />
        <Watch />
      </Container>
    </div>
  );
}

export default App;

const Container = styled.div`
  width: 100%;
  height: 100%;
  overflow: hidden;
`;