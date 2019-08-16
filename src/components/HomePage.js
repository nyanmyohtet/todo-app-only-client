import React from 'react'
import { connect } from 'react-redux'

import ItemCard from './ItemCard'

class HomePage extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      error: false
    }
  }

  render() {
    return (
      <div>
        <div>
          <div>
            {this.props.expenses.map((expense) => (
              <ItemCard key={expense.id}
                expense={expense}
                id={expense.id}
              />)
            )}
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({ expenses: state })

export default connect(mapStateToProps, undefined)(HomePage)
