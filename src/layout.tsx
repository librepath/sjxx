import { ArrowCircleLeft, ArrowCircleUp } from '@mui/icons-material'
import { Box, IconButton, List, ListItemButton, ListItemText, Stack } from '@mui/material'
import { navigate } from 'gatsby'
import React, { PropsWithChildren, useState } from 'react'
import Bread from './components/Bread'
import DarkSwitch from './components/DarkSwitch'
import FontSizeSlider from './components/FontSizeSlider'
import GithubButton from './components/GithubButton'
import MarkSwitch from './components/MarkSwitch'
import SideButton from './components/SideButton'
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
      <Box px={1}>
        {children}
      </Box>
      <Box position='fixed' right={20} bottom={100}>
        <SideButton onClick={() => setOpen(true)} />
      </Box>
      <SideDrawer open={open} onClose={() => setOpen(false)} >
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
      <Stack pt={6.5} pb={12.5} direction='row' mt='auto' mb={0}>
        <GithubButton file={file} />
        <IconButton onClick={() => console.log(navigate(-1))} sx={{ ml: 6 }}>
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