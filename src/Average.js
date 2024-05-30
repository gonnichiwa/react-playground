import React, { useState, useRef } from "react";

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
        평균값: {getAverage(list)} {/** input이 onChange될때마다 getAverage호출됨 */}
      </div>
    </div>
  );
};

export default Average;
