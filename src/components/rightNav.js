import React from "react"
import { myContext } from "../../provider"
import { Link } from "gatsby"
import { FaMoon } from "react-icons/fa"
import { CgSun } from "react-icons/cg"
import { navigate } from "gatsby"

const RightNav = ({ open, setOpen }) => {
  const openClose = () => {
    setOpen(!open)
  }
  const handleClick = (context) => {
    context.changeTheme()
    openClose()
  }
  return (
    <div className={open ? "navList" : "navList closed"}>
      <button
        onClick={(e) => {
          navigate("/#projects")
          openClose()
        }}
      >
        Projects
      </button>
      <button
        onClick={() => {
          navigate("/#skills")
          openClose()
        }}
      >
        Skills
      </button>
      <button
        onClick={() => {
          navigate("/#contact")
          openClose()
        }}
      >
        Contact
      </button>

      <span>
        <Link className="navItem" activeClassName="activeNavItem" to="/blog">
          Blog
        </Link>
      </span>
      <myContext.Consumer>
        {(context) => (
          <span className={`theme-icon ${context.isDark ? "" : "spin"}`}>
            {context.isDark ? (
              <FaMoon onClick={() => handleClick(context)} />
            ) : (
              <CgSun onClick={() => handleClick(context)} />
            )}
          </span>
        )}
      </myContext.Consumer>
    </div>
  )
}
export default RightNav
