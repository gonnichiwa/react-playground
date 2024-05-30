import React, { useReducer } from 'react';

function reducer(state, target) {
    return {
        ...state,
        [target.name]: target.value
    }
}
const TextBoxReducer = () => {
    const [state, dispatch] = useReducer(reducer, {
        name: '',
        nickname: ''
    });
    const onChange = (e) => {
        dispatch(e.target);
    };
    return (
        <>
        <div>
            <h1>(TextBoxReducer)이름:{state.name}</h1>
            <h1>(TextBoxReducer)닉네임:{state.nickname}</h1>
        </div>
        <div>
            <input type='text' name='name' placeholder='name' onChange={onChange}/>
            <input type='text' name='nickname' placeholder='nickname' onChange={onChange}/>
        </div>
        </>
    );
};

export default TextBoxReducer;