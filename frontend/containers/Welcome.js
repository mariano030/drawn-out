import React from 'react'
import InputField from '../components/Input'
import Button from '../components/Button'
import Chat from '../components/Chat'
// import { useSelector, useDispatch } from 'react-redux'
import { useHistory } from 'react-router-dom'

const Welcome = () => {
  const history = useHistory()
  return (
    <>
      <h1>Welcome</h1>
      <InputField placeholder='nick name' />
      <InputField placeholder='room code' />
      <Button onClick={() => history.push('/room/asdf')}>Join</Button>
      <Chat />
    </>
  )
}

export default Welcome
