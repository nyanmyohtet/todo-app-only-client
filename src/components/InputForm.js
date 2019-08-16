import React from 'react';

class InputForm extends React.Component {

  constructor(props) {
    super(props)
    const { description = '' } = this.props.expense || {}
    this.state = {
      description: description || '',
      invalidDesc: false
    }
  }

  onSubmit = (e) => {
    e.preventDefault();

    if (this.state.description.length < 1) {
      return this.setState({ invalidDesc: true })
    }

    this.props.handleOnSubmit({ description: this.state.description })
  }

  onDescriptionChange = (e) => {
    const description = e.target.value.trim()
    this.setState({ description })
  }

  render() {
    return (
      <form onSubmit={this.onSubmit} >
        <div>
          {this.state.invalidDesc && <p>Please provide description</p>}
          <input
            type='text'
            name='description'
            value={this.state.description}
            onChange={this.onDescriptionChange}
            placeholder='Enter Expense' />
        </div>
        <button>Add Expense</button>
      </form>
    );
  }
}

export default InputForm
