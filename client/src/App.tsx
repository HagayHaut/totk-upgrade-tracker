import { useState, useEffect } from 'react';
import './App.css';
import axios from 'axios';

axios.defaults.baseURL = `http://localhost:3000`;

function App() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    axios.get('/hello')
      .then(res => setCount(res.data.count));
  }, []);

  return (
    <div className="App">
      <h1>Page Count: {count}</h1>
    </div>
  );
}

export default App
