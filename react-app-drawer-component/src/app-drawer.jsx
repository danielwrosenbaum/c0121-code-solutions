import React from 'react';

export default class AppDrawer extends React.Component {

  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      isClicked: false
    };
  }

  handleClick() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      this.setState({ isClicked: true });
    } else {
      this.setState({ isClicked: false });

    }
  }

  hideButton() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return 'button';
    } else {
      return 'button hidden';
    }
  }

  hideModal() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return 'modal hidden';
    } else {
      return 'modal';
    }
  }

  overlay() {
    const isClicked = this.state.isClicked;
    if (!isClicked) {
      return '';
    } else {
      return 'overlay';
    }
  }

  render() {
    const buttonClass = this.hideButton();
    const modalClass = this.hideModal();
    const nonModalClass = this.overlay();
    return (
      <div className={nonModalClass} onClick={this.handleClick}>
        <a className={buttonClass} onClick={this.handleClick}><i className="fas fa-bars fa-2x"></i></a>
        <div className={modalClass} onClick={this.handleClick}>
          <div className={'menu'}>
            <h2>Menu</h2>
            <h5>About</h5>
            <h5>Get Started</h5>
            <h5>Sign In</h5>
          </div>
        </div>
      </div>
    );
  }
}
