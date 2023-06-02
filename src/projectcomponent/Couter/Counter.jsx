import React, { useState } from 'react';
import style from './Counter.module.css';

const Counter = () => {

  const [count, setCount] = useState(0);

  const incrementCount =()=>{
     setCount(count + 1);
  }

  const decrementCount =()=>{
    if (count > 0) {
        setCount(count - 1);   
    } else {
        setCount(0);
    }
 }

 const resetCount =()=>{
    setCount(0);
 }

  return (
    <div className={style.count_container}>
        <div className={style.count_display}>{count}</div>
        <div className={style.count_group}>
            <button className={style.increment} onClick={()=> incrementCount()}>Increment</button>
            <button className={style.decrement} onClick={()=> decrementCount()}>Decrement</button>
            <button className={style.reset} onClick={()=> resetCount()}>Reset</button>
        </div>
    </div>
  )
}

export default Counter;