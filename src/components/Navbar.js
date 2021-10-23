import React from "react"
import { Link } from "gatsby"
import styled, { ThemeConsumer } from "styled-components"

const NavBarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1000px;
  margin: auto;
  .rg-logo {
    font-size: 1.8rem;
    margin: 1rem;
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    span:nth-child(1) {
      color: ${({ theme }) => theme.blue};
    }
    span:nth-child(3) {
      color: ${({ theme }) => theme.yellow};
    }
    span:nth-child(5) {
      color: ${({ theme }) => theme.pink};
    }
  }
  .menu-icon-wrapper {
    margin: 1rem;
    cursor: pointer;
    div {
      width: 30px;
      height: 4px !important;
      border-radius: 2px;
      margin: 6px;
      :nth-child(1) {
        background-color: ${({ theme }) => theme.blue};
      }
      :nth-child(2) {
        background-color: ${({ theme }) => theme.yellow};
      }
      :nth-child(3) {
        background-color: ${({ theme }) => theme.pink};
      }
    }
    @media screen and (min-width: 1000px) {
      display: none;
    }
  }
  .desktop-menu-links {
    display: none;
    a {
      text-decoration: none;
      color: ${({ theme }) => theme.text};
      margin-left: 2rem;
    }
    a:nth-child(1) {
      :hover {
        color: ${({ theme }) => theme.blue};
      }
    }
    a:nth-child(2) {
      :hover {
        color: ${({ theme }) => theme.yellow};
      }
    }
    a:nth-child(3) {
      :hover {
        color: ${({ theme }) => theme.pink};
      }
    }
    @media screen and (min-width: 1000px) {
      display: flex;
    }
  }
`

const Navbar = () => {
  return (
    <NavBarHeader>
      <Link to="/" className="rg-logo">
        <span>{`{`}</span>
        <span>r</span>
        <span>.</span>
        <span>g</span>
        <span>{`}`}</span>
      </Link>
      <div className="menu-icon-wrapper">
        <div />
        <div style={{ backgroundColor: ({ theme }) => theme.pink }} />
        <div />
      </div>
      <div className="desktop-menu-links">
        <Link to="/">work</Link>
        <a href="/">about</a>
        <a href="/">contact</a>
      </div>
    </NavBarHeader>
  )
}

export default Navbar
