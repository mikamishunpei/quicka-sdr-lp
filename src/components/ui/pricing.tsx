"use client";

import { motion } from "framer-motion";

export function PricingSection() {
  return (
    <section className="py-28 bg-[#f5f5f5] text-[#0a0d0c]" id="pricing">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            料金プラン
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-[#0a0d0c]">
            リスクゼロで始められる
          </h2>
          <p className="text-[#888] text-lg max-w-xl mx-auto leading-relaxed tracking-wide">
            商談がゼロなら、費用は1円もかかりません。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="p-10 md:p-14">
            {/* プラン名と価格 */}
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-green/20 bg-brand-green/5 px-4 py-1.5 text-xs font-bold tracking-widest text-[#1a2b26] mb-4">
                  最初の5社限定
                </div>
                <h3 className="text-2xl md:text-3xl font-bold tracking-tight text-[#0a0d0c]">
                  完全成果報酬プラン
                </h3>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xs text-[#aaa] font-bold tracking-widest mb-2">
                  商談確定ごとの成果報酬
                </p>
                <p className="text-4xl md:text-5xl font-black tracking-tight text-[#0a0d0c]">
                  ¥15,000<span className="text-lg font-normal text-[#aaa] ml-1">/件</span>
                </p>
              </div>
            </div>

            {/* 含まれるもの */}
            <div className="grid md:grid-cols-2 gap-6 mb-12">
              <ul className="space-y-4">
                {[
                  "月間3,000件のフォーム自動送信",
                  "AI自動返信＆パーソナライズ動画",
                  "サーバー・API通信費込み",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] font-bold text-[#333] tracking-wide leading-relaxed">
                    <span className="text-brand-green text-lg shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <ul className="space-y-4">
                {[
                  "オールインワンCRM利用",
                  "カレンダー自動予約連携",
                  "継続的なAIナーチャリング",
                ].map((item) => (
                  <li key={item} className="flex items-start gap-3 text-[15px] font-bold text-[#333] tracking-wide leading-relaxed">
                    <span className="text-brand-green text-lg shrink-0 mt-0.5">✓</span>
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* 初期費用 + CTA */}
            <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-xs font-bold text-[#aaa] mb-2 tracking-widest">
                  初期費用（環境構築・AI学習）
                </p>
                <div className="flex items-end gap-4">
                  <p className="text-2xl font-bold text-gray-300 line-through tracking-tight">¥500,000</p>
                  <p className="text-4xl font-black text-brand-gold tracking-tight">無料</p>
                </div>
              </div>
              <button className="bg-[#0a0d0c] text-white px-10 py-5 rounded-full text-lg font-bold tracking-wide hover:scale-[1.03] hover:bg-[#1a2b26] transition-all w-full md:w-auto shadow-xl">
                限定枠に申し込む
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
