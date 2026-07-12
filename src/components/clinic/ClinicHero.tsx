"use client";

import { motion } from "framer-motion";
import { ArrowRight, Sparkles } from "lucide-react";

export function ClinicHero() {
  return (
    <div className="flex-1 max-w-[1440px] mx-auto px-6 pt-16 md:pt-20 pb-20 md:pb-24 relative z-10 grid lg:grid-cols-[1fr_460px] gap-8 lg:gap-12 items-center">
      <motion.div
        initial={{ opacity: 0, x: -20 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
        className="text-center lg:text-left flex flex-col items-center lg:items-start w-full"
      >
        <p className="text-brand-gold font-bold tracking-widest text-sm mb-6 uppercase">
          美容クリニック特化型 AIコンシェルジュ
        </p>
        <h1 className="text-[calc((100vw-48px)/14.5)] lg:text-[32px] xl:text-[48px] 2xl:text-[60px] font-black text-gray-900 tracking-tighter leading-[1.3] md:leading-[1.2] mb-5 md:mb-8 w-full text-center lg:text-left">
          <span className="whitespace-nowrap block">休眠リストを「予約」に変える</span>
          <span className="whitespace-nowrap block">御院専属の<span className="text-brand-gold">AIコンシェルジュ。</span></span>
        </h1>
        
        <div className="mb-6 md:mb-12 border-t-2 border-gray-100 pt-5 md:pt-6 max-w-[500px] w-full flex flex-col items-center lg:items-start">
          <ul className="space-y-3 mb-6 w-fit text-left">
            {[
              "休眠リストへの定期アプローチ",
              "深夜・休日の予約・問合せ対応",
              "来院後の丁寧なフォローアップ"
            ].map((item, i) => (
              <li key={i} className="flex items-center gap-3 text-lg md:text-[1.15rem] font-bold text-gray-800">
                <div className="flex items-center justify-center w-5 h-5 rounded-full bg-brand-gold/10 border border-brand-gold/30 text-brand-gold shrink-0">
                  <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                  </svg>
                </div>
                {item}
              </li>
            ))}
          </ul>
          <p className="hidden md:block text-base md:text-[1.05rem] text-gray-600 leading-relaxed font-bold text-center lg:text-left">
            スタッフの手を一切煩わせることなく、<br className="md:hidden" />プロ以上のLINE運用ができる。<br />
            御院の全知識を兼ね備え、<br className="md:hidden" />24時間休まず働くLINE担当者です。
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center lg:items-start gap-4 mb-2 md:mb-8 w-full justify-center lg:justify-start">
          <a href="/contact" className="bg-gray-900 text-white px-8 py-4 rounded-full font-bold text-lg hover:bg-gray-800 transition-colors flex items-center gap-2 mx-auto lg:mx-0 w-fit">
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
        <div className="absolute top-3 left-3 md:top-6 md:left-6 flex flex-col gap-1.5 md:gap-2 z-10">
          <div className="bg-black/40 backdrop-blur-md text-white/90 text-[11px] md:text-[13px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/20 w-fit shadow-sm">
            AIコンシェルジュ
          </div>
          <div className="bg-black/40 backdrop-blur-md text-white/90 text-[11px] md:text-[13px] font-bold px-3 py-1 md:px-4 md:py-1.5 rounded-full border border-white/20 flex items-center gap-1 md:gap-1.5 w-fit shadow-sm">
            <Sparkles className="w-3 h-3 md:w-3.5 md:h-3.5 text-brand-gold" fill="currentColor" />
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
            <div className="text-gray-900 font-bold text-[13px] md:text-[14px] mb-0.5">アクション自動検知</div>
            <div className="text-gray-600 font-medium text-[12px] md:text-[13px] leading-tight">〇〇様、キャンペーンについてご確認いただきありがとうございます。</div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
