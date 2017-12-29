import React, { Component } from 'react';
// import logo from '../images/logo.png';
import '../css/index.css';
import { NavLink } from 'react-router-dom';



class Header extends Component {
  render() {
    return (
      <div>
        <div className="header">
        <NavLink to="/"><img src="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/CC%20Logo%20Black.png?alt=media&token=76b6e6d4-b993-4e05-86fc-70b6fb234e1a" className="app-logo" alt="logo" /></NavLink>
        <input id="burger" type="checkbox" className="burger"/>
        
        <label htmlFor="burger">
        <div>
          <span></span>
          <span></span>
          <span></span>
          </div>
        </label>
        <nav>    
          <ul>
            <li><NavLink to="/">Home</NavLink></li>          
            <li><NavLink to="/i-am">I am...</NavLink></li>
            <li><NavLink to="/music">music</NavLink></li>
            <li><NavLink to="/connect">Connect</NavLink></li>           
          </ul> 
        </nav>
          {/*<div className="logo-contain">
    </div>*/}
          <div className="header-nav">
              <NavLink activeClassName="is-active" className="nav" exact={true} to="/">Home</NavLink>          
              <NavLink activeClassName="is-active" className="nav" to="/i-am">I am...</NavLink>
              <NavLink activeClassName="is-active" className="nav" to="/music">Music</NavLink>
              <NavLink activeClassName="is-active" className="nav" to="/connect">Connect</NavLink>
          </div>
          </div>
        </div>
    );
  }
}

export default Header;
