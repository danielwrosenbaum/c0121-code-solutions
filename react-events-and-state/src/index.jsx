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
    if (this.state.isClicked) {
      this.props.text = 'Thanks Buddy';
    } else {
      this.props.text = 'Click Me!';
    }
    return (
        <button onClick={this.handleClick}>
          {this.props.text}
          </button>
    );
  }
}

ReactDOM.render(
  <CustomButton />,
  document.querySelector('#root')
);
