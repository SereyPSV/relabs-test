import { CssBaseline, ThemeProvider } from "@mui/material";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { theme } from "src/shared/theme";
import "./globals.css";

export const metadata: Metadata = {
  title: "ReLabs - React with Next.js",
  description:
    "Тестовое задание, с использованием Next.js, Material UI и TypeScript",
  icons: {
    icon: "/favicon.ico",
  },
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="ru">
      <body>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
