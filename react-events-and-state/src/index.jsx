import React from 'react';
import ReactDOM from 'react-dom';

class CustomButton extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = { isClicked: false };
  }

  handleClick() {
    this.setState({ isClicked: true });
  }

  render() {
    let text;
    if (this.state.isClicked) {
      text = 'Thanks Buddy';
    } else {
      text = 'Click Me!';
    }
    return (
        <button onClick={this.handleClick}>
          {text}
          </button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
