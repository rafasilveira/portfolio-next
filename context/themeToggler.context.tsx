import { createContext, useRef } from 'react'
import useThemeToggler from '../hooks/useThemeToggler'

export const ThemeTogglerContext = createContext(null)

export const ThemeCtxProvider: React.FC = ({children}) => {

  const {theme, current, toggleTheme} = useThemeToggler()

  // const initialValue = useRef({theme, current, toggleTheme})
  const initialValue = {theme, current, toggleTheme}
  return (
    <ThemeTogglerContext.Provider 
      value={initialValue}>
      {children}
    </ThemeTogglerContext.Provider>
  )
}
