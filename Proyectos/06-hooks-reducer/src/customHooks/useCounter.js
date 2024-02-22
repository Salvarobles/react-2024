import { useState } from "react";

const useCounter = (initialValue = 10) => {
  const [myCount, setMyCount] = useState(initialValue);
  
  function increment(value = 1) {
    setMyCount(prev=>prev+value);
  }
  function decrement(value = 1) {
    setMyCount(prev=>prev-value);
  }
  function reset() {
    setMyCount(initialValue);
  }

  return myCount, increment, decrement, reset;
};

export default useCounter;
