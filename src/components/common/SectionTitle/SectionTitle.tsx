import { Typography, TypographyProps } from '@mui/material'
import { memo } from 'react'

export interface SectionTitleProps extends Omit<TypographyProps, 'variant'> {
    children: React.ReactNode
}

export const SectionTitle = memo(
    ({ children, ...props }: SectionTitleProps) => {
        return (
            <Typography
                variant="h2"
                component="h2"
                sx={{
                    fontWeight: 700,
                    fontSize: { xs: '2rem', md: '2.5rem' },
                    color: 'text.primary',
                    textAlign: { xs: 'center', md: 'left' },
                    ...props.sx,
                }}
                {...props}
            >
                {children}
            </Typography>
        )
    }
)

SectionTitle.displayName = 'SectionTitle'

