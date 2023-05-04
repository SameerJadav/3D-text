"use client";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";

export function Cube() {
  const meshNormalMaterial = <meshNormalMaterial />;

  const donuts = Array.from({ length: 200 }, (_, i) => {
    let randomSize = Math.random();
    return (
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 12.5,
          (Math.random() - 0.5) * 12.5,
          (Math.random() - 0.5) * 12.5,
        ]}
        rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        scale={[randomSize, randomSize, randomSize]}
      >
        <torusBufferGeometry args={[0.3, 0.1, 20, 40]} />
        {meshNormalMaterial}
      </mesh>
    );
  });

  const cubes = Array.from({ length: 200 }, (_, i) => {
    let randomSize = Math.random();
    return (
      <mesh
        key={i}
        position={[
          (Math.random() - 0.5) * 12.5,
          (Math.random() - 0.5) * 12.5,
          (Math.random() - 0.5) * 12.5,
        ]}
        rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
        scale={[randomSize, randomSize, randomSize]}
      >
        <boxBufferGeometry args={[0.3, 0.3, 0.3]} />
        {meshNormalMaterial}
      </mesh>
    );
  });

  return (
    <Canvas
      camera={{ position: [0, 0, 3], fov: 75 }}
      className="bg-neutral-950"
    >
      <OrbitControls
        makeDefault
        enableZoom={false}
        minAzimuthAngle={-Math.PI / 2}
        maxAzimuthAngle={Math.PI / 2}
      />
      <Center>
        <Text3D
          font="/fonts/helvetiker_regular.typeface.json"
          size={0.5}
          height={0.2}
          curveSegments={5}
          bevelEnabled
          bevelThickness={0.03}
          bevelSize={0.02}
          bevelOffset={0}
          bevelSegments={5}
        >
          Marcus Aurelius
          {/* <meshNormalMaterial /> */}
          {meshNormalMaterial}
        </Text3D>
      </Center>
      {donuts}
      {cubes}
    </Canvas>
  );
}
