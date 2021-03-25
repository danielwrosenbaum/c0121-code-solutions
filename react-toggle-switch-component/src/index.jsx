import React from 'react';
import ReactDOM from 'react-dom';
import Toggle from '../src/toggle-switch';

class MakeSwitch extends React.Component {
  render() {
    return <Toggle />;
  }
}
ReactDOM.render(
  <MakeSwitch />,
  document.querySelector('#root')
);
