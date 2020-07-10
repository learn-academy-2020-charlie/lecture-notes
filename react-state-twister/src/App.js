import React, { Component } from 'react';
import './App.css'

export default class App extends Component {
  constructor(props) {
    super(props)
      this.state = {
        currentPosition: "",
        bodyPlacementOptions: ["L🖐🏻", "R🤚🏻", "L🦶🏻", "R🦶🏻"],
        colorOptions: ["🔴", "🔵", "🟢", "🟣"]
      }
  }

  handleChange = () => {
    let { bodyPlacementOptions, colorOptions } = this.state
    // create 2 random numbers to pick a body part and a color
    let bodyPosition = bodyPlacementOptions[Math.floor(Math.random() * 4)]
    let colorPosition = colorOptions[Math.floor(Math.random() * 4)]
    // return both of those things as a string
    let newPosition = `${ bodyPosition }${ colorPosition }`
    // update the state "currentPosition" based on the return
    this.setState({ currentPosition: newPosition })
  }

  render() {
    return(
      <>
        <h1>Twister!!</h1>
        <button onClick={ this.handleChange }>
          Click me!
        </button>
        <div>
          { this.state.currentPosition }
        </div>
      </>
    )
  }
}
