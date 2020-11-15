import { createSlice } from '@reduxjs/toolkit'

const chatSlice = createSlice({
  name: 'chat',
  initialState: {
    messages: [{ text: 'Hello', user: 'joni' }, { text: 'Bar', user: 'Bernd' }]
  },
  reducers: {
    message: (state, action) => {
      state.messages = [...state.messages, action.payload]
    },
    clear: (state) => {
      state.messages = []
    }
  }
})

export default chatSlice.reducer

export const {
  message,
  clear
} = chatSlice.actions

/*
import Chat from './slice/Chat'

dispatch(Chat.actions.message('foo'))
*/

/*
chatSlice.actions.message
chatSlice.actions.clear
chatSlice.reducer
*/

/*
export const { incremented, decremented } = counterSlice.actions


const store = configureStore({
  reducer: counterSlice.reducer
})

// Can still subscribe to the store
store.subscribe(() => console.log(store.getState()))

// Still pass action objects to `dispatch`, but they're created for us
store.dispatch(incremented())
// {value: 1}
store.dispatch(incremented())
// {value: 2}
store.dispatch(decremented())
// {value: 1}
*/