import uuid from 'uuid'

export const addExpense = (expense) => ({
  type: 'ADD_ITEM',
  expense: {
    id: uuid(),
    ...expense
  }
})

export const removeExpense = (id) => ({
  type: 'REMOVE_ITEM',
  id
})

export const editExpense = (id, update) => ({
  type: 'EDIT_ITEM',
  id,
  update
})
