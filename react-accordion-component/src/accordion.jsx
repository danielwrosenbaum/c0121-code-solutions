import React from 'react';

export default class Accordion extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false,
      target: null
    };
  }

  handleClick(event) {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      this.setState({
        isClicked: true,
        target: event.target.id
      });
    } else {
      this.setState({
        isClicked: false,
        target: null

      });
    }
  }

  render() {
    const target = this.state.target;
    const { items } = this.props;
    const element = (<div className="container">
      {
        items.map((tab, index) => {
          return (
          <div key={index}>
            <div id={index} className={'topics ' + index} onClick={this.handleClick}>{tab.title}</div>
            {index === parseInt(target, 10) &&
                <p className={'tab open'}>{tab.content}</p>}
          </div>
          );
        })
      }
    </div>
    );
    return element;
  }
}
