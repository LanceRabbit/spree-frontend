import { React, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment, asyncIncrement } from './redux';


const Counter = () => {
  const count = useSelector(s => s.counter.count);
  const dispatch = useDispatch();

  const [cnt, setCnt] = useState(0);
  return (
    <div>
      count: { count } | local: { cnt }
      <br/>
      <button onClick={() => {
        dispatch(increment())
        setCnt(cnt + 1)
      }}>
        +1
      </button>
      <button onClick={() => {
        dispatch(asyncIncrement());
      }}>
        +1 (asyncIncrement)
      </button>
    </div>
  )
}

export default Counter;