"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, Users } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "広告費の「ドブ捨て」",
    stat: "95%",
    description: "広告で集めても、予約する5%以外はすべて離脱し掛け捨てに。",
  },
  {
    icon: Target,
    title: "終わらない「価格競争」",
    stat: "無限比較",
    description: "常に他院と価格やメニューを比較され、値引き合戦で疲弊する。",
  },
  {
    icon: Users,
    title: "「休眠客」の放置",
    stat: "追客ゼロ",
    description: "一度来院したきりの患者様に個別連絡する人手も時間もない。",
  },
];

export function ClinicProblem() {
  return (
    <section className="py-24 md:py-32 bg-gray-50 text-gray-900 relative overflow-hidden">
      {/* 背景のグリッドパターン */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#00000005_1px,transparent_1px),linear-gradient(to_bottom,#00000005_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-6 relative z-10">
        
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-10 md:mb-16"
        >
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6 flex items-center justify-center gap-2">
            <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></span>
            美容業界の集客構造の限界
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.4] md:leading-[1.3] mb-8">
            値引き合戦の大通りから<br />
            抜け出しませんか？
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
          className="w-full relative"
        >
          <div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
            {/* Left content (Text & Metrics) */}
            <div className="flex-1 flex flex-col justify-center relative z-10 w-full">
              <div className="space-y-6 text-gray-700 text-lg leading-relaxed font-bold mb-10">
                <p>
                  大通りの「ショーウィンドウ」で他院と横並びになり、<br className="hidden xl:block" />「うちの方が安いですよ！」と通行人に声をかけ続ける集客。
                </p>
                <p className="text-gray-900 text-xl">
                  毎月高い広告費を払い、<span className="bg-brand-gold/20 px-2 py-0.5 rounded-md inline-block mt-1">新規客を奪い合い続けるモデル</span>は、もう限界です。
                </p>
              </div>

              {/* Problems List integrated into the left side */}
              <div className="flex flex-col gap-6">
                {problems.map((problem, i) => {
                  const Icon = problem.icon;
                  return (
                    <motion.div 
                      key={problem.title}
                      initial={{ opacity: 0, x: -20 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.3 + i * 0.1 }}
                      className="flex items-start gap-4 bg-white p-5 rounded-2xl shadow-sm border border-gray-100"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-50 flex items-center justify-center shrink-0 border border-gray-100">
                        <Icon className="w-5 h-5 text-gray-700" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 mb-1">
                          <h3 className="text-base font-bold text-gray-900">{problem.title}</h3>
                          <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full">{problem.stat}</span>
                        </div>
                        <p className="text-sm text-gray-600 leading-relaxed font-medium">
                          {problem.description}
                        </p>
                      </div>
                    </motion.div>
                  );
                })}
              </div>
            </div>
            
            {/* Right content (Illustration) */}
            <div className="flex-1 relative w-full aspect-square lg:aspect-[4/5] max-w-lg mx-auto lg:max-w-none">
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-200/60 rotate-2 hover:rotate-0 transition-transform duration-500 bg-white">
                <img 
                  src="/clinic-show-window.png" 
                  alt="比較サイトでの値引き合戦の様子" 
                  className="absolute inset-0 w-full h-full object-cover object-center" 
                />
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
