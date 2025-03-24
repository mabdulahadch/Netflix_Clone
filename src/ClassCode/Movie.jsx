import React from 'react'


function Movie (props){
  return (
    <div>
        {console.log("In Movie component")}
        <h1>Name: {props.name}</h1>
        {/* <input type="text" onChange={props.change} /> */}
    </div>
  )
}

export default React.memo(Movie)
