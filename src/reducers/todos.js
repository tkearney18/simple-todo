const todo = (state = {}, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        id: action.id,
        text: action.text,
        completed: false,
        editing: false
      }
    case 'TOGGLE_TODO':
      if (state.id !== action.id) {
        return state
      }
      return Object.assign({}, state, {
        completed: !state.completed
      })
      case 'TOGGLE_EDIT':
       if (state.id !== action.id) {
         console.log('this wasnt it.from todos'+ state.id)
        return state
      }
      return Object.assign({}, state, {
        editing: !state.editing
      })

    default:
      return state
  }
}

const todos = (state = [], action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return [
        ...state,
        todo(undefined, action)
      ]
    case 'TOGGLE_TODO':
      return state.map(t =>
        todo(t, action)
      )
    case 'TOGGLE_EDIT':
      return state.map(t =>
        todo(t, action)
      )
    default:
      return state
  }
}

export default todos