import React, { useState } from "react"
import GlobalStyles from "./GlobalStyles"
import Navbar from "./Navbar"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      <Navbar />
      {children}
    </div>
  )
}

export default Layout
