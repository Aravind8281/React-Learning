import React,{useState,useEffect} from 'react'
import HookOnlyonce from './HookOnlyonce';

function HookCleanup() {
    const [x,setx]=useState(true);

  return (
    <div>
      <button onClick={()=>setx(!x)}> toggle</button>
      {x && <HookOnlyonce />}
    </div>
  )
}

export default HookCleanup
