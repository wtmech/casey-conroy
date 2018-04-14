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
            name="Something in Mind (Mediatrix Remix)" 
            img="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/SIMCOVER.jpg?alt=media&token=52199481-d3f6-42a9-bcf2-557ec8a7c790" 
            spotify="https://open.spotify.com/track/4vvNAJc71yZHylwZAqqt9I?si=nBlArG7zRFKFw3cmhBDbTg"
            apple="https://itunes.apple.com/us/album/something-in-mind-mediatrix-remix/1338614743?i=1338614750 "
          />
          <MusicCard 
            type="Single" 
            name="Something in Mind" 
            img="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/simc.jpg?alt=media&token=257df260-b280-494a-a178-a33887fc5119" 
            spotify="https://open.spotify.com/track/1516e1MMhkvbQ06dUrjlUe"
            apple="https://itunes.apple.com/us/album/something-in-mind-single/1209625600"
          />
          <MusicCard 
            type="Single" 
            name="Watch You Go" 
            img="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/WatchYouGo_NoGrain.jpg?alt=media&token=66af35de-2d37-4f68-9809-326292961a1a" 
            spotify="https://open.spotify.com/track/4xtTRtvTmvB4YvVrftXhaI?si=BBLi1DZQTAqFcF8_EI6bew"
            apple="https://itunes.apple.com/us/album/watch-you-go-single/1345673289"
          />
        </div>
        
        <Footer />
      </div>
    );
  }
}

export default Work;