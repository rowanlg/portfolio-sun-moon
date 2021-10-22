import React from "react"
import styled, { ThemeConsumer } from "styled-components"

const NavBarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  .menu-icon-wrapper {
    cursor: pointer;
    div {
      width: 30px;
      height: 4px !important;
      border-radius: 2px;
      margin: 5px;
      :nth-child(1) {
        background-color: ${({ theme }) => theme.blue};
      }
      :nth-child(2) {
        background-color: ${({ theme }) => theme.pink};
      }
      :nth-child(3) {
        background-color: ${({ theme }) => theme.yellow};
      }
    }
  }
`

const Navbar = () => {
  return (
    <NavBarHeader>
      <h1>r.g</h1>
      <div className="menu-icon-wrapper">
        <div />
        <div style={{ backgroundColor: ({ theme }) => theme.pink }} />
        <div />
      </div>
    </NavBarHeader>
  )
}

export default Navbar
