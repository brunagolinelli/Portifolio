import { Box, Container, Stack, Grid, Typography } from '@mui/material'
import { memo } from 'react'
import { ContactData } from '@/types'
import { ContactItem } from './ContactItem'
import { SectionTitle } from '@/components/common'

export interface ContactSectionProps {
    data: ContactData
}

export const ContactSection = memo(({ data }: ContactSectionProps) => {
    return (
        <Box id="contato" component="section" sx={{ py: { xs: 6, md: 10 } }}>
            <Container maxWidth="lg">
                <Stack spacing={4}>
                    <SectionTitle>{data.title}</SectionTitle>

                    {data.description && (
                        <Typography
                            variant="body1"
                            sx={{
                                fontSize: { xs: '1rem', md: '1.125rem' },
                                lineHeight: 1.8,
                                color: 'text.secondary',
                                textAlign: { xs: 'center', md: 'left' },
                                maxWidth: { md: '70%' },
                            }}
                        >
                            {data.description}
                        </Typography>
                    )}

                    <Grid container spacing={3}>
                        {data.contacts.map((contact) => (
                            <Grid item xs={12} sm={6} md={4} key={contact.id}>
                                <ContactItem contact={contact} />
                            </Grid>
                        ))}
                    </Grid>
                </Stack>
            </Container>
        </Box>
    )
})

ContactSection.displayName = 'ContactSection'

