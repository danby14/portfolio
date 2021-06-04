import React from "react"
import Particles from "react-particles-js"

const Bubbles = () => (
  <Particles
    style={{
      position: "fixed",
      width: "100%",
      zIndex: -1,
    }}
    className="bloop"
    canvasClassName="bloop2"
    params={{
      particles: {
        number: {
          value: 175,
          density: {
            enable: false,
          },
        },
        color: {
          value: "#7376a0",
        },
        size: {
          value: 2,
          random: true,
          anim: {
            speed: 4,
            size_min: 0.3,
          },
        },
        line_linked: {
          enable: false,
        },
        move: {
          random: true,
          speed: 0.6,
          direction: "top",
          out_mode: "out",
        },
      },
      interactivity: {
        events: {
          onhover: {
            enable: true,
            mode: "attract",
          },
          onclick: {
            enable: true,
            mode: "repulse",
          },
        },
        modes: {
          attract: {
            distance: 130,
            duration: 1.5,
            speed: 0.55,
          },
          repulse: {
            distance: 300,
            duration: 2,
            speed: 1,
          },
        },
      },
    }}
  />
)

export default Bubbles
