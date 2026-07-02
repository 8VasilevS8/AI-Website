"use client"

import { motion } from "framer-motion"

export default function HeroVideo() {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden px-6">

      {/* ambient background */}
      <div className="absolute inset-0 bg-transparent" />

      {/* giant cinematic glow */}
      <motion.div
        animate={{
          scale: [1, 1.12, 1],
          opacity: [0.08, 0.18, 0.08],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
        }}
        className="
        absolute
        w-[900px]
        h-[900px]
        rounded-full
        bg-cyan-500/10
        blur-[180px]
        "
      />

      {/* subtle grid */}
      <div
        className="
        absolute
        inset-0
        opacity-[0.03]
        bg-[linear-gradient(rgba(255,255,255,0.08)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.08)_1px,transparent_1px)]
        bg-[size:80px_80px]
        "
      />

      {/* content */}
      <div className="relative z-10 max-w-7xl w-full grid lg:grid-cols-2 gap-20 items-center">

        {/* LEFT SIDE */}
        <motion.div
          initial={{
            opacity: 0,
            x: -100,
          }}
          whileInView={{
            opacity: 1,
            x: 0,
          }}
          transition={{
            duration: 1,
          }}
        >

          <p
            className="
            uppercase
            tracking-[0.4em]
            text-cyan-300
            text-sm
            mb-8
            "
          >
            AI PRODUCT EXPERIENCE
          </p>

          <h1
            className="
            text-6xl
            md:text-[110px]
            leading-none
            font-black
            tracking-tight
            "
          >
            FUTURE

            <span className="block text-cyan-400 neon-text">
              DEVICE
            </span>
          </h1>

          <p
            className="
            mt-10
            text-zinc-400
            text-xl
            leading-relaxed
            max-w-xl
            "
          >
            Cinematic AI-generated product visuals with immersive motion graphics and futuristic startup aesthetics.
          </p>

          <button
            className="
            mt-12
            px-10
            py-5
            rounded-full
            bg-cyan-500
            hover:bg-cyan-400
            transition-all
            duration-300
            text-lg
            font-semibold
            shadow-[0_0_80px_rgba(0,220,255,0.35)]
            "
          >
            Explore Future
          </button>

        </motion.div>

        {/* RIGHT SIDE VIDEO */}
        <motion.div
          initial={{
            opacity: 0,
            scale: 0.8,
            rotate: -6,
          }}
          whileInView={{
            opacity: 1,
            scale: 1,
            rotate: 0,
          }}
          transition={{
            duration: 1.2,
          }}
          className="relative flex justify-center items-center"
        >

          {/* floating object */}
          <motion.div
            animate={{
              y: [0, -18, 0],
              rotate: [0, 1.5, 0],
            }}
            transition={{
              duration: 8,
              repeat: Infinity,
            }}
            className="relative"
          >

            <video
              autoPlay
              muted
              loop
              playsInline
              className="
              w-[420px]
              md:w-[650px]
              h-auto
              object-contain
              opacity-95
              "
            >
              <source
                src="/videos/hero-video.mp4"
                type="video/mp4"
              />
            </video>

          </motion.div>

        </motion.div>

      </div>

    </section>
  )
}