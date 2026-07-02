"use client"

import { motion, useScroll, useTransform } from "framer-motion"

export default function WiresBackground() {

  const { scrollYProgress } = useScroll()

  const y1 = useTransform(scrollYProgress, [0, 1], [0, 400])
  const y2 = useTransform(scrollYProgress, [0, 1], [0, -300])
  const y3 = useTransform(scrollYProgress, [0, 1], [0, 250])

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">

      {/* wire 1 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute left-[10%] top-[-20%] w-[2px] h-[160vh]"
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-40 blur-[1px]" />
      </motion.div>

      {/* wire 2 */}
      <motion.div
        style={{ y: y2 }}
        className="absolute left-[30%] top-[-10%] w-[3px] h-[160vh] rotate-[12deg]"
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-orange-400 to-transparent opacity-30 blur-sm" />
      </motion.div>

      {/* wire 3 */}
      <motion.div
        style={{ y: y3 }}
        className="absolute left-[55%] top-[-15%] w-[2px] h-[170vh] -rotate-[8deg]"
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-orange-300 to-transparent opacity-30 blur-sm" />
      </motion.div>

      {/* wire 4 */}
      <motion.div
        style={{ y: y1 }}
        className="absolute right-[18%] top-[-10%] w-[4px] h-[170vh] rotate-[18deg]"
      >
        <div className="w-full h-full bg-gradient-to-b from-transparent via-orange-500 to-transparent opacity-20 blur-md" />
      </motion.div>

      {/* glowing orb */}
      <motion.div
        style={{ y: y2 }}
        className="absolute left-[40%] top-[20%] w-[300px] h-[300px] rounded-full bg-orange-500/10 blur-3xl"
      />

    </div>
  )
}