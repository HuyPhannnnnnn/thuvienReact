import { SET_TODO_INPUT,ADD_TODO,DELETE_TODO,EDIT_JOB } from './constants'

export const setTodoinput = payload => {
    return {
      type: SET_TODO_INPUT,
      payload
    }
}

export const addTodo = payload => {
  return {
    type: ADD_TODO,
    payload
  }
}

export const delTodo = payload => {
  return {
    type: DELETE_TODO,
    payload
  }
}

export const editTodo = payload => {
  return {
      type: EDIT_JOB,
      payload
  }
};

