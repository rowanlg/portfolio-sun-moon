import React from "react"
import GlobalStyles from "./GlobalStyles"

const Layout = ({ children }) => {
  return (
    <div>
      <GlobalStyles />
      {children}
    </div>
  )
}

export default Layout
