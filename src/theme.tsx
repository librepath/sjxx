import React, { PropsWithChildren, useMemo } from 'react'
import { createTheme, ThemeProvider as MuiProvider } from "@mui/material/styles";
import { CssBaseline } from '@mui/material';
import { useStore } from './store';

export const setTheme = (dark = true, mark = false, font = 18) => {
  const clr = {
    pri: dark ? '#ffb74d' : '#bf360c',
    sec: dark ? '#fff176' : '#f9a825'
  }
  return createTheme({
    palette: {
      mode: dark ? "dark" : "light",
      primary: {
        main: clr.pri,
      },
      secondary: {
        main: clr.sec,
      },
      background: {
        // default: dark ? '#000' : '#eee'
      }
    },
    typography: {
      h1: {
        counterReset: 'p',
      },
      body1: {
        lineHeight: 1.6,
        textAlign: 'justify',
      },
      fontSize: font,
    },
    components: {
      MuiCssBaseline: {
        styleOverrides: {
          body: {
            fontFamily: `'宋体-简', '宋体', -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif`,
          },
          'body::-webkit-scrollbar, div::-webkit-scrollbar': {
            width: '4px',
          },
          'body::-webkit-scrollbar-thumb, div::-webkit-scrollbar-thumb': {
            backgroundColor: dark ? '#555' : '#bbb'
          },
          '#page-wrap': {
            padding: '0 5px 50px 5px'
          },
          p: {
            textIndent: mark ? '2.6rem' : '1.3rem',
            letterSpacing: '0.125rem',
          },
          '#mdx-wrap': {
            h1: { counterReset: 'p' },
            'p::before': {
              position: 'absolute',
              left: '-2.1rem',
              counterIncrement: 'p',
              content: mark ? 'counter(p)' : '""',
              color: clr.sec,
            },
            code: {
              color: clr.pri,
            }
          },
          "#menu-wrap h3": {
            paddingLeft: "1rem"
          },
          "#menu-wrap div": {
            paddingLeft: "2rem"
          }
        }
      }
    }
  });
}


const ThemeProvider = ({ children }: PropsWithChildren<{}>) => {
  const [{ mark, dark, zoom }] = useStore()
  // const [th, setTh] = useState(theme)
  const theme = useMemo(() => setTheme(dark === undefined ? window?.matchMedia('(prefers-color-scheme: dark)').matches : dark, mark, zoom), [dark, mark, zoom])
  // useEffect(() => {
  //   setTh(th => {
  //     th.components.MuiCssBaseline.styleOverrides['#mdx-wrap']['p::before'].content = showId ? 'counter(p)' : undefined
  //     th.palette.mode = dark ? 'dark' : 'light';
  //     console.log('showId', showId);
  //     console.log('dark', dark)
  //     console.log(th)
  //     return th
  //   })
  // }, [showId, dark])
  return (
    // <StyledEngineProvider injectFirst>
    <MuiProvider theme={theme}>
      <CssBaseline />
      {children}
    </MuiProvider>
    // </StyledEngineProvider>
  )
}

export default ThemeProvider