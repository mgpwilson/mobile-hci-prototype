import './App.css';
import {Watch} from "./components/Watch";

function App() {
  return (
    <div className="App">
      <div className="topSection">
        <div className="topView"><p>BACKGROUND GOES HERE</p></div>
      </div>
      <div className="bottomSection">
        <Watch/>
      </div>
    </div>
  );
}

export default App;
