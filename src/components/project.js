import React from "react"
import Image from "gatsby-image"
import { FaGithub, FaGlobe } from "react-icons/fa"

import "../styles/project.scss"

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
    <Image fluid={imageData} alt={title} />
    <h1>{title}</h1>
    <p className="about">{description}</p>

    <h3>Made With</h3>
    <p>{tech}</p>
    <h3>Learned</h3>
    <p>{learned}</p>
    <h3>Takeaways</h3>
    <p>{takeaways}</p>
    <div className="code-and-visit-container">
      <div>
        <a
          href={git}
          target="_blank"
          rel="noopener noreferrer"
          className="box code"
        >
          <span className="icon">
            <FaGithub size="1.4em" />
          </span>
          <span>Code</span>
        </a>
      </div>
      <div>
        <a
          href={url}
          target="_blank"
          rel="noopener noreferrer"
          className="box visit"
        >
          <span className="icon">
            <FaGlobe size="1.3em" />
          </span>
          <span>Visit</span>
        </a>
      </div>
    </div>
    {login && (
      <div className="login">
        <p>"login: {login.user}"</p>
        <p>"pass: {login.pass}"</p>
      </div>
    )}
  </div>
)

export default Project
