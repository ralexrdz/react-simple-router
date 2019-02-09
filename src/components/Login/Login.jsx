import React, { Component } from 'react';


class Login extends Component {
  render() {
    const x = Date.now()
    return (
      <div>
        <h1>Login</h1>
        <p>Last login {x}</p>
      </div>
    );
  }
}

export default Login;
