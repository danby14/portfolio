import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaGlobe } from "react-icons/fa"
import "../styles/project-preview.scss"

const Project = ({
  title,
  description,
  tech,
  learned,
  takeaways,
  login,
  git,
  tags,
  url,
  imageData,
}) => (
  <div className="project">
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />

    <div className="more-information">
      <p className="about">{description}</p>
      <div className="info-and-date-container">
        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="box code"
        >
          <span>
            <FaGithub size="1.4em" />
          </span>
          <p>Code</p>
        </a>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="box visit"
        >
          <span>
            <FaGlobe size="1.3em" />
          </span>
          {login ? <p>"login.user, login.pass"</p> : <p>Visit</p>}
        </a>
      </div>
    </div>

    <h3>Made With</h3>
    <p>{tech}</p>
    <h3>Learned</h3>
    <p>{learned}</p>
    <h3>Takeaways</h3>
    <p>{takeaways}</p>
    <p>
      <Link to="/">&larr; back to all projects</Link>
    </p>
  </div>
)

export default Project
