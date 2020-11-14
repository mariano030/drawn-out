import React from 'react'
import styled from 'styled-components'

const StyledButton = styled.button`
  background-color: GRAY
`

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
