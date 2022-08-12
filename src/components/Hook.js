import React,{useState} from 'react'
function Hook(){

    const [count,setCount]=useState[0];
    
    return(
        <div>
            <button onClick={()=> setCount(count+1)}>{count}</button>
        </div>
    )   
}
export default Hook