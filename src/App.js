
import React, { useState } from 'react';
import StopWatch from './Components/StopWatch/StopWatch.jsx';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  const increase = () => {
    setCounter(count => count + 1);
  }

  const decrease = () => {
    if (counter > 0) {
      setCounter(count => count - 1);
    }
  }

  const reset = () => {
    setCounter(0);
  }

  return (
    <div className="App">
      <StopWatch />
      <div className="counter">
        <div className="fs" />
        <span className="counter__output">{counter}</span>
        <div className="btn__container">
          <button className="control__btn" onClick={decrease}>-</button>
          <button className="reset" onClick={reset}>Reset</button>
          <button className="control__btn" onClick={increase}>+</button>
        </div>
      </div>
    </div>
  );
}

export default App;