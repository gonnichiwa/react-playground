import "./App.css";
// import { useState } from 'react';

function Test() {
  const name = "const-name";
  const zero = 1;
  return (
    <>
      {
        name === "const-name" && <h1>const-name</h1> // 조건 && (c) : 조건 맞을 때 보여줄 c
      }
      {
        zero === 0 || <h1>const zero value is not zero</h1> // 조건 || (c) : 조건 아닐 때 보여줄 c
      }
      <h1>{name === 0}</h1>
      <h2>hhhh</h2>
    </>
  );
}

export default Test;
