import logo from "./logo.svg";
import "./App.css";
import React, { useEffect, useState } from "react";
import { useCounterContext } from "./context/counterContext";
import axios from "axios";
function App() {
  // const { counter, setCounter } = useContext(counterContext);
  const { counter, setCounter } = useCounterContext();
  const [data, setData] = useState();
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(true);
  const fetchData = async () => {
    try {
      const response = await axios.get("http://localhost:5000/");
      if (response.status === 200) {
        setData(response.data);
      } else setError(true);
    } catch (error) {
      console.log(error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchData();
  }, []);

  // return (
  //   <div className="App">
  //     <button onClick={() => setCounter((prev) => prev - 1)}>-</button>
  //     <p>{counter}</p>
  //     <button onClick={() => setCounter((prev) => prev + 1)}>+</button>
  //   </div>
  // );

  if (loading) return <h1>LOADING...</h1>;

  if (error) return <h1>Error...</h1>;

  return (
    <div>
      <h1>TaskName: {data.taskName}</h1>
      <h1>Done :{data.done}</h1>
    </div>
  );
}

export default App;
