import { useState, useEffect, ReactNode } from 'react'
import { ThemeMode } from '@/types'
import { ThemeContext } from './themeContext'

export const ThemeProvider = ({ children }: { children: ReactNode }) => {
    const [themeMode, setThemeMode] = useState<ThemeMode>(() => {
        if (typeof window !== 'undefined') {
            const saved = localStorage.getItem('themeMode')
            return (saved as ThemeMode) || 'light'
        }
        return 'light'
    })

    useEffect(() => {
        if (typeof window !== 'undefined') {
            localStorage.setItem('themeMode', themeMode)
        }
    }, [themeMode])

    const toggleTheme = () => {
        setThemeMode((prev) => (prev === 'light' ? 'dark' : 'light'))
    }

    return (
        <ThemeContext.Provider value={{ themeMode, toggleTheme, setThemeMode }}>
            {children}
        </ThemeContext.Provider>
    )
}

