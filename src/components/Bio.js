import React, { Component } from 'react';
import Header from './Header';
import Footer from './Footer';
import '../css/index.css';


class Bio extends Component {
  render() {
    return (
      <div className="bio">
        <Header />
        <div className="iam-contain">
          <div className="candle-contain">
          <img className="bio-img" src="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/caseycandle.png?alt=media&token=7ea8ed33-546e-4ad8-afd8-6271dececd10" alt=""/>
          
          </div>

          <div className="bio-contain">
            <div className="bio-content">
            <p><span className="first-letter">A</span>t heart, I’m a total piano song fanatic. I am a nerd when it comes to songwriting. The art of fusing a story with beautiful melodies, is and always will be my true passion. Before I was born, my dad saved his money, rented a studio overnight and recorded an entire album that he wrote, produced and played all the instruments for. I remember it was on this old white iPod that he gave me and when we would leave my dad in the summer to go to New Jersey I would bring the iPod and I would listen to that album on repeat every night. It wasn’t just music, it was poetry. I was like six years old crying myself to sleep over the melodies and the depth of the lyrics. Ever since then I wrote music to express myself and tell stories about the people and experiences around me.</p>
            
            <p><span className="first-letter">W</span>henever I’m explaining to people how much I love music I always say how when I love a song I can actually start to develop a crush on it. The same heart string pulling you can feel when you are falling for someone, I feel it listening to music. Actually, right now I’m listening to “Both Sides Now” by Joni Mitchell and getting that feeling! I can’t count the nights I’ve gone to bed crying listening to music. I am the biggest believer in the universal power of music and honestly feel so privileged I was given the ability to create it. I never want to take that for granted or overlook the power I possess.</p>
            
            <p><span className="first-letter">W</span>hen I’m not creating or writing or just listening I love to enjoy the little things in life. Sometimes I go a whole week excited because I know Thursday night I’m going to a cute, little restaurant. I love being with people I care about, I love finding the good in everything, and I never want to stop exploring all the diversity and uniqueness the world has to offer. It doesn’t take very much to make me happy. Just promise me there will be ice cream, some good music and my favorite people and I’ll be good.</p>
            </div>
            <img alt="Casey" className="signature" src="https://firebasestorage.googleapis.com/v0/b/casey-conroy.appspot.com/o/signature.png?alt=media&token=d81d821d-e73c-4be5-bc93-0e3bdded2d5e" />
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default Bio;