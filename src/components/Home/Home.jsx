import React, { Component } from 'react';
import { connect } from 'react-redux'

import TuitList from '../Tuit/TuitList';

class Home extends Component {
  render() {
    return (
      <div>
        <h1>HOME</h1>
        <TuitList {...this.props}/>
      </div>

    );
  }
}

function mapStateToProps(state) {
  return {
    tuits: state.tuits,
    session: state.session
  };
}



export default connect(mapStateToProps)(Home);
