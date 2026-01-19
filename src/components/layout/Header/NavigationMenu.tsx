import { Box, Button } from '@mui/material'
import { memo, useCallback } from 'react'
import { NavigationItems } from '@/types'
import { scrollToElement } from '@/utils'

export interface NavigationMenuProps {
    items: NavigationItems
}

export const NavigationMenu = memo(({ items }: NavigationMenuProps) => {
    const handleClick = useCallback((href: string) => {
        scrollToElement(href)
    }, [])

    return (
        <Box sx={{ display: 'flex', gap: 1 }}>
            {items.map((item) => (
                <Button
                    key={item.id}
                    onClick={() => handleClick(item.href)}
                    sx={{
                        color: 'text.primary',
                        textTransform: 'none',
                        fontWeight: 500,
                        '&:hover': {
                            backgroundColor: 'action.hover',
                        },
                    }}
                >
                    {item.label}
                </Button>
            ))}
        </Box>
    )
})

NavigationMenu.displayName = 'NavigationMenu'

