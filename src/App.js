import logo from './logo.svg';
import './App.css';
import { useState, useReducer } from 'react'


//Init state
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
//const [count, setCount] = useState()
// Init state
const initStateS = {
  job: '',
  jobs: []
}

// Action
const SET_JOBS = 'set_jobs'
const ADD_JOBS = 'add_jobs'
const DELETE_JOBS = 'delete_jobs'

const setJobs = payload =>{
  return{
    type: SET_JOBS,
    payload
  }
}

const addJobs = payload =>{
  return{
    type: ADD_JOBS,
    payload
  }
}
// reducer function

const reducers = (state, action) => {
  switch (action) {
    case SET_JOBS:
      return{
        ...state,
        job: action.payload
      }
    
      case ADD_JOBS:
      return{
        ...state,
        job :[...state.jobs, action.payload]
      }
  }
}

// Dispatch
function App() {
  const [count, dispatch] = useReducer(reducer, initState)
  const [state, dispatchs] = useReducer(reducers, initStateS)
  const {job, jobs} = state

  const handleSubmitted = () => {
    dispatchs(addJobs(job))
  }
  return (
    <div>
      <h1 style={{ padding: '0 20px', margin: '1rem' }} >{count}</h1>
      <button style={{ padding: '0 20px', margin: '1rem' }} onClick={() => dispatch(DOWN_ACTION)}> Down</button>
      <button style={{ padding: '0 20px', margin: '1rem' }} onClick={() => dispatch(UP_ACTION)}> Up</button>
     
      <h3>List todo</h3>
      <input
      value={job}
      placeholder='Anh Đăng đẹp trai'
      onChange={e => {dispatchs(setJobs(e.target.value))}}
      />
      <button onClick={handleSubmitted}>ADD</button>
    <ul>
      {
        jobs.map(jobs => (
          <li key={job}>{job} &times;</li>
        ))
      }
    </ul>
    </div>
  );
}

export default App;
