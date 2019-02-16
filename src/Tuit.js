import React, { Component } from 'react';

class Tuit extends Component {
  render() {
    return (
      <div>
        <div>{this.props.tuit.quien} {this.props.tuit.date}</div>
        <p>{this.props.tuit.text}</p>
      </div>
    );
  }
}

export default Tuit;
