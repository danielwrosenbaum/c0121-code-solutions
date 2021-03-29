import React from 'react';
import ReactDOM from 'react-dom';
import Carousel from '../src/carousel';

const imgList = [
  {
    title: 'Joshua Tree',
    imageUrl: 'https://media.cntraveler.com/photos/602ad7f38951486cd995d6ff/16:9/w_2560%2Cc_limit/913068642'
  },
  {
    title: 'Mojave',
    imageUrl: 'https://earthjustice.org/sites/default/files/43222736891_2a445d868c_k.jpg'
  },
  {
    title: 'Saguaro',
    imageUrl: 'https://m.media-amazon.com/images/I/71rnc-o4I+L._AC_SL1024_.jpg'
  },
  {
    title: 'Sedona',
    imageUrl: 'https://casago.com/sedona/wp-content/uploads/sites/4/2019/09/sedonabanner.jpg'
  },
  {
    title: 'Zion',
    imageUrl: 'https://cdn.getyourguide.com/img/location/5c40d26a80a40.jpeg/88.jpg'
  }
];

class App extends React.Component {
  render() {
    return <Carousel items={imgList} />;
  }
}
ReactDOM.render(
  <App />,
  document.querySelector('#root')
);
