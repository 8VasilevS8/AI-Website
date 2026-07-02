"use client"

import { motion } from "framer-motion"

interface Props {
  title: string
  description: string
}

export default function AnimatedCard({
  title,
  description,
}: Props) {

  return (
    <motion.div
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8 }}
      viewport={{ once: true }}
      whileHover={{
        y: -10,
        scale: 1.02,
      }}
      className="
      group
      relative
      overflow-hidden
      rounded-3xl
      border
      border-white/10
      bg-white/5
      backdrop-blur-2xl
      p-8
      transition-all
      duration-500
      hover:border-orange-500/40
      "
    >

      <div className="
      absolute
      inset-0
      opacity-0
      group-hover:opacity-100
      transition-opacity
      duration-500
      bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.15),transparent_60%)]
      " />

      <h3 className="text-2xl font-bold mb-4 relative z-10">
        {title}
      </h3>

      <p className="text-zinc-400 relative z-10 leading-relaxed">
        {description}
      </p>

    </motion.div>
  )
}