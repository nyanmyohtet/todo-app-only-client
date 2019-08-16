import { createStore } from 'redux'
import reducer from '../reducers/reducer'

// Create a Redux store holding the state of app.
// Its API is { subscribe, dispatch, getState }.
const store = createStore(reducer)

// store.subscribe(() => console.log(store.getState()))

export default store
