import React, { Component } from 'react'
// import nasaData from './nasaData.js'
import './App.css'

class App extends Component{
  constructor(props){
    super(props)
    this.state = {
      nasa: null,
      pic: ""
    }
  }

  componentDidMount(){
    fetch("https://api.nasa.gov/mars-photos/api/v1/rovers/curiosity/photos?sol=1000&api_key=DEMO_KEY")
    .then((response) => {
      if(response.status === 200){
        console.log(response.json())
        return response.json()
      }
    })
    .then((payload) => {
      console.log(payload)
      this.setState({ nasa: payload.photos })
    })
    .catch((error) => {
      console.log(error)
    })
  }

  getPic = () => {
    if(this.state.nasa !== null){
      let randomNum = Math.floor(Math.random() * this.state.nasa.length)
      this.setState({ pic: this.state.nasa[randomNum].img_src })
    }
  }



  render(){
    return(
      <React.Fragment>
        <h1>Mars Pics</h1>
        <button onClick={ this.getPic }>Get Pic!</button>
        <img src={ this.state.pic } />
      </React.Fragment>
    )
  }
}
export default App
