import React, { useState, useRef, useMemo, useCallback } from "react"; // useMemo : memoization의 memo

const getAverage = (list) => {
    if(list.length === 0) return 0;
    const sum = list.reduce((a,b) => a+b);
    console.log('sum: ',sum);
    return sum / list.length;
  }

const Average = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
//   const onChange = (e) => {
//     console.log('onChange');
//     setValue(e.target.value);
//   }; // component가 리랜더링 될때마다 이 함수를 새로 만듬.
  const onChange = useCallback(e => {
    console.log('onChange:useCallback');
    setValue(e.target.value);
  }, []);
  const inputRef = useRef();
//   const onInsert = () => {
//     console.log('onInsert');
//     const nextList = list.concat(parseInt(value));
//     setList(nextList);
//     setValue("");
//     inputRef.current.focus();
//   }; // component가 리랜더링 될때마다 이 함수를 새로 만듬
  const onInsert = useCallback(() => {
    console.log('onInsert:useCallback');
    const nextList = list.concat(parseInt(value));
    setList(nextList);
    setValue("");
    inputRef.current.focus();
  }, [value, list]); // value, list 변경 있을때만 함수 새로 만듬.
  const avg = useMemo(() => getAverage(list), [list]); // list의 갱신있을때만 () => getAverage(list) 호출하라.
  return (
    <div>
      <input ref={inputRef} type="text" value={value} onChange={onChange} />
      <button onClick={onInsert}>등록</button>
      <ul>
        {list.map((value, index) => (
          <li key={index}>{value}</li>
        ))}
      </ul>
      <div>
        평균값: {avg}
      </div>
    </div>
  );
};

export default Average;
