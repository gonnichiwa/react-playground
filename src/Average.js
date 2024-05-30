import React, { useState, useRef, useMemo } from "react"; // memoization의 memo

const getAverage = (list) => {
    if(list.length === 0) return 0;
    const sum = list.reduce((a,b) => a+b);
    console.log('sum: ',sum);
    return sum / list.length;
  }

const Average = () => {
  const [value, setValue] = useState("");
  const [list, setList] = useState([]);
  const onChange = (e) => {
    setValue(e.target.value);
  };
  const inputRef = useRef();
  const onInsert = () => {
    const nextList = list.concat(parseInt(value));
    setList(nextList);
    setValue("");
    inputRef.current.focus();
  };
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
