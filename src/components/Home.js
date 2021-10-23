import React from "react"
import styled from "styled-components"
import sun from "../assets/images/sun.svg"
import moon from "../assets/images/moon.svg"

const HomeSection = styled.section`
  display: grid;
  grid-template-columns: repeat(4, minmax(0, 1fr));
  grid-template-rows: 1fr 1fr 1fr 1fr 1fr 1fr;
  gap: 0px 0px;
  max-width: 900px;
  max-height: 100vh;
  height: 100vh;
  margin: -10vh auto 0;
  .text-section {
    grid-area: 2 / 1 / 4 / 3;
    margin: auto;
    text-align: right;
    h2 {
      font-weight: 900;
      font-size: 2.5rem;
      margin: -0.5rem;
      span {
        color: ${({ theme }) => theme.blue};
      }
    }
    p {
      margin: 0.2rem;
      font-weight: 300;
      margin-right: -1.5rem;
      white-space: nowrap;
    }
    div {
      background-color: ${({ theme }) => theme.yellow};
      height: 2px;
      width: 150px;
      border-radius: 2px;
      /* margin-right: -1.5rem; */
      margin: 0.9rem -2rem 0.9rem 1.5rem;
    }
    .move-right {
      margin-right: -75px;
    }
    .move-right-more {
      margin-right: -110px;
    }
    @media screen and (min-width: 900px) {
      grid-area: 3 / 1 / 5 / 3;
    }
  }
  .main-svg {
    grid-area: 3 / 1 / 8 / 4;
    width: 400px;
    @media screen and (min-width: 420px) {
      grid-area: 3 / 2 / 8 / 5;
    }
    @media screen and (min-width: 600px) {
      width: 600px;
    }
    @media screen and (min-width: 800px) {
      grid-area: 3 / 2 / 5 / 5;
    }
    @media screen and (min-width: 800px) {
      grid-area: 2 / 2 / 5 / 5;
      width: 900px;
    }
  }
`

const Home = () => {
  return (
    <HomeSection>
      <div className="text-section">
        <h2>Rowan</h2>
        <h2 className="move-right">
          Gordon<span>.</span>
        </h2>
        <div />
        <p>Web Designer &</p>
        <p className="move-right-more">Jamstack Developer</p>
      </div>
      <img src={moon} alt="moon" className="main-svg" />
    </HomeSection>
  )
}

export default Home
