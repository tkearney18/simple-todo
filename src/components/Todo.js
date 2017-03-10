import React, { PropTypes } from 'react'
import EditTodo from '../containers/EditTodo'
import { saveEdit } from '../actions'

const Todo = ({ onClick, completed, text, toggleEdit, editing, input, dispatch, saveEdit }) => (
  <div>
    <li
      onClick={onClick}
      style={{ 
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button onClick={toggleEdit}>Edit</button>
    <EditTodo />
    <div style={{ 
        display: editing ? 'block' : 'none'
      }}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(saveEdit(input.value))
        input.value = text
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          submit edit
        </button>
      </form>
    </div>
  </div>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleEdit: PropTypes.func,
  saveEdit: PropTypes.func
}

export default Todo