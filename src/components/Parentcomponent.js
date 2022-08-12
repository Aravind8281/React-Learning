import React, { Component } from 'react'
import Childcomponent from './Childcomponent'
class Parentcomponent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parentname: 'Parent'
      }
      this.greetparent=this.greetparent.bind(this)
    }
    greetparent(chil){
        alert(`hello ${this.state.parentname} from ${chil}`)
    }
  render() {
    return (
      <div>
        <Childcomponent greethandler={this.greetparent} />
      </div>
    )
  }
}

export default Parentcomponent
