import React from "react"
import { myContext } from "../../provider"
import { Link } from "gatsby"
import { FaMoon } from "react-icons/fa"
import scrollTo from "gatsby-plugin-smoothscroll"

const RightNav = ({ open, setOpen }) => {
  const openClose = () => {
    setOpen(!open)
  }
  return (
    <div className={open ? "navList" : "navList closed"}>
      <button
        onClick={() => {
          scrollTo("#projects")
          openClose()
        }}
      >
        Projects
      </button>
      <button
        onClick={() => {
          scrollTo("#skills")
          openClose()
        }}
      >
        Skills
      </button>
      <button
        onClick={() => {
          scrollTo("#contact")
          openClose()
        }}
      >
        Contact
      </button>

      {/* <span>
            <Link
              className="navItem"
              activeClassName="activeNavItem"
              to="/about"
            >
              About
            </Link>
          </span> */}
      <span>
        <Link className="navItem" activeClassName="activeNavItem" to="/blog">
          Blog
        </Link>
      </span>
      <myContext.Consumer>
        {(context) => (
          <span className="darkmode-icon">
            <FaMoon
              onClick={() => {
                context.changeTheme()
                openClose()
              }}
            />
          </span>
        )}
      </myContext.Consumer>
    </div>
  )
}
export default RightNav
