import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import { FaGithub, FaLinkedinIn, FaEnvelope, FaReact } from "react-icons/fa"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            url
            description
            tags
            image {
              childImageSharp {
                fluid {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `)

  const projects = data.allProjectsJson.edges

  return (
    <Layout>
      <section id="intro">
        <h2>
          Hello{" "}
          <span role="img" aria-label="hand waving">
            👋🏻
          </span>
          , my name is <span className="highlight">Dan.</span>
        </h2>
        <div className="divider"></div>
        <h2>
          I'm a <span className="highlight">full-stack web developer.</span>
        </h2>
        <div className="contact">
          <span>
            <FaEnvelope size="1.4em" />
          </span>
          <span>
            <FaGithub size="1.4em" />
          </span>
          <span>
            <FaLinkedinIn size="1.4em" />
          </span>
        </div>
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <div className="project-previews-container">
          {projects.map(({ node: project }) => {
            const title = project.title
            const description = project.description
            const imageData = project.image.childImageSharp.fluid
            const slug = project.slug

            return (
              <ProjectPreview
                title={title}
                description={description}
                imageData={imageData}
                slug={slug}
                key={slug}
              />
            )
          })}
        </div>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <ul>
          <li>HTML5</li>
          <li>CSS3</li>
          <li>
            <FaReact />
          </li>
        </ul>
      </section>
      <section id="contact">
        <h2>Contact</h2>
        <p>Form Goes Here.</p>
      </section>
    </Layout>
  )
}

export default IndexPage
