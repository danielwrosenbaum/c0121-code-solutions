import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.pressWatch = this.pressWatch.bind(this);
    this.timer = this.timer.bind(this);
    this.clear = this.clear.bind(this);
    this.state = {
      count: 0,
      isPressed: false
    };
  }

  pressWatch() {
    const isPressed = this.state.isPressed;
    if (!isPressed) {
      this.setState({ isPressed: true });
      const countUp = setInterval(this.timer, 1000);
      this.setState({ countUp: countUp });
    } else {
      this.setState({ isPressed: false });
      clearInterval(this.state.countUp);
    }
  }

  clear() {
    const isPressed = this.state.isPressed;
    if (!isPressed) {
      this.setState({ count: 0 });
    }
  }

  timer() {
    this.setState({ count: this.state.count + 1 });
  }

  render() {
    let action;
    const count = this.state.count;
    const isPressed = this.state.isPressed;
    if (!isPressed) {
      action = 'fas fa-play';
    } else {
      action = 'fas fa-pause';

    }
    return (
      <div className={'container'}>
        <a className={'clock'} onClick={this.clear}>
          <div className={'counter'}>{count}</div>
        </a>
        <a className={'button'} onClick={this.pressWatch}>
          <i className={action}></i>
        </a>

      </div>
    );
  }
}
