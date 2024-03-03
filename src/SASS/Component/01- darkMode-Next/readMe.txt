in layout file edit codes to this:


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <ThemeProvider>
      <body className={inter.className}>
        <SideBar />
        {children}
      </body>
      </ThemeProvider>
    </html>
  );
}