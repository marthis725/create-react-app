import logo from './logo.svg';
import Map from './Map.js';
import Schedule from './Schedule.js'
import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 9*60,
      playerSelected: false,
      player: null
    }

    this.addTime = this.addTime.bind(this);
    this.selectPlayer = this.selectPlayer.bind(this);

    this.schedule = {
      "Benny": ["15", "16"],
      "Jenny": ["10", "11", "12", "14", "15", "16", "17", "18"],
      "Lenny": ["9", "10", "13", "16"],
      "Penny": ["7", "8", "18", "19", "20"],
    }
  }

  addTime() {
    this.setState({
      time: this.state.time + 30
    })
  }

  selectPlayer(name) {
    this.setState({
      playerSelected: true,
      player: name
    })
  }

  render() {
    let content = <div className="playerSelect">
      <p>"choose ur fiter"</p>
      <button onClick={() => this.selectPlayer("Benny")}>Benny</button>
      <button onClick={() => this.selectPlayer("Jenny")}>Jenny</button>
      <button onClick={() => this.selectPlayer("Lenny")}>Lenny</button>
      <button onClick={() => this.selectPlayer("Penny")}>Penny</button>
      <ul>
        <li>Benny takes a 15-unit courseload (considered average at this school), 
          but also holds a part-time job where he works 8 hours a week.
        </li>
        <li>
          Jenny takes a 20-unit courseload (considered heavy) and needs to spend
          about 10 hours/day on schoolwork.
        </li>
        <li>
          Lenny takes a 13-unit courseload and is involved in an extracurricular, 
          so he spends time outside of class as well.
        </li>
        <li>
          Penny takes a 7-unit courseload, but has a dependent (who needs to be 
          attended to at certain hours), and holds a job at 15 hours a week. 
        </li>
      </ul>
    </div>;
    if (this.state.playerSelected) {
      content = <header className="GameScreen">
                <div className="HUD">
                  <div className ="Map">
                    <Map time={this.state.time}/>
                  </div>
                  <div className ="Schedule"> 
                    <Schedule blockedTimes={this.schedule[this.state.player]}/>
                  </div>
                </div>
                <div classname= "Actions">
                  <button type= "Perform Action" onClick={this.addTime}>
                    Perform Action (adds 30 mins)
                    </button>
                  <button type= "Rest">
                    Rest
                  </button>
                  <button type= "Go Vote!" onClick={this.addTime}>
                    Go Vote! (Takes 2 hours)
                  </button>
                </div>
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  Edit <code>src/App.js</code> and save to reload.
                </p>
              </header>;
    }
    return (       
      <div className="App">
        <div className="NavBar">
          <p>
            Election Day!
          </p>
        </div>
        {content}
      </div>
    );
  }
}

export default App;
