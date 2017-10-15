import { createStore } from 'redux'

// Action generators - functions that return action objects

const incrementCount = ({ incrementBy = 1 } = {}) => ({
  type: 'INCREMENT',
  incrementBy
})

const decrementCount = ({ decrementBy = 1 } = {}) => ({
  type: 'DECREMENT',
  decrementBy
})

const setCount = ({ count } = {}) => {
  if(typeof count === 'number') {
    return {
      type: 'SET',
      count
    }
  }
  else {
    console.error(`setCount({count: ${typeof count}}. You need to pass a number to set the count`)
    return {
      type: 'ERROR',
      msg: 'Count is invalid'
    }
 }
}

const resetCount = () => ({
  type: 'RESET'
})

//
// Reducers
// 1. Reducers are pure functions (only determined by inputs/ do not interact with outside variables)
// 2. Never change state or action

const countReducer = (state = { count: 0 }, action) => {
  switch (action.type) {

    case 'INCREMENT':
      console.log(action.incrementBy)
      return { count: state.count + action.incrementBy }

    case 'DECREMENT':
      return { count: state.count - action.decrementBy }

    case 'RESET':
      return { count: 0 }

    case 'SET':
      return { count: action.count }
    default:
      return state
  }
}

const store = createStore(countReducer)

const unsubscribe = store.subscribe(() => (
  console.log(store.getState())
))


store.dispatch(incrementCount())
store.dispatch(incrementCount({ incrementBy: 3 }))
// store.dispatch({ type: 'INCREMENT', incrementBy: 3 })

store.dispatch(resetCount())
// unsubscribe()

store.dispatch(decrementCount())
store.dispatch(setCount({ count: 15 }))
store.dispatch(setCount())
store.dispatch(decrementCount({ decrementBy: 2 }))
