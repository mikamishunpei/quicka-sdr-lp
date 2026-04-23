import React from 'react';
import './SolutionSection.css';

const SolutionSection: React.FC = () => {
  return (
    <section id="solution" className="solution-section">
      <div className="container">
        <div className="section-header text-center">
          <h2 className="section-title">AIセールス・フライホイール</h2>
          <p className="section-subtitle">
            「穴のないバケツ」と「水」のセット提供。4つのフェーズで自動回転システムを構築します。
          </p>
        </div>

        <div className="timeline-container">
          <div className="timeline-line"></div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="phase-label">Phase 1</span>
              <h3>水を注ぐ（パーミッション型リード獲得）</h3>
              <p>
                「課題解決に直結する提案動画を、私自身が撮影してお送りしたいのですがいかがでしょうか？😊」<br/>
                いきなり売り込むのではなく「許可取り」を行うことでスパム扱いされず、高いオプトイン率を実現します。
              </p>
            </div>
          </div>

          <div className="timeline-item alt">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="phase-label">Phase 2</span>
              <h3>圧倒的Wow体験（10分以内の動画即レス）</h3>
              <p>
                「興味あり」の返信が来た瞬間、システムが起動。<br/>
                相手の企業名が合成されたパーソナライズ動画と文脈に沿ったテキストを10分以内に自動生成し、顧客の熱量が最も高い瞬間にアプローチします。
              </p>
            </div>
          </div>

          <div className="timeline-item">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="phase-label">Phase 3</span>
              <h3>商談の自動確定（AIによるクロージング）</h3>
              <p>
                動画視聴後の技術的・詳細な質問に対し、事前に学習させた自社資料（RAG）を元に正確に回答。<br/>
                自然な流れで日程調整リンクへ誘導し、営業のカレンダーを自動で埋めます。
              </p>
            </div>
          </div>

          <div className="timeline-item alt">
            <div className="timeline-dot"></div>
            <div className="timeline-content glass-panel">
              <span className="phase-label">Phase 4</span>
              <h3>無形資産の形成（完全自動ナーチャリング）</h3>
              <p>
                すぐに商談化しなかったリードも、内蔵CRMに自動ストック。<br/>
                AIが定期的に情報を配信し、以前のやり取りの「コンテキストを完全に記憶」した上で、数ヶ月後の再反応を確実に商談へ引き戻します。
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SolutionSection;
