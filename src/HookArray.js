import React,{useState} from 'react'

function HookArray() {
    const [items,setItems]=useState([])
    const additem=()=>{
        setItems([...items,{
            id:items.length,
            value:Math.floor(Math.random()*10)+1
        }])
    }
  return (
    <div>
        <button onClick={additem}>Add a number</button>
      <ul>
        {
            items.map(item=>(
            <li key={items.id}>{items.value}</li>
            ))
        }
      </ul>
    </div>
  )
}

export default HookArray
