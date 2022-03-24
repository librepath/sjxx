import { Looks6, LooksOne } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'

const MarkSwitch = ({ mark = false, setMark = (m: boolean) => { } }) => {
  return (
    <IconButton onClick={() => setMark(!mark)}>
      {mark ? <Looks6 fontSize="small" color="secondary" /> : <LooksOne fontSize="small" color="secondary" />}
    </IconButton>
  )
}

export default MarkSwitch