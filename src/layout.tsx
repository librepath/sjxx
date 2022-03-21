import { Stack } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import Bread from './components/Bread'
import SpeedDial from './components/SpeedDial'
import { useStore } from './store'

const Layout = ({ children }: PropsWithChildren<{}>) => {

  const [{ path, file, isMap, anchors }] = useStore()
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
        index={path === '/'}
        top={!isMap}
        fix={isMap}
        anchors={isMap ? [] : anchors}
      >
        {path !== '/' && <Bread pathname={path} filePath={file} />}
      </SpeedDial>
      <div />
    </Stack>
  )
}

export default Layout