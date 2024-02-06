import { useEffect, useState } from "react";

export default function FindBug() {
  // create a counter
  const [counter, setCounter] = useState(0);

  // increase the counter by one
  const handleIncreaseCounter = () => {
    setCounter(counter + 1);
  };

  useEffect(() => {
    console.log("counter changed to: ", counter);
    console.log('hi hi hi')
  },[counter]);

  return (
    <div>
      <h1>Learn about useRef!</h1>
      <h2>Value: {counter}</h2>
      <button onClick={handleIncreaseCounter}>
        Increase counter
      </button>
    </div>
  );
}