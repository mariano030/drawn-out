import { Link as UnstyledLink } from 'react-router-dom'
import styled from 'styled-components'

const Link = styled(UnstyledLink)`
  color: ${props => props.theme.colors.link};
  text-decoration: none;
`

export default Link
