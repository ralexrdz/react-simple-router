import React, { Component } from 'react';

import About from './About'

class AboutContainer extends Component {
  render() {
    console.log(this.props)
    // return <About hola={this.props.hola} adios={this.props.adios}/>
    return <About {...this.props}/>
  }
}

export default AboutContainer;
