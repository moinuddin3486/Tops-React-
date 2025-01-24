import React from 'react'

const USercard = (props) => {
  return (
    <div>
      <h2>Use card Information</h2>
      <h4>Name:{props.name}</h4>
      <h4>Age : {props.age}</h4>
      <h4>Location :{props.city}</h4>
    </div>
  )
}

export default USercard
