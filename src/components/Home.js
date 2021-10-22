import React from "react"
import styled from "styled-components"
import sun from "../assets/images/sun.svg"
import moon from "../assets/images/moon.svg"

const HomeSection = styled.section`
  margin-top: -15vw;
  display: grid;
  grid-template-columns: 33vw 33vw 33vw;
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  max-width: 1000px;
  max-height: 100vh;
  .text-section {
    grid-area: 2 / 1 / 4 / 3;
    margin: auto;
    h2 {
      font-weight: 900;
    }
    div {
      border-top: 2px solid ${({ theme }) => theme.yellow};
    }
  }
  .main-svg {
    grid-area: 3 / 2 / 7 / 4;
    width: 100vw;
  }
`

const Home = () => {
  return (
    <HomeSection>
      <div className="text-section">
        <h2>Rowan</h2>
        <h2>
          Gordon<span>.</span>
        </h2>
        <div />
        <p>Web Designer &</p>
        <p>Jamstack Developer</p>
      </div>
      <img src={moon} alt="moon" className="main-svg" />
    </HomeSection>
  )
}

export default Home
