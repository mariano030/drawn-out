import { configureStore } from '@reduxjs/toolkit'
import chatReducer from './slices/chat'

const store = configureStore({
  reducer: {
    chat: chatReducer
  },
  devTools: true
})

export default store
