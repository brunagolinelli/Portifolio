import { Typography, Box, Stack, Chip, Container } from '@mui/material'
import { memo } from 'react'
import { AboutData } from '@/types'
import { SectionTitle } from '@/components/common'

export interface AboutProps {
    data: AboutData
}

export const About = memo(({ data }: AboutProps) => {
    return (
        <Box id="sobre" component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    <SectionTitle>{data.title}</SectionTitle>

                    <Stack spacing={3} sx={{ maxWidth: { md: '85%' } }}>
                        {data.paragraphs.map((paragraph, index) => (
                            <Typography
                                key={`paragraph-${index}`}
                                variant="body1"
                                sx={{
                                    fontSize: { xs: '1rem', md: '1.125rem' },
                                    lineHeight: 1.8,
                                    color: 'text.secondary',
                                    textAlign: { xs: 'left', md: 'left' },
                                }}
                            >
                                {paragraph}
                            </Typography>
                        ))}
                    </Stack>

                    {data.highlights && data.highlights.length > 0 && (
                        <Box>
                            <Typography
                                variant="h3"
                                component="h3"
                                sx={{
                                    fontWeight: 600,
                                    fontSize: { xs: '1.25rem', md: '1.5rem' },
                                    color: 'text.primary',
                                    mb: 3,
                                    textAlign: { xs: 'center', md: 'left' },
                                }}
                            >
                                Principais Competências
                            </Typography>
                            <Box
                                sx={{
                                    display: 'flex',
                                    flexWrap: 'wrap',
                                    gap: 2,
                                    justifyContent: { xs: 'center', md: 'flex-start' },
                                }}
                            >
                                {data.highlights.map((highlight, index) => (
                                    <Chip
                                        key={`highlight-${index}`}
                                        label={highlight}
                                        sx={{
                                            backgroundColor: 'primary.light',
                                            color: 'primary.contrastText',
                                            fontWeight: 500,
                                            fontSize: '0.875rem',
                                            py: 2.5,
                                            '&:hover': {
                                                backgroundColor: 'primary.main',
                                            },
                                        }}
                                    />
                                ))}
                            </Box>
                        </Box>
                    )}
                </Stack>
            </Container>
        </Box>
    )
})

About.displayName = 'About'
