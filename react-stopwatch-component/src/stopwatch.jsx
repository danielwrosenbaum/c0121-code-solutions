import React from 'react';

export default class StopWatch extends React.Component {
  constructor(props) {
    super(props);
    this.pressWatch = this.pressWatch.bind(this);
    this.state = {
      count: 0,
      isPressed: false
    };
  }

  pressWatch() {
    const isPressed = this.state.isPressed;
    if (!isPressed) {
      this.setState({ isPressed: true });
    } else {
      this.setState({ isPressed: false });
    }
  }

  render() {
    let action;
    const isPressed = this.state.isPressed;
    if (isPressed) {
      action = 'fas fa-play';
    } else {
      action = 'fas fa-pause';

    }

    return (
      <div className={'container'}>
        <div className={'clock'}>
        </div>
        <a className={'button'} onClick={this.pressWatch}>
          <i className={action}></i>
        </a>

      </div>
    );
  }
}
