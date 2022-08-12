import React from 'react'

function Namelist() {
    const names=['bruce','clark','diana']
    const namelist=names.map(name => <h2>{name}</h2>)
  return (
    /*<div>
      {
        names.map(name => <h2>{name}</h2>)
      }
    </div>*/
    <div>
        {
            namelist
        }
    </div>
  )
}

export default Namelist
