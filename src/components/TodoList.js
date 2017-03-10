import React, { PropTypes } from 'react'
import Todo from './Todo'

const TodoList = ({ todos, onTodoClick,onToggleEdit,showEdit }) => (
  <ul>
    {todos.map(todo =>
      <Todo
        key={todo.id}
        {...todo}
        onClick={() => onTodoClick(todo.id)}
        toggleEdit={() => onToggleEdit(todo.showEdit)}
      />
    )}
  </ul>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    completed: PropTypes.bool.isRequired,
    text: PropTypes.string.isRequired,
    showEdit:PropTypes.bool
  }).isRequired).isRequired,
  onTodoClick: PropTypes.func.isRequired,
  onToggleEdit: PropTypes.func
}

export default TodoList