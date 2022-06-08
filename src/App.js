import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react'


// Init state
const initState = 0;


// Action
const UP_ACTION = 'up';
const DOWN_ACTION = 'down';


// Reducer

const reducer = (state, action) => {
  console.log(action);

  switch (action) {

    case UP_ACTION:
      return state + 1;
    case DOWN_ACTION:
      return state - 1;
    default:
      throw new Error('Invalid')

  }

}
function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  return (
    <div style={{ padding: '0 20px', margin: '1rem' }}>
      <h1 style={{ padding: '0 20px', margin: '1rem' }} >{count}</h1>
      <button style={{ padding: '0 20px', margin: '1rem' }} onClick={() => dispatch(DOWN_ACTION)}> Down</button>

      <button style={{ padding: '0 20px', margin: '1rem' }} onClick={() => dispatch(UP_ACTION)}> Up</button>
    </div>

  );
}

export default App;
