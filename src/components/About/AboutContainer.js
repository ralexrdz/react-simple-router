import React, { Component } from 'react';

import About from './About'

class AboutContainer extends Component {
  render() {
    // return <About hola={this.props.hola} adios={this.props.adios}/>
    return <About {...this.props}/>
  }
}

export default AboutContainer;
