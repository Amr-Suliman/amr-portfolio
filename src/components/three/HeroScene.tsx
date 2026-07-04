"use client";

import { useRef, useMemo } from "react";
import { Canvas, useFrame, useThree } from "@react-three/fiber";
import { Float, Sparkles, Stars, MeshDistortMaterial } from "@react-three/drei";
import * as THREE from "three";
import type { NormalizedMouse } from "@/hooks/useMousePosition";

interface HeroSceneProps {
  mouse: NormalizedMouse;
}

function CameraRig({ mouse }: { mouse: NormalizedMouse }) {
  const { camera } = useThree();
  const target = useRef(new THREE.Vector3());

  useFrame(() => {
    target.current.set(mouse.x * 0.6, mouse.y * 0.4, 0);
    camera.position.lerp(
      new THREE.Vector3(
        target.current.x,
        target.current.y,
        camera.position.z
      ),
      0.04
    );
    camera.lookAt(0, 0, 0);
  });

  return null;
}

function ParticleNetwork({ mouse }: { mouse: NormalizedMouse }) {
  const ref = useRef<THREE.Points>(null);
  const count = 120;

  const [positions, colors] = useMemo(() => {
    const pos = new Float32Array(count * 3);
    const col = new Float32Array(count * 3);
    const palette = [
      new THREE.Color("#f43f5e"),
      new THREE.Color("#dc2626"),
      new THREE.Color("#8b5cf6"),
      new THREE.Color("#f59e0b"),
    ];

    for (let i = 0; i < count; i++) {
      const r = 4 + Math.random() * 6;
      const theta = Math.random() * Math.PI * 2;
      const phi = Math.acos(2 * Math.random() - 1);

      pos[i * 3] = r * Math.sin(phi) * Math.cos(theta);
      pos[i * 3 + 1] = r * Math.sin(phi) * Math.sin(theta);
      pos[i * 3 + 2] = r * Math.cos(phi);

      const c = palette[Math.floor(Math.random() * palette.length)];
      col[i * 3] = c.r;
      col[i * 3 + 1] = c.g;
      col[i * 3 + 2] = c.b;
    }

    return [pos, col];
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.y = state.clock.elapsedTime * 0.04 + mouse.x * 0.3;
    ref.current.rotation.x = mouse.y * 0.15;
  });

  return (
    <points ref={ref}>
      <bufferGeometry>
        <bufferAttribute
          attach="attributes-position"
          args={[positions, 3]}
        />
        <bufferAttribute attach="attributes-color" args={[colors, 3]} />
      </bufferGeometry>
      <pointsMaterial
        size={0.06}
        vertexColors
        transparent
        opacity={0.85}
        sizeAttenuation
        depthWrite={false}
        blending={THREE.AdditiveBlending}
      />
    </points>
  );
}

function FloatingTorusKnot({ mouse }: { mouse: NormalizedMouse }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.elapsedTime * 0.15 + mouse.y * 0.4;
    ref.current.rotation.y = state.clock.elapsedTime * 0.2 + mouse.x * 0.4;
  });

  return (
    <Float speed={1.8} rotationIntensity={0.4} floatIntensity={1.2}>
      <mesh ref={ref} position={[2.8, 0.5, -2]}>
        <torusKnotGeometry args={[0.7, 0.22, 128, 16]} />
        <meshStandardMaterial
          color="#dc2626"
          emissive="#7f1d1d"
          emissiveIntensity={0.6}
          metalness={0.85}
          roughness={0.15}
          wireframe
        />
      </mesh>
    </Float>
  );
}

function FloatingIcosahedron({ mouse }: { mouse: NormalizedMouse }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = -state.clock.elapsedTime * 0.12 + mouse.y * 0.3;
    ref.current.rotation.z = state.clock.elapsedTime * 0.08 + mouse.x * 0.2;
  });

  return (
    <Float speed={2.2} rotationIntensity={0.6} floatIntensity={1.5}>
      <mesh ref={ref} position={[-3, -0.8, -1.5]}>
        <icosahedronGeometry args={[0.9, 1]} />
        <MeshDistortMaterial
          color="#8b5cf6"
          emissive="#4c1d95"
          emissiveIntensity={0.4}
          metalness={0.7}
          roughness={0.2}
          distort={0.25}
          speed={2}
        />
      </mesh>
    </Float>
  );
}

function FloatingRing({ mouse }: { mouse: NormalizedMouse }) {
  const ref = useRef<THREE.Mesh>(null);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = Math.PI / 3 + mouse.y * 0.25;
    ref.current.rotation.z = state.clock.elapsedTime * 0.1 + mouse.x * 0.15;
  });

  return (
    <Float speed={1.5} rotationIntensity={0.3} floatIntensity={0.8}>
      <mesh ref={ref} position={[0, 1.2, -3.5]}>
        <torusGeometry args={[1.4, 0.03, 16, 100]} />
        <meshStandardMaterial
          color="#f59e0b"
          emissive="#b45309"
          emissiveIntensity={0.5}
          metalness={1}
          roughness={0.1}
        />
      </mesh>
    </Float>
  );
}

function GlowingSphere() {
  return (
    <Float speed={1.2} floatIntensity={0.6}>
      <mesh position={[0, 0, -4]}>
        <sphereGeometry args={[0.5, 32, 32]} />
        <meshStandardMaterial
          color="#f43f5e"
          emissive="#be123c"
          emissiveIntensity={1.2}
          transparent
          opacity={0.35}
        />
      </mesh>
    </Float>
  );
}

function SceneContent({ mouse }: { mouse: NormalizedMouse }) {
  return (
    <>
      <ambientLight intensity={0.8} />

      <directionalLight
        position={[5, 5, 5]}
        intensity={2}
      />

      <ParticleNetwork mouse={mouse} />

      <FloatingTorusKnot mouse={mouse} />

      <FloatingIcosahedron mouse={mouse} />

      <FloatingRing mouse={mouse} />

      <GlowingSphere />

      <Sparkles
        count={80}
        size={2}
        speed={0.3}
      />

      <Stars
        radius={100}
        depth={50}
        count={3000}
        factor={4}
      />

      <CameraRig mouse={mouse} />
    </>
  );
}


export default function HeroScene({ mouse }: HeroSceneProps) {
  return (
    <Canvas
      camera={{ position: [0, 0, 6], fov: 60 }}
      dpr={[1, 1.5]}
      gl={{ antialias: true, alpha: true, powerPreference: "high-performance" }}
      style={{ background: "transparent" }}
    >
      <SceneContent mouse={mouse} />
    </Canvas>
  );
}
