import React, { PropTypes } from 'react'

const EditTodo = ({ text, toggleEdit, showEdit }) => (
  <span>
  <button onClick={toggleEdit}>Edit</button>
  <input style={{ display: showEdit ? 'block' : 'none' }}/>
  </span>
)

EditTodo.propTypes = {
  text: PropTypes.string.isRequired,
  toggleEdit: PropTypes.func,
  showEdit: PropTypes.bool
}

export default EditTodo