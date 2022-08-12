import React, { Component } from 'react'
//to fetch the input value and focus on specific textfield
//createRef and callbackref
class Refs extends Component {
    constructor(props) {
      super(props)
      this.inputRef=React.createRef()
      this.cbref=null
      this.setCbRef= element =>{
        this.cbref=element
      }
    }
    componentDidMount(){
        if(this.cbref){
            this.cbref.focus()
        }
    }
    /*componentDidMount(){
        this.inputRef.current.focus()
        console.log(this.inputRef)
    }*/
    clickHandler=() =>{
        alert(this.inputRef.current.value)
    }
  render() {
    return (
      <div>
        <input type="text" ref={this.inputRef}/>
        <input type="text" ref={this.cbref}/>

        <button onClick={this.clickHandler}>Click</button>
      </div>
    )
  }
}

export default Refs
