import React, { Component } from 'react'

export class ErrBoundry extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         hasError:false
      }
    }
    static getDerivedStateFromError(error){
        return{
            hasError:true
        }
    }
  render() {
    if (this.state.hasError){
        return <h1>something went wrong</h1>
    }
    return <h1>{this.props.children}</h1>
  }
}

export default ErrBoundry
