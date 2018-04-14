import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
// import FontAwesome from 'react-fontawesome';
import '../css/index.css';
import Header from './Header';



class MusicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Something in Mind',
      credits: true
    }
    this.selectSong = this.selectSong.bind(this);
  }

  selectSong(song) {
    this.setState({
      selected: song,
      lyrics: undefined,
      credits: undefined
    })
  }

  render() {
    let lyrics;

    if (this.state.selected === 'Something in Mind') {
      lyrics = <div><p>
      Long day, small room<br/>
      Soft sheets and some carefully crafted perfume<br/>
      Long nights but no sleep<br/>
      Heads stuck in between all the crowded moon beams<br/>
    </p>
  
    <p>
      But you're not scared to find us inside this<br/>
      No you're not scared to find us silence<br/>
    </p>

    <p>
      You know I've got something in mind Something mind for you<br />
      I've got something in mind<br />
      Something in mind for you<br />
    </p>

    <p>
      Dark eyes, dark lipstick<br />
      Sensations between solar eclipses<br />
      No we don't need our phones<br />
      We need the world to let us have time alone<br />
    </p>

    <p>
      But you're not scared to find us inside this<br />
      No you're not scared to find us silence<br />
    </p>

    <p>
      You know I've got something in mind<br />
      Something in mind for you<br />
      I've got something in mind<br />
      Something in mind for you<br />
    </p>

    <p>
      He said most nights I go to bed hungry<br />
      But tonight your kisses taste like honey<br />
      And I don't mind, I don't mind<br />
    </p>

    <p>
      And most days it feels like 1 2 3<br />
      But you're giving me what I want now, not just what I need<br />
      And it's so nice, it's so nice<br />
    </p>

    <p>
      You know I've got something in mind<br />
      Something in mind for you<br />
      I've got something in mind<br />
      Something in mind for you<br />
    </p></div>
    } else if (this.state.selected === 'Something in Mind2') {
      lyrics = <div>yooo</div>;
    }

    const style = {
      albumCover: {
        width: '22rem',
        height: '22rem',
        background: 'url("https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/SIMCOVER.jpg?alt=media&token=3a25f5f5-f52a-46d7-a994-1e3edd328704") no-repeat',
        backgroundPosition: '50% 60%',
        backgroundSize: 'cover'
      }
    }
    return (
      <div>
      <Header />
      <div className="first-song">
        <div className="first-song-contain">
          <div className="left-work">
          
          <span className="album-title">Something in Mind </span>
          <div className="album-cover" style={style.albumCover}></div>
          <div className="table-contain">
            <table style={{width: '100%', textAlign: 'center', marginTop: '10%'}}>
              <tbody>
              <tr>
                <td>1</td>
                <td>Something in Mind</td>
              </tr>
              </tbody>
            </table>
          </div>
          </div>
          <div className="album-content">          
          <div className="top-line"></div>
            <div className="lyrics">
            <Collapsible trigger="Lyrics" transitionTime={400} >            
            {lyrics}
            
          </Collapsible>
          
            </div>
          <div className="top-line bottom"></div>
            
          {this.state.credits ? <div><div className="top-line"></div><div className="credits">
            <Collapsible trigger="Credits" transitionTime={400} >
            {this.state.selected}
          </Collapsible>
            </div><div className="top-line bottom"></div></div> : null}
          </div>
        </div>
      </div>
      </div>
    );
  }
}

export default MusicInfo;