import React from 'react';
import ReactDOM from 'react-dom';
import Accordion from '../src/accordion';

class RenderAccordion extends React.Component {
  render() {
    return <Accordion />;
  }
}
ReactDOM.render(
  <RenderAccordion />,
  document.querySelector('#root')
);
