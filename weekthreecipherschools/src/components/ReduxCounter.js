import React from "react";
import { connect, useDispatch, useSelector } from "react-redux";
import { increment, decrement, reset } from "../actions/CounterActions";

const ReduxCounter = () => {
  const count = useSelector((state) => state.count);
  const dispatch = useDispatch();
  
  return (
    <div>
      <h2>The count is: {count}</h2>
      <button onClick={(e) => dispatch(increment(1))}>Increase</button>
      <button onClick={(e) => dispatch(decrement(1))}>Decrease</button>
      <button onClick={(e) => dispatch(reset())}>Reset</button>
    </div>
  );
};