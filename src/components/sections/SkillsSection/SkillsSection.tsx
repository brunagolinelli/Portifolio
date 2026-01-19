import { Box, Container, Stack } from '@mui/material'
import { memo } from 'react'
import { SkillsData } from '@/types'
import { SkillsCategory } from './SkillsCategory'
import { SectionTitle } from '@/components/common'

export interface SkillsSectionProps {
    data: SkillsData
}

export const SkillsSection = memo(({ data }: SkillsSectionProps) => {
    return (
        <Box id="skills" component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack spacing={6}>
                    <SectionTitle>{data.title}</SectionTitle>

                    <Stack spacing={6}>
                        {data.categories.map((category) => (
                            <SkillsCategory key={category.id} category={category} />
                        ))}
                    </Stack>
                </Stack>
            </Container>
        </Box>
    )
})

SkillsSection.displayName = 'SkillsSection'

