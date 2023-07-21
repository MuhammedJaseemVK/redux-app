import React from 'react'
import './Counter.css';
import { useDispatch, useSelector } from 'react-redux';
import { increment,decrement } from '../Redux/Reducer/Reducer';


function Counter() {

    const count = useSelector((state)=>state.counter.value)
    const dispatch = useDispatch();

    return (
        <div className='counter-container'>
            <h2>React js Redux example</h2>
            <p className='counter-value'>{count}</p>
            <div className='counter-buttons'>
                <button className='counter-btn' onClick={()=>dispatch(increment())}>
                    Increment
                </button>
                <button className='counter-btn' onClick={()=>dispatch(decrement())}>
                    Decrement
                </button>
            </div>
        </div>
    )
}
~
export default Counter