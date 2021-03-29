import React from 'react';

export default class Carousel extends React.Component {
  constructor(props) {
    super(props);
    this.handleCircle = this.handleCircle.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.timer = this.timer.bind(this);
    this.timerOn = this.timerOn.bind(this);
    this.state = {
      activeIndex: 0,
      target: null,
      timer: false
    };

  }

  handleCircle(event) {
    clearInterval(this.startTimer);
    this.setState({
      activeIndex: parseInt(event.target.id, 10),
      timer: false
    });

  }

  timer() {
    const activeIndex = this.state.activeIndex;
    if (activeIndex < this.props.items.length - 1) {
      this.setState({ activeIndex: activeIndex + 1 });
    } else {
      this.setState({ activeIndex: 0 });
    }
  }

  timerOn() {
    const timer = this.state.timer;
    if (!timer) {
      this.startTimer = setInterval(this.timer, 3000);
      this.setState({ timer: true });
    }
  }

  handleClick(event) {
    const activeIndex = this.state.activeIndex;
    clearInterval(this.startTimer);
    if (event.target.id === 'right') {
      this.setState({ timer: false });
      if (activeIndex < this.props.items.length - 1) {
        this.setState({
          activeIndex: activeIndex + 1
        });
      } else {
        this.setState({
          activeIndex: 0
        });
      }
    } else if (event.target.id === 'left') {
      this.setState({ timer: false });
      if (activeIndex > 0) {
        this.setState({
          activeIndex: activeIndex - 1
        });
      } else {
        this.setState({
          activeIndex: this.props.items.length - 1
        });
      }
    }

  }

  render() {
    const activeIndex = this.state.activeIndex;
    const { items } = this.props;

    const element = (
      <div className='image-container'>
        {
          items.map((pic, index) => {
            return (
                <div key={index} data={index}>
                  {index === activeIndex &&
                  <>
                    <img src={pic.imageUrl} alt={pic.title} />

                    <div className="title">{pic.title}</div>
                    </>
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
          items.map((pic, index) => {
            return (
              <div className="circle" key={index} onClick={this.handleCircle}>
              { index === activeIndex
                ? <i className="fas fa-circle"></i>
                : <i id={index} className="far fa-circle"></i>}
              </div>
            );
          })
        }
      </div>
    );
    return (
      <div onLoad={this.timerOn}>
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
