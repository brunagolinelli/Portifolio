import { Box, Container, Typography, Link, Stack } from '@mui/material'
import { GitHub, LinkedIn, Email } from '@mui/icons-material'

export interface FooterProps {
    authorName?: string
    currentYear?: number
    socialLinks?: {
        github?: string
        linkedin?: string
        email?: string
    }
}

export const Footer = ({
    authorName = 'Bruna Nallis',
    currentYear = new Date().getFullYear(),
    socialLinks,
}: FooterProps) => {
    return (
        <Box
            component="footer"
            sx={{
                backgroundColor: 'background.paper',
                borderTop: 1,
                borderColor: 'divider',
                py: 4,
                mt: 'auto',
            }}
        >
            <Container maxWidth="lg">
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 2, sm: 4 }}
                    justifyContent="space-between"
                    alignItems={{ xs: 'center', sm: 'center' }}
                >
                    <Typography variant="body2" color="text.secondary">
                        © {currentYear} {authorName}. Todos os direitos reservados.
                    </Typography>

                    {socialLinks && (
                        <Stack direction="row" spacing={2} alignItems="center">
                            {socialLinks.github && (
                                <Link
                                    href={socialLinks.github}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="text.secondary"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                    aria-label="GitHub"
                                >
                                    <GitHub fontSize="small" sx={{ mr: 0.5 }} />
                                </Link>
                            )}

                            {socialLinks.linkedin && (
                                <Link
                                    href={socialLinks.linkedin}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    color="text.secondary"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                    aria-label="LinkedIn"
                                >
                                    <LinkedIn fontSize="small" sx={{ mr: 0.5 }} />
                                </Link>
                            )}

                            {socialLinks.email && (
                                <Link
                                    href={`mailto:${socialLinks.email}`}
                                    color="text.secondary"
                                    sx={{
                                        display: 'flex',
                                        alignItems: 'center',
                                        textDecoration: 'none',
                                        '&:hover': {
                                            color: 'primary.main',
                                        },
                                    }}
                                    aria-label="Email"
                                >
                                    <Email fontSize="small" sx={{ mr: 0.5 }} />
                                </Link>
                            )}
                        </Stack>
                    )}
                </Stack>
            </Container>
        </Box>
    )
}

