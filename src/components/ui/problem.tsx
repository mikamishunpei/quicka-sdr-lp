"use client";

import { motion } from "framer-motion";
import { Clock, Archive, Moon } from "lucide-react";

const problems = [
  {
    icon: Moon,
    title: "夜間・休日の機会損失",
    stat: "ゼロ",
    statLabel: "営業時間外の対応力",
    description:
      "見込み客が最も情報収集を行う夜間や休日に即座に対応できず、翌営業日に連絡した頃にはすでに「検討外」になっていることが多々あります。",
  },
  {
    icon: Clock,
    title: "初期対応の遅れ",
    stat: "5分",
    statLabel: "商談化率が急落するデッドライン",
    description:
      "リード発生から5分以内に対応できなければ、見込み客の熱量は一気に冷め、競合他社に流れます。人間が常時待機し即時対応を続けるのは不可能です。",
  },
  {
    icon: Archive,
    title: "「そのうち客」の放置と枯渇",
    stat: "放置",
    statLabel: "フォローアップ漏れによる機会損失",
    description:
      "今すぐ客ではない「そのうち客」は、人力の営業では対応優先度が下がりがちです。結果として放置され、見込み客リストが枯渇する悪循環に陥ります。",
  },
];

export function ProblemSection() {
  return (
    <section className="py-24 md:py-32 bg-brand-dark text-white relative overflow-hidden">
      {/* 背景のグリッドパターン */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff03_1px,transparent_1px),linear-gradient(to_bottom,#ffffff03_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      {/* うっすらと赤い警告グラデーション */}
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-red-500/20 to-transparent"></div>
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[150%] md:w-[800px] h-[300px] md:h-[400px] bg-red-900/10 rounded-full blur-[80px] md:blur-[120px] pointer-events-none" />

      <div className="max-w-5xl mx-auto px-6 relative z-10">
        
        {/* Compact Header: Leaky Bucket Problem */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16 md:mb-20"
        >
          <p className="text-red-400 text-xs font-bold uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-red-500 animate-pulse"></span>
            いま起きている最大の問題
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.4] md:leading-[1.3] mb-8">
            広告費を無駄にする<br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-red-400 to-red-600">「穴の空いたバケツ」</span>問題
          </h2>
        </motion.div>
          
        <div className="grid md:grid-cols-3 gap-6 mb-10 md:mb-12">
          {problems.map((problem, i) => {
            const Icon = problem.icon;
            return (
              <motion.div
                key={problem.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                className="group relative"
              >
                {/* 背景のアニメーション効果 */}
                <div className="absolute inset-0 bg-gradient-to-b from-red-500/0 to-red-500/5 rounded-[28px] opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                
                <div className="h-full rounded-[28px] border border-white/5 bg-white/[0.02] p-8 backdrop-blur-sm transition-all hover:border-red-500/20 hover:bg-white/[0.04] relative z-10">
                  {/* アイコン */}
                  <div className="w-12 h-12 rounded-xl border border-red-500/20 bg-red-500/5 flex items-center justify-center mb-6 group-hover:border-red-500/40 group-hover:bg-red-500/10 transition-colors relative overflow-hidden">
                    <Icon className="w-5 h-5 text-red-400 relative z-10" />
                  </div>

                  {/* 数字 */}
                  <div className="mb-6">
                    <p className="text-4xl md:text-5xl font-black tracking-tight text-white/90">
                      {problem.stat}
                    </p>
                    <p className="text-[10px] md:text-xs text-red-400 font-bold tracking-widest uppercase mt-2">
                      {problem.statLabel}
                    </p>
                  </div>

                  {/* タイトル・説明 */}
                  <h3 className="text-base md:text-lg font-bold mb-3 tracking-tight text-white/90 group-hover:text-red-300 transition-colors">
                    {problem.title}
                  </h3>
                  <p className="text-[13px] md:text-sm text-white/50 leading-relaxed tracking-wide group-hover:text-white/70 transition-colors">
                    {problem.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Conclusion / Paradigm Shift */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-3xl mx-auto text-center"
        >
          <div className="space-y-4 text-white/80 text-lg md:text-xl leading-relaxed font-medium">
            <p>
              人間が対応する以上、これまでバケツの穴は「当たり前」であり、<br className="hidden sm:block" />仕方がないことだとされてきました。
            </p>
            <p className="text-white font-bold">
              しかし、AIが登場した今、これを取り入れない企業は<span className="bg-red-600 text-white px-2 py-0.5 rounded-md mx-1">完全に時代に置いていかれます。</span>
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
