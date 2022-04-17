import { ArrowCircleLeft, ArrowCircleUp, NavigateBefore, NavigateBeforeOutlined } from '@mui/icons-material'
import { IconButton, List, ListItemButton, ListItemText, Stack } from '@mui/material'
import { navigate } from 'gatsby'
import React, { PropsWithChildren, useEffect, useState } from 'react'
import Bread from './components/Bread'
import DarkSwitch from './components/DarkSwitch'
import FontSizeSlider from './components/FontSizeSlider'
import GithubButton from './components/GithubButton'
import MarkSwitch from './components/MarkSwitch'
import SideDrawer from './components/SideDrawer'
import { useStore } from './store'

const Layout = ({ children }: PropsWithChildren<{}>) => {
  const [open, setOpen] = useState(false)
  const [{ path, file, isMap, anchors, mark, dark, zoom }, set] = useStore()
  // useEffect(() => { setOpen(false) }, [path])
  return (
    <Stack
      id="layout-wrap"
      textAlign="justify"
      justifyContent="space-between"
      minHeight="100vh"
    >
      <main id='page-wrap'>
        {children}
      </main>
      <SideDrawer open={open} setOpen={setOpen} >
        <Stack direction='row' spacing={1} justifyContent='end' pr={2}>
          <MarkSwitch mark={mark} setMark={mark => set({ mark })} />
          <DarkSwitch dark={dark} setDark={dark => set({ dark })} />
          <FontSizeSlider onZoomIn={() => set({ zoom: zoom + 1 })} onZoomOut={() => set({ zoom: zoom - 1 })} />
        </Stack>
        <Bread pathname={path} onClick={(pick) => {
          navigate(pick);
          setOpen(false);
        }} />
        {!isMap && <List>
          {anchors.map((anchor, id) => <ListItemButton key={id} onClick={() => navigate("#" + anchor, { replace: true })}>
            <ListItemText
              // primaryTypographyProps={{ sx: { letterSpacing: 0 } }}
              onClick={() => setOpen(false)}
            >{anchor}</ListItemText>
          </ListItemButton>)}
        </List>
        }

      </SideDrawer>
      {/* <SpeedDial
        index={path !== '/'}
        top={!isMap}
        fix={isMap}
        anchors={isMap ? [] : anchors}
      >
      </SpeedDial> */}
      <Stack py={2.5} direction='row' mt='auto' mb={0}>
        <GithubButton file={file} />
        <IconButton onClick={() => console.log(navigate(-1))} sx={{ ml: 3 }}>
          <ArrowCircleLeft color='primary' sx={{ opacity: 0.6 }} />
        </IconButton>
        {!isMap && <IconButton onClick={() => { window["scrollTo"]({ top: 0, behavior: "smooth" }) }} sx={{ ml: 1 }}>
          <ArrowCircleUp color='secondary' sx={{ opacity: 0.6 }} />
        </IconButton>
        }
      </Stack>
      <div />
    </Stack >
  )
}

export default Layout