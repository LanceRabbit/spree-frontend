import { React } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { increment } from './redux';


const Counter = () => {
  const count = useSelector(s => s.counter.count);
  const dispatch = useDispatch();
  return (
    <div>
      count: { count }
      <br/>
      <button onClick={() => {
        dispatch(increment())
      }}>
        +1
      </button>
    </div>
  )
}

export default Counter;