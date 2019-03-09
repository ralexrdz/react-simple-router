import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import TuitList from '../Tuit/TuitList';

import getTweets from '../../actions/action-get-tweets'

const url = 'https://gist.githubusercontent.com/pitakill/1b350ebb47d8c07789d13d2cce83ca7e/raw/1942e914e42a08037e182aa737f030eaf21cc50a/tuits.json'

class Home extends Component {
  componentDidMount() {
    this.props.getTweets(url)
  }

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

function mapDispatchToProps(dispatch) {
  return bindActionCreators({getTweets}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Home);
