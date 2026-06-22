"use client";

import { motion } from "framer-motion";
import { AlertCircle, Target, Users } from "lucide-react";

const problems = [
  {
    icon: AlertCircle,
    title: "形骸化した「LINE運用」",
    stat: "一斉配信のみ",
    description: "日々の業務に追われ、個別チャットや的確なフォローができず、一方的なお知らせ配信に留まっている。",
  },
  {
    icon: Target,
    title: "見込み客の「熱量低下」",
    stat: "他院への流出",
    description: "せっかく登録してくれた美容感度の高い方も徐々に冷め、最終的には他院の割引広告へ流れてしまう。",
  },
  {
    icon: Users,
    title: "膨大な「リストの死蔵」",
    stat: "機会損失",
    description: "高い広告費を無駄にしないためにLINEを始めたのに、増え続けるリストを来院に繋げられていない。",
  },
];

export function ClinicProblem() {
  return (
    <section className="py-24 md:py-32 bg-gray-900 text-white relative overflow-hidden">
      {/* 背景のグリッドパターン */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:5rem_5rem] pointer-events-none" />

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
            LINE運用の現状と課題
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-[1.4] md:leading-[1.3] mb-8 text-white">
            せっかく集めたLINEリスト、<br />
            「宝の持ち腐れ」になっていませんか？
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
              <div className="space-y-6 text-gray-300 text-lg leading-relaxed font-bold mb-10">
                <p>
                  目の前の業務で手一杯になり、<br className="hidden xl:block" />集客の要であるLINE運用が疎かになっていませんか？
                </p>
                <p className="text-white text-xl leading-relaxed">
                  定型文の自動応答と一斉配信だけの運用では、<br className="hidden xl:block" /><span className="bg-brand-gold/20 text-brand-gold px-2 py-0.5 rounded-md inline-block mt-1 xl:mt-2">せっかくお金をかけて集めた友達リストを来院に繋げられません。</span>
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
                      className="flex items-start gap-4 bg-gray-800 p-5 rounded-2xl shadow-sm border border-gray-700"
                    >
                      <div className="w-12 h-12 rounded-xl bg-gray-900 flex items-center justify-center shrink-0 border border-gray-700">
                        <Icon className="w-5 h-5 text-gray-300" />
                      </div>
                      <div>
                        <div className="flex items-baseline gap-3 mb-1">
                          <h3 className="text-base font-bold text-white">{problem.title}</h3>
                          <span className="text-xs font-bold text-brand-gold bg-brand-gold/10 px-2 py-0.5 rounded-full">{problem.stat}</span>
                        </div>
                        <p className="text-sm text-gray-400 leading-relaxed font-medium">
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
              <div className="absolute inset-0 rounded-3xl overflow-hidden shadow-2xl border border-gray-700 rotate-2 hover:rotate-0 transition-transform duration-500 bg-gray-800 flex flex-col items-center justify-center p-6 lg:p-10">
                <div className="w-full rounded-2xl overflow-hidden border border-gray-600 shadow-2xl relative">
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/40 to-transparent z-10 pointer-events-none"></div>
                  <img 
                    src="/clinic-staff-vertical.png" 
                    alt="目の前の業務とLINE対応に追われるスタッフ" 
                    className="w-full h-auto object-cover relative z-0" 
                  />
                </div>
                <div className="mt-8 lg:mt-10 text-center">
                  <div className="inline-flex items-center justify-center gap-2 bg-red-500/10 border border-red-500/20 text-red-400 font-bold px-4 py-1.5 rounded-full text-sm mb-4">
                    <AlertCircle className="w-4 h-4" />
                    「人力対応」の限界
                  </div>
                  <p className="text-gray-300 text-sm lg:text-base font-bold leading-relaxed">
                    日々の業務とLINE対応の両立は<br />人間のスタッフでは物理的に不可能です
                  </p>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
