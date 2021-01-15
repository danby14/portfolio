import React from "react"
// import { Link } from "gatsby"
import Image from "gatsby-image"
import "../styles/project-preview.scss"

const ProjectPreview2 = ({ slug, imageData, title, description }) => (
  <li className="project-card">
    <Image
      fluid={imageData}
      alt={title}
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
        <button className="btn">More Details</button>
      </div>
    </div>
    <div className="informations-container">
      <h2 className="title">{title}</h2>
      <p className="sub-title">MERN</p>
      <div className="more-information">
        <p className="about">{description}</p>
        <div className="info-and-date-container">
          <div className="box info">
            <p>Code</p>
          </div>
          <div className="box date">
            <p>Visit</p>
          </div>
        </div>
      </div>
    </div>
  </li>
)

export default ProjectPreview2
