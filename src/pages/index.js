import React from "react"
import Layout from "../components/Layout"
import { ThemeProvider } from "styled-components"
import { night } from "../components/Theme"

import Home from "../components/Home"

const index = () => {
  return (
    <ThemeProvider theme={night}>
      <Layout>
        <Home />
      </Layout>
    </ThemeProvider>
  )
}

export default index
