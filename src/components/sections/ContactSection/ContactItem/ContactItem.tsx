import { Box, Typography, Link, Stack } from '@mui/material'
import { Phone, Email, LinkedIn } from '@mui/icons-material'
import { memo } from 'react'
import { ContactItem as ContactItemType } from '@/types'

export interface ContactItemProps {
    contact: ContactItemType
}

const contactIcons = {
    phone: Phone,
    email: Email,
    linkedin: LinkedIn,
}

export const ContactItem = memo(({ contact }: ContactItemProps) => {
    const Icon = contactIcons[contact.type]

    return (
        <Box
            sx={{
                p: 3,
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
            <Stack spacing={2} alignItems="center" textAlign="center">
                <Box
                    sx={{
                        p: 2,
                        borderRadius: '50%',
                        backgroundColor: 'primary.light',
                        color: 'primary.contrastText',
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                    }}
                >
                    <Icon sx={{ fontSize: 32 }} />
                </Box>
                <Typography
                    variant="h6"
                    component="h3"
                    sx={{
                        fontWeight: 600,
                        color: 'text.primary',
                    }}
                >
                    {contact.label}
                </Typography>
                <Link
                    href={contact.href}
                    target={contact.type === 'linkedin' ? '_blank' : undefined}
                    rel={contact.type === 'linkedin' ? 'noopener noreferrer' : undefined}
                    sx={{
                        color: 'primary.main',
                        textDecoration: 'none',
                        fontSize: '1rem',
                        fontWeight: 500,
                        '&:hover': {
                            textDecoration: 'underline',
                        },
                    }}
                >
                    {contact.value}
                </Link>
            </Stack>
        </Box>
    )
})

ContactItem.displayName = 'ContactItem'

