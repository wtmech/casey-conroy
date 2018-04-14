import React, { Component } from 'react';
// import FontAwesome from 'react-fontawesome';
// import { Grid, Row, Col, Modal, Button } from 'react-bootstrap';
import '../css/index.css';

class MusicCard extends Component {

  
  render() {

    const style = {
      cardStyle: {
        margin: 8,
        background: "#FFF",
        transition: .25,
        borderRadius: 3
      },
      topCard: {
        background: `url(${this.props.img})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      },
      bottomCard: {
        display: 'flex',
        flexDirection: 'column'
      },
      bottomContent: {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        paddingLeft: 15,
        marginTop: 8
      }
    }

    let listen;

    if (!this.props.spotify && !this.props.apple) {
     listen = <span></span>;
    } else {
      listen = <span className="listen">Listen:</span>;
    }

    

    return (
      <div>
        <div className="card-contain" style={style.cardStyle}>
          <div className="top-card" style={style.topCard}></div>
          <div className="bottom-card">
            <div className="bottom-content" style={style.bottomContent}>
            <span className="song-title">{this.props.name}</span>
              <span className="song-type">{this.props.type}</span>
              <div className="listen-contain">
                {listen}
                <ul>
                  {this.props.spotify ? <li className="spotify-li"><a href={this.props.spotify} target="_blank" alt="Spotify">Spotify</a></li> : null}
                  {this.props.apple ? <li className="spotify-li"><a href={this.props.apple} target="_blank" alt="Apple Music">Apple Music</a></li> : null}
                </ul>
              </div>
            </div>
          </div>
        </div>

        <div className="flip-container" >
        
        <div className="flipper">
          <div className="front" style={style.topCard}>
          </div>
          <div className="back">
            <div className="back-logo"></div>
            <span className="back-title">{this.props.name}</span>
            <span className="back-type">{this.props.type}</span>
            <div className="listen-back">
              {listen}
              <ul>
              {this.props.spotify ? <li className="spotify-li back-link"><a href={this.props.spotify} target="_blank" alt="Spotify" style={{"color":"white"}}>Spotify</a></li> : null}
              {this.props.apple ? <li className="back-link"><a href={this.props.apple} target="_blank" alt="Apple Music" style={{"color":"white"}}>Apple Music</a></li> : null}
            </ul>
            </div>
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default MusicCard;