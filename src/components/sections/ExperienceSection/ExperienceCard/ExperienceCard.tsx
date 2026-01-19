import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    Stack,
    Divider,
} from '@mui/material'
import { memo } from 'react'
import { Experience } from '@/types'

export interface ExperienceCardProps {
    experience: Experience
    isLast?: boolean
}

export const ExperienceCard = memo(
    ({ experience, isLast = false }: ExperienceCardProps) => {
        return (
            <Box sx={{ position: 'relative', pb: isLast ? 0 : 4 }}>
                {!isLast && (
                    <Box
                        sx={{
                            position: 'absolute',
                            left: { xs: 20, md: 24 },
                            top: 60,
                            bottom: 0,
                            width: 2,
                            backgroundColor: 'divider',
                        }}
                    />
                )}

                <Box
                    sx={{
                        position: 'absolute',
                        left: { xs: 14, md: 18 },
                        top: 8,
                        width: { xs: 12, md: 16 },
                        height: { xs: 12, md: 16 },
                        borderRadius: '50%',
                        backgroundColor: 'primary.main',
                        border: 3,
                        borderColor: 'background.paper',
                        zIndex: 1,
                    }}
                />

                <Card
                    sx={{
                        ml: { xs: 6, md: 8 },
                        border: 1,
                        borderColor: 'divider',
                        transition: 'all 0.3s ease-in-out',
                        '&:hover': {
                            boxShadow: 4,
                            borderColor: 'primary.main',
                        },
                    }}
                >
                    <CardContent sx={{ p: 3 }}>
                        <Box
                            sx={{
                                display: 'flex',
                                flexDirection: { xs: 'column', sm: 'row' },
                                justifyContent: 'space-between',
                                alignItems: { xs: 'flex-start', sm: 'center' },
                                mb: 2,
                                gap: 1,
                            }}
                        >
                            <Box>
                                <Typography
                                    variant="h5"
                                    component="h3"
                                    sx={{
                                        fontWeight: 700,
                                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                                        color: 'text.primary',
                                        mb: 0.5,
                                    }}
                                >
                                    {experience.company}
                                </Typography>
                                <Typography
                                    variant="body1"
                                    sx={{
                                        fontWeight: 600,
                                        color: 'primary.main',
                                        fontSize: { xs: '0.875rem', md: '1rem' },
                                    }}
                                >
                                    {experience.role}
                                </Typography>
                            </Box>
                            <Chip
                                label={experience.period}
                                size="small"
                                sx={{
                                    backgroundColor: 'primary.light',
                                    color: 'primary.contrastText',
                                    fontWeight: 600,
                                }}
                            />
                        </Box>

                        <Divider sx={{ my: 2 }} />

                        <Box sx={{ mb: 3 }}>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontWeight: 600,
                                    color: 'text.secondary',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1,
                                    mb: 1,
                                    display: 'block',
                                }}
                            >
                                Tecnologias
                            </Typography>
                            <Stack direction="row" spacing={1} flexWrap="wrap" useFlexGap>
                                {experience.technologies.map((tech) => (
                                    <Chip
                                        key={tech}
                                        label={tech}
                                        size="small"
                                        variant="outlined"
                                        sx={{
                                            fontSize: '0.75rem',
                                            borderColor: 'divider',
                                            color: 'text.secondary',
                                        }}
                                    />
                                ))}
                            </Stack>
                        </Box>

                        <Box sx={{ mb: experience.impact && experience.impact.length > 0 ? 3 : 0 }}>
                            <Typography
                                variant="caption"
                                sx={{
                                    fontWeight: 600,
                                    color: 'text.secondary',
                                    textTransform: 'uppercase',
                                    letterSpacing: 1,
                                    mb: 1.5,
                                    display: 'block',
                                }}
                            >
                                Responsabilidades
                            </Typography>
                            <Stack spacing={1.5}>
                                {experience.responsibilities.map((responsibility, index) => (
                                    <Box
                                        key={`responsibility-${experience.id}-${index}`}
                                        sx={{
                                            display: 'flex',
                                            alignItems: 'flex-start',
                                            gap: 1.5,
                                        }}
                                    >
                                        <Box
                                            sx={{
                                                width: 6,
                                                height: 6,
                                                borderRadius: '50%',
                                                backgroundColor: 'primary.main',
                                                mt: 1,
                                                flexShrink: 0,
                                            }}
                                        />
                                        <Typography
                                            variant="body2"
                                            sx={{
                                                color: 'text.secondary',
                                                lineHeight: 1.7,
                                            }}
                                        >
                                            {responsibility}
                                        </Typography>
                                    </Box>
                                ))}
                            </Stack>
                        </Box>

                        {experience.impact && experience.impact.length > 0 && (
                            <Box>
                                <Typography
                                    variant="caption"
                                    sx={{
                                        fontWeight: 600,
                                        color: 'text.secondary',
                                        textTransform: 'uppercase',
                                        letterSpacing: 1,
                                        mb: 1.5,
                                        display: 'block',
                                    }}
                                >
                                    Impacto
                                </Typography>
                                <Box
                                    sx={{
                                        backgroundColor: 'primary.light',
                                        borderRadius: 1,
                                        p: 2,
                                    }}
                                >
                                    <Stack spacing={1}>
                                        {experience.impact.map((impactItem, index) => (
                                            <Typography
                                                key={`impact-${experience.id}-${index}`}
                                                variant="body2"
                                                sx={{
                                                    color: 'primary.contrastText',
                                                    fontWeight: 500,
                                                    lineHeight: 1.6,
                                                }}
                                            >
                                                • {impactItem}
                                            </Typography>
                                        ))}
                                    </Stack>
                                </Box>
                            </Box>
                        )}
                    </CardContent>
                </Card>
            </Box>
        )
    })

ExperienceCard.displayName = 'ExperienceCard'

