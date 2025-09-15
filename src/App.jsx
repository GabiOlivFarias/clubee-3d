// src/App.jsx (Versão Final)
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import { Suspense } from 'react';
import Model from './components/Model';

function App() {
  return (
    <Canvas style={{ width: '100vw', height: '100vh' }}>
      <ambientLight intensity={2} />
      <directionalLight position={[10, 10, 5]} intensity={3} />

      <Suspense fallback={null}>
        <Model />
      </Suspense>

      <OrbitControls />
    </Canvas>
  );
}
export default App;