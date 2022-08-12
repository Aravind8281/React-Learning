import React from 'react'
import ReactDom from 'react-dom'
function Portals() {
  return ReactDom.createPortal(
    <h1>portal
    </h1>,
    document.getElementById('portal-root')
  )
}

export default Portals
