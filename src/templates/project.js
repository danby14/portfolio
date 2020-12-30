import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      tags
      url
      image {
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  }
`

const ProjectTemplate = ({ data }) => {
  const project = data.projectsJson
  const title = project.title
  const description = project.description
  const tags = project.tags
  const url = project.url
  const imageData = project.image.childImageSharp.fluid

  return (
    <Layout>
      <Project
        title={title}
        description={description}
        url={url}
        imageData={imageData}
        tags={tags}
      />
      {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
    </Layout>
  )
}

export default ProjectTemplate
