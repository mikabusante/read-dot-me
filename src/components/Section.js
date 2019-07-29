import React from "react"
import styled from "styled-components"
import { Waypoint } from "react-waypoint"
import { darken } from "polished"
import Img from "gatsby-image"

const Section = ({ animation, theme, place, title, by, about, src }) => {
  const toggleAnimation = (theme, place) => {
    animation(theme, place)
  }

  return (
    <Book>
      <Waypoint
        onEnter={() => toggleAnimation(theme, place)}
        bottomOffset="10%"
      />
      <Cover src={src.childImageSharp.fluid.originalImg} alt="" />
      {/* <Img fluid={images} /> */}
      <Description>
        <Number color={theme}>0{place}.</Number>
        <Title>{title}</Title>
        <Author>By {by}</Author>
        <About>— {about}</About>
        <Button color={theme}>Find at your library</Button>
      </Description>
    </Book>
  )
}

export default Section

const Book = styled.section`
  display: flex;
  min-height: 100vh;
  align-items: center;

  @media (max-width: 760px) {
    min-height: 100%;
    margin: 5vh 0 20vh 0;
    align-items: flex-start;
  }
`

const Cover = styled.img`
  max-height: 622px;
  margin: 0 8% 0 10%;
  /* box-shadow: 17px 13px 40px rgba(0, 0, 0, 0.15); */
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.14),
    0 9px 46px 8px rgba(0, 0, 0, 0.12), 0 11px 15px -7px rgba(0, 0, 0, 0.2);

  @media (max-width: 760px) {
    max-height: 50vw;
    height: 100%;
  }
`

const Description = styled.div`
  max-width: 35%;
  position: relative;
  top: 8%;
`

const Number = styled.p`
  font-size: 2em;
  font-family: "Biorhyme";
  font-weight: 800;
  margin-bottom: 0.5em;
  color: ${({ color }) => color && darken(0.2, color)};

  @media (max-width: 760px) {
    font-size: 1.2em;
  }
`

const Title = styled.h2`
  font-size: 2.2em;
  font-family: "Spectral";
  font-weight: 800;
  line-height: 100%;
  margin-bottom: 0.1em;

  @media (max-width: 760px) {
    font-size: 1.5em;
  }
`

const Author = styled.h3`
  font-size: 1em;
  text-transform: uppercase;
  margin-bottom: 1em;
  font-family: "Montserrat";
  font-weight: 500;

  @media (max-width: 760px) {
    font-size: 0.75em;
  }
`

const About = styled.p`
  font-size: 1em;
  margin-bottom: 2em;
  line-height: 150%;
  font-family: "Spectral";

  @media (max-width: 760px) {
    font-size: 0.75em;
  }
`

const Button = styled.button`
  width: 220px;
  height: 60px;
  background: none;
  border: 2px solid ${({ color }) => color && darken(0.2, color)};
  border-radius: 2px;
  font-size: 1em;
  font-family: "Biorhyme";
  font-weight: 600;
  color: ${({ color }) => color && darken(0.2, color)};

  :hover {
    background: ${({ color }) => color && darken(0.2, color)};
    color: ${({ color }) => color};
    transition-property: background;
    transition-duration: 0.2s;
  }

  @media (max-width: 760px) {
    height: 3.5em;
    max-width: 100%;
    font-size: 0.75em;
  }
`
