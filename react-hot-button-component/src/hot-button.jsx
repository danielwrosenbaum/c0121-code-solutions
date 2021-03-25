import React from 'react';

export default class HotButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false,
      buttonCount: 0
    };
  }

  handleClick() {
    this.setState({ isClicked: true });
    this.setState({ buttonCount: this.state.buttonCount + 1 });
  }

  render() {
    let text = 'Hot Button';
    const count = this.state.buttonCount;
    let color;
    if (count <= 3) {
      color = 'three';
    } else if (count <= 6) {
      color = 'six';
    } else if (count <= 9) {
      color = 'nine';
    } else if (count <= 12) {
      color = 'twelve';
    } else if (count <= 15) {
      color = 'fifteen';
    } else {
      color = 'eighteen';
      text = 'enough';
    }
    return (
      <button className={'hotButton' + ' ' + color} onClick={
        this.handleClick
      }>
        {text}
      </button>
    );
  }
}
