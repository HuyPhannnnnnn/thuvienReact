import {SET_JOB,ADD_JOB,Delete_JOB} from './Constant'

export const setJob = payload => {
    return {
      type: SET_JOB,
      payload
    }
  }
  
export const addJob = payload => {
    return {
      type: ADD_JOB,
      payload
    }
  }
  
export  const deleteJob = payload => {
    return {
      type: Delete_JOB,
      payload
    }
  }