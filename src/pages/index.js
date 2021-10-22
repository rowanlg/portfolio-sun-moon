import React from "react"
import Layout from "../components/Layout"
import { ThemeProvider } from "styled-components"
import { night } from "../components/Theme"
const index = () => {
  return (
    <ThemeProvider theme={night}>
      <Layout></Layout>
    </ThemeProvider>
  )
}

export default index
