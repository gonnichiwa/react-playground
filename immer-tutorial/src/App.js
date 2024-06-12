import React, { useCallback, useRef, useState } from 'react';
import { produce } from 'immer';

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
      setForm(
        produce(draft => { // form  : useState에서 쓰고 있는 form
          draft[name] = value;   // draft : 복사된 객체 전체
        })
      );
    },
    []
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
      setData(
        produce(draft => { // data : useState에 쓰고 있는 data
          draft.array.push(info);// draft: 복사된 객체 전체
        })
      );
      // form 초기화
      setForm({
        name: '',
        username: ''
      });
      nextId.current += 1;
    },
    [form.name, form.username]
  );

  // 항목을 삭제
  const onRemove = useCallback(
    id => {
      setData(
        produce(draft => {                                                // data : useState의 데이터
          draft.array.splice(draft.array.findIndex(info => info.id === id), 1); // id 1에서 1개 지워라
        })
      );
    },
    []
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