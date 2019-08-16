import { ITEMS_DEFAULT_STATE } from '../defaultStates/itemsState'

export default (state = ITEMS_DEFAULT_STATE, action) => {
  switch (action.type) {
    case 'ADD_ITEM':
      return [
        ...state,
        action.expense
      ]
    case 'REMOVE_ITEM':
      return state.filter((expense) => expense.id !== action.id)
    case 'EDIT_ITEM':
      return state.map(expense => {
        if (expense.id === action.id) {
          expense = {
            ...expense,
            ...action.update
          }
        }
        return expense
      })
    default:
      return state
  }
}
