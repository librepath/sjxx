import { ArrowCircleLeft } from '@mui/icons-material'
import { IconButton, IconButtonProps } from '@mui/material'
import { navigate } from 'gatsby'
import React from 'react'

const ButtonBack = (props:IconButtonProps) => {
  return (
    <IconButton onClick={() => navigate(-1)} {...props}>
      <ArrowCircleLeft color='primary' sx={{ opacity: 0.6 }} />
    </IconButton>
  )
}

export default ButtonBack