import React from 'react';
import { BrowserRouter, Route, Link } from 'react-router-dom';
import Home from './components/Home';
import Profile from './components/Profile';
import About from './components/About';
import './css/styles.css'

export default class App extends React.Component {
    render() {
        return (
            <BrowserRouter>
                <ul className="menu-wrapper">
                    <li><Link to="/">Home</Link></li>
                    <li><Link to="/profile">Profile</Link></li>
                    <li><Link to="/about">About</Link></li>
                </ul>

                <Route exact path="/" component={Home} />
                <Route path="/profile" component={Profile} />
                <Route path="/about" component={About} />
            </BrowserRouter>
        );
    }
}