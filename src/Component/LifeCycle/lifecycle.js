import { Component, component } from "react";

export default class TimerComponent extends Component {
  constructor(props) {
    super(props);
    this.state = {
      seconds: 0,
      isActive: false,
    };
    this.interval = null;
  }
  //   componentWillMount() {
  //     setTimeout(() => {
  //       alert("Ad");
  //     }, 5000);
  //   }
  componentWillUnmount() {
    clearInterval(this.interval, 10000);
  }
  startTimer() {
    this.interval = setInterval(() => {
      this.setState({
        seconds: this.state.seconds + 1,
      });
    }, 1);
    this.setState({
      isActive: true,
    });
  }
  resetTimer() {
    this.setState({
      seconds: 0,
    });
  }
  stopTimer() {
    clearInterval(this.interval);
    this.setState({
      isActive: false,
    });
  }
  render() {
    return (
      <div>
        <h1>Alert</h1>
        <button
          onClick={() => this.startTimer()}
          disabled={this.state.isActive}
        >
          Start
        </button>
        {this.state.seconds}
        <button
          onClick={() => this.stopTimer()}
          disabled={!this.state.isActive}
        >
          Stop
        </button>
        <button onClick={() => this.resetTimer()}>Reset</button>
      </div>
    );
  }
}
