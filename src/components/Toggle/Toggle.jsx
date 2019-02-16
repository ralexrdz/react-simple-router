import React from 'react'

class Toggle extends React.Component {
  constructor(props) {
    super(props);
    this.state = {isToggleOn: true};

    // This binding is necessary to make `this` work in the callback
    // this.handleClick = this.handleClick.bind(this);
  }

  handleClick (e, num, asd) {
    console.log('this', this)
    console.log('e.target', e.target)
    console.log('num', num)
    console.log('asd', asd)
    let colorArr = ['blue', 'green', 'yellow', 'pink', 'orange', 'purple']
    e.target.style['background-color'] = colorArr[Math.floor(Math.random() * colorArr.length)]
    this.setState(state => ({
      isToggleOn: !state.isToggleOn
    }));
  }

  render() {
    return (
      // <button onClick={this.handleClick.bind(this)}>
      <button onClick={(e) => this.handleClick(e, 11, 'qwe')}>
        {this.state.isToggleOn ? 'ON' : 'OFF'}
      </button>
    );
  }
}

export default Toggle