import React, { Component } from 'react';

class TuitForm extends Component {
  constructor (props) {
    super(props)
    this.state = {
      text: '',
      quien: ''
    }
  }
  handleClick(e) {
    e.preventDefault()
    this.props.onAddTuit({
      text: this.state.text,
      quien: this.state.quien,
      date: Date.now()
    })
    // limpiar textarea y input
  }

  handleTextChange(e) {
    this.setState({
      text: e.target.value
    })
  }
  handleQuienChange(e) {
    this.setState({
      quien: e.target.value
    })
  }
  render() {
    return (
      <div>
        <form>
          <textarea name="text" onChange={(e) => this.handleTextChange(e)}/>
          <div>
            Quien: <input type="text" name="quien" onChange={(e) => this.handleQuienChange(e)}/>
            <button onClick={(e) => this.handleClick(e)}>Tuitea</button>
          </div>
        </form>
      </div>
    );
  }
}

export default TuitForm;
