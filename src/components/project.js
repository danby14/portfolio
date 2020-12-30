import React from "react"
import { Link } from "gatsby"
import Image from "gatsby-image"

const Project = ({ title, description, tags, url, imageData }) => (
  <div className="project">
    <h1>{title}</h1>
    <Image fluid={imageData} alt={title} />
    <a href={url} target="#">
      visit live site &rarr;
    </a>
    <p>{description}</p>
    <ul>
      {tags.map((tag, i) => {
        return <li key={i}>{tag}</li>
      })}
    </ul>
    <p></p>
    <p>
      <Link to="/">&larr; back to all projects</Link>
    </p>
  </div>
)

export default Project
