"use client"

import { motion } from "framer-motion"

interface Props {
  children: React.ReactNode
}

export default function Reveal({ children }: Props) {

  return (
    <motion.div

      initial={{
        opacity: 0,
        y: 120,
        filter: "blur(20px)",
      }}

      whileInView={{
        opacity: 1,
        y: 0,
        filter: "blur(0px)",
      }}

      transition={{
        duration: 1.2,
        ease: "easeOut",
      }}

      viewport={{
        once: true,
        amount: 0.2,
      }}

    >
      {children}
    </motion.div>
  )
}