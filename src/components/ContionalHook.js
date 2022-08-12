import React,{useEffect, useState} from 'react'

function ContionalHook() {
    const [count,setcount]=useState(0)
    const [name,setname]=useState('')
    useEffect(()=>{
        console.log("Updating document")
        document.write=`you clicked ${count} times`
    },[count])
  return (
    <div>
      <input type='text' value={name} onChange={e =>setname(e.target.value)}/>
      <button onClick={()=> setcount(count+1)}>Click {count}</button>
    </div>
  )
}

export default ContionalHook
