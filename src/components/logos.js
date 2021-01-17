import React from "react"

import {
  GitIcon,
  Html5Icon,
  Css3Icon,
  SassIcon,
  JavascriptIcon,
  NodeIcon,
  ReactIcon,
  GatsbyIcon,
  PostgresIcon,
  MongoIcon,
} from "../assets/icons.js"

import "../styles/logos.scss"

const Logos = ({ logos }) => {
  const icons = {
    git: <GitIcon />,
    HTML5: <Html5Icon />,
    CSS3: <Css3Icon />,
    SASS: <SassIcon />,
    JavaScript: <JavascriptIcon />,
    Node: <NodeIcon />,
    React: <ReactIcon />,
    Gatsby: <GatsbyIcon />,
    PostgreSQL: <PostgresIcon />,
    MongoDB: <MongoIcon />,
  }
  return (
    <div className="all-logos-container">
      {logos.map((logo, idx) => (
        <div key={idx} className="icon-container">
          <div className="icon-img-container">{icons[`${logo}`]}</div>
          <div className="icon-txt-container">{logo}</div>
        </div>
      ))}
    </div>
  )
}
export default Logos
