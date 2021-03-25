import React from 'react';
import ReactDOM from 'react-dom';
import HotButton from '../src/hot-button';

class MakeButton extends React.Component {
  render() {
    return <HotButton />;
  }
}
ReactDOM.render(
  <MakeButton />,
  document.querySelector('#root')
);
