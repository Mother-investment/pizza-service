import { configureStore } from '@reduxjs/toolkit'
import pizzaReducer from './reducers/pizzasSlice'



export const store = configureStore({
  reducer: {
    piazza: pizzaReducer
  },
})

export type AppStore = typeof store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch