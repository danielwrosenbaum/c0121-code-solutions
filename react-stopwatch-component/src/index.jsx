import React from 'react';
import ReactDOM from 'react-dom';
import StopWatch from '../src/stopwatch';

class MakeStopWatch extends React.Component {
  render() {
    return <StopWatch />;
  }
}
ReactDOM.render(
  <MakeStopWatch />,
  document.querySelector('#root')
);
