"use client";

import { motion } from "framer-motion";
import { Globe, Film, LayoutDashboard } from "lucide-react";
import { MockFunnelUI } from "./mock-funnel";

const techs = [
  {
    icon: Globe,
    title: "サイトワイド学習（RAG）",
    description:
      "URLを入力するだけで、御社のWebサイトやサービス資料の情報をAIが丸ごと学習。見込み客からの質問に対して、的外れな回答をしません。常に正確で、御社の強みを活かした受け答えをします。",
  },
  {
    icon: Film,
    title: "パーソナライズ動画生成",
    description:
      "相手企業のサイトキャプチャや社名を動画内に自動合成。テキストだけのメールと比べ、開封率・クリック率が劇的に向上。「自分のために作られた動画」という特別感が、商談への扉を開きます。",
  },
  {
    icon: LayoutDashboard,
    title: "内蔵CRM",
    description:
      "リードの検知・アプローチ状況・メールスレッド・商談進捗まで、すべてを一つの画面で完結。高額な外部SFAツールの導入は不要です。営業活動の全記録が、御社の永続的な資産になります。",
  },
];

export function TechnologySection() {
  return (
    <section className="py-28 bg-brand-green text-white relative overflow-hidden" id="technology">
      {/* 背景のアクセント */}
      <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-gold/5 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-white/5 rounded-full blur-[100px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-20"
        >
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            コアテクノロジー
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6">
            なぜ、人間のように営業できるのか
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
            「すごそうだけど本当に大丈夫？」── その疑問に、技術で答えます。
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 mb-24">
          {techs.map((tech, i) => {
            const Icon = tech.icon;
            return (
              <motion.div
                key={tech.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.12 }}
                className="group"
              >
                <div className="h-full rounded-[28px] border border-white/10 bg-white/5 p-8 backdrop-blur-sm transition-all hover:bg-white/10 hover:border-white/20">
                  {/* アイコン */}
                  <div className="w-14 h-14 rounded-2xl border border-brand-gold/30 bg-brand-gold/10 flex items-center justify-center mb-8 group-hover:bg-brand-gold/20 transition-colors">
                    <Icon className="w-6 h-6 text-brand-gold" />
                  </div>

                  {/* 内容 */}
                  <h3 className="text-xl font-bold mb-4 tracking-tight leading-snug">
                    {tech.title}
                  </h3>
                  <p className="text-[15px] text-white/60 leading-relaxed tracking-wide">
                    {tech.description}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* ネイティブ描画のファネルUIモック */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-white mb-4">
              データドリブンな営業パイプライン
            </h3>
            <p className="text-white/60 text-[15px] max-w-2xl mx-auto">
              獲得したリードがどのように商談化していくか。ファネル全体を可視化し、<br className="hidden md:block" />
              最も歩留まりの良いアプローチをAIが自己学習して改善し続けます。
            </p>
          </div>
          
          <MockFunnelUI />
        </motion.div>
      </div>
    </section>
  );
}
