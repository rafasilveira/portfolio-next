import { useCallback } from 'react'
import { useState, useEffect, useMemo } from 'react'

import DarkTheme from '../styles/themes/dark.theme'
import LightTheme from '../styles/themes/light.theme'

const useThemeToggler = () => {

  const [theme, setTheme] = useState(LightTheme)
  const [current, setCurrent] = useState("light")

  useEffect(() => {
    const now = new Date()
    switch (true) {
      case now.getHours() > 18 || now.getHours() < 7:
        setTheme(DarkTheme)
        setCurrent("dark")
        break
      default:
        setTheme(LightTheme)
        setCurrent("light")
        break
    }
  }, [])

  // todo: fix
  const toggleTheme = () => {
    switch (true) {
      case current === "light":
        setTheme(DarkTheme)
        setCurrent("dark")
      break
      case current === "dark":
        setTheme(LightTheme)
        setCurrent("light")
      break
    }
  }

  return {
    current,
    theme,
    toggleTheme
  }
}

export default useThemeToggler
