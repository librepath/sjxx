import { ForkLeft, JoinLeft, Menu, MenuOpen, SwipeLeft } from '@mui/icons-material'
import { Box, Drawer, IconButton, Stack, StackProps } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const SideDrawer = (props: StackProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Box position='fixed' right={20} bottom='25%'>
        <IconButton sx={{
          backdropFilter: 'blur(1px)',
          // "::MsBackdrop": 'blur(1px)',
          backgroundColor: '#ccc3'
        }}
          onClick={() => setOpen(true)}
        >
          <MenuOpen color='primary' sx={{ opacity: '.66' }} />
        </IconButton>
      </Box>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor='right' PaperProps={{ sx: { width: 320 } }}>
        <Box p={1}>三级修学课程辅助</Box>
        <Stack spacing={2} {...props} />
      </Drawer>
    </>
  )
}

export default SideDrawer