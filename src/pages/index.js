import React from "react"
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import { graphql, useStaticQuery } from "gatsby"
import { navigate } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"

import { Blob } from "../assets/blob"
import Contact from "../components/contact"
import Layout from "../components/layout"
import Logos from "../components/logos"
import ProjectPreview from "../components/project-preview"

const IndexPage = () => {
  const data = useStaticQuery(graphql`
    {
      allProjectsJson {
        edges {
          node {
            title
            slug
            git
            url
            guest {
              user
              pass
            }
            description
            tags
            image {
              childImageSharp {
                gatsbyImageData(layout: FULL_WIDTH)
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
            <FaEnvelope
              size="1.4em"
              onClick={() => {
                navigate("/#contact")
              }}
            />
          </span>
          <span>
            <a
              href="https://github.com/danby14"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub size="1.4em" />
            </a>
          </span>
          <span>
            <a
              href="https://www.linkedin.com/in/dan-buenger"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedinIn size="1.4em" />
            </a>
          </span>
        </div>
      </section>
      <section id="about">
        <Blob>About</Blob>
        <p>
          Hello! My name is Dan, and I am a self-taught web developer from
          Chicago, IL.
        </p>
        <br />
        <p>
          Every night before I got to bed, I always ask myself what I have
          learned that day. Because to me, a day without learning, is a day that
          I will have to repeat all over again tomorrow. Learning is what pushes
          us forward, and no day is complete without it.
        </p>
        <br />
        <div className="section-img-container top">
          <StaticImage
            src="../data/images/LightBulbs.png"
            alt="Light Bulbs via https://absurd.design/"
          />
        </div>

        <p>
          So when I rediscovered the wide world of web possibilities, there is
          no wonder why it has stuck with me ever since. And I look forward to
          the seemingly endless amount of knowledge it has for me to unlock.
        </p>
      </section>
      <section id="skills">
        <Blob>Skills</Blob>
        <Logos
          logos={[
            "git",
            "HTML5",
            "CSS3",
            "SASS",
            "JavaScript",
            "Node",
            "Express",
            "React",
            "Gatsby",
            "PostgreSQL",
            "MongoDB",
          ]}
        />
        <div className="section-img-container bottom">
          <StaticImage
            src="../data/images/Learning.png"
            alt="Big Floating Head via https://absurd.design/"
          />
        </div>
      </section>
      <section id="projects">
        <Blob>Projects</Blob>
        <ul className="project-previews-container">
          {projects.map(({ node: project }) => {
            const imageData = project.image.childImageSharp.gatsbyImageData
            const slug = project.slug
            const login = project.guest

            return (
              <ProjectPreview
                imageData={imageData}
                slug={slug}
                project={project}
                login={login}
                key={project.slug}
              />
            )
          })}
        </ul>
      </section>

      <section id="contact">
        <Blob>Contact</Blob>
        <Contact />
      </section>
    </Layout>
  )
}

export default IndexPage
