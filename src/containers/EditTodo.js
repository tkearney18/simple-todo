import React from 'react'
import { connect } from 'react-redux'
import { saveEdit } from '../actions'

let EditTodo = ({ dispatch, editing, todo, saveEdit }) => {
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
  )
}
EditTodo = connect()(EditTodo)

export default EditTodo