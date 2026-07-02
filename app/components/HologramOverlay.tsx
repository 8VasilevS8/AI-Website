"use client"

import { motion } from "framer-motion"

export default function HologramOverlay() {
  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-20">

      {/* left hologram */}
      <motion.div
        animate={{
          y: [0, -20, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 6,
          repeat: Infinity,
        }}
        className="
        absolute
        left-[8%]
        top-[20%]
        w-[220px]
        h-[220px]
        rounded-full
        border
        border-cyan-400/30
        bg-cyan-400/5
        backdrop-blur-xl
        shadow-[0_0_80px_rgba(0,255,255,0.2)]
        "
      />

      {/* right hologram */}
      <motion.div
        animate={{
          y: [0, 30, 0],
          rotate: [0, 8, 0],
        }}
        transition={{
          duration: 10,
          repeat: Infinity,
        }}
        className="
        absolute
        right-[10%]
        top-[30%]
        w-[300px]
        h-[300px]
        rounded-full
        border
        border-orange-400/20
        bg-orange-400/5
        blur-sm
        "
      />

      {/* scan lines */}
      <div className="
      absolute
      inset-0
      opacity-[0.03]
      bg-[linear-gradient(to_bottom,white_1px,transparent_1px)]
      bg-[size:100%_4px]
      " />

    </div>
  )
}