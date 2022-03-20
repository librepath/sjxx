import React, { PropsWithChildren, useEffect } from 'react'
import { createTheme, StyledEngineProvider, ThemeProvider as MuiProvider } from "@mui/material/styles";
import { useStore } from './store';

const theme = createTheme({
  palette: {
    mode: "dark",
    primary: {
      main: "#ccc",
    },
    secondary: {
      main: "#AC98AA",
    },
  },
});


const ThemeProvider = ({ children }: PropsWithChildren<{ dark: boolean }>) => {
  const [{ dark }] = useStore()


  theme.palette.mode = dark ? 'dark' : 'light';

  console.log('dark:', dark, 'theme', theme);
  return (
    <StyledEngineProvider injectFirst>
      <MuiProvider theme={theme}>{children}</MuiProvider>
    </StyledEngineProvider>
  )
}

export default ThemeProvider