import { motion } from "framer-motion";
import { Search, Filter, MoreHorizontal, CheckCircle2, Circle, Clock, Mail, Calendar } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function MockCRMTableUI() {
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

  const leads = [
    { name: "田中 健太", company: "株式会社テクノベース", status: "商談予約", statusColor: "text-amber-400 bg-amber-400/10 border-amber-400/20", icon: Calendar, time: "10分前" },
    { name: "佐藤 美咲", company: "グローバルシステムズ", status: "返信あり", statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", icon: Mail, time: "1時間前" },
    { name: "鈴木 一郎", company: "ネクスト・イノベーション", status: "AI対応中", statusColor: "text-blue-400 bg-blue-400/10 border-blue-400/20", icon: Clock, time: "2時間前" },
    { name: "高橋 誠", company: "フューチャー・ソリューションズ", status: "送信済み", statusColor: "text-white/60 bg-white/5 border-white/10", icon: CheckCircle2, time: "昨日" },
    { name: "伊藤 結衣", company: "アドバンスド・マーケティング", status: "返信あり", statusColor: "text-emerald-400 bg-emerald-400/10 border-emerald-400/20", icon: Mail, time: "昨日" },
  ];

  return (
    <div ref={containerRef} className="w-full relative mx-auto" style={{ height: `${520 * scale}px`, maxWidth: '1024px' }}>
      <div 
        className="absolute top-0 left-0 w-[1024px] origin-top-left"
        style={{ transform: `scale(${scale})` }}
      >
        <div className="w-full h-[520px] rounded-[32px] border border-white/10 bg-brand-dark/80 backdrop-blur-xl shadow-[0_32px_64px_-16px_rgba(0,0,0,0.5)] overflow-hidden flex flex-col">
          {/* 疑似UIヘッダー */}
          <div className="flex items-center justify-between p-6 border-b border-white/10 shrink-0">
            <div className="flex items-center gap-4">
              <div className="text-sm font-medium text-white/90 tracking-wide">
                リード管理リスト
              </div>
            </div>
            <div className="flex gap-3">
              <div className="px-4 py-2 rounded-xl bg-white/5 border border-white/10 text-white/60 text-sm flex items-center gap-2">
                <Search size={16} /> 検索...
              </div>
              <div className="p-2 rounded-xl bg-white/5 border border-white/10 text-white/60 flex items-center">
                <Filter size={16} />
              </div>
            </div>
          </div>

          {/* テーブル領域 */}
          <div className="flex-1 flex flex-col p-6 overflow-x-auto scrollbar-thin scrollbar-thumb-white/10">
            <div className="min-w-max flex-1 flex flex-col">
              {/* テーブルヘッダー */}
              <div className="grid grid-cols-12 gap-4 pb-4 border-b border-white/10 text-xs font-bold text-white/40 tracking-wider uppercase mb-2 px-2 shrink-0">
                <div className="col-span-3">担当者名</div>
                <div className="col-span-4">企業名</div>
                <div className="col-span-3">ステータス</div>
                <div className="col-span-2 text-right">最終更新</div>
              </div>
              
              {/* テーブル行 */}
              <div className="flex-1 flex flex-col justify-between">
                {leads.map((lead, i) => (
                  <motion.div 
                    key={`desk-${i}`}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.1 }}
                    className="grid grid-cols-12 gap-4 py-3 items-center hover:bg-white/5 rounded-xl px-2 transition-colors cursor-pointer group"
                  >
                    <div className="col-span-3 flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-brand-gold/20 flex items-center justify-center text-brand-gold font-bold text-xs shrink-0">
                        {lead.name.charAt(0)}
                      </div>
                      <span className="text-white text-sm font-medium truncate">{lead.name}</span>
                    </div>
                    <div className="col-span-4 text-white/70 text-sm truncate">
                      {lead.company}
                    </div>
                    <div className="col-span-3">
                      <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md text-xs border font-medium ${lead.statusColor}`}>
                        <lead.icon size={12} />
                        {lead.status}
                      </span>
                    </div>
                    <div className="col-span-2 flex items-center justify-end gap-4 text-white/40 text-sm">
                      <span>{lead.time}</span>
                      <button className="opacity-0 group-hover:opacity-100 transition-opacity">
                        <MoreHorizontal size={16} />
                      </button>
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
