import {
    Drawer,
    List,
    ListItem,
    ListItemButton,
    ListItemText,
    Box,
    Divider,
} from '@mui/material'
import { memo, useCallback } from 'react'
import { NavigationItems } from '@/types'
import { scrollToElement } from '@/utils'

export interface MobileNavigationProps {
    open: boolean
    onClose: () => void
    items: NavigationItems
}

export const MobileNavigation = memo(
    ({ open, onClose, items }: MobileNavigationProps) => {
        const handleClick = useCallback(
            (href: string) => {
                scrollToElement(href)
                onClose()
            },
            [onClose]
        )

        return (
            <Drawer
                anchor="right"
                open={open}
                onClose={onClose}
                ModalProps={{
                    keepMounted: true,
                }}
                sx={{
                    display: { xs: 'block', md: 'none' },
                    '& .MuiDrawer-paper': {
                        width: 280,
                    },
                }}
            >
                <Box
                    sx={{
                        width: 280,
                        pt: 2,
                    }}
                    role="presentation"
                    onClick={onClose}
                    onKeyDown={onClose}
                >
                    <List>
                        {items.map((item) => (
                            <ListItem key={item.id} disablePadding>
                                <ListItemButton onClick={() => handleClick(item.href)}>
                                    <ListItemText
                                        primary={item.label}
                                        primaryTypographyProps={{
                                            fontWeight: 500,
                                        }}
                                    />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                    <Divider />
                </Box>
            </Drawer>
        )
    })

MobileNavigation.displayName = 'MobileNavigation'

