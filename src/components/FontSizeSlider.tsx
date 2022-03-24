import { ZoomIn, ZoomOut } from '@mui/icons-material'
import { Button, ButtonGroup, IconButton } from '@mui/material'
import React from 'react'

const FontSizeSlider = ({ onZoomIn = () => { }, onZoomOut = () => { } }) => {
  return (
    <>
      {/* <ButtonGroup variant='contained' size='small'> */}
      <IconButton color='primary' onClick={onZoomIn}><ZoomIn /></IconButton>
      <IconButton color='secondary' onClick={onZoomOut}><ZoomOut /></IconButton>

      {/* </ButtonGroup> */}
    </>)
}

export default FontSizeSlider