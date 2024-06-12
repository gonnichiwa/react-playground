import React, { useCallback, useRef, useState } from 'react';

const App = () => {
  const [form, setForm] = useState({ username: '', name: '', });
  const [data, setData] = useState({
    array: [],
    uselessValue: null
  });
  const nextId = useRef(1);

  const onChange = useCallback(
    e => {
      const {name, value} = e.target; // e.target : <input name = 'username'/>
                                      //                  \name/  \__value__/
      setForm({
        ...name,
        [name]: [value]});
    },
    [form]
  );

  const onSubmit = useCallback(
    e => {
      e.preventDefault();
      const info = {
        id: nextId.current,
        name: form.name,
        username: form.username
      };
      // array 새항목 등록
      setData({
        ...data,
        array: data.array.concat(info)
      });
      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [data, form.name, form.username]
  );

  // 항목을 삭제
  const onRemove = useCallback(
    id => {
      setData({
        ...data,
        array: data.array.filter(info => info.id !== id)
      });
    },
    [data]
  );

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input 
          name='username'
          placeholder='아이디'
          value={form.username}
          onChange={onChange}
        />
        <input
          name='name'
          placeholder='이름'
          value={form.name}
          onChange={onChange}
        />
        <button type='submit'>등록</button>
      </form>
      <div>
        <ul>
          {data.array.map(info => (
            <li key={info.id} onClick={() => onRemove(info.id)}>
              {info.username} {info.name}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default App;