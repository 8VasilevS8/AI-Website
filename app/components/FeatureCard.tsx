"use client"

import { motion } from "framer-motion"

interface Props {
  title: string
  description: string
}

export default function FeatureCard({ title, description }: Props) {
  return (
    <motion.div
      whileHover={{ y: -10 }}
      transition={{ duration: 0.3 }}
      className="group relative overflow-hidden rounded-3xl border border-white/10 bg-white/5 backdrop-blur-2xl p-8"
    >

      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition duration-500 bg-orange-500/10 blur-3xl" />

      <h3 className="text-2xl font-semibold mb-4 relative z-10">
        {title}
      </h3>

      <p className="text-zinc-400 relative z-10">
        {description}
      </p>

    </motion.div>
  )
}