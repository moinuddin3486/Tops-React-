import React, { useState } from 'react'

const Counter = () => {
    const[count,setcount]=useState(0)
  return (
    <div>
      <h2>Counter :{count}</h2>
      <button onClick={()=>setcount(count+1)}>Add</button>
      <button onClick={()=>setcount(count-1)}>Minus</button>

    </div>
  )
}

export default Counter
