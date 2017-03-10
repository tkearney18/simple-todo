//initialize the id for the todos
let nextTodoId = 0

//addTodo action creator. the returned object is the action.
export const addTodo = (text) => {
    return {
        type: 'ADD_TODO',
        id: nextTodoId++,
        text
    }
    // in Flux this is where a dispatch(action) would occur.
}

//setVisibilityFilter action
export const setVisibilityFilter = (filter) => {
    return {
        type: 'SET_VISIBILITY_FILTER',
        filter
    }
}
//toggleTodo action. 
export const toggleTodo = (id) => {
    return {
        type: 'TOGGLE_TODO',
        id
    }
}

//toggleTodo action. 
export const toggleEdit = (id) => {
    return {
        type: 'TOGGLE_EDIT',
        id
    }
}

//toggleTodo action. 
export const saveEdit = (id) => {
    return {
        type: 'SAVE_EDIT',
        id
    }
}