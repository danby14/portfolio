import React from "react"
import { graphql, StaticQuery } from "gatsby"
import Image from "gatsby-image"

const SectionImg = ({ imgName, alt, top }) => (
  <StaticQuery
    query={graphql`
      query {
        allImageSharp {
          edges {
            node {
              fluid(maxWidth: 700) {
                ...GatsbyImageSharpFluid
                originalName
              }
            }
          }
        }
      }
    `}
    render={(data) => {
      const image = data.allImageSharp.edges.find(
        (edge) => edge.node.fluid.originalName === imgName
      )
      if (!image) {
        return null
      }
      return (
        <div className={`section-img-container ${top ? "top" : "bottom"}`}>
          <Image fluid={image.node.fluid} alt={alt} />
        </div>
      )
    }}
  />
)
export default SectionImg
