import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import {Switch, Route, Link} from 'react-router-dom';


import AboutContainer from './components/About/AboutContainer'
import Login from './components/Login/Login'
import Home from './components/Home/Home'
import Header from './components/Header/Header'

class App extends Component {
  render() {
    return (
      <div>
        <Header/>
        <Switch>

          <Route exact path="/" component={Home}/>

          <Route exact path="/login" component={Login}/>
          <Route exact path="/about" component={AboutContainer}/>
        </Switch>
        <AboutContainer hola="saluda" adios="chao" asd="123">
          <div>Childreeen</div>
        </AboutContainer>
      </div>
    );
  }
}

export default App;
