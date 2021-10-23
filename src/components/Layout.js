import React, { useState } from "react"
import GlobalStyles from "./GlobalStyles"
import Navbar from "./Navbar"
import styled, { ThemeProvider } from "styled-components"
import { day, night } from "../components/Theme"

const LayoutMain = styled.main`
  overflow-x: hidden;
`

const Layout = ({ children }) => {
  const [theme, setTheme] = useState(false)
  return (
    <ThemeProvider theme={theme ? day : night}>
      <LayoutMain>
        <GlobalStyles />
        <Navbar theme={theme} setTheme={setTheme} />
        {/* figure out how to pass theme into children */}
        {children}
      </LayoutMain>
    </ThemeProvider>
  )
}

export default Layout
