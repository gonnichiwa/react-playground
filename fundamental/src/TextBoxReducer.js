import React from 'react';
import TextBoxUseInputs from './TextBoxUseInputs';

const TextBoxReducer = () => {
    const [state, onChange] = TextBoxUseInputs({
        name: '',
        nickname: ''
    });
    const {name, nickname} = state;
    return (
        <>
        <div>
            <h1>(TextBoxReducer)이름:{name}</h1>
            <h1>(TextBoxReducer)닉네임:{nickname}</h1>
        </div>
        <div>
            <input type='text' name='name' placeholder='name' onChange={onChange}/>
            <input type='text' name='nickname' placeholder='nickname' onChange={onChange}/>
        </div>
        </>
    );
};

export default TextBoxReducer;