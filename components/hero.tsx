"use client";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Float, Sphere } from "@react-three/drei";
import { useRef } from "react";
import { useFrame } from "@react-three/fiber";
import type * as THREE from "three";

function FloatingCube() {
  const meshRef = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (meshRef.current) {
      meshRef.current.rotation.x = state.clock.elapsedTime * 0.5;
      meshRef.current.rotation.y = state.clock.elapsedTime * 0.3;
    }
  });

  return (
    <Float speed={2} rotationIntensity={1} floatIntensity={2}>
      <mesh ref={meshRef}>
        <boxGeometry args={[1, 1, 1]} />
        <meshStandardMaterial color="#22c55e" wireframe />
      </mesh>
    </Float>
  );
}

export function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative"
    >
      <div className="absolute inset-0 z-0">
        <Canvas camera={{ position: [0, 0, 5] }}>
          <ambientLight intensity={0.5} />
          <pointLight position={[10, 10, 10]} />
          <FloatingCube />
          <Sphere args={[0.5]} position={[-3, 0, 0]}>
            <meshStandardMaterial color="#10b981" wireframe />
          </Sphere>
          <Sphere args={[0.3]} position={[3, 1, -1]}>
            <meshStandardMaterial color="#059669" wireframe />
          </Sphere>
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="relative z-10 text-center max-w-4xl mx-auto px-4">
        <div className="mb-8">
          <div className="text-green-400 font-mono text-lg mb-2 animate-pulse">
            {">"} Initializing Developer...
          </div>
          <h1 className="text-5xl md:text-7xl font-bold mb-4 bg-gradient-to-r from-green-400 to-blue-500 bg-clip-text text-transparent">
            SOFTWARE DEVELOPER
          </h1>
          <div className="text-xl md:text-2xl text-muted-foreground font-mono mb-8">
            Level 3 • 3 Years Experience • Full Stack Warrior
          </div>
        </div>

        <div className="flex flex-col md:flex-row items-center justify-center gap-4 mb-8">
          <div className="bg-background/20 backdrop-blur-sm border border-green-400/30 rounded-lg p-4 font-mono">
            <div className="text-green-400 text-sm">HP</div>
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-full h-full bg-gradient-to-r from-green-400 to-green-600 animate-pulse" />
            </div>
          </div>
          <div className="bg-background/20 backdrop-blur-sm border border-blue-400/30 rounded-lg p-4 font-mono">
            <div className="text-blue-400 text-sm">XP</div>
            <div className="w-32 h-2 bg-gray-700 rounded-full overflow-hidden">
              <div className="w-3/4 h-full bg-gradient-to-r from-blue-400 to-blue-600" />
            </div>
          </div>
        </div>

        <div className="flex flex-wrap justify-center gap-4 text-sm font-mono">
          <span className="bg-cyan-400/20 text-cyan-400 px-3 py-1 rounded-full border border-cyan-400/30">
            React.js
          </span>
          <span className="bg-yellow-400/20 text-yellow-400 px-3 py-1 rounded-full border border-yellow-400/30">
            Node.js
          </span>
          <span className="bg-blue-400/20 text-blue-400 px-3 py-1 rounded-full border border-blue-400/30">
            Next.js
          </span>
          <span className="bg-green-400/20 text-green-400 px-3 py-1 rounded-full border border-green-400/30">
            PostgresSQL
          </span>
        </div>

        <div className="mt-8">
          <a
            href="#about"
            className="inline-block bg-green-400 text-black px-8 py-3 rounded-lg font-bold hover:bg-green-500 transition-colors interactive"
          >
            Start Game
          </a>
        </div>
      </div>
    </section>
  );
}
