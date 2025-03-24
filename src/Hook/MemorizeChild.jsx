import React from 'react'

function MemorizeChild(props) {
    console.log("Child Rendered");
  return (
    <button onClick={props.onClick}>Click Me</button>
  )
}

export default React.memo(MemorizeChild)