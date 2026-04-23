import React from 'react';
import './PricingSection.css';

const PricingSection: React.FC = () => {
  return (
    <section id="pricing" className="pricing-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">圧倒的な費用対効果 (ROI)</h2>
          <p className="section-subtitle">
            「営業の属人化」から脱却し、トップセールスのノウハウと顧客リストを資産として残します。
          </p>
        </div>

        <div className="pricing-comparison">
          {/* Human SDR Card */}
          <div className="pricing-card glass-panel disabled">
            <h3 className="plan-name">人間のSDR + 各種ツール</h3>
            <div className="plan-price">
              <span className="amount">¥500,000+</span>
              <span className="period">/月</span>
            </div>
            <ul className="plan-features">
              <li className="cross">✕ 夜間・休日は対応不可</li>
              <li className="cross">✕ 退職するとノウハウ喪失</li>
              <li className="cross">✕ ツール連携の複雑な管理</li>
              <li className="cross">✕ 数分以内の即時対応は困難</li>
            </ul>
          </div>

          {/* Quicka AI SDR Card */}
          <div className="pricing-card main glass-panel">
            <div className="recommended-badge">圧倒的推奨</div>
            <h3 className="plan-name text-gradient-accent">Quicka AI SDR</h3>
            <div className="plan-price">
              <span className="amount">¥98,000</span>
              <span className="period">/月</span>
            </div>
            <p className="setup-fee">＋初期構築費用 ¥300,000</p>
            <ul className="plan-features">
              <li className="check">✓ 24時間365日の完全自律稼働</li>
              <li className="check">✓ 全てがシステム内の資産に</li>
              <li className="check">✓ CRM内蔵で管理コストゼロ</li>
              <li className="check">✓ 10分以内のパーソナライズ動画即レス</li>
              <li className="check">✓ 月間3,000件のオプトイン型自動送信</li>
            </ul>
            <button className="btn-primary w-full mt-4">今すぐ導入の相談をする</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
