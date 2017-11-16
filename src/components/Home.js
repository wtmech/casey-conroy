import React, { Component } from 'react';
// import caseySit from '../images/casey-backchair1.png';
import '../css/index.css';
import Header from './Header';
import Footer from './Footer';
import Media from './Media';
// import { Link } from 'react-router-dom';


class Home extends Component {
  render() {
    return (
      <div>
      <Header />
      <div className="home">
        <div className="img-contain">
        </div>
        <Media />
      </div>
      <Footer />
      </div>
    );
  }
}

export default Home;