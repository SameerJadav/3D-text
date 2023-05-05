"use client";

import { Canvas, useThree } from "@react-three/fiber";
import { OrbitControls, Text3D, Center } from "@react-three/drei";

export default function Experience() {
  const meshNormalMaterial = <meshNormalMaterial wireframe />;

  const generateMeshes = (meshType: string, length: number) => {
    return Array.from({ length }, (_, i) => {
      let randomSize = Math.random();
      return (
        <mesh
          key={i}
          position={[
            (Math.random() - 0.5) * 13,
            (Math.random() - 0.5) * 13,
            (Math.random() - 0.5) * 13,
          ]}
          rotation={[Math.random() * Math.PI, Math.random() * Math.PI, 0]}
          scale={[randomSize, randomSize, randomSize]}
        >
          {(() => {
            switch (meshType) {
              case "torus":
                return <torusBufferGeometry args={[0.3, 0.1, 10, 25]} />;
              case "box":
                return <boxBufferGeometry args={[0.3, 0.3, 0.3, 4, 4, 4]} />;
              case "sphere":
                return <sphereBufferGeometry args={[0.3, 12, 10]} />;
              default:
                return <boxBufferGeometry args={[0.3, 0.3, 0.3]} />;
            }
          })()}
          {meshNormalMaterial}
        </mesh>
      );
    });
  };

  const donuts = generateMeshes("torus", 110);
  const cubes = generateMeshes("box", 110);
  const sphere = generateMeshes("sphere", 110);

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
          Amor fati
          <meshNormalMaterial />
        </Text3D>
      </Center>
      {donuts}
      {cubes}
      {sphere}
    </Canvas>
  );
}
