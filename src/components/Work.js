import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
// import { Grid, Row, Col } from 'react-bootstrap';
import Header from './Header';
import Footer from './Footer';
import MusicCard from './MusicCard';
import '../css/index.css';



class Work extends Component {
  render() {
    return (
      <div className="work">
        <Header />
        <div className="work-cards">
          <MusicCard 
            type="Single" 
            name="Something in Mind" 
            img="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/simc.jpg?alt=media&token=257df260-b280-494a-a178-a33887fc5119" 
            spotify="https://open.spotify.com/track/1516e1MMhkvbQ06dUrjlUe"
            apple="https://itunes.apple.com/us/album/something-in-mind-single/1209625600"
          />
          <MusicCard 
            type="Single" 
            name="Gotta Give" 
            img="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/ggc1.jpg?alt=media&token=f271ef00-0b9f-4886-a0bd-e427933603b9" 
          />
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default Work;