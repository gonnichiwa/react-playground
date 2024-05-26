import "./App.css";
// import { useState } from 'react';

function Style() {
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

export default Style;
