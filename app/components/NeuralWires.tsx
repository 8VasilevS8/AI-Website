"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function NeuralWires() {

  const { scrollYProgress } = useScroll()

  const y = useTransform(scrollYProgress, [0, 1], [0, 500])

  return (
    <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">

      <svg
        className="absolute inset-0 w-full h-full"
        viewBox="0 0 1440 1200"
        fill="none"
      >

        {/* wire 1 */}
        <motion.path
          d="M100 0 C 300 300, 200 700, 500 1200"
          stroke="rgba(255,120,0,0.35)"
          strokeWidth="2"
          style={{ y }}
        />

        {/* wire 2 */}
        <motion.path
          d="M400 0 C 700 200, 600 800, 900 1200"
          stroke="rgba(255,160,0,0.25)"
          strokeWidth="3"
          style={{ y }}
        />

        {/* wire 3 */}
        <motion.path
          d="M1200 0 C 1000 300, 1100 700, 700 1200"
          stroke="rgba(255,140,0,0.25)"
          strokeWidth="2"
          style={{ y }}
        />

      </svg>

      {/* glow blob */}
      <motion.div
        style={{ y }}
        className="absolute left-1/2 top-1/3 w-[500px] h-[500px] bg-orange-500/20 blur-[140px] rounded-full"
      />

    </div>
  )
}