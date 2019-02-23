import React, { Component } from 'react';
import './App.css';

import {Switch, Route} from 'react-router-dom';


// import AboutContainer from './components/About/AboutContainer'
import Login from './components/Login/Login'
import Logout from './components/Login/Logout';
import Home from './components/Home/Home'
import Header from './components/Header/Header'
import TuitForm from './components/Tuit/TuitForm'

class App extends Component {
  constructor (props) {
    super(props)
    this.state = { tuits: []}
  }
  handleAddTuit (tuit) {
    this.setState({
      tuits: [...this.state.tuits, tuit ]
    })
  }
  render() {
    return (
      <div>
        {/* <TuitForm onAddTuit={(tuit) => this.handleAddTuit(tuit)}/>
        <TuitList tuits={this.state.tuits}/> */}
        <Header/>
        <Switch>

          <Route exact path="/" component={Home} />
          <Route exact path="/login" component={Login}/>
          <Route exact path="/logout" component={Logout}/>
          {/* <Route exact path="/about" component={AboutContainer}/> */}
          <Route exact path="/new-tuit" component={TuitForm}/>
        </Switch>
        {/* <Home tuits={this.state.tuits}></Home> */}
        {/* <AboutContainer hola="saluda" adios="chao" asd="123">
          <div>Childreeen</div>
        </AboutContainer> */}

      </div>
    );
  }
}

export default App;
