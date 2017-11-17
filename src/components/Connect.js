import React, { Component } from 'react';
import Header from './Header';
import Form from './Form';
import Footer from './Footer';

import '../css/index.css';
// import { NavLink } from 'react-router-dom';



class Connect extends Component {
  render() {
    return (
      <div className="connect">
        <Header />
        <div className="connect-content">
        <Form />
        <div className="connect-img-contain">
        <img className="connect-img" src="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/connect.png?alt=media&token=8258514f-74c7-452b-a286-7b4f87516803" alt=""/>
        </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Connect;