import { connect } from 'react-redux'
import { toggleTodo, toggleEdit, saveEdit } from '../actions'
import TodoList from '../components/TodoList'
import EditTodo from './EditTodo'

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_ALL':
      return todos
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
  }
}

//Mapping the state to props
const mapStateToProps = (state) => {
  return {
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
  }
}

//Mapping our dispatch functions to the props
const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (id) => {
      dispatch(toggleTodo(id))
    },
    onToggleEdit: (id) => {
      dispatch(toggleEdit(id))
    },
    onSaveEdit: (id, newText) => {
      dispatch(saveEdit(id, newText))
    }
  }
}
//Using react-redux connect to set utilize the mappings. The TodoList and EditTodo will be able to use to actions
const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList, EditTodo)

export default VisibleTodoList