import React from "react"
import { graphql, useStaticQuery } from "gatsby"
import Layout from "../components/layout"
import ProjectPreview from "../components/project-preview"
import { FaGithub, FaLinkedinIn, FaEnvelope } from "react-icons/fa"
import Logos from "../components/logos"
import { Blob } from "../assets/blob"
import SectionImg from "../components/section-img"
import Contact from "../components/contact"

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
        <Blob>About</Blob>
        <p>
          Hello! My name is Dan, and I am a self-taught web developer from
          Chicago, IL.
        </p>
        <br />
        <p>
          Every night before I got to bed, I always ask myself what I have
          learned that day. Because to me, a day without learning, is a day that
          I will never get back and a day that I will have to repeat all over
          again tomorrow. Because learning is what pushes us forward.
        </p>
        <br />
        <SectionImg
          imgName="LightBulbs.png"
          alt="Light Bulbs via https://absurd.design/"
          top
        />

        <p>
          So, when I rediscovered the wide world of web development a few years
          back, there is no wonder why it has since become an important part of
          my life. And I am looking forward to the endless treasure trove of
          knowledge it still has for me to unlock.
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
        <SectionImg
          imgName="Learning.png"
          alt="Big Floating Head via https://absurd.design/"
        />
      </section>
      <section id="projects">
        <Blob>Projects</Blob>
        <ul className="project-previews-container">
          {projects.map(({ node: project }) => {
            const imageData = project.image.childImageSharp.fluid
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
