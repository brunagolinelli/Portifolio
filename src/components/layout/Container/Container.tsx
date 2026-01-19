import { Container as MuiContainer, ContainerProps } from '@mui/material'

export interface CustomContainerProps extends ContainerProps {
    children: React.ReactNode
}

export const Container = ({ children, ...props }: CustomContainerProps) => {
    return (
        <MuiContainer maxWidth="lg" {...props}>
            {children}
        </MuiContainer>
    )
}

