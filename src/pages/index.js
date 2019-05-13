import React, { useState } from "react"
import { graphql } from "gatsby"

import styled from "styled-components"
import Section from "../components/Section"
import Sidebar from "../components/Sidebar"
import "../utils/index.css"

const Site = styled.div`
  font-family: sans-serif;
  display: grid;
  grid-template-columns: 1fr 5fr;
  background: ${props => props.color};
  transition-property: background;
  transition-duration: 0.5s;
`

const index = ({ data }) => {
  const [color, setColor] = useState(null)
  const [position, setPosition] = useState(0)

  const handleAnimation = (color, position) => {
    setColor(color)
    setPosition(position)
  }

  return (
    <Site color={color}>
      <Sidebar color={color} position={position} />
      {/* <Img fluid={data.file.childImageSharp.fluid} /> */}
      <main>
        {data.allBooksJson.edges.map(
          ({ node: { id, theme, title, author, about, src } }) => (
            <div key={title}>
              <Section
                place={id}
                animation={handleAnimation}
                theme={theme}
                src={src}
                title={title}
                by={author}
                about={about}
              />
            </div>
          )
        )}
      </main>

      <main />
    </Site>
  )
}

export default index

export const query = graphql`
  query {
    allBooksJson {
      edges {
        node {
          id
          title
          author
          about
          theme
          src {
            childImageSharp {
              fluid {
                originalImg
              }
            }
          }
        }
      }
    }
  }
`
