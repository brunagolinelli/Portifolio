import { useContext } from 'react'
import { ThemeContext } from './themeContext'
export const useThemeMode = () => {
  const context = useContext(ThemeContext)
  if (context === undefined) {
    throw new Error('useThemeMode deve ser usado dentro de ThemeProvider')
  }
  return context
}

