import React from 'react';
import './HeroSection.css';

const HeroSection: React.FC = () => {
  return (
    <section className="hero">
      <div className="bg-grid"></div>
      
      {/* Decorative Orbs */}
      <div className="glow-orb orb-1"></div>
      <div className="glow-orb orb-2"></div>
      
      <div className="container hero-container">
        {/* Left Side: Copy & CTA */}
        <div className="hero-content">
          <h1 className="hero-title animate-fade-up">
            Hi, I'm Quicka.
          </h1>
          
          <div className="hero-subtitle-container animate-fade-up delay-100">
            <h2 className="hero-subtitle-heading">The world's best AI SDR.</h2>
            <p className="hero-subtitle-text">
              24時間365日休みなく働き続ける、あなたの最強のトップセールス。<br />
              市場の全データを監視し、理想の顧客を特定。自律的にリードを獲得し、アプローチから商談化までを全自動で行います。
            </p>
          </div>
          
          <div className="hero-actions animate-fade-up delay-200">
            <button className="btn-primary btn-large">Quickaを雇う</button>
          </div>
        </div>
        
        {/* Right Side: AI SDR Avatar/Video */}
        <div className="hero-visual animate-fade-up delay-300">
          <div className="avatar-container">
            {/* Status Badge */}
            <div className="avatar-status">
              <span className="status-bolt">⚡️</span>
              Autopilot activated
            </div>
            
            {/* Video Element (Falls back to poster image if src is empty or invalid) */}
            <div className="sdr-video-container">
              <img src="/sdr_avatar.png" alt="AI SDR Avatar" className="sdr-video sdr-breathing-anim" />
            </div>
            
            {/* Floating Message UI */}
            <div className="floating-message glass-panel">
              <div className="message-header">
                <div className="ai-icon">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                    <path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
                  </svg>
                </div>
                <div className="message-meta">
                  <span className="ai-name">Quicka the SDR</span>
                </div>
              </div>
              <p className="message-text">『◯◯様の課題解決に直結する提案動画を、私自身が撮影してお送りしました。』</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
