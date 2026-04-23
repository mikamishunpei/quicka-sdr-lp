import React from 'react';
import './ProblemSection.css';

const ProblemSection: React.FC = () => {
  return (
    <section id="problem" className="problem-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">BtoB営業の「三重苦」</h2>
          <p className="section-subtitle">従来の営業体制は限界を迎えています。</p>
        </div>

        <div className="problem-grid">
          <div className="problem-card glass-panel">
            <div className="problem-icon">1</div>
            <h3>SDR人材の不足と高騰</h3>
            <p>
              優秀な初期対応スタッフの採用・教育には1人月額40〜50万円以上。
              しかも人間は夜間休日に対応できず、黄金の「5分以内」を逃します。
            </p>
          </div>

          <div className="problem-card glass-panel">
            <div className="problem-icon">2</div>
            <h3>フォーム営業のスパム化</h3>
            <p>
              いきなり商談を迫る従来のフォーム営業は、反応率1%未満。
              企業ブランドを毀損するリスクが極めて高くなっています。
            </p>
          </div>

          <div className="problem-card glass-panel">
            <div className="problem-icon">3</div>
            <h3>「穴の開いたバケツ」問題</h3>
            <p>
              AIボットは自らリードを取りに行かず、高額なCRMは入力の手間から定着しない。
              「そのうち客」が放置されリストが枯渇します。
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProblemSection;
