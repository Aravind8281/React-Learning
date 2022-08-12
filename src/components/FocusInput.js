import React, { Component } from 'react'
import RefswithComponent from './RefswithComponent'
class FocusInput extends Component {
    constructor(props) {
      super(props)
      this.componentRef=React.createRef()
    }
    clickHandler=()=>{
        this.componentRef.current.focusInput()
    }    
  render() {
    return (
      <div>
        <RefswithComponent ref={this.componentRef}/>
        <button onClick={this.clickHandler}>FocusInput</button>
      </div>
    )
  }
}

export default FocusInput
