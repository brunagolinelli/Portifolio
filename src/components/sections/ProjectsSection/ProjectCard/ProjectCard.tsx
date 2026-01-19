import {
    Card,
    CardContent,
    Typography,
    Box,
    Chip,
    Stack,
    IconButton,
    Tooltip,
} from '@mui/material'
import { Launch, Code } from '@mui/icons-material'
import { memo } from 'react'
import { Project } from '@/types'

export interface ProjectCardProps {
    project: Project
}

const PROJECT_TYPE_LABELS: Record<Project['type'], string> = {
    'sistema-corporativo': 'Sistema Corporativo',
    dashboard: 'Dashboard',
    'interface-complexa': 'Interface Complexa',
    'migracao-web': 'Migração Web',
    'ux-focused': 'UX Focado',
}

export const ProjectCard = memo(({ project }: ProjectCardProps) => {
    return (
        <Card
            sx={{
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
                transition: 'all 0.3s ease-in-out',
                border: 1,
                borderColor: 'divider',
                '&:hover': {
                    boxShadow: 4,
                    transform: 'translateY(-4px)',
                    borderColor: 'primary.main',
                },
            }}
        >
            <CardContent sx={{ flexGrow: 1, display: 'flex', flexDirection: 'column', p: 3 }}>
                <Box
                    sx={{
                        display: 'flex',
                        justifyContent: 'space-between',
                        alignItems: 'flex-start',
                        mb: 2,
                    }}
                >
                    <Chip
                        label={PROJECT_TYPE_LABELS[project.type]}
                        size="small"
                        sx={{
                            backgroundColor: 'primary.light',
                            color: 'primary.contrastText',
                            fontWeight: 600,
                        }}
                    />
                    <Stack direction="row" spacing={1}>
                        {project.link && (
                            <Tooltip title="Ver projeto">
                                <IconButton
                                    size="small"
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: 'primary.main' }}
                                >
                                    <Launch fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                        {project.github && (
                            <Tooltip title="Ver código">
                                <IconButton
                                    size="small"
                                    href={project.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    sx={{ color: 'text.secondary' }}
                                >
                                    <Code fontSize="small" />
                                </IconButton>
                            </Tooltip>
                        )}
                    </Stack>
                </Box>

                <Typography
                    variant="h5"
                    component="h3"
                    sx={{
                        fontWeight: 700,
                        fontSize: { xs: '1.25rem', md: '1.5rem' },
                        color: 'text.primary',
                        mb: 2,
                        lineHeight: 1.3,
                    }}
                >
                    {project.title}
                </Typography>

                <Typography
                    variant="body2"
                    sx={{
                        color: 'text.secondary',
                        lineHeight: 1.7,
                        mb: 3,
                        flexGrow: 1,
                    }}
                >
                    {project.description}
                </Typography>

                <Box
                    sx={{
                        display: 'flex',
                        flexWrap: 'wrap',
                        gap: 1,
                        mt: 'auto',
                    }}
                >
                    {project.technologies.map((tech) => (
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
                </Box>
            </CardContent>
        </Card>
    )
})

ProjectCard.displayName = 'ProjectCard'

