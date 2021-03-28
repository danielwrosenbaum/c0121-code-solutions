import React from 'react';

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

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    // this.handleActive = this.handleActive.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      // isClicked: false,
      activeIndex: 0,
      target: null
    };
  }

  // handleActive() {
  //   const activeIndex = this.state.activeIndex;
  // }

  handleClick(event) {
    const activeIndex = this.state.activeIndex;
    if (event.target.id === 'right') {
      if (activeIndex < imgList.length - 1) {
        this.setState({
          activeIndex: activeIndex + 1
        });
      } else {
        this.setState({
          activeIndex: 0
        });
      }
    } else if (event.target.id === 'left') {
      if (activeIndex > 0) {
        this.setState({
          activeIndex: activeIndex - 1
        });
      } else {
        this.setState({
          activeIndex: imgList.length - 1
        });
      }
    }

  }

  render() {
    const activeIndex = this.state.activeIndex;
    // console.log(activeIndex, imgList.length);

    const element = (
      <div className='image-container'>
        {
          imgList.map((pic, index) => {
            return (
                <div key={index} data={index}>
                  {index === activeIndex &&
                    <img src={pic.imageUrl} alt={pic.title} />
                  }
                </div>
            );
          })
        }

      </div>
    );
    const navElement = (
      <div className='nav-bar'>
        {
          imgList.map((pic, index) => {
            return (
              <div id={index} key={index}>
              { index === activeIndex
                ? <i className="fas fa-circle"></i>
                : <i className="far fa-circle"></i>}
              </div>
            );
          })
        }
      </div>
    );
    return (
      <div>
      <div className='container'>
        <div className='left nav'>
          <a className='button' onClick={this.handleClick}>
            <i id="left" className="fas fa-chevron-left fa-3x"></i>
          </a>
        </div>
        {element}
        <div className='right nav'>
          <a className='button' onClick={this.handleClick}>
            <i id="right" className="fas fa-chevron-right fa-3x"></i>
          </a>
        </div>

      </div>
        {navElement}
      </div>
    );
  }

}
