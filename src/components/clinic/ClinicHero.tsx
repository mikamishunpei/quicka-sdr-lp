"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

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

      {/* ヒーロー動画 & UIオーバーレイ */}
      <motion.div 
        initial={{ opacity: 0, x: 20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.7, delay: 0.2 }}
        className="w-full max-w-[460px] mx-auto lg:ml-auto lg:mr-0 aspect-[3/4] bg-gray-100 rounded-[2rem] border border-gray-200 shadow-2xl overflow-hidden relative"
      >
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
        />

        {/* Top Left Badges */}
        <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
          <div className="bg-black/40 backdrop-blur-md text-white/90 text-[13px] font-bold px-4 py-1.5 rounded-full border border-white/20 w-fit shadow-sm">
            AIコンシェルジュ
          </div>
          <div className="bg-black/40 backdrop-blur-md text-white/90 text-[13px] font-bold px-4 py-1.5 rounded-full border border-white/20 flex items-center gap-1.5 w-fit shadow-sm">
            <Sparkles className="w-3.5 h-3.5 text-brand-gold" fill="currentColor" />
            24時間365日 自動対応
          </div>
        </div>
        
        {/* Bottom LINE Message Overlay */}
        <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/90 backdrop-blur-xl border border-gray-100/50 rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 z-10 shadow-lg">
          <img 
            src="/line_logo_official.png" 
            alt="LINE"
            className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] object-cover rounded-[12px] md:rounded-[14px] shrink-0 shadow-md border border-black/5"
          />
          <div>
            <div className="text-gray-900 font-bold text-[13px] md:text-[14px] mb-0.5">LINEご予約対応</div>
            <div className="text-gray-600 font-medium text-[12px] md:text-[13px] leading-tight">〇〇様、ご希望の空き枠を確認いたしました。</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
