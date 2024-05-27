import { useState } from "react";

const EventPracticeFun = () => {
  const [username, setUsername] = useState("");
  const [message, setMessage] = useState("");

  const onChangeUsername = (e) => {
    setUsername(e.target.value);
  };
  const onChangeMessage = (e) => {
    setMessage(e.target.value);
  };

  const onHandleKeyUp = (e) => {
    if (e.key === "Enter") {
      onHandleClick();
    }
  };
  const onHandleClick = () => {
    setUsername("");
    setMessage("");
    alert(username + " " + message);
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="사용자명"
        value={username}
        onChange={onChangeUsername}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나입력해보시오"
        value={message}
        onChange={onChangeMessage}
        onKeyUp={onHandleKeyUp}
      />
      <button onClick={onHandleClick}>확인</button>
    </div>
  );
};

export default EventPracticeFun;
