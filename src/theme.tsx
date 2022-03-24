import React, { PropsWithChildren, useMemo } from 'react'
import { createTheme, StyledEngineProvider, ThemeProvider as MuiProvider } from "@mui/material/styles";
import { Box, CssBaseline } from '@mui/material';
import { useStore } from './store';
// export const theme = {
//   palette: {
//     primary: {
//       main: '#ffb74d',
//     },
//     secondary: {
//       main: '#fff176',
//     },
//   },
//   typography: {
//     h1: { counterReset: 'p' },
//     body1: {
//       lineHeight: '1.6rem',
//       letterSpacing: '0.05rem',
//       textAlign: 'justify',
//     },
//   },
//   components: {
//     MuiCssBaseline: {
//       styleOverrides: {
//         '#mdx-wrap': {
//           h1: { counterReset: 'p' },
//           'p::before': {
//             counterIncrement: 'p',
//             paddingRight: '4px',
//             color: 'red',
//           }
//         }
//       }
//     }
//   }
// }
export const setTheme = (dark = true, mark = false, font = 14) => createTheme({
  palette: {
    mode: dark ? "dark" : "light",
    primary: {
      main: dark ? '#ffb74d' : '#bf360c',
    },
    secondary: {
      main: dark ? '#fff176' : '#f9a825',
    },
  },
  typography: {
    h1: { counterReset: 'p' },
    body1: {
      lineHeight: '1.6rem',
      letterSpacing: '0.05rem',
      textAlign: 'justify',
    },
    fontSize: font,
  },
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        '#mdx-wrap': {
          h1: { counterReset: 'p' },
          'p::before': {
            counterIncrement: 'p',
            content: mark ? 'counter(p)' : '""',
            paddingRight: '4px',
            color: 'red',
          }
        }
      }
    }
  }
});

// export const GlobalStyles = () => <Box sx={theme => ({
//   '@global': {
//     '*': { m: 0, p: 0, boxSizing: 'border-box' },
//     'body::-webkit-scrollbar': { display: 'none' },
//     html: { width: 1, height: 1, msTextSizeAdjust: 1, WebkitOverflowScrolling: 'touch' },
//     body: { width: 1, height: 1 },
//   }
// })
// } />

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