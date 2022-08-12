import React from 'react'

function Childcomponent(props) {
  return (
    <div>
      <button onClick={() => props.greethandler('child')}>greetparent</button>
    </div>
  )
}

export default Childcomponent
