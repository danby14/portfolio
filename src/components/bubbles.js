import React, { useCallback } from "react"
import Particles from "react-tsparticles"
import { loadFull } from "tsparticles"

const Bubbles = () => {
  const particlesInit = useCallback(async (engine) => {
    console.log(engine)
    // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
    // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
    // starting from v2 you can add only the features you need reducing the bundle size
    await loadFull(engine)
  }, [])

  const particlesLoaded = useCallback(async (container) => {
    await console.log(container)
  }, [])

  return (
    <Particles
      id="tsparticles"
      init={particlesInit}
      loaded={particlesLoaded}
      style={{
        position: "fixed",
        width: "100%",
        zIndex: -1,
      }}
      className="bloop"
      canvasClassName="bloop2"
      options={{
        particles: {
          color: {
            value: "#7376a0",
          },
          opacity: {
            value: 0.7,
          },
          number: {
            value: 175,
            density: {
              enable: false,
            },
          },
          size: {
            value: { min: 0.3, max: 2 },
            animimation: {
              enable: true,
              speed: 4,
            },
          },
          move: {
            enable: true,
            random: true,
            speed: 0.6,
            direction: "top",
            outModes: "out",
          },
        },
        interactivity: {
          events: {
            onHover: {
              enable: true,
              mode: "connect",
            },
            onClick: {
              enable: true,
              mode: "repulse",
            },
          },
          modes: {
            bubble: {
              distance: 70,
              size: 10,
              duration: 0.4,
            },
            repulse: {
              distance: 300,
              duration: 2,
            },
            connect: {
              distance: 100,
              radius: 90,
              links: {
                opacity: 0.2,
              },
            },
          },
        },
      }}
    />
  )
}

export default Bubbles
