import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, useGLTF } from '@react-three/drei';

function Model() {
  const glb = useGLTF('/leather-shoe.glb'); // Replace with your actual path
  return <primitive object={glb.scene} />;
}

export default function App() {
  return (
    <Canvas style={{ width: '100%', height: '600px' }}>
      {/* Camera Setup */}
      <PerspectiveCamera makeDefault fov={75} position={[50, 250, 450]} />
      <OrbitControls autoRotate autoRotateSpeed={2} enableZoom={false} enablePan={false} enableRotate={false}/>

      {/* GLB Model */}
      <Model/>

      {/* Lighting */}
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
    </Canvas>
  );
}
