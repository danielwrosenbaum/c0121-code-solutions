import React from 'react';
const tabList = [
  {
    title: 'Hypertext Markup Language',
    content: 'Hypertext Markup Language (HTML) is the standard markup language for creating web pages and web applications. With Cascading Style Sheets (CSS) and JavaScript, it forms a triad of cornerstone technologies for the World Wide Web.'
  },
  {
    title: 'Cascading Style Sheets',
    content: 'Cascading Style Sheets (CSS) is a style sheet language used for describing the presentation of a document written in a markup language like HTML. CSS is a cornerstone technology of the World Wide Web alongside HTML and JavaScript.'
  },
  {
    title: 'JavaScript',
    content: 'JavaScript, often abbreviated as JS, is a high-level, interpreted programming language that conforms to the ECMAScript specification. JavaScript has curly-bracket syntax, dynamic typing, prototype-based object-orientation, and first-class functions.'
  }
];

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
        target: event.target

      });
    }
  }

  openTab() {
    const isClicked = this.state.isClicked;
    if (isClicked) {
      return 'tab open';
    } else {
      return 'tab close';
    }
  }

  render() {
    // const target = this.state.target;

    const tabChange = this.openTab();
    const element = (<div className="container">
      {
        tabList.map((tab, index) => {
          return (
          <div key={index}>
            <div id={index} className="topics" onClick={this.handleClick}>{tab.title}</div>
              <p className={tabChange}>{tab.content}</p>
          </div>
          );
        })
      }
    </div>
    );
    return element;
  }
}
