import React, { useState } from 'react';

import styles from './counter.module.css';


const Counter = () => {
  const [count, setCount] = useState(0);

  const handleInc = () => {
    setCount(count + 1);
  }

  const handleDec = () => {
    setCount(count - 1);
  }


  return (
    <div className={styles.container}>
      <h2>Count</h2>
      <h1>{count}</h1>
      <button onClick={handleInc} >+</button>{" "}<button onClick={handleDec} >-</button>
    </div>
  )
}


export default Counter;