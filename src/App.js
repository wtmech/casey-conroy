import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Home from './components/Home';
import Bio from './components/Bio';
import Work from './components/Work';
import Connect from './components/Connect';
import MusicInfo from './components/MusicInfo';
import GottaGive from './components/GottaGive';




class App extends Component {
  render() {
    return(
      <div>
        <Router>
        <div className="App">
          <Switch>
            <Route path="/" component={Home} exact={true} />
            <Route path ="/i-am" component={Bio} />
            <Route path ="/music" component={Work} />
            <Route path ="/connect" component={Connect} />   
            <Route path="/Something-in-Mind" component={MusicInfo} />
            <Route path="/Gotta-Give" component={GottaGive} /> 
            
            
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}
export default App;