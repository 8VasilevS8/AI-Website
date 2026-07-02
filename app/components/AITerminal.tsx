"use client"

import { motion } from "framer-motion"

export default function AITerminal() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="
      relative
      max-w-5xl
      mx-auto
      mt-40
      mb-40
      rounded-3xl
      border
      border-white/10
      bg-black/60
      backdrop-blur-2xl
      overflow-hidden
      shadow-[0_0_80px_rgba(255,120,0,0.15)]
      "
    >

      {/* top bar */}
      <div className="
      flex
      items-center
      gap-2
      px-6
      py-4
      border-b
      border-white/10
      bg-white/5
      ">

        <div className="w-3 h-3 rounded-full bg-red-500" />
        <div className="w-3 h-3 rounded-full bg-yellow-500" />
        <div className="w-3 h-3 rounded-full bg-green-500" />

      </div>

      {/* terminal */}
      <div className="p-8 font-mono text-sm text-green-400 space-y-4">

        <p>$ Initializing AI generation...</p>

        <p>$ Building cinematic landing page...</p>

        <p>$ Creating neural motion graphics...</p>

        <p>$ Generating premium startup interface...</p>

        <p className="text-orange-400">
          ✓ Website generated successfully
        </p>

      </div>

    </motion.div>
  )
}