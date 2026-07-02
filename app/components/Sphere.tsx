"use client"

import { Canvas } from "@react-three/fiber"
import { Float, MeshDistortMaterial, Sphere } from "@react-three/drei"

export default function SphereScene() {
  return (
    <div className="absolute inset-0 flex items-center justify-center opacity-40">
      <Canvas camera={{ position: [0, 0, 4] }}>
        <ambientLight intensity={2} />

        <Float
          speed={2}
          rotationIntensity={2}
          floatIntensity={3}
        >
          <Sphere args={[1, 128, 128]} scale={0.9}>
            <MeshDistortMaterial
              color="#ff6a00"
              distort={0.45}
              speed={2}
              roughness={0}
            />
          </Sphere>
        </Float>
      </Canvas>
    </div>
  )
}