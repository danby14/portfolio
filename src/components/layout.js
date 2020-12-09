import React from "react"

import Header from "../components/header"
import Footer from "../components/footer"

import "../styles/index.scss"

const Layout = props => {
  return (
    <>
      <Header />
      <main className="content">{props.children}</main>
      <Footer />
    </>
  )
}

export default Layout
