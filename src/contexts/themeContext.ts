import { createContext } from 'react'
import { ThemeMode } from '@/types'
export interface ThemeContextType {
  themeMode: ThemeMode
  toggleTheme: () => void
  setThemeMode: (mode: ThemeMode) => void
}

export const ThemeContext = createContext<ThemeContextType | undefined>(undefined)

