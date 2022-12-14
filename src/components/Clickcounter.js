import React, { Component } from 'react'

class Clickcounter extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         count:0
      }
    }
    Increment = () =>{
        this.setState(prevState =>{
            return {count:prevState.count+1}
        })
    }
  render() {
    const {count}=this.state
    return (
      <div>
        <button onClick={this.Increment}>Clicked {count} times</button>
      </div>
    )
  }
}

export default Clickcounter
