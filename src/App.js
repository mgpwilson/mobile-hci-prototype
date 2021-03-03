import './App.css';
import {Watch} from "./components/Watch";
import {Movement} from "./components/MovementHandler";

function App() {
  return (
    <div className="App">
      <div className="topSection">
        <div className="topView">
          <p>BACKGROUND GOES HERE</p>
          <Movement/>
        </div>
      </div>
      <div className="bottomSection">
        <Watch/>
      </div>
    </div>
  );
}

export default App;
