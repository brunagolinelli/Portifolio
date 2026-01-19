import { Box, Typography, Grid } from '@mui/material'
import { memo } from 'react'
import { SkillCategory as SkillCategoryType } from '@/types'
import { SkillCard } from '../SkillCard'

export interface SkillsCategoryProps {
    category: SkillCategoryType
}

export const SkillsCategory = memo(({ category }: SkillsCategoryProps) => {
    return (
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
                {category.title}
            </Typography>
            <Grid container spacing={2}>
                {category.skills.map((skill) => (
                    <Grid item xs={6} sm={4} md={3} key={skill.id}>
                        <SkillCard skill={skill} />
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
})

SkillsCategory.displayName = 'SkillsCategory'

