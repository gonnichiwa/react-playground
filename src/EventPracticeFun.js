import { useState } from "react";

const EventPracticeFun = () => {
  const [form, setForm] = useState({
    username: '',
    message: ''
  });
  const {username, message} = form;
  const onChange = (e) => {
    const nextForm = {
        ...form,
        [e.target.name]: e.target.value
    } // 객체 복사 {...} = {..., e.target.name: e.target.value}
    console.log(nextForm);
    setForm(nextForm);
  }

  const onHandleKeyUp = (e) => {
    if (e.key === "Enter") {
      onHandleClick();
    }
  };
  const onHandleClick = () => {
    setForm({ username: '', message: '' })
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
        onChange={onChange}
      />
      <input
        type="text"
        name="message"
        placeholder="아무거나입력해보시오"
        value={message}
        onChange={onChange}
        onKeyUp={onHandleKeyUp}
      />
      <button onClick={onHandleClick}>확인</button>
    </div>
  );
};

export default EventPracticeFun;
