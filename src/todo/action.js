import { UP_ACTION, DOWN_ACTION, SET_JOBS, DELETE_JOBS, ADD_JOBS } from './constants'
export const setJobs = payload => {
    console.log(1111111)
    return {
        type: SET_JOBS,
        payload
    }
}
export const addJobs = payload => {
    return {
        type: ADD_JOBS,
        payload
    }
}

export const deleteJobs = payload => {
    return {
        type: DELETE_JOBS,
        payload
    }
}