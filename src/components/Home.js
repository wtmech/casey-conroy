import React, { Component } from 'react';
import '../css/index.css';
import Header from './Header';
import Footer from './Footer';
import Media from './Media';

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