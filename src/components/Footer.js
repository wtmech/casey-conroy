import React, { Component } from 'react';
import '../css/index.css';
import { NavLink } from 'react-router-dom';
import FontAwesome from 'react-fontawesome';

class Footer extends Component {
  render() {
    return (
      <div className="footer-contain">
        <div className="footer">
          <div className="footer-nav">
            <NavLink to="/" exact={true}>Home</NavLink>          
            <NavLink to="/i-am">I am...</NavLink>
            <NavLink to="/music">Music</NavLink>
            <NavLink to="/connect">Connect</NavLink>
          </div>
          <ul className="social-nav">
            <li><a href="https://www.facebook.com/iamcaseyconroy/" target="_black" alt="facebook"><FontAwesome name='facebook-official' /></a></li>
            <li><a href="https://itunes.apple.com/us/artist/casey-conroy/id691269111" target="_black" alt="apple music"><FontAwesome name='apple' /></a></li>
            <li><a href="https://open.spotify.com/artist/7elB9Pjvsisg4hKILUjaUr" target="_black" alt="spotify"><FontAwesome name='spotify' /></a></li>
            <li><a href="https://www.instagram.com/iamcaseyconroy/" target="_black" alt="instagram"><FontAwesome name='instagram' /></a></li>
            <li><a href="https://www.youtube.com/channel/UCIvJRoPKM4kDlNMV89hB0AQ" target="_black" alt="youtube"><FontAwesome name='youtube' /></a></li>
            <li><a href="https://twitter.com/iamcaseyconroy?lang=en" target="_black" alt="twitter"><FontAwesome name='twitter' /></a></li>
            <li><a href="mailto:info@iamcaseyconroy.com" alt="email"><FontAwesome name='envelope' /></a></li>            
          </ul>
        </div>
        <div className="copy">
        <div className="cc"> {new Date().getFullYear()} © CC Music LLC</div>
      </div>
      </div>
    );
  }
}

export default Footer;