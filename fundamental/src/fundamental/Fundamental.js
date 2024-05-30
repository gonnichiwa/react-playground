import "../Test.css";
// import { useState } from 'react';

export function CssTest() {
  const name = "const-name";
  return (
    <>
      <div className="react">This is CssTest {name}</div>
    </>
  );
}

export function Style() {
  // const name = 'const-name';
  const style = {
    // background-color -> backgroundColor
    backgroundColor: "blue",
    color: "aqua",
    fontSize: "48px",
    fontWeight: "bold",
    padding: 16, // 단위생략시 px
  };
  return (
    <>
      <br />
      <h1 style={style}>Style.js</h1> {/** 주석은 이렇게 */}
      <h2
        style={{
          // 아니면 'h2','input' 같은 태그 여러줄 써서
          backgroundColor: "aqua" /* 이렇게 */,
          color: "blue",
          fontSize: "48px",
          fontWeight: "bold",
        }}
      >
        hhhh
      </h2>
    </>
  );
}

export function Test() {
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
