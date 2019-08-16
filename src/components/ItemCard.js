import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import { removeExpense } from '../actions/actionGenerator'

const ItemCard = ({ expense, id, removeExpense }) => {
  const handleRemove = () => {
    removeExpense(id)
  }

  return (
    <div>
      <Link to={`/item/${id}`}>
        <div title={`Item ID: ${id}`}>{expense.description}</div>
      </Link>
      <button onClick={handleRemove}>Remove</button>
    </div >
  )
}

export default connect(undefined, { removeExpense })(ItemCard)
