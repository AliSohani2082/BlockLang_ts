import {configureStore} from '@reduxjs/toolkit'
import directoryReducer from './features/directorySlice'

export const store = configureStore({
  reducer: {
    directory: directoryReducer,
  }
})