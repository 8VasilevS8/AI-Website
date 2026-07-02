"use client"

import { motion } from "framer-motion"

export default function AIDashboard() {

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.9 }}
      whileInView={{ opacity: 1, scale: 1 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      className="
      relative
      mt-32
      mx-auto
      max-w-6xl
      rounded-[40px]
      border
      border-white/10
      bg-white/5
      backdrop-blur-3xl
      p-10
      overflow-hidden
      "
    >

      <div className="
      absolute
      inset-0
      bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.12),transparent_50%)]
      " />

      <div className="relative z-10">

        <div className="flex items-center justify-between mb-10">

          <div>
            <h2 className="text-4xl font-bold">
              AI Command Center
            </h2>

            <p className="text-zinc-400 mt-2">
              Generate cinematic startup experiences instantly.
            </p>
          </div>

          <div className="
          px-4 py-2
          rounded-full
          bg-orange-500/20
          border
          border-orange-500/20
          text-orange-400
          ">
            Online
          </div>

        </div>

        <div className="grid md:grid-cols-3 gap-6">

          <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
            <p className="text-zinc-400 text-sm">
              Generated Websites
            </p>

            <h3 className="text-5xl font-bold mt-4">
              1,284
            </h3>
          </div>

          <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
            <p className="text-zinc-400 text-sm">
              AI Speed
            </p>

            <h3 className="text-5xl font-bold mt-4">
              9x
            </h3>
          </div>

          <div className="rounded-3xl bg-black/40 border border-white/10 p-6">
            <p className="text-zinc-400 text-sm">
              Revenue Boost
            </p>

            <h3 className="text-5xl font-bold mt-4">
              +340%
            </h3>
          </div>

        </div>

      </div>

    </motion.div>
  )
}