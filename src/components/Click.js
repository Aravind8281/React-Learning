import React, { Component } from 'react'

class Click extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         messsage:"hi"
      }
    }
    
    Clickhandler(){
        this.setState({
            message:'goodbye'
        })
    }
    
  render() {
    return (
      <div>
        <div>{this.state.message}</div>
        <button onClick={this.Clickhandler.bind(this)}>click me</button>
      </div>
    )
  }
}

export default Click
