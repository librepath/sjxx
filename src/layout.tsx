import { List, ListItemButton, ListItemText, Stack } from '@mui/material'
import { navigate } from 'gatsby'
import React, { PropsWithChildren } from 'react'
import Bread from './components/Bread'
import DarkSwitch from './components/DarkSwitch'
import FontSizeSlider from './components/FontSizeSlider'
import GitbubButton from './components/GitbubButton'
import MarkSwitch from './components/MarkSwitch'
import SideDrawer from './components/SideDrawer'
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
      <SideDrawer >
        <Stack direction='row' spacing={1} justifyContent='end' pr={2}>
          <GitbubButton file={file} />
          <MarkSwitch mark={mark} setMark={mark => set({ mark })} />
          <DarkSwitch dark={dark} setDark={dark => set({ dark })} />
          <FontSizeSlider onZoomIn={() => set({ zoom: zoom + 1 })} onZoomOut={() => set({ zoom: zoom - 1 })} />
        </Stack>
        <Bread pathname={path} />
        <List>
          {anchors.map((anchor, id) => <ListItemButton key={id} onClick={() => navigate("#" + anchor, { replace: true })}>
            <ListItemText >{anchor}</ListItemText>
          </ListItemButton>)}
        </List>
      </SideDrawer>
      {/* <SpeedDial
        index={path !== '/'}
        top={!isMap}
        fix={isMap}
        anchors={isMap ? [] : anchors}
      >
      </SpeedDial> */}
      <div />
    </Stack>
  )
}

export default Layout