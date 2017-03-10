import React from 'react'
import { connect } from 'react-redux'
import { saveEdit } from '../actions'

//DO NOT pass in a function as a property of this object.
// when the Edit button is clicked on the Todo component, this input box will appear. 
let EditTodo = ({ dispatch, editing, todo, id}) => {
  let input

  return (
    <div style={{ 
        display: editing ? 'block' : 'none'
      }}>
      <form onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(saveEdit(id, input.value,editing))
        input.value = ''
      }}>
        <input ref={node => {
          input = node
        }} />
        <button type="submit">
          Submit Edit
        </button>
      </form>
    </div>
  )
}

EditTodo = connect()(EditTodo)

export default EditTodo