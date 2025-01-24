// Create a functional component Greeting that accepts a name as a prop and
// displays "Hello, [name]!".
import React from 'react'

function DisplayNameUsProps(props) {
  return (
    <div>
      <h3>props is :{props.name} </h3>
    </div>
  )
}

export default DisplayNameUsProps
