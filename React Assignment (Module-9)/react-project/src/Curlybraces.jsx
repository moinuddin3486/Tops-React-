// A paragraph explaining JSX with dynamic data (use curly braces to insertvariables)
import React from 'react'

function Curlybraces() {
    let para=" Inside the curly braces, you can evaluate any JavaScript expression. This includes variables, function calls, mathematical operations, conditional statements, and more."
  return (
    <div>
      <p>defination of Curly braces :- {para}</p>
    </div>
  )
}

export default Curlybraces
