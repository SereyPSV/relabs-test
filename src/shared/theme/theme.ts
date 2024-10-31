"use client";

import { createTheme } from "@mui/material";
// import { createTheme } from "@mui/material/styles";

export const theme = createTheme({
  components: {
    MuiCssBaseline: {
      styleOverrides: {
        "@font-face": {
          fontFamily: "Manrope",
          fontStyle: "normal",
          fontDisplay: "swap",
          fontWeight: "400 600 800",
          src: 'local("Manrope"), url(public/fonts/Manrope.woff2) format("woff2")',
        },
      },
    },
  },
});
