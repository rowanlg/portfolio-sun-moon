import React, { useState } from "react"
import GlobalStyles from "./GlobalStyles"
import Navbar from "./Navbar"
import styled from "styled-components"

const LayoutMain = styled.main`
  overflow-x: hidden;
`

const Layout = ({ children }) => {
  return (
    <LayoutMain>
      <GlobalStyles />
      <Navbar />
      {children}
    </LayoutMain>
  )
}

export default Layout
