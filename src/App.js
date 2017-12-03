import React, { Component } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import Shopping from './containers/Shopping';
import logo from './logo.svg';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Router>
          <Switch>
            <Route exact path="/" component={Shopping}></Route>
          </Switch>
        </Router>
      </div>
    );
  }
}

export default App;
