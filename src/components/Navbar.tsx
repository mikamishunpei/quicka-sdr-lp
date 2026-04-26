import React from 'react';
import './Navbar.css';

const Navbar: React.FC = () => {
  return (
    <header className="navbar glass-panel">
      <div className="navbar-container">
        <div className="logo">
          <span className="logo-icon">Q</span>
          <span className="logo-text">Quicka</span>
        </div>
        <nav className="nav-links">
          <a href="#problem">課題</a>
          <a href="#solution">解決策</a>
          <a href="#technology">テクノロジー</a>
          <a href="#pricing">料金</a>
          <a href="/presentations/clinic/" target="_blank" rel="noopener noreferrer">提案資料</a>
        </nav>
        <div className="nav-cta">
          <button className="btn-secondary">ログイン</button>
          <button className="btn-primary">デモを予約</button>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
