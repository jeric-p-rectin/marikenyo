"use client";
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

function Model() {
  const glb = useGLTF('/leather-shoe.glb'); // Replace with your actual path
  return <primitive object={glb.scene} />;
}

export default function LeatherShoe() {
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' }); // Check if the device is desktop

  return (
    <Canvas style={{ width: '100%', height: '300px', touchAction: 'pan-y' }}>
      {/* Camera Setup */}
      <PerspectiveCamera makeDefault fov={70} position={isDesktop ? [50, 250, 310] : [50, 250, 450]} />
      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} enableRotate={false}/>

      {/* GLB Model */}
      <Model/>

      {/* Lighting */}
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
    </Canvas>
  );
}
