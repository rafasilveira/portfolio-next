import styled from 'styled-components'
import { ContainerStyled } from '../../styles/global.style'


export const HeaderStyled = styled.header`
  padding: 40px 0;
  @media (max-width: 959px) {
    padding: 16px 0 32px;
  }
`

export const WrapperStyled = styled(ContainerStyled)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoStyled = styled.a`
  font-size: 20px;
  font-family: 'Fira Code', monospace;
  color: ${props => props.theme.text};
  line-height: 0.9;
  letter-spacing: -0.05em;
  transition: letter-spacing 0.3s linear;
  cursor: pointer;
  span { color: #bd93f9; display: block; }
  &:hover { letter-spacing: 0.05em; }
`

export const SocialStyled = styled.a`
  font-size: 24px;
  padding: 8px;
  color: ${props => props.theme.text};

  svg { 
    transition: color .3s linear; 
    vertical-align: middle;
  }

  &:hover {
    color: ${props => props.color};
  }
`