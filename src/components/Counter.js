import React from 'react'
import './Counter.css';

function Counter() {
    return (
        <div className='counter-container'>
            <h2>React js Redux example</h2>
            <p className='counter-value'>sample</p>
            <div className='counter-buttons'>
                <button className='counter-btn'>
                    Increment
                </button>
                <button className='counter-btn'>
                    Decrement
                </button>
            </div>
        </div>
    )
}

export default Counter