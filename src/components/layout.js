import React from "react"
import Bubbles from "./bubbles"
import Header from "../components/header"
import Footer from "../components/footer"
import { myContext } from "../../provider"

import "../styles/index.scss"

const Layout = (props) => {
  return (
    <myContext.Consumer>
      {(context) => (
        <div className={context.isDark ? "container dark" : "container light"}>
          <Bubbles />
          <Header />
          <main className="content">{props.children}</main>
          <Footer />
        </div>
      )}
    </myContext.Consumer>
  )
}

export default Layout
