import logo from './logo.svg';
import Map from './Map.js';
import Schedule from './Schedule.js'
import React, {Component} from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      time: 8*60,
      playerSelected: false,
      player: null,
      stress: 10
    }

    this.progress = this.progress.bind(this);
    this.selectPlayer = this.selectPlayer.bind(this);

    this.schedule = {
      "Benny": {
        "class": ["9", "10", "16", "17"],
        "study": ["14", "15", "18", "19"],
        "work": ["11", "12"],
        "extra": [],
        "dep": [],
      },
      "Jenny": {
        "class": ["10", "11", "14", "15", "16"],
        "study": ["9", "12", "17", "18", "19"],
        "work": [],
        "extra": [],
        "dep": [],
      },
      "Lenny": {
        "class": ["13", "14", "16"],
        "study": ["10", "11", "17"],
        "work": [],
        "extra": ["18", "19"],
        "dep": [],
      },
      "Penny": {
        "class": ["13", "14"],
        "study": ["19"],
        "work": ["9", "10", "11"],
        "extra": [],
        "dep": ["7", "8", "15", "16", "17"],
      },
    }
    this.choices = {
      "Benny": [
        {
          "text": "Benny wakes up at 8 AM. It's Election Day and he's excited to participate! "
                    + "However, he has class at 9AM and needs to make breakfast.",
          "choices": [
            {
              "text": "Get breakfast (-5 stress) (+ 30 mins)",
              "timeChange": 30,
              "stressChange": -5,
            },
            {
              "text": "Go vote! (+15 stress) (+1 hr)",
              "timeChange": 60,
              "stressChange": 15,
            },
          ]
        }
      ],
      "Jenny": [
        {
          "text": "Jenny wakes up at 8 AM and eats a quick breakfast. She would love to go vote, "
                    + "but she needs to finish an assignment for her class at 10.",
          "choices": [
            {
              "text": "Go vote! (+1 hr) (+20 stress)",
              "timeChange": 60,
              "stressChange": 20,
            },
            {
              "text": "Finish assignment (+1 hr) (+5 stress)",
              "timeChange": 60,
              "stressChange": 5,
            },
          ]
        }
      ],
      "Lenny": [
        {
          "text": "Lenny has finished his morning routine and it's now 9 AM. ",
          "choices": [
            {
              "text": "Catch up on assignments (+1 hr) (-10 stress)",
              "timeChange": 60,
              "stressChange": -10,
            },
            {
              "text": "Go vote! (+10 stress) (+1 hr)",
              "timeChange": 60,
              "stressChange": 10,
            },
          ]
        }
      ],
      "Penny": [
        {
          "text": "Penny has been taking care of a dependent since 7 AM, and is now finished. "
                    + "It's time to get breakfast and go to her shift at work.",
          "choices": [
            {
              "text": "Go to work (+3 hrs) (+5 stress)",
              "timeChange": 90,
              "stressChange": +5,
            },
            {
              "text": "Skip part of shift and vote (+30 stress) (+1 hr)",
              "timeChange": 60,
              "stressChange": 30,
            },
          ]
        }
      ],
    }
  }

  progress(timeChange, stressChange) {
    this.setState({
      time: this.state.time + timeChange,
      stress: this.state.stress + stressChange
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
      let actions = [];
      let i = 0;
      for (let choice of this.choices[this.state.player][0].choices) {
        actions.push(<button type={choice.text} onClick={() => 
                  this.progress(choice.timeChange, choice.stressChange)}>
          {choice.text}
        </button>)
        i++;
      }
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
                  {actions}
                </div>
                <p>{this.choices[this.state.player][0].text}</p>
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
