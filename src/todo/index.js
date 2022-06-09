
import { useReducer, useRef } from 'react'

import { UP_ACTION, DOWN_ACTION } from './constants'

import { initState, initStateS, reducer, reducers } from './reducer'

import { setJobs, addJobs, deleteJobs } from './action'

import logger from './logger'

// Dispatch
function App() {
    const [count, dispatch] = useReducer(reducer, initState)
    const [state, dispatchs] = useReducer(logger(reducers), initStateS)
    const { job, jobs } = state
    const inputRef = useRef()
    const handleSubmitted = () => {
        dispatchs(addJobs(job))
        dispatchs(setJobs(''))
        inputRef.current.focus()

    }
    return (
        <div>
            <h1 style={{ padding: '0 20px', margin: '1rem' }} >{count}</h1>
            <button style={{ padding: '0 20px', margin: '1rem' }} onClick={() => dispatch(DOWN_ACTION)}> Down</button>
            <button style={{ padding: '0 20px', margin: '1rem' }} onClick={() => dispatch(UP_ACTION)}> Up</button>
            <h3>List todo</h3>
            <input
                ref={inputRef}
                value={job}
                placeholder='Anh Đăng đẹp trai'
                onChange={e => {
                    dispatchs(setJobs(e.target.value))
                }}
            />
            <button onClick={handleSubmitted}>ADD</button>
            <ul>
                {
                    jobs.map((job, index) => (
                        <li key={index}>{job}
                            <span onClick={() => dispatchs(deleteJobs(index))}>
                                &times;
                            </span>
                        </li>
                    ))
                }
            </ul>
        </div >
    );
}
export default App;