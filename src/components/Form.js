import React, { Component } from 'react';
import '../css/index.css';

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      subject: '',
      message: ''
    }
    this.handleSubjectChange = this.handleSubjectChange.bind(this);
    this.handleMessageChange = this.handleMessageChange.bind(this);
  }

  handleSubjectChange(e) {
    this.setState({subject: e.target.value});
  }

  handleMessageChange(e) {
    this.setState({message: e.target.value});
  }

  render() {
    
    return (
      <div className="input-wrapper">
        <form action="https://formspree.io/info@iamcaseyconroy.com" method="POST">
        <input className="name form" type="text" name="name" placeholder="name" /><br/>
        <input className="email form" type="text" name="email" placeholder="email" /><br/>
        <textarea className="message form" placeholder="message" name="message" ></textarea>
        <input type="submit" className="send"/>
        </form>
        
      </div>
    );
  }
}

export default Form;