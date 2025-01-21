"use client";

import "./globals.css";
import { ThemeProvider } from "../context/ThemeContext";

export default function RootLayout({ children }) {

  return (
    <html lang="en">
      <body className={`antialiased `}>
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}
