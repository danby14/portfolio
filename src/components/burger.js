import React, { useState } from "react"
import RightNav from "./rightNav"

import "../styles/burger.scss"

const Burger = () => {
  const [open, setOpen] = useState(false)

  return (
    <>
      <button className="burger" open={open} onClick={() => setOpen(!open)}>
        <div className={open ? "burger-line" : "burger-line bl-closed"} />
        <div className={open ? "burger-line" : "burger-line bl-closed"} />
        <div className={open ? "burger-line" : "burger-line bl-closed"} />
      </button>
      <RightNav open={open} setOpen={setOpen} />
    </>
  )
}
export default Burger
