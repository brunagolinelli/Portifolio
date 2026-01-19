import { Box, Container, Stack } from '@mui/material'
import { memo } from 'react'
import { ExperienceData } from '@/types'
import { ExperienceCard } from './ExperienceCard'
import { SectionTitle } from '@/components/common'

export interface ExperienceSectionProps {
    data: ExperienceData
}

export const ExperienceSection = memo(({ data }: ExperienceSectionProps) => {
    return (
        <Box id="experiencia" component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    <SectionTitle>{data.title}</SectionTitle>

                    <Box sx={{ position: 'relative' }}>
                        <Stack spacing={0}>
                            {data.experiences.map((experience, index) => (
                                <ExperienceCard
                                    key={experience.id}
                                    experience={experience}
                                    isLast={index === data.experiences.length - 1}
                                />
                            ))}
                        </Stack>
                    </Box>
                </Stack>
            </Container>
        </Box>
    )
})

ExperienceSection.displayName = 'ExperienceSection'

