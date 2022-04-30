import { Close } from '@mui/icons-material'
import { alpha, Button, Drawer, DrawerProps, Stack, Typography } from '@mui/material'
import React from 'react'

const SideDrawer = ({ children, PaperProps, ...props }: DrawerProps) => (

  <Drawer
    anchor='right' PaperProps={{
      ...PaperProps,
      sx: {
        width: 290,
        backdropFilter: 'blur(5px)',
        backgroundColor: th => alpha(th.palette.background.paper, 0.85),
        ...PaperProps?.sx,
      }
    }}
    {...props} >
    <Stack height={1} justifyContent='space-between'>
      <div>
        <Typography component='h1' color='gray' fontSize={32} pt={3} px={1}>非 洲 静 心 读 书</Typography>
        <Stack spacing={2} >
          {children}
        </Stack>
      </div>
      <Button startIcon={<Close />} onClick={props.onClose as any}>Close</Button>
    </Stack>
  </Drawer>

)

export default SideDrawer