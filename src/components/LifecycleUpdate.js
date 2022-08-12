import React, { Component } from 'react'
import LifecycleBUpdate from './LifecycleB'

class LifecycleUpdate extends Component {
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
    shouldComponentUpdate(){
        console.log('LifecycleA ShouldComponentUpdate')
        return true
    }
    getSnapshotBeforeUpdate(){
        console.log('GetSnapshot A')
    }
    componentDidUpdate(){
        console.log('componentDidUpdate')
    }
  render() {
    console.log('lifecycleA render')
    return (
      <div>
        <LifecycleBUpdate />
      </div>
    )
  }
}

export default LifecycleUpdate
