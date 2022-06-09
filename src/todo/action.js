import { SET_JOBS, DELETE_JOBS, ADD_JOBS } from './constants'

export const setJobs = payload => {
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