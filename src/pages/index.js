import React, { useState } from "react"
import styled from "styled-components"
import { Waypoint } from "react-waypoint"

import Section from "../components/Section"
import Sidebar from "../components/Sidebar"
import "../utils/index.css"
import milkman from "../images/milkman.jpg"
import mars from "../images/mars.jpg"
import rest from "../images/rest.jpg"

const Site = styled.div`
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 5fr;
  background: ${props => props.color};
  transition-property: background;
  transition-duration: 0.5s;
`

const index = () => {
  const [color, setColor] = useState(null)
  const [position, setPosition] = useState(0)

  const toggleAnimation = (color, position) => {
    setColor(color)
    setPosition(position)
  }

  return (
    <Site color={color}>
      <Sidebar color={color} position={position} />
      <main>
        <section>
          <Waypoint
            onEnter={() => toggleAnimation("pink", 1)}
            bottomOffset="50%"
          />
          <Section
            image={milkman}
            place="1"
            title="Milkman"
            by="Anna Burns"
            about="The last thing she ever wanted to be. To be interesting is to be
          noticed and to be noticed is dangerous. Milkman is a tale of gossip
          and hearsay, silence and deliberate deafness. It is the story of
          inaction with enormous consequences."
          />
        </section>

        <section>
          <Waypoint
            onEnter={() => toggleAnimation("orange", 2)}
            bottomOffset="50%"
          />
          <Section
            image={mars}
            place="2"
            title="The Mars Room"
            by="Rachel Kushner"
            about="It’s 2003 and Romy Hall is at the start of two consecutive life sentences at Stanville Women’s Correctional Facility, deep in California’s Central Valley. Outside is the world from which she has been severed: the San Francisco of her youth and her young son, Jackson. Inside is a new reality: thousands of women hustling for the bare essentials needed to survive; the bluffing and pageantry and casual acts of violence by guards and prisoners alike; and the deadpan absurdities of institutional living, which Kushner evokes with great humor and precision."
          />
        </section>

        <section>
          <Waypoint
            onEnter={() => toggleAnimation("#C4406D", 3)}
            bottomOffset="50%"
          />
          <Section
            image={rest}
            place="3"
            title="The Mars Room"
            by="Rachel Kushner"
            about="It’s 2003 and Romy Hall is at the start of two consecutive life sentences at Stanville Women’s Correctional Facility, deep in California’s Central Valley. Outside is the world from which she has been severed: the San Francisco of her youth and her young son, Jackson. Inside is a new reality: thousands of women hustling for the bare essentials needed to survive; the bluffing and pageantry and casual acts of violence by guards and prisoners alike; and the deadpan absurdities of institutional living, which Kushner evokes with great humor and precision."
          />
        </section>
      </main>
    </Site>
  )
}

export default index
