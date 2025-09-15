// src/App.jsx (Versão com Layout Dividido)
import React, { Suspense } from 'react';
import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import Model from './components/Model';
import Login from './components/Login'; // Importa o componente de Login
import './App.css';

function App() {
    const handleLogin = (loginData) => {
        alert(`Bem-vindo(a), ${loginData.username}!`);
        // Aqui você faria a navegação para a página principal
    };

    return (
        // O container principal que vai dividir a tela
        <div className="main-layout-container">
            {/* Lado esquerdo: Abelha 3D e frase */}
            <div className="left-panel">
                <div className="bee-3d-wrapper">
                    <Canvas camera={{ position: [0, 2, 8], fov: 50 }}>
                        <ambientLight intensity={1.5} />
                        <directionalLight 
                          position={[5, 10, 5]} 
                          intensity={2.5} 
                          castShadow 
                        />
                        <Suspense fallback={null}>
                            <Model scale={1.5} />
                        </Suspense>
                        <OrbitControls 
                            autoRotate 
                            autoRotateSpeed={0.5} 
                            enableZoom={false} 
                            enablePan={false} 
                        />
                    </Canvas>
                </div>
                <div className="motto-text">
                    <h1>Junte-se à Colmeia Clubee!</h1>
                    <p>Alunos da Escola Abel, façam parte da nossa comunidade.</p>
                </div>
            </div>

            {/* Lado direito: Formulário de Login */}
            <div className="right-panel">
                <Login onLogin={handleLogin} />
            </div>
        </div>
    );
}

export default App;
