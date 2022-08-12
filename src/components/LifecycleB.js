import React, { Component } from 'react'

class LifecycleB extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'viswas'
      }
      console.log('lifecycleB Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleB getDerived')
        return null
    }
    componentDidMount(){
        console.log('LifecycleB did mount')
    }
  render() {
    console.log('lifecycleB Render')
    return (
      <div>
      </div>
    )
  }
}

export default LifecycleB
