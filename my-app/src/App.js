import logo from './logo.svg';
import './App.css';

function App() {
  return (
       
    <div className="App">
      <div className="NavBar">
        <p>
          Election Day!
        </p>
      </div>
      <header className="GameScreen">
        <div className="HUD">
          <div className ="Map">

          </div>
          <div className ="Schedule"> 

          </div>
        </div>
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
      </header>
    </div>
  );
}

export default App;
