import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import { FaGithub, FaGlobe } from "react-icons/fa"
import Logos from "./logos"
import "../styles/project-preview.scss"

const ProjectPreview2 = ({ project, slug, imageData, login = false }) => (
  <li className="project-card">
    <Image
      fluid={imageData}
      alt={project.title}
      className="img"
      style={{
        position: "absolute",
        left: 0,
        top: 0,
        width: "100%",
        height: "100%",
      }}
    />
    <div className="main-link-container">
      <div className="content">
        <Link to={`/${slug}`}>Deeper Dive</Link>
      </div>
    </div>
    <div className="informations-container">
      <h2 className="title">{project.title}</h2>
      <p className="sub-title">
        <Logos logos={project.tags} small />
      </p>
      <div className="more-information">
        <p className="about">{project.description}</p>
        <div className="info-and-date-container">
          <a href={project.git} target="blank" className="box code">
            <span>
              <FaGithub size="1.4em" />
            </span>
            <p>Code</p>
          </a>
          <a href={project.url} target="blank" className="box visit">
            <span>
              <FaGlobe size="1.3em" />
            </span>
            {login ? (
              <p>
                "{login.user}, {login.pass}"
              </p>
            ) : (
              <p>Visit</p>
            )}
          </a>
        </div>
      </div>
    </div>
  </li>
)

export default ProjectPreview2
