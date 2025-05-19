import { combineReducers, configureStore } from '@reduxjs/toolkit'
import userReducer from './slices/user.slice'
import taskReducer from './slices/task.slice'

const rootReducer = combineReducers({
  user: userReducer,
  tasks: taskReducer
});

export const makeStore = () => {
  return configureStore({
    reducer: rootReducer
  })
}

// Infer the type of makeStore
export type AppStore = ReturnType<typeof makeStore>
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<AppStore['getState']>
export type AppDispatch = AppStore['dispatch']
