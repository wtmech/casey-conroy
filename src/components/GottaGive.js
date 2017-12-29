import React, { Component } from 'react';
import Collapsible from 'react-collapsible';
// import FontAwesome from 'react-fontawesome';
import '../css/index.css';
import Header from './Header';



class MusicInfo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      selected: 'Gotta Give',
      credits: false
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

    if (this.state.selected === 'Gotta Give') {
      lyrics = <div><p>
      Thank God no harm was done <br/>
      It was all just a little bit carried away fun<br/>
    </p>
  
    <p>
      But I kiss him in the back with an old heart<br/>
      Playing in the back with an old pack of cards<br/>
      And I know you say I got a pretty face<br/>
      But you have never seen me play this way<br/>
    </p>

    <p>
      This is a losing game he said to me<br />
      This is a nightmare following a mistake solving a mystery<br />
      Something gotta give <br />
      Something gotta give <br />
    </p>

    <p>
      False faith never hurt this good<br />
      It's an embrace that's making me feel like a child would <br />
    </p>

    <p>
      But I look him in the face in a fairground<br />
      Never too much space to be playing around <br />
      And I know I said we played a fair game <br/>
But I don't really think there's a right way<br/>
    </p>

    <p>
    This is a losing game he said to me<br/>
    This is a nightmare following a mistake solving a mystery<br/>
    Something gotta give <br/>
    Something gotta give<br/>
    </p>

    <p>
    Something gotta give<br/> 
    Something gotta give <br/>
    Something gotta give <br/>
    Something gotta give <br/>
    </p>

    <p>
    This is a losing game he said to me<br/>
    This is a nightmare following a mistake solving a mystery<br/>
    Something gotta give <br/>
    Something gotta give<br/>
    </p>
    </div>
    } else if (this.state.selected === 'Gotta Give2') {
      lyrics = <div>yooo</div>;
    }

    const style = {
      albumCoverImg: {
        background: 'url("https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/ggc1.jpg?alt=media&token=f271ef00-0b9f-4886-a0bd-e427933603b9") no-repeat',
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
          
          <span className="album-title">Gotta Give </span>
          <div className="album-cover" style={style.albumCoverImg}></div>
          
          </div>
          <div className="album-content"> 
          <div className="table-contain">
            <table style={{width: '100%', textAlign: 'center', marginTop: '10%'}}>
              <tbody>
              <tr onClick={() => this.selectSong('Gotta Give')}>
                <td>1</td>
                <td>Gotta Give</td>
              </tr>
              </tbody>
            </table>
          </div>         
          <div className="top-line"></div>

            <div className="lyrics">
            
            {lyrics}
            
          
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