import { CssBaseline, Stack, ThemeProvider } from "@mui/material";
import { Metadata } from "next";
import { FC, PropsWithChildren } from "react";
import { theme } from "src/shared";
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
          <Stack component="main" className="root__container">
            {children}
          </Stack>
        </ThemeProvider>
      </body>
    </html>
  );
};

export default RootLayout;
