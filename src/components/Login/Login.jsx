import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom';


import loginAction from '../../actions/action-login';

class Login extends Component {
  onUsernameInputChange (e) {
    this.setState({
      username: e.target.value
    })
  }
  onPasswordInputChange (e) {
    this.setState({
      password: e.target.value
    })
  }
  login (e) {
    e.preventDefault()
    if (this.state.password === '0123456789') {
      this.props.loginAction(this.state.username)
    } else {
      alert('error autenticación')
    }

  }
  render() {
    if (!! this.props.session) {
      return <Redirect to="/"/>
    }
    return (
      <form >
        <div>
          <input 
            type="text" 
            placeholder="username" 
            onChange={(e) => this.onUsernameInputChange(e)}
            autoFocus
          />
        </div>
        <div>
          <input 
            type="password" 
            placeholder="password" 
            onChange={(e) => this.onPasswordInputChange(e)}
          />
        </div>
        <div>
          <button onClick={(e) => this.login(e)}>Entrar</button>
        </div>
      </form>
    );
  }
}

function mapStateToProps(state) {
  return {
    session: state.session
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({loginAction}, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);
