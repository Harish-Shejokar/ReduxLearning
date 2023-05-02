import classes from './Counter.module.css';
import {useSelector,useDispatch} from 'react-redux'

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({type:"increment"})
  }
  const decrementHandler = () => {
    dispatch({type:"decrement"})
  }
   const incrementBy5 = () => {
     dispatch({ type: "incrementby5" });
   };
  const decrementBy5 = () => {
    dispatch({ type: "decrementby5" });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={decrementHandler}>Decrement</button>
      </div>
      <div>
        <button onClick={incrementBy5}>Increment By 5</button>
        <button onClick={decrementBy5}>Decrement By 5</button>
      </div>
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
    </main>
  );
};

export default Counter;
