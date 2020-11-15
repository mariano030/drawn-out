
import { lighten, darken } from 'polished'

const green = '#1f9f2d'
const white = '#fff'

const c1 = '#e8e8e8'
const c2 = '#2a4179'
const c3 = '#1f8a70'
const c4 = '#bedb39'
const c5 = '#ffff1a'
const c6 = '#fd7400'
const c7 = '#f83016'
const c8 = '#76240f'
const c9 = '#1c1b1b'
const bgC1 = '#e8e8e8'
const bgC2 = '#c1292e'
const bgC3 = '#457d56'
const bgC4 = '#437c90'
const bgC5 = '#1c1b1b'

const theme = {
  colors: {
    primary: c6,
    primaryText: white,
    /*
    */
    white: white,
    text: '#222',
    link: green,
    linkActive: '#7200ff',
    primaryAction: '#00ffcc',
    inputForeground: c2,
    inputBackground: c6
  }
}

export default theme

const colors = [c1, c2, c3, c4, c5, c5, c7, c8, c9]
const backgroundColors = [bgC1, bgC2, bgC3, bgC4, bgC5]
export { colors, backgroundColors }
