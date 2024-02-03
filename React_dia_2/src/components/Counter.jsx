import { useState } from 'react';

const Counter = ({ initialCountProp }) => {
  const [count, setCount] = useState(initialCountProp);
  const [initialCount, setInitialCount] = useState(initialCountProp);
  const [mult, setMult] = useState(1);

  const increment = () => {
    setCount(count + mult);
  };

  const decrement = () => {
    setCount(count - mult);
  };

  const handleInitialCount = (e) => {
    setInitialCount(parseInt(e.target.value))
    setCount(parseInt(e.target.value))
  };

  const handleMult = (e) => {
    setMult(parseInt(e.target.value))
  };

  return (
    <div>
      <label>
        Initial Count: 
        <input type="number" value={initialCount} onChange={handleInitialCount} />
      </label>
      <label><br />
        Multiplicator: 
        <input type="number" value={mult} onChange={handleMult} />
      </label><br />
      <button onClick={decrement}>-</button>
      <button onClick={increment}>+</button>
      <h2>{count}</h2>
    </div>
  );
};

export default Counter;