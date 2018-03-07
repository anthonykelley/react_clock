import React, { Component } from 'react';
import './App.css';

class App extends Component {
  state={ time: new Date(), secondsElapsed: 0 }

  componentWillMount() {
    setInterval( () => this.currentTime(),1000)
  }

  currentTime() {
    this.setState({time: new Date()})
  }

  getSeconds = () => {
    return ('0' + this.state.secondsElapsed % 60).slice(-2);
  }

  getMinutes = () => {
    return Math.floor(this.state.secondsElapsed / 60)
  }

  handleStartClick = () => {
    this.increment = setInterval( () => {
      this.setState({
        secondsElapsed: (this.state.secondsElapsed + 1)
      })
    }, 1000)
  }

  handleStopClick = () => {
   clearInterval(this.increment)
  }

  render() {
    return (
      <div>
        <p className='clock'>{this.state.time.toLocaleTimeString()}</p>
        <h4>{this.getMinutes()}:{this.getSeconds()}</h4>
        <button onClick={this.handleStartClick}>Start</button>
        <button onClick={this.handleStopClick}>Stop</button>
      </div>
    );
  }
}

export default App;
