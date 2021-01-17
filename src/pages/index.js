import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import Logos from "../components/logos"

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
      <section id="about">
        <h2>About</h2>
        <p>
          Hello! My name is Dan, and I am a self-taught web developer from
          Chicago, IL.
        </p>
        <br />
        <p>
          For the better part of my life I have been asking myself what I
          learned today before I go to sleep every night. Because a day without
          learning, is a day without improving.
        </p>
        <br />
        <p>
          So, when I rediscovered the wide world of web development a few years
          back, it is no wonder why it has been an important part of my life
          ever since. And am looking forward to the endless treasure trove of
          challenges and knowledge it has to offer me in the future.
        </p>
      </section>
      <section id="skills">
        <h2>Skills</h2>
        <Logos
          logos={[
            "git",
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "Node",
            "React",
            "Gatsby",
            "PostgreSQL",
            "MongoDB",
          ]}
        />
      </section>
      <section id="projects">
        <h2>Projects</h2>
        <ul className="project-previews-container">
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
