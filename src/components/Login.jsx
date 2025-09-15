// src/components/Login.jsx
import React, { useState } from 'react';
import './Login.css'; // Vamos criar este arquivo de CSS em seguida

function Login({ onLogin }) {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        // Aqui você faria a autenticação real
        console.log('Tentativa de login:', { username, password });
        if (username && password) { // Exemplo simples
            onLogin({ username, password });
        } else {
            alert('Por favor, preencha usuário e senha.');
        }
    };

    return (
        <div className="login-form-container">
            <h2 className="login-title">Bem-vindo(a) à Colmeia Clubee!</h2>
            <p className="login-subtitle">Faça parte da nossa comunidade na Escola Abel.</p>
            <form onSubmit={handleSubmit} className="login-form">
                <div className="input-group">
                    <label htmlFor="username">Usuário</label>
                    <input
                        type="text"
                        id="username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required
                    />
                </div>
                <div className="input-group">
                    <label htmlFor="password">Senha</label>
                    <input
                        type="password"
                        id="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required
                    />
                </div>
                <button type="submit" className="login-button">Entrar</button>
            </form>
        </div>
    );
}

export default Login;
