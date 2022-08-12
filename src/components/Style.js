import React from 'react'
import './Mystyles.css'
function Style(props) {
    let className=props.primary ? 'primary' : ''
  return (
    <div>
      <h1 className={`${className} font-xl`}>Stylesheet</h1>
    </div>
  )
}

export default Style
