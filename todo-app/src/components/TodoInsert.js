import { MdAdd } from 'react-icons/md';
import './TodoInsert.scss';
import { useCallback, useState } from 'react';

const TodoInsert = ({ onInsert }) => {
  const [value, setValue] = useState('');

  const onChange = useCallback((e) => {
    setValue(e.target.value);
  }, []); // 2nd param [] : 처음 렌더링될때 set

  const onSubmit = useCallback((e) => {
    onInsert(value);
    setValue(''); // value 초기화

    // submit 이벤트는 브라우저에서 새로고침을 발생시킴.
    // 이를 방지함
    e.preventDefault();
  }, [onInsert, value]);

  return (
    <form className="TodoInsert" onSubmit={onSubmit}> { /** onSubmit은 input에서 엔터 눌러도 발생함. */}
      <input
        placeholder="할 일을 입력하시오"
        value={value}
        onChange={onChange}/>
      <button type="submit">
        <MdAdd />
      </button>
    </form>
  );
};

export default TodoInsert;
