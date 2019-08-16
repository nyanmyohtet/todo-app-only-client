import React from 'react'
import { connect } from 'react-redux'

import { addExpense } from '../actions/actionGenerator'
import InputForm from './InputForm'

class CreatePage extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isExisted: false
    }
  }

  handleOnSubmit = (expense) => {
    const { description } = expense
    const isExisted = !!this.props.expenses.find((value) => value.description === description)

    if (isExisted) {
      return this.setState({ isExisted: true })
    }
    this.setState({ isExisted: false })
    this.props.addExpense({ description })
    this.props.history.push('/')
  }

  render() {
    return (
      <div>
        {this.state.isExisted && <p>Item already existed!</p>}
        <InputForm handleOnSubmit={this.handleOnSubmit} />
      </div>
    )
  }
}

export default connect(
  (state) => ({ expenses: state }),
  { addExpense })(CreatePage)
