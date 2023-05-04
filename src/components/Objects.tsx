"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

export function Cube() {
  return (
    <Canvas
      camera={{ position: [3, 3, 3], fov: 75 }}
      className="h-screen w-screen bg-neutral-950"
    >
      <OrbitControls />
      <mesh>
        <boxBufferGeometry args={[1, 1, 1]} />
        <meshNormalMaterial wireframe />
      </mesh>
    </Canvas>
  );
}
