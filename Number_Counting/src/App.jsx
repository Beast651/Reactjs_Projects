import { useState } from "react";
import "./App.css";

function App() {
  let [count, setCount] = useState(0);

  const increaseValue = () => {
    if (count < 20) {
      setCount(++count);
    } else {
      alert("Ab iske aage kya hi jaana hai : ) ");
    }
  };
  const decreaseValue = () => {
    if (count > 0) {
      setCount(--count);
    } else {
      alert("Ab isse niche to nahi ho payega bhaisaab");
    }
  };

  return (
    <>
      <h1>
        Inc./Dec. the Number <br /> When Clicked On The Buttons.
      </h1>
      <h3>Counter Value : {count} </h3>
      <button onClick={increaseValue}>Increment the value</button>
      <br />
      <br />
      <button onClick={decreaseValue}>Decrement the value</button>
    </>
  );
}

export default App;
