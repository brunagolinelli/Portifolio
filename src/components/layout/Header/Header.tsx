import {
    AppBar,
    Toolbar,
    Typography,
    IconButton,
    Box,
    useScrollTrigger,
    Slide,
    Container,
} from '@mui/material'
import { Brightness4, Brightness7, Menu as MenuIcon } from '@mui/icons-material'
import { useState } from 'react'
import { useThemeMode } from '@/contexts/useThemeMode'
import { NavigationItems } from '@/types'
import { NavigationMenu } from './NavigationMenu'
import { MobileNavigation } from './MobileNavigation'
export interface HeaderProps {
    navigationItems: NavigationItems
    logoText?: string
}
export const Header = ({ navigationItems, logoText = 'Portfólio' }: HeaderProps) => {
    const { themeMode, toggleTheme } = useThemeMode()
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 0,
    })

    const handleMobileMenuToggle = () => {
        setMobileMenuOpen((prev) => !prev)
    }

    const handleMobileMenuClose = () => {
        setMobileMenuOpen(false)
    }

    return (
        <>
            <Slide appear={false} direction="down" in={!trigger}>
                <AppBar
                    position="sticky"
                    elevation={trigger ? 4 : 0}
                    sx={{
                        backgroundColor: 'background.paper',
                        color: 'text.primary',
                        transition: 'all 0.3s ease-in-out',
                    }}
                >
                    <Container maxWidth="lg">
                        <Toolbar
                            disableGutters
                            sx={{
                                minHeight: { xs: 64, md: 72 },
                                justifyContent: 'space-between',
                            }}
                        >
                            <Typography
                                variant="h5"
                                component="a"
                                href="#home"
                                sx={{
                                    fontWeight: 700,
                                    textDecoration: 'none',
                                    color: 'primary.main',
                                    flexGrow: { xs: 1, md: 0 },
                                }}
                            >
                                {logoText}
                            </Typography>

                            <Box
                                sx={{
                                    display: { xs: 'none', md: 'flex' },
                                    alignItems: 'center',
                                    gap: 2,
                                }}
                            >
                                <NavigationMenu items={navigationItems} />
                                <IconButton
                                    onClick={toggleTheme}
                                    color="inherit"
                                    aria-label="Alternar tema"
                                    sx={{ ml: 1 }}
                                >
                                    {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
                                </IconButton>
                            </Box>

                            <Box sx={{ display: { xs: 'flex', md: 'none' }, alignItems: 'center', gap: 1 }}>
                                <IconButton
                                    onClick={toggleTheme}
                                    color="inherit"
                                    aria-label="Alternar tema"
                                    size="small"
                                >
                                    {themeMode === 'light' ? <Brightness4 /> : <Brightness7 />}
                                </IconButton>
                                <IconButton
                                    onClick={handleMobileMenuToggle}
                                    color="inherit"
                                    aria-label="Abrir menu"
                                    aria-controls="mobile-menu"
                                    aria-expanded={mobileMenuOpen}
                                >
                                    <MenuIcon />
                                </IconButton>
                            </Box>
                        </Toolbar>
                    </Container>
                </AppBar>
            </Slide>

            <MobileNavigation
                open={mobileMenuOpen}
                onClose={handleMobileMenuClose}
                items={navigationItems}
            />
        </>
    )
}
