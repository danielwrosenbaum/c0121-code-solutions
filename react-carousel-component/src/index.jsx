import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../src/carousel';

class App extends React.Component {
  render() {
    return <Carousel />;
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
