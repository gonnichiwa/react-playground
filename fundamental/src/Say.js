import { useState } from 'react';

const Say = () => {
    const [message, setMessage] = useState('?');
    const onClickEnter = () => setMessage('안녕하세요');
    const onClickLeave = () => setMessage('안녕히 가세요!');

    const [color, setColor] = useState('black');
    const [person, setPerson] = useState({name: 'jj', age: 22});
    
    return (
        <div className='react'>
            <button onClick={onClickEnter}>입장</button>
            <button onClick={onClickLeave}>퇴장</button>
            <h1 style={{color: color}}>{message}, {person.name}, {person.age}</h1>
            <button style={{color: 'red'}} onClick={() => setColor('red')}>빨간색</button>
            <button style={{color: 'green'}} onClick={() => setColor('green')}>초록색</button>
            <button style={{color: 'blue'}} onClick={() => setColor('blue')}>파란색</button>
            <button onClick={() => {setPerson({name: person.name, age: person.age + 1})}}>name, age 변경</button>
        </div>
    );
}

export default Say;