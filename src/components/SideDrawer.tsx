import { NavigateBefore } from '@mui/icons-material'
import { Box, Drawer, IconButton, Stack, StackProps } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const SideDrawer = (props: StackProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Box position='fixed' right={20} top='50%'>
        <IconButton sx={{
          backdropFilter: 'blur(1px)',
          // "::MsBackdrop": 'blur(1px)',
          backgroundColor: '#8884'
        }}
          onClick={() => setOpen(true)}
        ><Box width={30} height={30}> </Box>
          {/* <NavigateBefore color='disabled' sx={{ opacity: '.66' }} /> */}
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