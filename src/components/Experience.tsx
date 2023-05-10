"use client";

import { Canvas, Euler, Vector3 } from "@react-three/fiber";
import { OrbitControls, Text3D, Center, Float } from "@react-three/drei";

export default function Experience() {
  const meshNormalMaterial = <meshNormalMaterial wireframe />;

  const generateMeshes = (meshType: string, length: number) =>
    Array.from({ length }, (_, i) => {
      const randomSize = Math.random();
      const position: Vector3 = [
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
        (Math.random() - 0.5) * 15,
      ];
      const rotation: Euler = [
        Math.random() * Math.PI,
        Math.random() * Math.PI,
        0,
      ];
      let geometry;
      switch (meshType) {
        case "torus":
          geometry = <torusBufferGeometry args={[0.3, 0.1, 10, 25]} />;
          break;
        case "box":
          geometry = <boxBufferGeometry args={[0.3, 0.3, 0.3, 4, 4, 4]} />;
          break;
        case "sphere":
          geometry = <sphereBufferGeometry args={[0.3, 12, 10]} />;
          break;
        default:
          geometry = <boxBufferGeometry args={[0.3, 0.3, 0.3]} />;
          break;
      }
      return (
        <Float
          key={i}
          position={[0, 0.6, 0]}
          rotation={[Math.PI * 0.25, Math.PI * 0.25, 0]}
          rotationIntensity={0.5}
          floatIntensity={0.5}
          speed={0.75}
        >
          <mesh
            key={i}
            position={position}
            rotation={rotation}
            scale={[randomSize, randomSize, randomSize]}
          >
            {geometry}
            {meshNormalMaterial}
          </mesh>
        </Float>
      );
    });

  const donuts = generateMeshes("torus", 125);
  const cubes = generateMeshes("box", 125);
  const sphere = generateMeshes("sphere", 125);

  return (
    <Canvas
      camera={{ position: [1, -1, 6.5], fov: 45 }}
      className="bg-neutral-950"
    >
      <OrbitControls
        makeDefault
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
          bevelThickness={0.01}
          bevelSize={0.01}
          bevelOffset={0}
          bevelSegments={5}
        >
          Amor Fati
          <meshNormalMaterial />
        </Text3D>
      </Center>
      {donuts}
      {cubes}
      {sphere}
    </Canvas>
  );
}
