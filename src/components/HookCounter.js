import React,{useState} from 'react'

function HookCounter() {
    const initialCount=0
    const [count,setState]=useState(initialCount)
    const incrementfive=()=>{
        for(let i=0;i<5;i++){
            setState(prevCount=>prevCount+1)
        }
    }
  return (
    <div>
        count:{count}
        <button onClick={()=>setState(initialCount)}>Reset</button>
        <button onClick={()=>setState(count+1)}>INC</button>
        <button onClick={()=>setState(count-1)}>DEc</button>
        <button onClick={incrementfive}>5</button>
    </div>
  )
}

export default HookCounter
