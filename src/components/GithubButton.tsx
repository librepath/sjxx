import { GitHub } from '@mui/icons-material'
import { IconButton } from '@mui/material'
import React from 'react'
import { GITHUB_PERFIX } from '../constants/SiteMeta';

const GithubButton = ({ file = '' }) => {
  return (
    <IconButton component='a' href={`${GITHUB_PERFIX}${file}`} target='_blank'>
      <GitHub fontSize="small" color="disabled" />
    </IconButton>
  )
}

export default GithubButton