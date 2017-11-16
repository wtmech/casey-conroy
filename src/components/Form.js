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
        <form action={`mailto:wmech16@gmail.com?subject=${this.state.subject}&body=${this.state.message}`} method="post" enctype="text/plain">
        <input className="name form" type="text" name="name" placeholder="name" /><br/>
        <input className="email form" type="text" name="mail" placeholder="email" /><br/>
        <input className="subject form" type="text" name="subject" value={this.state.subject} onChange={this.handleSubjectChange} size="50" placeholder="subject" /><br/><br/>
        <textarea className="message form" placeholder="message" name="message" value={this.state.message} onChange={this.handleMessageChange} ></textarea>
        <input type="submit" value="Send" className="send"/>
        </form>
        
      </div>
    );
  }
}

export default Form;