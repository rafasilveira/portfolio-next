import React from 'react'

import { FiSun, FiMoon } from 'react-icons/fi' 
import { ThemeTogglerContext } from '../../context/themeToggler.context'

import { StyledSwitcher } from './style'

const ThemeToggler: React.FC = () => {

  return (
    <ThemeTogglerContext.Consumer>
      { ctx => <>
        <StyledSwitcher
          title="Alterar esquema de cores"
          onClick={ctx.toggleTheme}
          current={ctx.current}
          >
            <div className='flipper'>
              <span className="light">
                <FiSun />
              </span>
              <span className="dark">
                <FiMoon />
              </span>
            </div>
        </StyledSwitcher>

      </>}
    </ThemeTogglerContext.Consumer>
  )
}

export default ThemeToggler
