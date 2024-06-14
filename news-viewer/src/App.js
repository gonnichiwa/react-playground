import React, { useState } from 'react';
import axios from '../node_modules/axios/index';

const App = () => {
  const [data, setData] = useState(null);
  const onClick = async () => {
    try {
      const response = await axios.get('https://newsapi.org/v2/top-headlines?country=kr&apiKey=51acdda84c6844b7addb39d8a98089c2')
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