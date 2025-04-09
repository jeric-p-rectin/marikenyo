import { Canvas } from '@react-three/fiber';
import { PerspectiveCamera, OrbitControls, Bounds, useGLTF } from '@react-three/drei';

function Model() {
  const glb = useGLTF('/heel.glb');
  return <primitive object={glb.scene} />;
}

useGLTF.preload('/heel.glb');

export default function App() {
  return (
    <Canvas style={{ width: '100%', height: '300px' }}>
      <PerspectiveCamera makeDefault fov={75} position={[1, 1, 0]} />
      <ambientLight intensity={3} />
      <directionalLight position={[10, 10, 5]} intensity={2} castShadow />
      <OrbitControls autoRotate autoRotateSpeed={2} enablePan={false} enableZoom={false} enableRotate={false}/>

      <Bounds fit clip  margin={1.2}>
        <Model />
      </Bounds>

      {/* <axesHelper args={[5]} />
      <gridHelper args={[10, 10]} /> */}
    </Canvas>
  );
}
