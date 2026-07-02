"use client"

import Image from "next/image"

import {
  motion,
  useScroll,
  useTransform,
} from "framer-motion"

import { useRef } from "react"

interface Props {
  image: string
  title: string
  description: string
}

export default function CinematicScene({
  image,
  title,
  description,
}: Props) {

  const ref = useRef(null)

  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start end", "end start"],
  })

  /* IMAGE PARALLAX */

  const imageY = useTransform(
    scrollYProgress,
    [0, 1],
    [250, -250]
  )

  /* IMAGE ZOOM */

  const imageScale = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [1.5, 1.15, 1]
  )

  /* TEXT FLOAT */

  const textY = useTransform(
    scrollYProgress,
    [0, 1],
    [180, -180]
  )

  /* FADE */

  const opacity = useTransform(
    scrollYProgress,
    [0, 0.2, 0.8, 1],
    [0, 1, 1, 0]
  )

  /* GLOW MORPH */

  const glowOpacity = useTransform(
    scrollYProgress,
    [0, 0.5, 1],
    [0.1, 0.6, 0.15]
  )

  const glowScale = useTransform(
    scrollYProgress,
    [0, 1],
    [1, 1.4]
  )

  /* DEPTH LAYERS */

  const layer1 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -120]
  )

  const layer2 = useTransform(
    scrollYProgress,
    [0, 1],
    [0, -250]
  )

  return (
    <section
      ref={ref}
      className="
      relative
      h-[180vh]
      overflow-hidden
      "
    >

      {/* sticky cinematic scene */}
      <div className="
      sticky
      top-0
      h-screen
      overflow-hidden
      ">

        {/* BACKGROUND IMAGE */}
        <motion.div
          style={{
            y: imageY,
            scale: imageScale,
          }}
          className="absolute inset-0"
        >

          <Image
            src={image}
            alt={title}
            fill
            className="
            object-cover
            brightness-[0.45]
            saturate-[1.3]
            contrast-[1.1]
            "
          />

        </motion.div>

        {/* DEPTH LAYER 1 */}
        <motion.div
          style={{ y: layer1 }}
          className="
          absolute
          top-[10%]
          left-[10%]
          w-[400px]
          h-[400px]
          rounded-full
          bg-orange-500/10
          blur-[140px]
          "
        />

        {/* DEPTH LAYER 2 */}
        <motion.div
          style={{ y: layer2 }}
          className="
          absolute
          bottom-[10%]
          right-[10%]
          w-[500px]
          h-[500px]
          rounded-full
          bg-cyan-400/10
          blur-[160px]
          "
        />

        {/* MORPHING GLOW */}
        <motion.div
          style={{
            opacity: glowOpacity,
            scale: glowScale,
          }}
          animate={{
            rotate: [0, 10, 0],
          }}
          transition={{
            duration: 18,
            repeat: Infinity,
          }}
          className="
          absolute
          inset-0
          bg-orange-500/20
          blur-[180px]
          "
        />

        {/* SCANLINES */}
        <motion.div
          animate={{
            y: [0, 60, 0],
          }}
          transition={{
            duration: 10,
            repeat: Infinity,
          }}
          className="
          absolute
          inset-0
          opacity-[0.03]
          bg-[linear-gradient(to_bottom,white_1px,transparent_1px)]
          bg-[size:100%_4px]
          "
        />

        {/* FLOATING PARTICLES */}
        <motion.div
          animate={{
            y: [0, -40, 0],
            x: [0, 20, 0],
          }}
          transition={{
            duration: 12,
            repeat: Infinity,
          }}
          className="
          absolute
          top-[20%]
          left-[20%]
          w-[320px]
          h-[320px]
          rounded-full
          bg-orange-400/10
          blur-[140px]
          "
        />

        {/* FLOATING HUD */}
        <motion.div
          animate={{
            y: [0, -25, 0],
            rotate: [0, 6, 0],
          }}
          transition={{
            duration: 8,
            repeat: Infinity,
          }}
          className="
          absolute
          left-[8%]
          top-[25%]
          w-[220px]
          h-[220px]
          rounded-3xl
          border
          border-cyan-400/20
          bg-cyan-400/5
          backdrop-blur-xl
          "
        />

        {/* OVERLAY */}
        <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/70
        via-transparent
        to-black
        " />

        {/* CONTENT */}
        <motion.div
          style={{
            y: textY,
            opacity,
          }}
          className="
          relative
          z-10
          h-full
          flex
          flex-col
          items-center
          justify-center
          text-center
          px-6
          "
        >

          {/* FLOATING TITLE */}
          <motion.h2
            animate={{
              y: [0, -14, 0],
            }}
            transition={{
              duration: 7,
              repeat: Infinity,
            }}
            className="
            text-7xl
            md:text-[130px]
            font-black
            leading-none
            tracking-tight
            "
          >

            {title}

          </motion.h2>

          {/* FLOATING DESCRIPTION */}
          <motion.p
            animate={{
              y: [0, 10, 0],
            }}
            transition={{
              duration: 9,
              repeat: Infinity,
            }}
            className="
            mt-10
            max-w-3xl
            text-xl
            text-zinc-300
            leading-relaxed
            "
          >

            {description}

          </motion.p>

        </motion.div>

      </div>

    </section>
  )
}