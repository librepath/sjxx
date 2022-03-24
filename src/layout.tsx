import { Stack } from '@mui/material'
import React, { PropsWithChildren } from 'react'
import Bread from './components/Bread'
import DarkSwitch from './components/DarkSwitch'
import FontSizeSlider from './components/FontSizeSlider'
import GitbubButton from './components/GitbubButton'
import MarkSwitch from './components/MarkSwitch'
import SpeedDial from './components/SpeedDial'
import { useStore } from './store'

const Layout = ({ children }: PropsWithChildren<{}>) => {

  const [{ path, file, isMap, anchors, mark, dark, zoom }, set] = useStore()
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
        {path !== '/' && <Bread pathname={path} />}
        <Stack direction='row' spacing={1}>
          <GitbubButton file={file} />
          <MarkSwitch mark={mark} setMark={mark => set({ mark })} />
          <DarkSwitch dark={dark} setDark={dark => set({ dark })} />
          <FontSizeSlider onZoomIn={() => set({ zoom: zoom + 1 })} onZoomOut={() => set({ zoom: zoom - 1 })} />
        </Stack>
      </SpeedDial>
      <div />
    </Stack>
  )
}

export default Layout