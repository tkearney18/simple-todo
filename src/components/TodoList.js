import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick,onToggleEdit,editing }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        toggleEdit={() => onToggleEdit(todo.id)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    editing: PropTypes.bool
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func
}

export default TodoList