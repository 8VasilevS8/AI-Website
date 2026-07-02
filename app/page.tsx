"use client"

import SphereScene from "./components/Sphere"
import MouseGlow from "./components/MouseGlow"
import AnimatedCard from "./components/AnimatedCard"
import AIDashboard from "./components/AIDashboard"
import Reveal from "./components/Reveal"
import WiresBackground from "./components/WiresBackground"
import NeuralWires from "./components/NeuralWires"
import CinematicScene from "./components/CinematicScene"

import HologramOverlay from "./components/HologramOverlay"
import AITerminal from "./components/AITerminal"
import ParallaxText from "./components/ParallaxText"

import HeroVideo from "./components/HeroVideo"

export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white overflow-hidden">

      {/* BACKGROUNDS */}
      <NeuralWires />
      <WiresBackground />
      <MouseGlow />

      {/* NEW EFFECTS */}
      <HologramOverlay />
      <ParallaxText />

      {/* global glow */}
      <div className="
      fixed
      inset-0
      -z-20
      bg-[radial-gradient(circle_at_top,rgba(255,120,0,0.15),transparent_40%)]
      " />

      {/* NAVBAR */}
      <nav className="
      fixed
      top-0
      left-0
      w-full
      z-50
      backdrop-blur-xl
      bg-black/20
      border-b
      border-white/10
      ">

        <div className="
        max-w-7xl
        mx-auto
        px-6
        py-4
        flex
        items-center
        justify-between
        ">

          <h1 className="text-xl font-bold tracking-widest">
            AETHER AI
          </h1>

          <div className="flex gap-8 text-sm text-zinc-400">

            <a href="#" className="hover:text-white transition">
              Features
            </a>

            <a href="#" className="hover:text-white transition">
              Pricing
            </a>

            <a href="#" className="hover:text-white transition">
              Contact
            </a>

          </div>

        </div>

      </nav>

      {/* HERO */}
      <section className="
      relative
      min-h-screen
      flex
      items-center
      justify-center
      overflow-hidden
      px-6
      ">

        {/* cinematic background */}
        <div className="
        absolute
        inset-0
        bg-[radial-gradient(circle_at_center,rgba(255,120,0,0.18),transparent_45%)]
        " />

        {/* huge glow */}
        <div className="
        absolute
        w-[1200px]
        h-[1200px]
        rounded-full
        bg-orange-500/10
        blur-[200px]
        animate-pulse
        " />

        {/* sphere */}
        <div className="absolute inset-0 z-0">
          <SphereScene />
        </div>

        {/* overlay */}
        <div className="
        absolute
        inset-0
        bg-gradient-to-b
        from-black/40
        via-transparent
        to-black
        " />

        {/* floating hud */}
        <div className="
        absolute
        left-[10%]
        top-[30%]
        w-[180px]
        h-[180px]
        rounded-3xl
        border
        border-cyan-400/20
        bg-cyan-400/5
        backdrop-blur-2xl
        rotate-12
        " />

        <div className="
        absolute
        right-[12%]
        bottom-[20%]
        w-[220px]
        h-[220px]
        rounded-full
        border
        border-orange-400/20
        bg-orange-400/5
        blur-sm
        " />

        {/* content */}
        <div className="relative z-10 text-center max-w-7xl">

          <p className="
          uppercase
          tracking-[0.5em]
          text-orange-400
          text-sm
          mb-8
          ">
            AI GENERATED CINEMATIC EXPERIENCE
          </p>

          <h1 className="
          text-7xl
          md:text-[140px]
          leading-[0.9]
          font-black
          tracking-tight
          ">

            <span className="text-white">
              FUTURE
            </span>

            <br />

            <span className="
            text-orange-500
            drop-shadow-[0_0_40px_rgba(255,120,0,0.5)]
            ">
              AI WEBSITES
            </span>

          </h1>

          <p className="
          mt-10
          text-zinc-400
          text-xl
          max-w-3xl
          mx-auto
          leading-relaxed
          ">
            Cinematic AI startup experiences powered by futuristic interfaces,
            premium motion graphics and immersive storytelling.
          </p>

          {/* buttons */}
          <div className="mt-12 flex gap-6 justify-center">

            <button className="
            px-10
            py-5
            rounded-full
            bg-orange-500
            hover:bg-orange-400
            transition-all
            duration-300
            shadow-[0_0_60px_rgba(255,120,0,0.5)]
            text-lg
            font-semibold
            hover:scale-105
            ">

              Build With AI

            </button>

            <button className="
            px-10
            py-5
            rounded-full
            border
            border-white/10
            bg-white/5
            backdrop-blur-xl
            hover:bg-white/10
            transition-all
            duration-300
            text-lg
            ">

              Watch Demo

            </button>

          </div>

        </div>

      </section>

      {/* FEATURES */}
      <Reveal>

        <section className="max-w-7xl mx-auto px-6 pb-40">

          <div className="mb-20 text-center">

            <h2 className="text-5xl font-bold mb-6">
              Next Generation Interfaces
            </h2>

            <p className="text-zinc-400 max-w-2xl mx-auto text-lg">
              AI-powered cinematic landing pages with immersive interactions.
            </p>

          </div>

          <div className="grid md:grid-cols-3 gap-6">

            <AnimatedCard
              title="AI Generation"
              description="Generate premium startup websites with one prompt."
            />

            <AnimatedCard
              title="3D Experiences"
              description="Immersive cinematic interfaces powered by Three.js."
            />

            <AnimatedCard
              title="Future UI"
              description="Luxury futuristic design systems with motion graphics."
            />

          </div>

        </section>

      </Reveal>

      {/* DASHBOARD */}
      <Reveal>
        <AIDashboard />
      </Reveal>

      {/* AI TERMINAL */}
      <AITerminal />

      {/* HERO VIDEO */}
      <HeroVideo />

      {/* CINEMATIC SCENES */}
      <CinematicScene
        image="/images/scene1.jpg"
        title="The Future Is Cinematic"
        description="AI-powered visual storytelling with futuristic interfaces and immersive motion design."
      />

      <CinematicScene
        image="/images/scene2.jpg"
        title="Neural Intelligence"
        description="Scroll-driven cinematic experiences inspired by next-generation AI systems."
      />

      <CinematicScene
        image="/images/scene3.jpg"
        title="Luxury AI Aesthetic"
        description="Premium startup visuals with glowing interfaces and cinematic transitions."
      />

    </main>
  )
}