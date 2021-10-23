import React, { useState } from "react"
import { Link } from "gatsby"
import { animated, useSpring } from "react-spring"
import styled from "styled-components"
import Boop from "./boop"
import Day from "../assets/images/day.jpg"
import Night from "../assets/images/night.jpg"

const NavBarHeader = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: auto;
  position: relative;
  z-index: 12;
  .rg-logo {
    font-size: 1.8rem;
    z-index: 11;
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
`
const Burger = styled(animated.div)`
  width: 32px;
  margin: 2.2rem 1.8rem;
  cursor: pointer;

  div {
    height: 4px;
    border-radius: 5px;
    margin-top: 6px;
    transition: all 0.3s linear;
    transform-origin: 2px;
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
  /* @media screen and (min-width: 1000px) {
    display: none;
  } */
`
const MenuLinks = styled.div`
  position: fixed;
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center;
  justify-content: center;
  z-index: 10;
  width: 100vw;
  height: 100vh;
  top: -100vh;
  right: 0;
  background-color: ${({ theme }) => theme.body};
  a {
    text-decoration: none;
    color: ${({ theme }) => theme.text};
    margin-left: 2rem;
    font-size: 1.5rem;
  }
  div {
    width: 50px;
    height: 5px;
    border-radius: 3px;
    margin-left: 1.8rem;
  }
  div:nth-child(2) {
    background-color: ${({ theme }) => theme.blue};
  }
  div:nth-child(4) {
    background-color: ${({ theme }) => theme.yellow};
  }
  div:nth-child(6) {
    background-color: ${({ theme }) => theme.pink};
  }
`
const DayNightToggle = styled.div`
  width: 60px;
  height: 27px;
  background-color: #000;
  border-radius: 20px;
  margin: auto;
  z-index: 20;
  /* margin-top: 1.9rem; */
  position: fixed;
  bottom: 0.5rem;

  div {
    cursor: pointer;
    width: 20px;
    height: 20px;
    border-radius: 20px;
    margin-top: 4px;
    margin-left: 4px;
    background-color: #fff;
  }
`

const Navbar = ({ theme, setTheme }) => {
  const [dayNightToggled, setDayNightToggled] = useState(false)
  const [burgerToggled, setBurgerToggled] = useState(false)

  const burgerStyle = useSpring({
    backfaceVisibility: "hidden",
    transform: burgerToggled
      ? `rotate(720deg) 
        translate(4px, 0px)`
      : `rotate(0deg)
        translate(0px, 0px)`,
    config: {
      tension: 300,
      friction: 10,
    },
  })

  const dayNightContainerStyle = {
    backgroundImage: dayNightToggled ? `url(${Day})` : `url(${Night})`,
    backgroundPosition: "center",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    border: dayNightToggled ? `4px solid #343449` : `4px solid #FFFDFA`,
    transition: "all 0.3s ease-in",
  }

  const dayNightToggleStyle = {
    transform: dayNightToggled ? `translate(31px, 0)` : `translate(0, 0)`,
    backgroundColor: dayNightToggled ? "#343449" : "#FFFDFA",
    transition: "all 0.3s ease-in",
  }

  const menuLinksStyle = {
    transform: burgerToggled ? `translate(0, 100vh)` : `translate(0, 0)`,
    transition: "all 0.3s ease-in",
    opacity: burgerToggled ? "100%" : "0%",
  }

  return (
    <>
      <NavBarHeader>
        <Link to="/" className="rg-logo">
          <span>{`{`}</span>
          <span>r</span>
          <span>.</span>
          <span>g</span>
          <span>{`}`}</span>
        </Link>
        <div>
          <Boop rotation={10} timing={200}>
            <Burger
              onClick={() => {
                setBurgerToggled(!burgerToggled)
              }}
              style={burgerStyle}
            >
              <div
                style={
                  burgerToggled
                    ? {
                        transform: "rotate(45deg)",
                      }
                    : {}
                }
              />

              <div
                style={
                  burgerToggled
                    ? {
                        opacity: "0",
                      }
                    : {}
                }
              />
              <div
                style={
                  burgerToggled
                    ? {
                        transform: "rotate(-45deg)",
                      }
                    : {}
                }
              />
            </Burger>
          </Boop>
        </div>
      </NavBarHeader>
      <MenuLinks style={menuLinksStyle}>
        <Link to="/">work</Link>
        <div />
        <a href="/">about</a>
        <div />
        <a href="/">contact</a>
        <div />
      </MenuLinks>
      <DayNightToggle style={dayNightContainerStyle}>
        <div
          onClick={() => {
            setDayNightToggled(!dayNightToggled)
            // themeToggler()
            setTheme(!theme)
          }}
          style={dayNightToggleStyle}
        />
      </DayNightToggle>
    </>
  )
}

export default Navbar
