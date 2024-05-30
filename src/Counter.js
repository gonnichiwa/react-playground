import React, { useState } from 'react';

const Counter = () => {
    const [count, setCount] = useState(0);
    const onClick = (e) => {
        if (e.target.name === 'plus') setCount(count+1);
        if (e.target.name === 'minus') setCount(count-1);
    }
    return (
        <div>
            <h1>CounterState:{count}</h1>
            <button onClick={onClick} name="plus">+1</button>
            <button onClick={onClick} name="minus">-1</button>
        </div>
    );
};

export default Counter;