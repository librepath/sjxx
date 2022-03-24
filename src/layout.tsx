import { Checkbox, Stack } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import Bread from './components/Bread'
import GitbubButton from './components/GitbubButton'
import SpeedDial from './components/SpeedDial'
import { useStore } from './store'

const Layout = ({ children }: PropsWithChildren<{}>) => {

  const [{ path, file, isMap, anchors, showId, dark }, set] = useStore()
  return (
    <Stack
      id="layout-wrap"
      px={1}
      textAlign="justify"
      justifyContent="space-between"
      minHeight="100vh"
    >
      {children}
      <SpeedDial
        index={path !== '/'}
        top={!isMap}
        fix={isMap}
        anchors={isMap ? [] : anchors}
      >
        <Stack direction='row' spacing={2}>
          <GitbubButton file={file} />
          <Checkbox color='secondary' checked={showId} onChange={v => set({ showId: !showId })} />
          <Checkbox color='secondary' checked={dark} onChange={v => set({ dark: !dark })} />
        </Stack>
        {path !== '/' && <Bread pathname={path} />}
      </SpeedDial>
      <div />
    </Stack>
  )
}

export default Layout