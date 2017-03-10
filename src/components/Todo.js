import React, { PropTypes } from 'react'

const Todo = ({ onClick, completed, text, toggleEdit }) => (
  <span>
    <li
      onClick={onClick}
      style={{ 
        textDecoration: completed ? 'line-through' : 'none'
      }}
    >
      {text}
    </li>
    <button onClick={toggleEdit}>Edit</button>
  </span>
)

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired,
  toggleEdit: PropTypes.func
}

export default Todo