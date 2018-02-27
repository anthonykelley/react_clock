import React, { Component } from 'react';

class App extends Component {
  state={ time: new Date() }

  currentTime() {
    this.setState({time: new Date()})
  }

  componentWillMount() {
    setInterval(()=>this.currentTime(),1000)
  }

  render() {
    return (
      <div>
        <p className='clock'>{this.state.time.toLocaleTimeString()}</p>
      </div>
    );
  }
}

export default App;
