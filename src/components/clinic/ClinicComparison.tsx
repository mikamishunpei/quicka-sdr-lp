"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight } from "lucide-react";

export function ClinicComparison() {
  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* 背景の装飾 */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.05),transparent_50%)] pointer-events-none" />
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff02_1px,transparent_1px),linear-gradient(to_bottom,#ffffff02_1px,transparent_1px)] bg-[size:4rem_4rem] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-700 bg-gray-800/50 mb-6">
            <span className="w-1.5 h-1.5 rounded-full bg-gray-400" />
            <p className="text-gray-300 text-xs font-bold uppercase tracking-widest">
              従来のLINEツールとの違い
            </p>
          </div>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.3] mb-8 text-white">
            「ツール」の導入ではなく、<br />
            <span className="text-brand-gold">「専属コンシェルジュ」</span>の採用です。
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            従来のツールは、スタッフ様自身が設定や返信作業を行うための「土台」に過ぎません。<br />
            私たちが提供するのは、御院の治療方針を完璧に理解し、<br className="hidden md:block" />24時間体制で患者様に寄り添い続ける「自律型のAIコンシェルジュ」です。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* 従来のツール */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-gray-800/50 backdrop-blur-sm rounded-[32px] p-8 md:p-12 border border-gray-700 shadow-sm relative opacity-80"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gray-600 rounded-t-[32px]"></div>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-400">従来のツール運用</h3>
            
            <ul className="space-y-6">
              {[
                "シナリオ作成や分岐設定など、導入に膨大な時間と労力がかかる",
                "シナリオから外れた質問には結局「スタッフの手動返信」が必要",
                "営業時間外は自動応答メッセージのみで、患者様の熱量を逃がす",
                "数千人のリスト一人一人の悩みに合わせた個別のアプローチは不可能"
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-700 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <span className="text-[15px] font-medium text-gray-400 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quicka AI */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gradient-to-b from-gray-900 to-black rounded-[32px] p-8 md:p-12 border border-brand-gold/30 shadow-[0_0_40px_rgba(212,175,55,0.1)] relative"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-gold via-[#e5cf8b] to-brand-gold rounded-t-[32px]"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider py-1.5 px-6 rounded-full shadow-lg">
              Quicka AI
            </div>
            
            <h3 className="text-2xl font-bold mb-8 text-center text-white">AI専属コンシェルジュ</h3>
            
            <ul className="space-y-6">
              {[
                "24時間365日休まず稼働。同時に1,000人から相談が来ても全員に即レス対応",
                "日常的な質問にはプロとして即答し、判断が必要なイレギュラーな相談はスムーズにスタッフへ連携",
                "過去に登録した数千人のリスト全員の悩みと最終来院日を「完全記憶」",
                "ベストなタイミングでAIから「お目元の調子はいかがですか？」と個別フォロー"
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-brand-gold/20 flex items-center justify-center shrink-0 mt-0.5">
                    <Check className="w-4 h-4 text-brand-gold" />
                  </div>
                  <span className="text-[15px] font-bold text-white/90 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.5, delay: 0.3 }}
          className="mt-16 flex justify-center"
        >
          <a href="/contact" className="bg-brand-gold text-white px-10 py-4 rounded-full font-bold text-lg hover:opacity-90 transition-opacity flex items-center gap-2 shadow-[0_0_20px_rgba(212,175,55,0.3)]">
            無料で試す
            <ArrowRight className="w-5 h-5" />
          </a>
        </motion.div>

      </div>
    </section>
  );
}
