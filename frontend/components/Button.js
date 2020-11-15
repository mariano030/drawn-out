import React from 'react'
import styled from 'styled-components'
import { lighten, darken } from 'polished'

const StyledButton = styled.button`
  background-color: ${props => props.theme.colors.primary};
  color: ${props => props.theme.colors.primaryText};
  padding: 5px 15px;
  border-radius: 5px;
  transition: background-color ease .2s;
  font-size: 110%;
  border: 0;

  &:hover {
    background-color: ${props => lighten(0.1, props.theme.colors.primary)};
  }

  &:active {
    background-color: ${props => darken(0.1, props.theme.colors.primary)};
  }
`

const Button = (props) => {
  return <StyledButton {...props}>{props.children}</StyledButton>
}

export default Button
