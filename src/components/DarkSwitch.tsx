import { Brightness4, Brightness7 } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const DarkSwitch = ({ dark = true, setDark = (d: boolean) => { } }) => {
  return (
    <IconButton onClick={() => setDark(!dark)}>
      {dark ? <Brightness4 fontSize="small" color="secondary" /> : <Brightness7 fontSize="small" color="secondary" />}
    </IconButton>
  )
}

export default DarkSwitch