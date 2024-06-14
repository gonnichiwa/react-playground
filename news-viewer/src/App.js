import React, { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://jsonplaceholder.typicode.com/todos/1')
      setData(response.data);
    } catch (e) {
      alert('data load error');
      console.log(e);
    }
  }
  return (
    <div>
      <div>
        <button onClick={onClick}>불러오기</button>
      </div>
      <div>
        {data && <textarea rows={7} value={JSON.stringify(data, null, 2)} readOnly={true}/>}
      </div>
    </div>
  );
};

export default App;