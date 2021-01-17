import React from 'react'

import { HeaderStyled, LogoStyled, WrapperStyled, SocialStyled } from './style'
import socials from '../../shared/socials'
import ThemeToggler from '../themeToggler'

const Header: React.FC = () => {
  return (
    <HeaderStyled>
      <WrapperStyled>
        <LogoStyled href="">rafa <span>silveira</span></LogoStyled>

        <div style={{display: 'flex', alignItems: 'center'}}>
          <div>
            { Object
              .entries(socials)
              .filter( ([key, value]) => ["github", "linkedin", "whatsapp"].includes(key) )
              .map(([key, value]) => {
                return (
                  <SocialStyled
                    key={value.title}
                    href={value.url}
                    title={value.title}
                    target="_blank"
                    rel="noopener noreferrer external"
                    color={value.color}>
                      <value.icon />
                  </SocialStyled>
                )
              })
            }
          </div>
          <ThemeToggler />
        </div>


      </WrapperStyled>
    </HeaderStyled>
  )
}

export default Header
