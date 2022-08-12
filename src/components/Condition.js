import React, { Component } from 'react'

export class Condition extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isloggedin: true
      }
    }
    
  render() {
    return this.state.isloggedin && <div>Welcome aravind</div>
    /* Ternary 
    return this.state.isloggedin ?(
        <div>welcome aravind</div>
    ) : (
        <div>Wecome Guest</div>
    )*/

    /*if(this.state.isloggedin){
        return(
            <div>
                Welcome aravind
            </div>
        )
        
    }
    else{
        return(
            <div>
                HEllo Guest
            </div>
        )
    }*/

    /*let message

    if(this.state.isloggedin){
        message= <div>Hello aravind</div> 
    }
    else{
        message= <div>Hello Guest</div>
    }
    return <div>{message}</div>*/

  }
}

export default Condition
