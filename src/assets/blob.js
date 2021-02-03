import React from "react"

import "../styles/blob.scss"

export function Blob(props) {
  return (
    <div className="svg-container">
      <svg viewBox="-61 31 311 116" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M30.7,-28.9C41.3,-11.2,52.4,1.6,48.6,8.2C44.8,14.7,26.1,15,10.6,22.7C-4.9,30.4,-17.1,45.6,-28.8,45.5C-40.5,45.3,-51.7,29.8,-51.6,15.9C-51.5,2,-40,-10.4,-29.5,-28C-19,-45.5,-9.5,-68.4,0.3,-68.6C10.1,-68.8,20.2,-46.5,30.7,-28.9Z"
          transform="translate(100 100)"
        />
      </svg>
      <h2 className="blob-title">{props.children}</h2>
    </div>
  )
}
