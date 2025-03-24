import React, {
  useState,
  useEffect,
  useMemo,
  useCallback,
  useRef,
} from "react";
import Movie from "./Movie";

const Home = () => {
  const [count, setCount] = useState(0);
  const inputRef = useRef();

  console.log(inputRef);

  useEffect(() => {
    setCount((prev) => prev + 1);
  // });
  },[])


  console.log("in Home component");
  let [movieList, setMovieList] = useState([
    "Terminator",
    "Gatsby",
    "Bourne Series",
  ]);

  const handleChange = (e, i) => {
    let temp = [...movieList];
    temp[i] = e.target.value;
    setMovieList(temp)

    // Solution to our issue we were facing in the class. (Why it get fixed, recall the useEffect and function closure problem)
    // setMovieList((prevList) => {
    //   let temp = [...prevList];
    //   temp[i] = e.target.value;
    //   return temp;
    // });
  };
  return (
    <div>
      {movieList.map((val, index) => {
        return (
          <Movie
            key={index}
            name={val}
            change={useCallback(
              (e) => handleChange(e, index),
              [movieList[index]]
            )}
          />
        );
      })}
      <button onClick={() => setCount((prev) => prev + 1)}>
        Count: {count}
      </button>
      <br />
      Refs: <input ref={inputRef} type="text" />
      <button onClick={() => inputRef.current.focus()}>Focus</button>
    </div>
  );
}

export default Home;
