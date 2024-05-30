import React, { useReducer } from 'react';

function reducer(state, action){
    switch(action.type){
        case 'INCREMENT':
            return {value: state.value + 1};
        case 'DECREMENT':
            return {value: state.value - 1};
        default:
            return state;
    }
}
const CounterReducer = () => {
    const [state, dispatch] = useReducer(reducer, {value: 0});
    const onClick = (e) => {
        if (e.target.name === 'plus') dispatch({type: 'INCREMENT'});
        if (e.target.name === 'minus') dispatch({type: 'DECREMENT'});
    }
    return (
        <div>
            <h1>CounterReducer:{state.value}</h1>
            <button onClick={onClick} name="plus">+1</button>
            <button onClick={onClick} name="minus">-1</button>
        </div>
    );
};

export default CounterReducer;