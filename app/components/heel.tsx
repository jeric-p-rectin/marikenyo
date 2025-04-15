"use client";
import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useGLTF } from '@react-three/drei';
import { useMediaQuery } from 'react-responsive';

function Model() {
  const glb = useGLTF('/heel.glb');
  return <primitive object={glb.scene} />;
}

useGLTF.preload('/heel.glb');

export default function App() {
  const isDesktop = useMediaQuery({ query: '(min-width: 640px)' }); // Check if the device is desktop
  
  return (
    <Canvas style={{ width: '100%', height: '300px', touchAction: 'pan-y', pointerEvents: 'none' }}>
      <PerspectiveCamera makeDefault fov={isDesktop ? 8 : 10} position={[1.3, 1.8, 0.6]} />
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
      <OrbitControls autoRotate autoRotateSpeed={2} enablePan={false} enableZoom={false} enableRotate={false}/>

      <Model />

      {/* <axesHelper args={[5]} />
      <gridHelper args={[10, 10]} /> */}
    </Canvas>
  );
}
