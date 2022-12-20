import {SET_JOB,ADD_JOB,Delete_JOB} from './Constant'

export const innitState = {
    job: '',
    jobs: []
}

export const reducer = (state,action) => {

    switch(action.type) {
      case SET_JOB:
        return {
          ...state,
          job: action.payload
        } 
      case ADD_JOB:
        return {
          ...state,
          jobs: [...state.jobs,action.payload]
        }
      case Delete_JOB:
        const newjobs = [...state.jobs] //lấy lại cái mảng cũ
        newjobs.splice(action.payload,1)
        return {
          ...state,
          jobs:newjobs
        }
      default:
        throw new Error('Invalid action')
    }
}