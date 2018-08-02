import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Nav from './components/header/nav'
import Header from './components/header/header'
import Home from './components/home/HomePage'

class App extends Component {
  render() {
    return (
      <div>
          <Router>
            <div>
              <Header />
              <Nav />
              <Switch>
                <Route exact path='/' component={Home} />
              </Switch>
            </div>
          </Router>
      </div>
        );
      }
    }
    
    export default App;
