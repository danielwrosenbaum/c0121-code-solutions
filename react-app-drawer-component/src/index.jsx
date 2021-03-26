import React from 'react';
import ReactDOM from 'react-dom';
import AppDrawer from '../src/app-drawer';

class MakeApp extends React.Component {
  render() {
    return <AppDrawer />;
  }
}
ReactDOM.render(
  <MakeApp />,
  document.querySelector('#root')
);
