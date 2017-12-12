import React from 'react'
import ReactDOM from 'react-dom'
import './index.css'

class App extends React.Component {
  render() {
    return <div>Heldlo {this.props.name}</div>
  }
}

var mountNode = document.getElementById('app')
ReactDOM.render(<App name="World" />, mountNode)
