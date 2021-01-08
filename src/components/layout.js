import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"
import { myContext } from "../../provider"

import "../styles/index.scss"

const Layout = (props) => {
  return (
    <myContext.Consumer>
      {(context) => (
        <div className={context.isDark ? "container dark" : "container light"}>
        <React.Fragment>
          <Header />
          <main className="content">{props.children}</main>
          <Footer />
        </React.Fragment>
        </div>
      )}
    </myContext.Consumer>
  )
}

export default Layout
