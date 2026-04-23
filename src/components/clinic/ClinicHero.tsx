"use client";

import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function ClinicHero() {
  return (
    <div className="flex-1 max-w-7xl mx-auto px-6 pt-20 pb-24 relative z-10 grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-left"
      >
        <p className="text-brand-gold font-bold tracking-widest text-sm mb-6 uppercase">
          美容クリニック特化型 AIコンシェルジュ
        </p>
        <h1 className="text-4xl md:text-6xl lg:text-[4rem] font-black text-gray-900 tracking-tight leading-[1.2] mb-8">
          御院専属の、<br />
          <span className="text-brand-gold">AIコンシェルジュ。</span>
        </h1>
        <p className="text-lg md:text-xl text-gray-600 mb-10 max-w-2xl leading-relaxed font-bold">
          深夜2時のお問い合わせにも即時対応。<br />
          ホームページからの離脱を防ぎ、確実な予約へと導きます。
        </p>
        
        <div className="flex flex-col sm:flex-row items-start gap-4 mb-8">
          <a href="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors flex items-center gap-2">
            無料で試す
            <ArrowRight className="w-5 h-5" />
          </a>
        </div>
      </motion.div>

      {/* 動画プレースホルダー */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-md mx-auto lg:max-w-none aspect-[4/5] sm:aspect-square lg:aspect-[4/5] xl:aspect-square bg-gray-200/50 rounded-[2rem] border border-gray-200 shadow-2xl overflow-hidden flex items-center justify-center relative"
      >
        <div className="absolute inset-0 bg-gradient-to-tr from-gray-100 to-white opacity-50" />
        <p className="text-gray-400 font-bold tracking-widest uppercase relative z-10">
          Hero Video Placeholder
        </p>
      </motion.div>
    </div>
  );
}
