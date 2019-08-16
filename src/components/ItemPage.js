import React from 'react'
import { connect } from 'react-redux'
import { editExpense } from '../actions/actionGenerator'
import InputForm from './InputForm'

const ItemPage = (props) => {
  const id = props.match.params.id
  const expense = props.expenses.find(item => item.id === id)

  const handleOnSubmit = ({ description }) => {
    props.editExpense(id, { description })
    props.history.push('/')
  }

  return (
    <div>
      <InputForm
        expense={expense}
        handleOnSubmit={handleOnSubmit}
      />
    </div>
  )
}

const mapStateToProps = (state) => ({ expenses: state })

export default connect(mapStateToProps, { editExpense })(ItemPage)
