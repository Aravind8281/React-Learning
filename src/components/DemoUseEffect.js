import React,{useEffect,useState} from 'react'

function DemoUseEffect() {
    const [count,setcount]=useState(0)
    //function,accepts parameter
    useEffect(()=>{
      document.title=`You clicked ${count} times`
    })
    return (
    <div>
      <button onClick={()=>{
        setcount(count+1)
      }}>Click {count}</button>
    </div>
    )
}

export default DemoUseEffect
