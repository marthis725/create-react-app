import logo from './logo.svg';
import Map from './Map.js';
import Schedule from './Schedule.js'
import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 9*60
    }

    this.addTime = this.addTime.bind(this)
  }

  addTime() {
    this.setState({
      time: this.state.time + 30
    })
  }
  render() {
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
              <Map time={this.state.time}/>
            </div>
            <div className ="Schedule"> 
              <Schedule />
            </div>
          </div>
          <div classname= "Actions">
            <button type= "Perform Action" onClick={this.addTime}>
              Perform Action (adds 30 mins)
              </button>
            <button type= "Rest">
              Rest
            </button>
            <button type= "Go Vote!">
              Go Vote!
            </button>
          </div>
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
        </header>
      </div>
    );
  }
}

export default App;
