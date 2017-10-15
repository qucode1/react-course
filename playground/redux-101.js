import { createStore } from 'redux'

const store = createStore((state = { count: 0 }, action) => {
  switch (action.type) {

    case 'INCREMENT':
      const increment = typeof action.incrementBy === 'number' ? action.incrementBy : 1
      return { count: state.count + increment }

    case 'DECREMENT':
      const decrement = typeof action.decrementBy === 'number' ? action.decrementBy : 1
      return { count: state.count - decrement }

    case 'RESET':
      return { count: 0 }

    case 'SET':
      const count = typeof action.count === 'number' ? action.count : state.count
      if(typeof action.count !== 'number') console.error(`action.count is ${typeof action.count} - it has to be a number`)
      return { count }
    default:
      return state
  }
})

const unsubscribe = store.subscribe(() => (
  console.log(store.getState())
))


store.dispatch({ type: 'INCREMENT' })
store.dispatch({ type: 'INCREMENT', incrementBy: 3 })

store.dispatch({ type: 'RESET' })
// unsubscribe()

store.dispatch({ type: 'DECREMENT' })
store.dispatch({ type: 'SET', count: 10 })
store.dispatch({ type: 'DECREMENT', decrementBy: 2 })
store.dispatch({ type: 'SET' })
