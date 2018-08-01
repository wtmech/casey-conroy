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
            name="Gotta Give" 
            img="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/gottagive.jpg?alt=media&token=32bba95b-8bf5-49c6-ba2d-5856dab0ff40" 
            spotify="https://open.spotify.com/track/5FkXb7nnP9VCALmkQP2kkF?si=fiKKm3ZETtGymXEoIJV2bg"
            apple="https://itunes.apple.com/us/album/gotta-give-single/1390330065"
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