import React, { useState } from "react";

export default function Counter() {
    const [count,setCount]=useState(0);
    console.log("rendering ")
    const counterPLus=  (e)=>{
        setCount((count)=>count +1);
    }
    const counterMinus=  (e)=>{
        setCount((count)=>count -1);
    }

  return (
   
    <div>
         <div>
      <p>Counter</p>        
    </div>
    <div>
        <p>{count }</p> 

    </div>
    <spam>
        <button onClick={counterPLus}>+</button>
    </spam>
    <br/>
    <spam>
        <button onClick={counterMinus}>-</button>
    </spam>

    </div>
  );
}
