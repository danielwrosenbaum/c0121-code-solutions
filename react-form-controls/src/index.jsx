import React from 'react';
import ReactDOM from 'react-dom';

class NewsletterForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: ''
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });

  }

  handleSubmit(event) {
    event.preventDefault();
    console.log('state:', { email: this.state.value });

  }

  render() {
    return (
    <form onSubmit={this.handleSubmit}>
      <input name="email" placeholder="enter email" type="text" value={ this.state.value } onChange={this.handleChange} />
      <button type="submit">Submit</button>
    </form>
    );
  }
}

ReactDOM.render(
  <NewsletterForm />,
  document.querySelector('#root')
);
