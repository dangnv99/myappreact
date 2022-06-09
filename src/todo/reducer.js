import { UP_ACTION, DOWN_ACTION, SET_JOBS, DELETE_JOBS, ADD_JOBS } from './constants'

//Init state
export const initState = 0;
export const reducer = (state, action) => {
    // console.log(action);
    switch (action) {
        case UP_ACTION:
            return state + 1;
        case DOWN_ACTION:
            return state - 1;
        default:
            throw new Error('Invalid')
    }
}

// Part 2
//const [count, setCount] = useState()
// Init state
export const initStateS = {
    job: '',
    jobs: []
}
// reducer function
export const reducers = (state, action) => {
    let newState
    switch (action.type) {
        case SET_JOBS:
            newState = {
                ...state,
                job: action.payload
            }
            break
        case ADD_JOBS:
            newState = {
                ...state,
                jobs: [...state.jobs, action.payload]
            }
            break
        case DELETE_JOBS:
            const newjob = [...state.jobs]
            newjob.splice(action.payload, 1)
            newState = {
                ...state,
                jobs: newjob
            }
            break
        default:
            throw new Error('Invalid action type: ' + action.type);
    }
    return newState
}

