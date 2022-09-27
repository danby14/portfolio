import React from "react"

import {
  GitIcon,
  Html5Icon,
  Css3Icon,
  SassIcon,
  TailwindCSSIcon,
  JavascriptIcon,
  NodeIcon,
  ExpressIcon,
  ReactIcon,
  GatsbyIcon,
  PostgresIcon,
  MongoIcon,
  NextIcon,
  SupabaseIcon,
} from "../assets/icons.js"

import "../styles/logos.scss"

const Logos = ({ logos, small }) => {
  const icons = {
    git: <GitIcon />,
    HTML5: <Html5Icon />,
    CSS3: <Css3Icon />,
    SASS: <SassIcon />,
    tailwindcss: <TailwindCSSIcon />,
    JavaScript: <JavascriptIcon />,
    Node: <NodeIcon />,
    Express: <ExpressIcon />,
    React: <ReactIcon />,
    "Next.js": <NextIcon />,
    Gatsby: <GatsbyIcon />,
    PostgreSQL: <PostgresIcon />,
    Supabase: <SupabaseIcon />,
    MongoDB: <MongoIcon />,
  }
  return (
    <div className="all-logos-container">
      {logos.map((logo, idx) => (
        <div key={idx} className={`icon-container ${small ? "small" : ""}`}>
          <div className="icon-img-container">{icons[`${logo}`]}</div>
          <div className="icon-txt-container">{logo}</div>
        </div>
      ))}
    </div>
  )
}
export default Logos
