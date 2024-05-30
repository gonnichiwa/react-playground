import React, { useState } from 'react';

const TextBoxUseState = () => {
    const [state, setState] = useState({
        name: '',
        nickname: ''
    });
    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
        <div>
            <h1>{state.name}</h1>
            <h1>{state.nickname}</h1>
        </div>
        <div>
            <input type='text' name='name' placeholder='name' onChange={onChange}/>
            <input type='text' name='nickname' placeholder='nickname' onChange={onChange}/>
        </div>
        </>
    );
};

export default TextBoxUseState;