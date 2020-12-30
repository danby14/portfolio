import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const ProjectPreview = ({ slug, imageData, title, description }) => (
  <div className="project-preview">
    <h3>
      <Link to={`/${slug}/`}>{title}</Link>
    </h3>
    <Link to={`/${slug}/`}>
      <Image fluid={imageData} alt={title} />
    </Link>
    <p>{description}</p>
  </div>
)

export default ProjectPreview
