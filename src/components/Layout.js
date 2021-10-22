import React, { useState } from "react"
import GlobalStyles from "./GlobalStyles"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <main>
      <GlobalStyles />
      <Navbar />
      {children}
    </main>
  )
}

export default Layout
