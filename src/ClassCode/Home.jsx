import React, { useState, useEffect, useMemo } from "react";
// import Movie from './Movie'

const incrementDouble = (c) => {
  for (let i = 0; i < 1000000000; i++);
  return c * 2;
};

const Home = () => {
  const [count, setCount] = useState(0);
  const [test, setTest] = useState(0);
  const [width, setWidth] = useState(window.innerWidth);

  const [dark, setDark] = useState(false);

  //   const doubleValue = useMemo(() => incrementDouble(count));

  //   const doubleValue = useMemo(() => incrementDouble(count), [count]);

  // const handleSize = () =>{
  //     setWidth(window.innerWidth)
  // }
  // useEffect(()=>{
  // //     fetch('https://jsonplaceholder.typicode.com/posts')
  // //   .then(response => response.json())
  // //   .then(json => console.log(json))
  // window.addEventListener('resize',handleSize)

  //   return () => {
  //     window.removeEventListener('resize',handleSize)
  //   }
  // },[])
  // console.log("in Home component")
  let [movieList, setMovieList] = useState([
    "Terminator",
    "Gatsby",
    "Bourne Series",
  ]);
  // const handleChange =  (e) => {
  //   let temp = [...movieList];
  //   temp[0] = "SomeNewValue";
  //   setMovieList(temp)
  // }

//   function handleChange() {
//     let temp = [...movieList];
//     temp[0] = "sdkf";
//     setMovieList(temp);
//   }

  const styles = dark
    ? { backgroundColor: "red", color: "black" }
    : { backgroundColor: "gray", color: "white" };
  return (
    <div style={styles}>
      {/* {movieList.map((val,index)=>{
            return <Movie key={index} name= {val} />
        })}
        <h3>{width}</h3> */}
      {/* <button onClick={()=>setCount(prev => prev+1)}>Count: {count}</button> */}
      {/* <button onClick={()=>setTest(prev => prev+1)}>Test: {test}</button>
       */}
      <button onClick={handleChange}>setMovie</button>
      {/* <br/> */}
      <button onClick={() => setDark((prev) => !prev)}>Change Theme</button>
      {/* <p style={styles}>{doubleValue}</p> */}
    </div>
  );
};

export default Home;
