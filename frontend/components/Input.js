import React from 'react'
import styled from 'styled-components'

const StyledInputField = styled.input`
  padding: 0.5em;
  margin: 0.5em;
  color: ${props => props.theme.colors.primaryText};
  background: ${props => props.theme.colors.primary};
  border: none;
  border-radius: 3px;
  font-size: 110%;
`

const InputField = (props) => {
  console.log('props IF', props)
  return <StyledInputField placeholderValue={props.placeholder} type={props.type || 'text'} {...props} />
}

export default InputField
