//useReducer
//ví dụ 1 : Làm todolist

import { useReducer } from 'react'
import { useRef } from 'react'
import {reducer,innitState} from './Reducer'
import {setJob,addJob,deleteJob} from './Action'

  function UseReducer() {
    const [state,dispatch] = useReducer(reducer,innitState)

    const {job,jobs} = state
  
    const inputRef = useRef()
  
    const handleSubmit = () => {
      dispatch(addJob(job))
      dispatch(setJob(''))
      inputRef.current.focus()
    }
    
      return (
        <div className="App" style={{ padding:20 }}>
            <h1>Todo</h1>
            <input
            value={job}
            ref = {inputRef}
            onChange = {e => {
              dispatch(setJob(e.target.value))
            }}
            placeholder='Enter Todo...' />
            <button onClick = {handleSubmit}>Add</button>
            <ul>
              {
                jobs.map((cur,index) => {
                  return <li key = {index}>
                    {cur}
                    <span
                    onClick = {() => dispatch(deleteJob(index))}
                    style={{marginLeft : '10px'}}>Xóa</span>
                    </li>
                })
              }
            </ul>
        </div>
      );
  }
  
  export default UseReducer;