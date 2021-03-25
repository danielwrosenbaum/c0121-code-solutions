import React from 'react';

export default class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.switcher = this.switcher.bind(this);
    this.state = {
      isSwitched: false,
      text: 'OFF'
    };
  }

  switcher() {
    const isSwitched = this.state.isSwitched;
    if (!isSwitched) {
      this.setState({ isSwitched: true });
    } else {
      this.setState({ isSwitched: false });
    }
  }

  render() {
    let text;
    let color;
    const isSwitched = this.state.isSwitched;
    if (isSwitched) {
      text = 'ON';
      color = 'on';
    } else {
      text = 'OFF';
      color = 'off';
    }
    return (
      <div className="row">
        <label className={'switch'}>
          <input type={'checkbox'} onChange={this.switcher}></input>
          <div className={'slider ' + color}></div>
        </label>
        <div className={'name'}>{text}</div>
      </div>
    );
  }
}
