import { motion } from "framer-motion";
import { Send, MessageCircle, Bot, Calendar, DollarSign, Clock, TrendingUp, ArrowUpRight, ArrowDownRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function MockDashboardUI() {
  const [scale, setScale] = useState(1);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const updateScale = () => {
      if (containerRef.current) {
        const width = containerRef.current.offsetWidth;
        setScale(Math.min(1, width / 1024));
      }
    };
    updateScale();
    window.addEventListener('resize', updateScale);
    return () => window.removeEventListener('resize', updateScale);
  }, []);

  const KPICard = ({ title, value, subtext, icon: Icon, colorClass, borderClass, bgClass }: any) => (
    <div className={`bg-white/5 backdrop-blur-md border ${borderClass} rounded-2xl p-5 flex flex-col justify-center shadow-lg transition-colors duration-300`}>
      <div className="flex justify-between items-start mb-3">
        <div>
          <p className="text-white/60 text-sm font-medium mb-1.5 flex items-center gap-1.5">{title}</p>
          <h3 className="text-4xl font-black text-white whitespace-nowrap">{value}</h3>
        </div>
        <div className={`p-3 rounded-xl ${bgClass}`}>
          <Icon size={24} className={`w-7 h-7 ${colorClass}`} />
        </div>
      </div>
      <div className="flex items-center text-xs mt-auto pt-2 border-t border-white/5">
        <span className="text-white/40">{subtext}</span>
      </div>
    </div>
  );

  return (
    <div ref={containerRef} className="w-full relative mx-auto" style={{ height: `${520 * scale}px`, maxWidth: '1024px' }}>
      <div 
        className="absolute top-0 left-0 w-[1024px] origin-top-left"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="w-full h-[520px] rounded-[32px] border border-white/10 bg-brand-dark/80 backdrop-blur-xl p-10 shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col justify-between">
          {/* 疑似UIヘッダー */}
          <div className="flex items-center gap-3 pb-4 border-b border-white/10 px-2 shrink-0">
            <div className="text-sm font-medium text-white/50 tracking-wide flex items-center gap-2">
              <span>Quicka CRM</span>
              <span className="w-1 h-1 rounded-full bg-white/20"></span>
              <span>ROI・KPI レポート</span>
            </div>
          </div>

          <div className="flex flex-col flex-1 justify-center gap-6 mt-6">
            {/* KPI Cards */}
            <div className="grid grid-cols-4 gap-4">
              <KPICard title="月間送信数" value="3,102" subtext="AIによる完全自動送信" colorClass="text-purple-400" borderClass="border-purple-500/20" bgClass="bg-purple-500/10" icon={Send} />
              <KPICard title="返信数" value="284" subtext="返信率 9.1%" colorClass="text-emerald-400" borderClass="border-emerald-500/20" bgClass="bg-emerald-500/10" icon={MessageCircle} />
              <KPICard title="AI対応数" value="195" subtext="自動で一次対応完了" colorClass="text-blue-400" borderClass="border-blue-500/20" bgClass="bg-blue-500/10" icon={Bot} />
              <KPICard title="商談予約数" value="42" subtext="カレンダー連携で確定" colorClass="text-amber-400" borderClass="border-amber-500/20" bgClass="bg-amber-500/10" icon={Calendar} />
            </div>

            {/* ROI Cards */}
            <div className="grid grid-cols-3 gap-4">
              {/* コスト削減額 */}
              <div className="bg-white/5 border border-emerald-500/30 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-emerald-500/10 to-transparent"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <p className="text-white/60 text-base font-medium mb-1 flex items-center gap-1.5">
                      <DollarSign size={16} className="text-emerald-400" />
                      創出された営業価値
                    </p>
                    <h3 className="text-4xl font-black text-white whitespace-nowrap">
                      <span className="text-emerald-400">¥1,890,000</span>
                    </h3>
                  </div>
                  <div className="p-3 bg-emerald-500/10 rounded-xl">
                    <DollarSign size={24} className="text-emerald-400" />
                  </div>
                </div>
                <div className="text-sm text-white/50 space-y-2 relative z-10 border-t border-white/5 pt-4">
                  <p className="flex justify-between"><span>工数削減:</span> <span className="text-white">¥630,000</span></p>
                  <p className="flex justify-between"><span>商談獲得価値:</span> <span className="text-white">¥1,260,000</span></p>
                </div>
              </div>

              {/* 時間節約 */}
              <div className="bg-white/5 border border-blue-500/30 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-blue-500/10 to-transparent"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <p className="text-white/60 text-base font-medium mb-1 flex items-center gap-1.5">
                      <Clock size={16} className="text-blue-400" />
                      節約された時間
                    </p>
                    <h3 className="text-4xl font-black text-white whitespace-nowrap">
                      <span className="text-blue-400">185</span>
                      <span className="text-lg font-bold text-white/40 ml-1">時間</span>
                    </h3>
                  </div>
                  <div className="p-3 bg-blue-500/10 rounded-xl">
                    <Clock size={24} className="text-blue-400" />
                  </div>
                </div>
                <div className="text-sm text-white/50 space-y-2 relative z-10 border-t border-white/5 pt-4">
                  <p className="flex justify-between"><span>フォーム送信:</span> <span className="text-white">125h</span></p>
                  <p className="flex justify-between"><span>AI自動返信:</span> <span className="text-white">60h</span></p>
                </div>
              </div>

              {/* 前月比改善 */}
              <div className="bg-white/5 border border-amber-500/30 rounded-2xl p-6 relative overflow-hidden flex flex-col justify-center">
                <div className="absolute top-0 right-0 w-48 h-full bg-gradient-to-l from-amber-500/10 to-transparent"></div>
                <div className="flex justify-between items-start mb-4 relative z-10">
                  <div>
                    <p className="text-white/60 text-base font-medium mb-1 flex items-center gap-1.5">
                      <TrendingUp size={16} className="text-amber-400" />
                      返信率（人間比較）
                    </p>
                    <h3 className="text-4xl font-black text-white flex items-center gap-1 whitespace-nowrap">
                      <span className="text-amber-400">+5.2%</span>
                      <ArrowUpRight size={28} className="text-amber-400" />
                    </h3>
                  </div>
                  <div className="p-3 bg-amber-500/10 rounded-xl">
                    <TrendingUp size={24} className="text-amber-400" />
                  </div>
                </div>
                <div className="text-sm text-white/50 space-y-2 relative z-10 border-t border-white/5 pt-4">
                  <p className="flex justify-between"><span>AI営業:</span> <span className="text-white font-bold">9.1%</span></p>
                  <p className="flex justify-between"><span>従来の人手:</span> <span className="text-white">3.9%</span></p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
