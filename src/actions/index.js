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

//toggleEdit state action. 
export const toggleEdit = (id, editing) => {
    return {
        type: 'TOGGLE_EDIT',
        editing: !editing,
        id
    }
}

//saveEdit action. 
export const saveEdit = (id, newText,editing) => {
    //console.log('saveEdit is a function ' + newText)
    return {
        type: 'SAVE_EDIT',
        text: newText,
        editing: !editing,
        id
    }
}