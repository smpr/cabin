import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom'

import Nav from './components/header/nav'
import Header from './components/header/header'
import Home from './components/home/HomePage'
import TodoHome from './components/todo/todoHome'
import TodoCreate from './components/todo/todoCreate'
import TodoEdit from './components/todo/todoEdit'
import TodoShow from './components/todo/todoShow'

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Header />
            <Nav />
            <Switch>
              <Route exact path='/todo/create' component={TodoCreate} />
              <Route exact path='/todo/:todoId/edit' component={TodoEdit} />
              <Route exact path='/todo/:todoId' component={TodoShow} />
              <Route exact path='/todo' component={TodoHome} />
              <Route exact path='/' component={Home} />
            </Switch>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;
