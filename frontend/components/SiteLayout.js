import styled from 'styled-components'

const Header = styled.footer`
  grid-area: header;
`
const Footer = styled.footer`
  grid-area: footer;
  text-align: center;
`
const Main = styled.main`
  grid-area: main;
`
const Left = styled.aside`
  grid-area: left;
`
const Right = styled.aside`
  grid-area: right;
`
const Grid = styled.main`
  display: grid;
  grid-template-areas: 'header header header'
                       'left main right'
                       'footer footer footer';
  grid-template-columns: 150px 1fr 150px;
  grid-template-rows: 10px 1fr 50px;
  min-height: 100vh;
  @media screen and (max-width: 640px) {
    grid-template-areas: 'header'
                         'navigation'
                         'main'
                         'ads'
                         'footer';
    grid-template-columns: 100%;
    grid-template-rows: 10px 10px 1fr 10px 50px;
  }
`
// )
export { Header, Footer, Main, Left, Right, Grid }
