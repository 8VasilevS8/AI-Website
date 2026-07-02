"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function ParallaxText() {

  const { scrollY } = useScroll()

  const y = useTransform(scrollY, [0, 1000], [0, -200])

  return (
    <motion.div
      style={{ y }}
      className="
      fixed
      top-[35%]
      left-1/2
      -translate-x-1/2
      z-0
      pointer-events-none
      "
    >

      <h1 className="
      text-[180px]
      font-black
      text-white/[0.03]
      whitespace-nowrap
      tracking-tight
      ">
        AI FUTURE
      </h1>

    </motion.div>
  )
}