import React, { useState, useEffect } from 'react';

const TextBoxUseState = () => {
    const [state, setState] = useState({
        name: '',
        nickname: ''
    });
    // useEffect : componentDidMount + componentDidUpdate
    // componentDidMount만 실행효과 : useEffect(func, []);
    // 특정 state만 componentDidUpdate효과 : useEffect(func, [state]) 
    useEffect(() => {
        console.log('렌더링이 완료되었습니다');
        console.log(state);
        return () => { // componentWillUnMount || componentWillUpdate 일때 수행
            console.log('cleanup');
            console.log('name');
        }
    }, []); 

    const onChange = (e) => {
        setState({
            ...state,
            [e.target.name]: e.target.value
        });
    }

    return (
        <>
        <div>
            <h1>이름:{state.name}</h1>
            <h1>닉네임:{state.nickname}</h1>
        </div>
        <div>
            <input type='text' name='name' placeholder='name' onChange={onChange}/>
            <input type='text' name='nickname' placeholder='nickname' onChange={onChange}/>
        </div>
        </>
    );
};

export default TextBoxUseState;