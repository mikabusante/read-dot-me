import React from "react"
import styled from "styled-components"
import { darken } from "polished"

const Sidebar = ({ color, position }) => {
  // const [active, setActive] = useState(false)

  return (
    <Wrapper color={color}>
      <h1>read.me</h1>
      <Nav color={color} position={position}>
        <div>
          <a href="/#1">1</a>
        </div>
        <div>
          <a href="/#2">2</a>
        </div>
        <div>
          <a href="/#3">3</a>
        </div>
        <div>
          <a href="/#4">4</a>
        </div>
        <div>
          <a href="/#5">5</a>
        </div>
        <div>
          <a href="/#6">6</a>
        </div>
        <div>
          <a href="/#7">7</a>
        </div>
        <div>
          <a href="/#8">8</a>
        </div>
        <div>
          <a href="/#9">9</a>
        </div>
        <div>
          <a href="/#10">10</a>
        </div>
      </Nav>
    </Wrapper>
  )
}

export default Sidebar
const Wrapper = styled.div`
  padding: 0 20%;
  position: sticky;
  top: 6vh;
  height: 90vh;

  h1 {
    font-family: sans-serif;
    text-align: center;
    color: ${({ color }) => color && darken(0.2, color)};
    margin: 3% 0 22% 0;
    font-family: "Spectral";
    font-weight: 800;
    font-size: 2em;
  }

  @media (max-width: 940px) {
    height: 7vh;
    display: flex;
    align-items: center;
    justify-content: center;
    top: 0;
    translate: rotate(90deg);
    background: ${({ color }) => color && darken(0.2, color)};
    z-index: 20;
    /* box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
      0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2); */

    h1 {
      margin: 0;
      color: ${({ color }) => color};
    }
  }
`

const Nav = styled.nav`
  display: flex;
  flex-direction: column;
  height: 80vh;
  position: relative;
  margin-top: 15px;

  align-items: center;

  div {
    margin-bottom: 12%;
  }

  div:nth-child(${({ position }) => position}) {
    box-sizing: border-box;
    display: flex;
    justify-content: center;
    background: ${({ color }) => color && darken(0.2, color)};
    border-radius: 50%;
    height: 50px;
    width: 50px;

    a {
      color: ${({ color }) => color};
    }
  }

  a {
    text-align: center;
    font-size: 1.5em;
    color: ${({ color }) => color && darken(0.2, color)};
    z-index: 15;
    line-height: 50px;
    text-decoration: none;
    font-family: "Biorhyme";
  }

  @media (max-width: 940px) {
    display: none;
  }
`
