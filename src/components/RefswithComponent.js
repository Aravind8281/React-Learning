import React, { Component } from 'react'

class RefswithComponent extends Component {
    constructor(props) {
      super(props)
        this.inputRef=React.createRef()
    }
    focusInput(){
        this.inputRef.current.focus()
    }
  render() {
    return (
      <div>
        <input ref={this.inputRef}></input>
      </div>
    )
  }
}

export default RefswithComponent
