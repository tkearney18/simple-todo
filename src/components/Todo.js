import React, { PropTypes } from 'react'
import EditTodo from '../containers/EditTodo'
import { saveEdit } from '../actions'

const Todo = ({ onClick, completed, text, toggleEdit, editing, id, saveEdit }) => (
  <div>
    <li
      onClick={onClick}
      style={{ 
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
     {id} - {text}
    </li>
    <button
      style={{
        display: completed ? 'none' : 'block'
      }}
      onClick={toggleEdit}>Edit</button>
    <EditTodo
      editing = {editing}
      id = {id}
      saveEdit
    />
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