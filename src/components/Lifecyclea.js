import React, { Component } from 'react'
import LifecycleB from './LifecycleB'

class Lifecyclea extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name:'viswas'
      }
      console.log('lifecycleA Constructor')
    }
    static getDerivedStateFromProps(props,state){
        console.log('LifecycleA getDerived')
        return null
    }
    componentDidMount(){
        console.log('LifecycleA did mount')
    }
  render() {
    console.log('lifecycleA render')
    return (
      <div>
        <LifecycleB />
      </div>
    )
  }
}

export default Lifecyclea
