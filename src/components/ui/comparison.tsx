"use client";

import { motion } from "framer-motion";
import { X, Check } from "lucide-react";
import { useState, useEffect, useRef } from "react";

const rows = [
  { label: "月額コスト", human: "40〜50万円以上", ai: "数万円〜" },
  { label: "稼働時間", human: "平日 10時〜19時", ai: "24時間365日" },
  { label: "初回レスポンス", human: "数時間〜翌営業日", ai: "数分以内" },
  { label: "退職リスク", human: "ノウハウが流出", ai: "ゼロ。知識は永続" },
  { label: "月間アプローチ数", human: "100〜300件が限界", ai: "3,000件以上" },
  { label: "品質のばらつき", human: "担当者に依存", ai: "常にトップセールス品質" },
];

export function ComparisonSection() {
  return (
    <section className="py-28 bg-brand-dark text-white relative overflow-hidden">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            投資対効果
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            人間の営業マンとの比較
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
            この差で、この価格なら──<br className="block sm:hidden" />試さない理由がありません。
          </p>
        </motion.div>

        {/* 比較テーブル */}
        <ComparisonTable />
      </div>
    </section>
  );
}

function ComparisonTable() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setScale(Math.min(1, width / 800));
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  return (
    <div ref={containerRef} className="w-full relative mx-auto" style={{ height: `${440 * scale}px`, maxWidth: '800px' }}>
      <div 
        className="absolute top-0 left-0 w-[800px] origin-top-left"
        style={{ transform: `scale(${scale})` }}
      >
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="rounded-[28px] border border-white/10 overflow-hidden backdrop-blur-sm"
        >
          {/* ヘッダー */}
          <div className="grid grid-cols-3 bg-white/5">
            <div className="p-5 border-b border-r border-white/5" />
            <div className="p-5 border-b border-r border-white/5 text-center">
              <p className="text-sm font-bold text-white/40 tracking-wide">人間の営業マン</p>
            </div>
            <div className="p-5 border-b border-white/5 text-center">
              <p className="text-sm font-bold text-brand-gold tracking-wide">Quicka</p>
            </div>
          </div>

          {/* 行 */}
          {rows.map((row, i) => (
            <div
              key={row.label}
              className={`grid grid-cols-3 ${i < rows.length - 1 ? "border-b border-white/5" : ""} transition-colors hover:bg-white/[0.02]`}
            >
              <div className="p-5 border-r border-white/5 flex items-center">
                <p className="text-sm font-bold text-white/70 tracking-wide">{row.label}</p>
              </div>
              <div className="p-5 border-r border-white/5 flex items-center justify-center gap-2 text-center">
                <X className="w-4 h-4 text-red-400/60 shrink-0" />
                <p className="text-sm text-white/40 tracking-wide">{row.human}</p>
              </div>
              <div className="p-5 flex items-center justify-center gap-2 text-center">
                <Check className="w-4 h-4 text-brand-gold shrink-0" />
                <p className="text-sm text-white font-medium tracking-wide">{row.ai}</p>
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  );
}
