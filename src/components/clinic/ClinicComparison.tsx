"use client";

import { motion } from "framer-motion";
import { Check, X } from "lucide-react";

export function ClinicComparison() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 text-gray-900">
      <div className="max-w-5xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            Lステップとの決定的な違い
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.3] mb-8">
            これは「ツール」ではなく、<br />
            <span className="text-brand-gold">「トップカウンセラーの採用」</span>です。
          </h2>
          <p className="text-gray-600 text-lg max-w-2xl mx-auto font-medium leading-relaxed">
            「Lステップなら月3万だよ？」<br />
            そう思われるかもしれません。しかしLステップは『スタッフ様が自分で設定して、自分で返信するツール』です。<br />
            私たちが提供するのは、絶対に退職しない御院専属のコンシェルジュです。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 items-stretch">
          {/* Lステップ */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-[32px] p-8 md:p-12 border border-gray-200 shadow-sm relative opacity-60"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gray-300 rounded-t-[32px]"></div>
            <h3 className="text-2xl font-bold mb-8 text-center text-gray-500">既存のLINEツール<br/><span className="text-lg font-medium">(Lステップ等)</span></h3>
            
            <ul className="space-y-6">
              {[
                "シナリオ作成や分岐設定など、導入に膨大な時間と労力がかかる",
                "シナリオから外れた質問には結局「手動で返信」が必要",
                "営業時間外は自動応答メッセージのみで寄り添えない",
                "数千人のリスト一人一人の状況に合わせた個別営業は不可能"
              ].map((text, i) => (
                <li key={i} className="flex gap-4">
                  <div className="w-6 h-6 rounded-full bg-gray-100 flex items-center justify-center shrink-0 mt-0.5">
                    <X className="w-3.5 h-3.5 text-gray-400" />
                  </div>
                  <span className="text-[15px] font-medium text-gray-500 leading-relaxed">{text}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Quicka */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: 0.1 }}
            className="bg-gray-900 text-white rounded-[32px] p-8 md:p-12 border border-brand-gold/30 shadow-2xl relative"
          >
            <div className="absolute top-0 inset-x-0 h-1 bg-gradient-to-r from-brand-gold to-[#e5cf8b] rounded-t-[32px]"></div>
            <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-brand-gold text-white text-xs font-bold uppercase tracking-wider py-1.5 px-4 rounded-full">
              Quicka AI
            </div>
            
            <h3 className="text-2xl font-bold mb-8 text-center text-white">専属トップカウンセラー</h3>
            
            <ul className="space-y-6">
              {[
                "労働基準法を完全無視。同時に1,000人から相談が来ても全員に1秒で個別返信",
                "御院の治療方針を完璧に理解し、どんなイレギュラーな質問にもプロとして回答",
                "過去に登録した数千人のリスト全員の悩みと最終来院日を「完全記憶」",
                "ベストなタイミングでAIから「〇〇様、お目元の調子はいかがですか？」と個別フォロー"
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

      </div>
    </section>
  );
}
