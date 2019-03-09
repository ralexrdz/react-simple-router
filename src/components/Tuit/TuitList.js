import React, { Component } from 'react';
import Tuit from './Tuit'

class TuitList extends Component {
  render() {
    const tuits = this.props.tuits.map(tuit => (
      <Tuit key={tuit.id} tuit={tuit}/>
    ))
    return (
      <div>
        {tuits}
      </div>
    );
  }
}

export default TuitList;
