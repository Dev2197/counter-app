import { useState } from "react";
import "./App.css";

function App() {

  const [counter, setCounter] = useState(0)

  // const increment/decrement = ()=>{
  //   setCount(count+1);
  // }

  // const decrement = ()=>{
  //  setCount(count-1)
  // }
  return (
    <div className="App">
      <h2 data-testid="counter-value">{counter}</h2>
      <button data-testid="counter-decrement-button" onClick={()=>{setCounter(counter - 1)}} disabled={counter <= 0 ? true:false} >-</button>
      <button data-testid="counter-increment-button" onClick={()=>{setCounter(counter + 1)}} >+</button>
    </div>
  );
}

export default App;
