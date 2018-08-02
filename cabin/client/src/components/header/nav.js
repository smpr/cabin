import React, { Component } from 'react';
import {BrowserRouter as Link } from 'react-router-dom'
import RaisedButton from 'material-ui/RaisedButton';

class Nav extends Component {
    render() {
        return (
            <div>
               <RaisedButton href="/" label="Home" />
               <RaisedButton href="/todo" label="To Do" />
            </div>
        );
    }
}

export default Nav;