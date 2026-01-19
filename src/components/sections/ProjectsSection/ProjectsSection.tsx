import { Box, Container, Stack, Grid } from '@mui/material'
import { memo } from 'react'
import { ProjectsData } from '@/types'
import { ProjectCard } from './ProjectCard'
import { SectionTitle } from '@/components/common'

export interface ProjectsSectionProps {
    data: ProjectsData
}

export const ProjectsSection = memo(({ data }: ProjectsSectionProps) => {
    return (
        <Box id="projetos" component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    <SectionTitle>{data.title}</SectionTitle>

                    <Grid container spacing={3}>
                        {data.projects.map((project) => (
                            <Grid item xs={12} sm={6} lg={4} key={project.id}>
                                <ProjectCard project={project} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
})

ProjectsSection.displayName = 'ProjectsSection'

