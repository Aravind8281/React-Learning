import React, { Component } from 'react'
import LifecycleBUpdate from './LifecycleB'

class LifecycleBUpdate extends Component {
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
    shouldComponentUpdate(){
        console.log('LifecycleB ShouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('GetSnapshot B')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate B')
    }
  render() {
    console.log('lifecycleB render')
    return (
      <div>
      </div>
    )
  }
}

export default LifecycleBUpdate
