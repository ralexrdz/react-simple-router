import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom';


import endSessionAction from '../../actions/action-end-session';

class Logout extends Component {
  render() {
    console.log('Logout props', this.props)
    if (! this.props.session)
      return <Redirect to="/"/>
    else {
      this.props.endSessionAction()
      return <></>
    }
  }
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({endSessionAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Logout);
