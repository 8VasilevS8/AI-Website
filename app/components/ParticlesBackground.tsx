"use client"

import Particles from "@tsparticles/react"
import { initParticlesEngine } from "@tsparticles/react"
import { loadSlim } from "@tsparticles/slim"
import { useEffect, useState } from "react"

export default function ParticlesBackground() {

  const [init, setInit] = useState(false)

  useEffect(() => {
    initParticlesEngine(async (engine) => {
      await loadSlim(engine)
    }).then(() => {
      setInit(true)
    })
  }, [])

  if (!init) return null

  return (
    <Particles
      id="tsparticles"
      options={{
        background: {
          color: {
            value: "transparent",
          },
        },

        fpsLimit: 60,

        particles: {
          color: {
            value: "#ff6a00",
          },

          links: {
            color: "#ff6a00",
            distance: 150,
            enable: true,
            opacity: 0.2,
            width: 1,
          },

          move: {
            enable: true,
            speed: 1,
          },

          number: {
            value: 50,
          },

          opacity: {
            value: 0.2,
          },

          size: {
            value: { min: 1, max: 4 },
          },
        },
      }}
      className="absolute inset-0 -z-10"
    />
  )
}