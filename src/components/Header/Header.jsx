import React, { Component } from 'react'
import {Link} from 'react-router-dom'

import { connect } from 'react-redux'

import './Header.css'

class Header extends Component {
  render() {
    return (
      <header>
        <Link to="/">Home</Link>
        {
          !! this.props.session ?
            (
              <>
                <span>hola, {this.props.session}</span>
                <Link to="/new-tuit">(+)</Link>
                <Link to="/logout">Logout</Link>
              </>
            )
          : <Link to="/login">Login</Link>
        }
      </header>
    );
  }
}

function mapStateToProps (state) {
  return {
    session: state.session
  }
}

export default connect(mapStateToProps)(Header);
