import React, { PropsWithChildren, useMemo } from 'react'
import { createTheme, StyledEngineProvider, ThemeProvider as MuiProvider } from "@mui/material/styles";
import { Box, CssBaseline } from '@mui/material';
import { useStore } from './store';

export const setTheme = (dark = true, mark = false, font = 18) => createTheme({
  palette: {
    mode: dark ? "dark" : "light",
    primary: {
      main: dark ? '#ffb74d' : '#bf360c',
    },
    secondary: {
      main: dark ? '#fff176' : '#f9a825',
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
      letterSpacing: '0.125rem',
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

        '#mdx-wrap': {
          h1: { counterReset: 'p' },
          'p::before': {
            counterIncrement: 'p',
            content: mark ? 'counter(p)' : '""',
            paddingRight: 16,
            color: 'orangered',
          }
        }
      }
    }

  }
});


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