"use client";

import { motion } from "framer-motion";

export function FinalCTA() {
  return (
    <section className="py-28 bg-brand-dark px-6 overflow-hidden relative">
      {/* 背景装飾 */}
      <div className="absolute inset-0 bg-hero-texture opacity-20 pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-brand-gold/5 rounded-full blur-[150px] pointer-events-none" />

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto relative z-10 rounded-[36px] border border-white/10 bg-white/5 backdrop-blur-xl p-14 md:p-20 text-center"
      >
        <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-8">
          まずは体験してみてください
        </p>
        <h2 className="text-3xl md:text-5xl font-bold mb-8 text-white tracking-tight leading-tight">
          AIに営業されてみませんか？
        </h2>
        <p className="text-lg text-white/60 mb-12 max-w-2xl mx-auto leading-relaxed tracking-wide">
          御社のドメインを教えてください。10分以内に、あなた向けのパーソナライズ営業動画をお届けします。
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <button className="bg-white text-[#0a0d0c] px-10 py-5 rounded-full text-lg font-bold tracking-wide hover:scale-[1.03] transition-all shadow-2xl">
            無料デモを体験する
          </button>
        </div>
        <p className="text-xs text-white/30 mt-6 tracking-wide">
          契約不要・クレジットカード登録不要
        </p>
      </motion.div>
    </section>
  );
}

export function Footer() {
  return (
    <footer className="bg-brand-dark border-t border-white/5 py-20 px-6">
      <div className="max-w-7xl mx-auto grid md:grid-cols-4 gap-12">
        <div>
          <div className="text-2xl font-bold mb-4 tracking-tight text-white">Quicka</div>
          <p className="text-white/40 text-sm leading-relaxed tracking-wide">
            営業のファーストタッチを再発明する
          </p>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white text-sm tracking-wide">機能</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li><a className="hover:text-white transition-colors" href="/#solution">解決策</a></li>
            <li><a className="hover:text-white transition-colors" href="/#flywheel">仕組み</a></li>
            <li><a className="hover:text-white transition-colors" href="/#technology">技術</a></li>
          </ul>
        </div>
        <div>
          <h4 className="font-bold mb-6 text-white text-sm tracking-wide">サポート</h4>
          <ul className="space-y-3 text-sm text-white/50">
            <li><a className="hover:text-white transition-colors" href="/contact">お問い合わせ</a></li>
            <li><a className="hover:text-white transition-colors" href="/zoom-guide">Zoom連携ガイド</a></li>
          </ul>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-16 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-white/30 tracking-wide">
        <p>© 2026 Quicka Inc. All rights reserved.</p>
        <div className="flex gap-6">
          <a className="hover:text-white transition-colors" href="/legal">特定商取引法に基づく表記</a>
          <a className="hover:text-white transition-colors" href="/privacy-policy">プライバシーポリシー</a>
          <a className="hover:text-white transition-colors" href="/terms-of-service">利用規約</a>
        </div>
      </div>
    </footer>
  );
}
