import React from 'react'
import Button from '../components/Button'
import { useSelector, useDispatch } from 'react-redux'
import { message } from '../slices/chat'

const Lobby = () => {
  const messages = useSelector(state => state.chat.messages)
  const dispatch = useDispatch()
  return (
    <>
      <h1>Hello, welcome to the Lobby? Super.</h1>
      <Button onClick={() => dispatch(message({ text: 'Hello' }))}>Test</Button>
      <ul>
        {messages.map((message, i) => {
          return (
            <li key={i}>
              {message.text}
            </li>
          )
        })}
      </ul>
    </>
  )
}

export default Lobby
// import Hobby from './Lobby'
// export { Lobby }
// import { Lobby } form './Lobby
