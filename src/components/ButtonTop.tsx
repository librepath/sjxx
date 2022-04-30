import { ArrowCircleUp } from '@mui/icons-material'
import { IconButton, IconButtonProps } from '@mui/material'
import React from 'react'

const ButtonTop = (props:IconButtonProps) => {
  return (
    <IconButton onClick={() => { window["scrollTo"]({ top: 0, behavior: "smooth" }) }} {...props}>
      <ArrowCircleUp color='secondary' sx={{ opacity: 0.6 }} />
    </IconButton>
  )
}

export default ButtonTop