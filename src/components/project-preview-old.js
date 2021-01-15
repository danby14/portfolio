import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"
import "../styles/project-preview2.scss"

const ProjectPreview = ({ slug, imageData, title, description }) => (
  <div className="project-preview">
    <Link to={`/${slug}/`}>
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
      <div className="contenty">
        <h2 className="title">
          {title}
          {/* <Link to={`/${slug}/`}>{title}</Link> */}
        </h2>
        <p className="copy">{description}</p>
        <div className="buttons">
          <button className="btn">More Info</button>
          <button className="btn">View</button>
        </div>
      </div>
    </Link>
  </div>
)

export default ProjectPreview
