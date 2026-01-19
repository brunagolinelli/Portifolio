import { ThemeProvider as MuiThemeProvider, CssBaseline } from '@mui/material'
import { ThemeProvider as AppThemeProvider } from '@/contexts/ThemeProvider'
import { useThemeMode } from '@/contexts/useThemeMode'
import { lightTheme, darkTheme } from '@/theme'
import { Home } from '@/pages'
const ThemedApp = () => {
    const { themeMode } = useThemeMode()
    const theme = themeMode === 'light' ? lightTheme : darkTheme

    return (
        <MuiThemeProvider theme={theme}>
            <CssBaseline />
            <Home />
        </MuiThemeProvider>
    )
}
export const App = () => {
    return (
        <AppThemeProvider>
            <ThemedApp />
        </AppThemeProvider>
    )
}

