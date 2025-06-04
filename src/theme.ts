'use client';
import { createTheme } from "@mui/material/styles";

const theme = createTheme({
  cssVariables: false,
  typography: {
    fontFamily: "var(--font-roboto)",
  },
  palette: {
    mode: 'light',
    primary: {
      light: '#757ce8',
      main: '#3f50b5',
      dark: '#002884',
      contrastText: '#fff',
    },
    secondary: {
      light: '#ff7961',
      main: '#f44336',
      dark: '#ba000d',
      contrastText: '#000',
    },
    success:{
        light: '#81c784',
        main: '#4caf50',
        dark: '#388e3c',
        contrastText: '#fff',
    },
    info:{
        light: '#e1f5fe',
        main: '#2196f3',
        dark: '#1976d2',
        contrastText: '#fff',       
    },
    background:{
        default: '#c5cae9', 
        paper: '#fff',
    }
  },
});

export default theme;
