import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react'
function App() {
  const [count, setCount] = useState(0)
  return (
    <div style={{ padding: '0 20px', margin: '1rem' }}>
      <h1 style={{ padding: '0 20px', margin: '1rem' }} >{count}</h1>
      <button style={{ padding: '0 20px', margin: '1rem' }} onclick={() => setCount(count - 1)}> Down</button>
      <button style={{ padding: '0 20px', margin: '1rem' }} onclick={() => setCount(count + 1)}> Up</button>
    </div>
  );
}

export default App;
