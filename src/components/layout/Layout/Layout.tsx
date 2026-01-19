import { Box } from '@mui/material'
import { ReactNode } from 'react'
import { Header, HeaderProps } from '../Header'
import { Footer, FooterProps } from '../Footer'

export interface LayoutProps {
    children: ReactNode
    headerProps: HeaderProps
    footerProps?: FooterProps
}

export const Layout = ({ children, headerProps, footerProps }: LayoutProps) => {
    return (
        <Box
            sx={{
                display: 'flex',
                flexDirection: 'column',
                minHeight: '100vh',
            }}
        >
            <Header {...headerProps} />
            <Box
                component="main"
                sx={{
                    flexGrow: 1,
                    width: '100%',
                }}
            >
                {children}
            </Box>
            {footerProps && <Footer {...footerProps} />}
        </Box>
    )
}

