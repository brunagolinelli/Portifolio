import { Box, Typography, Paper } from '@mui/material'
import { memo } from 'react'
import { Skill } from '@/types'

export interface SkillCardProps {
    skill: Skill
}

export const SkillCard = memo(({ skill }: SkillCardProps) => {
    return (
        <Paper
            elevation={0}
            sx={{
                p: 3,
                height: '100%',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                backgroundColor: 'background.paper',
                border: 1,
                borderColor: 'divider',
                borderRadius: 2,
                transition: 'all 0.3s ease-in-out',
                '&:hover': {
                    borderColor: 'primary.main',
                    boxShadow: 2,
                    transform: 'translateY(-4px)',
                },
            }}
        >
            <Typography
                variant="body1"
                sx={{
                    fontWeight: 600,
                    fontSize: '1rem',
                    color: 'text.primary',
                    textAlign: 'center',
                }}
            >
                {skill.name}
            </Typography>
        </Paper>
    )
})

SkillCard.displayName = 'SkillCard'

