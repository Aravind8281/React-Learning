import React,{useEffect,useState} from 'react'

function HookOnlyonce() {
    const {x,setX}=useState(0);
    const {y,setY}=useState(0);
    const logmousepoition=e=>{
        setX(e.clientx)
        setY(e.clienty)
    }
    useEffect(()=>{
        console.log('useEffect called ')
        window.addEventListener('mousemove',logmousepoition)
    },[])
  return (
    <div>
      x- {x}
      y- {y}
    </div>
  )
}

export default HookOnlyonce
