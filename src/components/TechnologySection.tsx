import React from 'react';
import './TechnologySection.css';

const TechnologySection: React.FC = () => {
  return (
    <section id="technology" className="tech-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">Quickaの圧倒的優位性</h2>
          <p className="section-subtitle">
            他社の自動化ツールとは一線を画す、中核テクノロジー。
          </p>
        </div>

        <div className="tech-grid">
          <div className="tech-card glass-panel">
            <div className="tech-icon">🎥</div>
            <h3>動的動画生成 (パーソナライズ)</h3>
            <p>
              相手のドメインから企業名を抽出し、動画内に自動合成。
              テキストだけのメールと比べ、クリック率と視聴完了率が劇的に向上します。
            </p>
          </div>

          <div className="tech-card glass-panel">
            <div className="tech-icon">🧠</div>
            <h3>コンテキストの完全記憶</h3>
            <p>
              過去のオファー内容、動画台本、メールスレッド全体を瞬時に読み込みます。
              「相手との文脈」を踏まえた人間らしい自然な返信を生成します。
            </p>
          </div>

          <div className="tech-card glass-panel">
            <div className="tech-icon">🔍</div>
            <h3>高精度なRAGシステム</h3>
            <p>
              自社資料をAIが正確に理解。「聞かれるまで答えない」「競合と比較されたら強みを強調する」等の高度な営業指示に忠実に従います。
            </p>
          </div>

          <div className="tech-card glass-panel">
            <div className="tech-icon">📋</div>
            <h3>オールインワンCRM内蔵</h3>
            <p>
              外部の複雑なSFAツールは不要。
              システム内で「未対応」「商談確定」「育成中」などを直感的なカンバンボードで管理できます。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TechnologySection;
