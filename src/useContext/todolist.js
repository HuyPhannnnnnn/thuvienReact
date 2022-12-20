import { useState } from "react"
import { useStore,Actions } from "."



function Todolist() {

    const [state,dispatch] = useStore()
    const [isedit,setIsedit] = useState(false)
    const [saveEdit,setSaveEdit] = useState(0)

    const { todoInput,todos } = state

    const handleSubmit = () => {
      isedit ? dispatch(Actions.editTodo(saveEdit)) : dispatch(Actions.addTodo(todoInput))
      dispatch(Actions.setTodoinput(''))
      setIsedit(false)
    }

    const handleEdit = (index) => {
      dispatch(Actions.setTodoinput(todos[index]))
      setIsedit(true)
      setSaveEdit(index)
    }

      return (
        <div className="App" style={{ padding:20 }}>
             <h1>Todo</h1>
            <input
            value={todoInput}
            onChange = {e => {
              dispatch(Actions.setTodoinput(e.target.value))
            }}
            placeholder='Enter Todo...' />
            <button 
              onClick={handleSubmit}> {isedit ? 'Update' : 'Submit'}
            </button>
            <ul>
                {
                  todos.map((cur,index) => {
                    return (
                    <li key = {index}>
                      {cur}
                    <span className="color"
                      onClick={() => dispatch(Actions.delTodo(index))}
                    >
                      <i className="fa-solid fa-xmark"></i>
                    </span>
                    <span className="color"
                      onClick={() => handleEdit(index)}
                    >
                      Sửa
                    </span>
                    </li>
                    )
                  })
                }
            </ul>
        </div>
      )
}

export default Todolist