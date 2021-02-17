import React from "react"
import { graphql } from "gatsby"
import Layout from "../components/layout"
import Project from "../components/project"

export const query = graphql`
  query($slug: String!) {
    projectsJson(slug: { eq: $slug }) {
      title
      description
      techUsed
      learned
      takeaways
      tags
      git
      url
      guest {
        user
        pass
      }
      mockup {
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
  const tech = project.techUsed
  const learned = project.learned
  const takeaways = project.takeaways
  const tags = project.tags
  const git = project.git
  const url = project.url
  const login = project.guest
  const imageData = project.mockup.childImageSharp.fluid

  return (
    <Layout>
      <Project
        title={title}
        description={description}
        tech={tech}
        learned={learned}
        takeaways={takeaways}
        git={git}
        url={url}
        login={login}
        imageData={imageData}
        tags={tags}
      />
      {/* <pre>{JSON.stringify(project, null, 2)}</pre> */}
    </Layout>
  )
}

export default ProjectTemplate
