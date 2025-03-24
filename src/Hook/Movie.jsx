// import React from 'react'


// function Movie(props){
//   return (
//     <div>
//         {console.log("In Movie component")}
//         <h1>Name: {props.name}</h1>
//         <input type="text" onChange={props.change} />
//     </div>
//   )
// }

// export default React.memo(Movie)


// import { useRef, useState } from "react";

// function Counter() {
//   const renderCount = useRef(-1);
//   const [count, setCount] = useState(0);

//   renderCount.current++;
//   return (
//     <div>
//       <p>Count: {count}</p>
//       <p>Render Count: {renderCount.current}</p>
//       <button onClick={() => setCount(count - 1)}>Increment</button>
//     </div>
//   );
// }

// export default Counter;


import { useState, useCallback, useEffect } from "react";
import MemorizeChild from "./MemorizeChild";

function Parent() {
  const [count, setCount] = useState(0);

  const handleClick = useCallback(() => {
    console.log("Button Clicked");
  },[]);

  
  return (
    <div>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <MemorizeChild onClick={handleClick} />
    </div>
  );
}
export default Parent;
