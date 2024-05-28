import React, { useState, useRef } from 'react';

const IterationSample = () => {
    const [names, setNames] = useState([
        {id: 1, text: 'a'},
        {id: 2, text: 'b'},
        {id: 3, text: 'c'},
        {id: 4, text: 'd'}
    ]);
    const [inputText, setInputText] = useState('');
    const [nextId, setNextId] = useState(5);

    const onChange = (e) => {
        setInputText(e.target.value);
    }

    const inputRef = useRef();

    const onClick = () => {
        const nextNames = names.concat({
            id: nextId,
            text: inputText
        });
        setNextId(nextId + 1);
        setNames(nextNames);
        setInputText('');
        inputRef.current.focus();
    }

    const onRemove = (id) => {
        const nextNames = names.filter(name => name.id !== id);
        setNames(nextNames);
    }

    const nameList = names.map(name => (
        <li onDoubleClick={() => onRemove(name.id)} key={name.id}>{name.text}</li>
    ));
    return (
        <div>
          <input 
            ref={inputRef}
            type='text' 
            value={inputText} 
            onChange={onChange}/>
          <button onClick={onClick}>추가</button>
          <ul>{nameList}</ul>
        </div>
    );
};

export default IterationSample;