import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../DataFlow/actions";

export const Gex = () => {
  // @ts-ignore
  const count = useSelector(state => state.count);
  const dispatch = useDispatch();
  console.log('count', count)

  return (
    <main className='content'>
      <div>Count: {count}</div>
      <button onClick={() => dispatch(addCount(1))}>Add to count</button>
    </main>
  );
};

export default Gex
