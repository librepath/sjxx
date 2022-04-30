import { Box, IconButton, IconButtonProps } from '@mui/material'
import React from 'react'

const SideButton = ({ onClick }: IconButtonProps) => (
  <IconButton sx={{
    backdropFilter: 'blur(.5px)',
    // "::MsBackdrop": 'blur(1px)',
    backgroundColor: '#8883',
  }}
    onClick={onClick}
  ><Box width={30} height={30}> </Box>
    {/* <NavigateBefore color='disabled' sx={{ opacity: '.66' }} /> */}
  </IconButton>
)

export default SideButton