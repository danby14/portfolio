import React from "react"
import { Link } from "gatsby"

import "../styles/header.scss"
import Burger from "./burger"

const Header = () => {
  return (
    <header className="header">
      <nav>
        <div className="logo-container">
          <Link className="title" to="/">
            DANBY
          </Link>
        </div>
        <Burger />
      </nav>
    </header>
  )
}

export default Header
