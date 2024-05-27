import { Component } from "react";

class EventPractice extends Component {
  state = {
    message : ''
  }
  handleClick = () => {
    alert(this.state.message);
    this.setState({message: ''});
  }
  handleChange = (e) => {
    this.setState({message: e.target.value});
  }
  render() {
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input 
          type="text"
          name="message"
          placeholder="아무거나입력해보시오"
          value={this.state.message}
          onChange={this.handleChange}
        />
        <button
          onClick={this.handleClick}
        >확인</button>
      </div>
    );
  }
}

export default EventPractice;
