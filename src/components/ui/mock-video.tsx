import { motion } from "framer-motion";
import { Play, Volume2, Maximize, Settings, FileText, BarChart2 } from "lucide-react";

export function MockVideoUI() {
  return (
    <div className="w-full max-w-4xl mx-auto rounded-[32px] border border-gray-200 bg-white p-4 shadow-2xl relative overflow-hidden flex flex-col md:flex-row gap-4">
      {/* 動画プレイヤー領域 */}
      <div className="flex-1 relative rounded-[24px] overflow-hidden bg-brand-dark aspect-video md:aspect-auto">
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent z-10" />
        
        {/* モックの動画背景 (波形アニメーションなどで代替) */}
        <div className="absolute inset-0 flex items-center justify-center opacity-30">
          <motion.div 
            animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
            transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
            className="w-48 h-48 rounded-full bg-brand-gold blur-[60px]"
          />
        </div>

        {/* AIの人物アイコン風 */}
        <div className="absolute inset-0 flex items-center justify-center z-0">
           <svg width="120" height="120" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round" className="text-white/20">
             <path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path>
             <circle cx="12" cy="7" r="4"></circle>
           </svg>
        </div>

        {/* AI吹き出しアニメーション */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
          className="absolute top-6 left-6 z-20 bg-white/10 backdrop-blur-md border border-white/20 rounded-2xl p-4 max-w-[280px]"
        >
          <div className="flex items-center gap-2 mb-2">
            <div className="w-2 h-2 rounded-full bg-brand-gold animate-pulse"></div>
            <span className="text-white/90 text-xs font-bold tracking-widest uppercase">Quicka AI</span>
          </div>
          <p className="text-white text-sm leading-relaxed">
            「〇〇株式会社の田中様、御社の最新プレスリリースを拝見し、専用の提案をご用意しました。」
          </p>
        </motion.div>

        {/* コントロールバー */}
        <div className="absolute bottom-6 left-6 right-6 z-20 flex flex-col gap-3">
          <div className="h-1.5 w-full bg-white/20 rounded-full overflow-hidden">
            <motion.div 
              initial={{ width: "0%" }}
              animate={{ width: "45%" }}
              transition={{ duration: 5, ease: "linear", repeat: Infinity }}
              className="h-full bg-brand-gold"
            />
          </div>
          <div className="flex items-center justify-between text-white">
            <div className="flex items-center gap-4">
              <button className="hover:text-brand-gold transition-colors"><Play size={20} fill="currentColor" /></button>
              <button className="hover:text-brand-gold transition-colors"><Volume2 size={20} /></button>
              <span className="text-xs font-medium text-white/70">01:24 / 02:15</span>
            </div>
            <div className="flex items-center gap-4">
              <button className="hover:text-brand-gold transition-colors"><Settings size={18} /></button>
              <button className="hover:text-brand-gold transition-colors"><Maximize size={18} /></button>
            </div>
          </div>
        </div>
      </div>

      {/* サイドパネル（AIインサイト） */}
      <div className="w-full md:w-72 flex flex-col gap-4">
        <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-5 flex-1">
          <div className="flex items-center gap-2 mb-4">
            <FileText size={16} className="text-brand-green" />
            <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Company Insight</span>
          </div>
          <h4 className="font-bold text-gray-900 mb-2">〇〇株式会社</h4>
          <ul className="space-y-3">
            <li className="text-sm text-gray-600 border-l-2 border-brand-green pl-3">
              <span className="font-bold text-gray-800 block mb-0.5">課題分析</span>
              新規リード獲得のCPA高騰
            </li>
            <li className="text-sm text-gray-600 border-l-2 border-brand-green pl-3">
              <span className="font-bold text-gray-800 block mb-0.5">直近の動き</span>
              海外展開に向けた採用強化
            </li>
          </ul>
        </div>
        
        <div className="bg-gray-50 border border-gray-100 rounded-[20px] p-5">
          <div className="flex items-center gap-2 mb-4">
            <BarChart2 size={16} className="text-brand-gold" />
            <span className="text-xs font-bold text-gray-500 tracking-widest uppercase">Engagement</span>
          </div>
          <div className="flex items-center justify-between">
            <span className="text-sm font-medium text-gray-700">視聴完了予測</span>
            <span className="text-lg font-black text-brand-gold">86%</span>
          </div>
          <div className="h-1.5 w-full bg-gray-200 rounded-full mt-2 overflow-hidden">
             <div className="h-full bg-brand-gold w-[86%]"></div>
          </div>
        </div>
      </div>
    </div>
  );
}
