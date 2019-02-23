import React, { Component } from 'react';
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'

import { Redirect } from 'react-router-dom'

import addTuitAction from '../../actions/action-add-tuit'



class TuitForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      redirectToHome: false
    }
  }
  handleClick(e) {
    e.preventDefault()
    let newTuit = {
      text: this.state.text,
      quien: this.props.session,
      date: Date.now()
    }
    this.props.addTuitAction(newTuit)
    this.setState({
      redirectToHome: true
    })
    // limpiar textarea y input
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  render() {
    if (this.state.redirectToHome) 
      return <Redirect to="/"/>
    else 
      return (
        <div>
          <form>
            <textarea
              name="text" 
              placeholder="escribe un tuit"
              onChange={(e) => this.handleTextChange(e)}
            />
            <div>
              <button onClick={(e) => this.handleClick(e)}>Tuitea</button>
            </div>
          </form>
        </div>
      );
  }
}

function mapStateToProps (state) {
  return {
    session: state.session
  }
}

function mapDispatchToProps (dispatch) {
  return bindActionCreators({addTuitAction}, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(TuitForm);
