"use client";

import { createTheme } from "@mui/material";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "400 600 800",
          src: `local('Manrope'), url('/fonts/Manrope.woff2') format('woff2')`,
        },
      },
    },
  },
});
