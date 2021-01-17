import styled, { createGlobalStyle } from 'styled-components'
import reset from 'styled-reset'
import Theme from '../shared/interfaces/theme.interface'

const GlobalStyle = createGlobalStyle<Theme>`
  ${reset}
  @import url('https://fonts.googleapis.com/css2?family=Fira+Code&family=Montserrat&display=swap');

  body {
    color: ${props => (props.theme.text)};
    background: ${props => (props.theme.background)};
    font-family: 'Montserrat', sans-serif;
    transition: color .25s linear, background .3s ease-in-out;
  }

  a {
    color: currentColor;
    text-decoration: none;
  }
`

export const ContainerStyled = styled.div`
  max-width: 1160px;
  margin: 0 auto;
  position: relative;
  @media only screen and (max-width: 1200px) {
    padding-left: 20px;
    padding-right: 20px;
    max-width: unset
  }
`

export default GlobalStyle
