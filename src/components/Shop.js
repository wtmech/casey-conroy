import React, { Component } from 'react';
import Header from './Header';
import '../css/index.css';
import { NavLink } from 'react-router-dom';



class Shop extends Component {
  render() {
    return (
      <div>
        <Header />
        <span className="connect">Coming Soon!</span>
      </div>
    );
  }
}

export default Shop;