import { Close, NavigateBefore } from '@mui/icons-material'
import { Box, Button, Drawer, IconButton, Stack, StackProps, Typography } from '@mui/material'
import React from 'react'
import { useState } from 'react'

const SideDrawer = (props: StackProps) => {
  const [open, setOpen] = useState(false)
  return (
    <>
      <Box position='fixed' right={20} bottom={20}>
        <IconButton sx={{
          backdropFilter: 'blur(.5px)',
          // "::MsBackdrop": 'blur(1px)',
          backgroundColor: '#8883',
        }}
          onClick={() => setOpen(true)}
        ><Box width={30} height={30}> </Box>
          {/* <NavigateBefore color='disabled' sx={{ opacity: '.66' }} /> */}
        </IconButton>
      </Box>
      <Drawer
        open={open}
        onClose={() => setOpen(false)}
        anchor='right' PaperProps={{ sx: { width: 290 } }}>
        <Stack height={1} justifyContent='space-between'>
          <div>
            <Typography color='gray' fontSize={32} pt={3} px={1}>非洲静心</Typography>
            <Stack spacing={2} {...props} />
          </div>
          <Button startIcon={<Close />} onClick={() => setOpen(false)}>Close</Button>
        </Stack>
      </Drawer>
    </>
  )
}

export default SideDrawer