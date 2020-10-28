import { React } from 'react';
import { useSelector } from 'react-redux';


const Counter = () => {
  const count = useSelector(s => s.counter.count);
  return (
    <div>
      count: { count }
    </div>
  )
}

export default Counter;