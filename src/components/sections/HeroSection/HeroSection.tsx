import { Box, Typography, Stack, Button, Container } from '@mui/material'
import { memo, useCallback } from 'react'
import { HeroData } from '@/types'
import { scrollToElement } from '@/utils'

export interface HeroSectionProps {
    data: HeroData
}

export const HeroSection = memo(({ data }: HeroSectionProps) => {
    const handleButtonClick = useCallback((href: string) => {
        scrollToElement(href)
    }, [])

    return (
        <Box
            id="home"
            component="section"
            sx={{
                minHeight: { xs: '70vh', md: '85vh' },
                display: 'flex',
                alignItems: 'center',
                py: { xs: 8, md: 12 },
                backgroundColor: 'background.default',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    spacing={4}
                    alignItems={{ xs: 'center', md: 'flex-start' }}
                    textAlign={{ xs: 'center', md: 'left' }}
                    sx={{ maxWidth: { md: '70%' } }}
                >
                    <Typography
                        variant="h1"
                        component="h1"
                        sx={{
                            fontWeight: 700,
                            fontSize: { xs: '2.5rem', sm: '3.5rem', md: '4.5rem' },
                            lineHeight: 1.2,
                            color: 'text.primary',
                            letterSpacing: '-0.02em',
                        }}
                    >
                        {data.name}
                    </Typography>

                    <Typography
                        variant="h2"
                        component="h2"
                        sx={{
                            fontWeight: 500,
                            fontSize: { xs: '1.5rem', sm: '2rem', md: '2.5rem' },
                            color: 'primary.main',
                            lineHeight: 1.3,
                        }}
                    >
                        {data.role}
                    </Typography>

                    <Typography
                        variant="body1"
                        sx={{
                            fontSize: { xs: '1rem', md: '1.125rem' },
                            lineHeight: 1.7,
                            color: 'text.secondary',
                            maxWidth: { xs: '100%', md: '85%' },
                            mb: 2,
                        }}
                    >
                        {data.description}
                    </Typography>

                    <Stack
                        direction={{ xs: 'column', sm: 'row' }}
                        spacing={2}
                        sx={{ width: { xs: '100%', sm: 'auto' } }}
                    >
                        {data.buttons.map((button) => (
                            <Button
                                key={button.id}
                                variant={button.variant || 'contained'}
                                size="large"
                                onClick={() => handleButtonClick(button.href)}
                                sx={{
                                    minWidth: { xs: '100%', sm: 180 },
                                    py: 1.5,
                                    px: 4,
                                    fontSize: '1rem',
                                    fontWeight: 600,
                                    textTransform: 'none',
                                    borderRadius: 2,
                                    ...(button.variant === 'outlined' && {
                                        borderWidth: 2,
                                        '&:hover': {
                                            borderWidth: 2,
                                        },
                                    }),
                                }}
                            >
                                {button.label}
                            </Button>
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
})

HeroSection.displayName = 'HeroSection'

