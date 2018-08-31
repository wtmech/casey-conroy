import React, { Component } from 'react';
import {
  HashRouter as Router,
  Route, Switch
} from 'react-router-dom';

import Home from './components/Home';
import Bio from './components/Bio';
import Work from './components/Work';
import Connect from './components/Connect';

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
          </Switch>
        </div>
        </Router>
      </div>
    );
  }
}
export default App;