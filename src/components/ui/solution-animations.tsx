"use client";

import { motion } from "framer-motion";
import { Send, Building2, MessageSquare, Clock, CheckCircle2, Database } from "lucide-react";

export const OutboundAnimation = () => {
  return (
    <div className="relative w-full h-full bg-gradient-to-br from-slate-900 to-slate-800 overflow-hidden">
      {/* Central AI Node (Salesman Video) */}
      <motion.div
        className="absolute z-20 w-[100px] h-[100px] rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(0,122,255,0.5)] border-2 border-white/20 overflow-hidden bg-slate-800"
        style={{ left: "50%", top: "50%", x: -50, y: -50 }}
        animate={{
          boxShadow: ["0 0 20px rgba(0,122,255,0.4)", "0 0 70px rgba(0,122,255,0.8)", "0 0 20px rgba(0,122,255,0.4)"],
        }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
      >
        <video 
          className="w-full h-full object-cover scale-[1.15]"
          style={{ objectPosition: 'center 15%' }}
          src="/Man_in_business_suit_smiling_delpmaspu_.mp4"
          autoPlay 
          loop 
          muted 
          playsInline
        />
        <div className="absolute inset-0 bg-[#007AFF]/10 mix-blend-overlay pointer-events-none"></div>
      </motion.div>

      {/* Target Nodes arranged in an oval */}
      {[
        { dx: -150, dy: -65, delay: 0 },
        { dx: -80, dy: -105, delay: 0.2 },
        { dx: 0, dy: -125, delay: 0.4 },
        { dx: 80, dy: -105, delay: 0.6 },
        { dx: 150, dy: -65, delay: 0.8 },
        { dx: -150, dy: 65, delay: 1.0 },
        { dx: -80, dy: 105, delay: 1.2 },
        { dx: 0, dy: 125, delay: 1.4 },
        { dx: 80, dy: 105, delay: 1.6 },
        { dx: 150, dy: 65, delay: 1.8 },
      ].map((target, index) => (
        <div key={`target-${index}`}>
          {/* Building */}
          <motion.div
            className="absolute z-10 w-10 h-10 bg-white/10 rounded-xl flex items-center justify-center border border-white/20"
            style={{ left: "50%", top: "50%", x: target.dx - 20, y: target.dy - 20 }}
            initial={{ opacity: 0.5 }}
            animate={{ opacity: [0.3, 1, 0.3] }}
            transition={{ duration: 2, delay: target.delay, repeat: Infinity }}
          >
            <Building2 className="w-5 h-5 text-white/70" />
          </motion.div>

          {/* Flying message */}
          <motion.div
            className="absolute z-15 w-6 h-6 bg-[#007AFF] rounded-full flex items-center justify-center shadow-lg"
            style={{ left: "50%", top: "50%" }}
            initial={{ x: -12, y: -12, opacity: 0, scale: 0 }}
            animate={{
              x: [-12, target.dx * 0.85 - 12],
              y: [-12, target.dy * 0.85 - 12],
              opacity: [0, 1, 0],
              scale: [0.5, 1, 0.8],
            }}
            transition={{
              duration: 1.5,
              delay: target.delay,
              repeat: Infinity,
              ease: "easeOut",
            }}
          >
            <Send className="w-3 h-3 text-white" />
          </motion.div>
        </div>
      ))}

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '24px 24px' }}></div>
    </div>
  );
};

export const KnowledgeAnimation = () => {
  return (
    <div className="relative w-full h-full bg-slate-50 flex items-center justify-center overflow-hidden p-4 sm:p-6 md:p-10">
      <div className="w-full max-w-md bg-white rounded-2xl shadow-xl border border-gray-100 p-4 sm:p-6 md:p-8 flex flex-col gap-4 md:gap-5 relative z-10">
        
        {/* User Question */}
        <motion.div 
          className="self-end bg-gray-100 rounded-2xl rounded-tr-sm px-3 py-2.5 sm:px-4 sm:py-3 max-w-[90%] md:max-w-[85%]"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
        >
          <p className="text-[13px] sm:text-sm text-gray-700">御社のセキュリティ要件について、ISMSに準拠していますか？また具体的なデータ暗号化方式を教えてください。</p>
        </motion.div>

        {/* AI Thinking/Processing */}
        <motion.div 
          className="self-start flex gap-2 items-center text-brand-gold bg-brand-gold/10 px-3 py-1.5 rounded-full"
          initial={{ opacity: 0 }}
          animate={{ opacity: [0, 1, 0] }}
          transition={{ duration: 2, delay: 1, times: [0, 0.2, 1], repeat: Infinity, repeatDelay: 5 }}
        >
          <Database className="w-3.5 h-3.5 animate-pulse" />
          <span className="text-xs font-medium">ナレッジベースを検索中...</span>
        </motion.div>

        {/* AI Answer */}
        <motion.div 
          className="self-start bg-gradient-to-br from-brand-dark to-slate-800 rounded-2xl rounded-tl-sm px-4 py-3 sm:px-5 sm:py-4 max-w-[95%] shadow-md text-white"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 2.5 }}
        >
          <div className="flex items-center gap-3 mb-3">
            <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-white/20 bg-slate-800 shrink-0 shadow-md">
              <video 
                className="w-full h-full object-cover scale-[1.15]"
                style={{ objectPosition: 'center 15%' }}
                src="/Man_in_business_suit_smiling_delpmaspu_.mp4"
                autoPlay 
                loop 
                muted 
                playsInline
              />
            </div>
            <span className="text-base sm:text-lg font-bold text-white">AI営業マン</span>
          </div>
          <p className="text-[13px] sm:text-sm text-white/90 leading-relaxed">
            はい、ISMS（ISO27001）に準拠しております。
            データは保存時・通信時ともにAES-256を用いて暗号化されており、エンタープライズ水準のセキュリティを確保しています。詳細なセキュリティホワイトペーパーもございますが、お送りいたしましょうか？
          </p>
        </motion.div>
      </div>

      {/* Decorative background elements */}
      <motion.div 
        className="absolute top-10 right-10 w-32 h-32 bg-brand-gold/10 rounded-full blur-2xl"
        animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
      />
    </div>
  );
};

export const NurturingAnimation = () => {
  return (
    <div className="relative w-full h-full bg-slate-900 flex items-center justify-center overflow-hidden p-6 md:p-10">
      <div className="w-full max-w-sm flex flex-col relative z-10">
        
        {/* State 1: Sleeping */}
        <div className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-4 z-10 backdrop-blur-sm">
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-slate-700 flex items-center justify-center shrink-0">
              <Clock className="w-5 h-5 text-slate-400" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">過去の失注リード</div>
              <div className="text-[11px] sm:text-xs text-slate-400">「時期尚早」で6ヶ月前にストップ</div>
            </div>
          </div>
          <div className="text-xs px-2 py-1 bg-slate-800 text-slate-400 rounded-md border border-slate-700 shrink-0">休眠中</div>
        </div>

        {/* Timeline Line & AI Action */}
        <div className="relative pl-8 ml-5 py-6 border-l-2 border-dashed border-brand-gold/30">
          
          {/* Animated Particle traveling down the line */}
          <motion.div 
            className="absolute left-[-5px] w-2 h-8 bg-brand-gold rounded-full shadow-[0_0_15px_rgba(255,189,46,0.8)]"
            initial={{ top: 0, opacity: 0 }}
            animate={{ top: ["0%", "100%"], opacity: [0, 1, 1, 0] }}
            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
          />

          <motion.div 
            className="relative bg-slate-800/80 border border-brand-gold/30 backdrop-blur-md rounded-xl p-3 sm:p-4 shadow-lg"
            initial={{ opacity: 0, x: -15 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
          >
            <div className="flex items-center gap-3 mb-3">
              <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-full overflow-hidden border-2 border-brand-gold/50 shrink-0 shadow-md">
                <video 
                  className="w-full h-full object-cover scale-[1.15]"
                  style={{ objectPosition: 'center 15%' }}
                  src="/Man_in_business_suit_smiling_delpmaspu_.mp4"
                  autoPlay loop muted playsInline
                />
              </div>
              <span className="text-base sm:text-lg font-bold text-brand-gold">AIが自動再アプローチ</span>
            </div>
            <p className="text-[12px] sm:text-[13px] text-white/90 leading-relaxed">
              過去の失注理由を解析。<br/>
              類似業界での最新の<span className="font-semibold text-brand-gold border-b border-brand-gold/30">導入成功事例</span>を添えて、パーソナライズされた提案メールを自動送信。
            </p>
          </motion.div>
        </div>

        {/* State 2: Active/Hot */}
        <motion.div 
          className="flex items-center justify-between bg-gradient-to-r from-brand-gold/10 to-transparent border border-brand-gold/40 rounded-xl p-4 z-10 backdrop-blur-sm"
          initial={{ opacity: 0.5, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 1.5 }}
        >
          <div className="flex items-center gap-3">
            <div className="w-10 h-10 rounded-full bg-brand-gold/20 flex items-center justify-center border border-brand-gold/50 shrink-0 shadow-[0_0_15px_rgba(255,189,46,0.3)]">
              <MessageSquare className="w-5 h-5 text-brand-gold" />
            </div>
            <div>
              <div className="text-sm font-medium text-white">商談獲得！</div>
              <div className="text-[11px] sm:text-xs text-brand-gold/90 mt-0.5">「自社にもドンピシャですね。来週話せますか？」</div>
            </div>
          </div>
          <div className="text-[11px] sm:text-xs px-2 py-1 bg-emerald-500/20 text-emerald-400 rounded-md border border-emerald-500/30 flex items-center gap-1 shrink-0 font-medium">
            <CheckCircle2 className="w-3 h-3" />
            商談化
          </div>
        </motion.div>
      </div>

      {/* Abstract Grid Background */}
      <div className="absolute inset-0 z-0 opacity-[0.05]" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '32px 32px' }}></div>
    </div>
  );
};
