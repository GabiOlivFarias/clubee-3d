// src/pages/DashboardPage.jsx

import React from 'react';
import './DashboardPage.css'; // Vamos criar este estilo

function DashboardPage({ user, onLogout }) {
  return (
    <div className="dashboard-container">
      <header className="dashboard-header">
        <div className="user-info">
          {/* A foto do perfil do Google vai aparecer aqui */}
          <img src={user.photos[0].value} alt="Foto de perfil" className="profile-pic"/>
          <h2>Olá, {user.displayName}!</h2>
        </div>
        <button onClick={onLogout} className="logout-button">Sair</button>
      </header>
      
      <main className="dashboard-main">
        <h3>O que você quer fazer na colmeia hoje?</h3>
        <div className="action-grid">
          {/* Usando os nomes temáticos que você sugeriu */}
          <div className="action-card">🐝 Compartilhar um Zunzum</div>
          <div className="action-card">🍯 Dar Néctar</div>
          <div className="action-card"> hives (Colmeias)</div>
          <div className="action-card">👑 Ver Abelha Rainha da Semana</div>
          <div className="action-card">📚 Ver Aulas Anteriores</div>
          <div className="action-card">📝 Conteúdo de Prova</div>
        </div>
      </main>
    </div>
  );
}

export default DashboardPage;
