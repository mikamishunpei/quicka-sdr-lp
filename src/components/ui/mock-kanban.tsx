import { motion } from "framer-motion";
import { MessageSquare, Calendar, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";

export function MockKanbanUI() {
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

  type CardType = {
    company: string;
    person: string;
    time: string;
    active?: boolean;
    highlight?: boolean;
  };

  const columns: { title: string; count: number; color: string; headerColor: string; cards: CardType[] }[] = [
    {
      title: "送信済み",
      count: 145,
      color: "border-gray-500/30",
      headerColor: "bg-gray-500/10 text-gray-400",
      cards: [
        { company: "株式会社A", person: "山田", time: "2時間前" },
        { company: "B株式会社", person: "中村", time: "3時間前" },
      ]
    },
    {
      title: "返信あり",
      count: 24,
      color: "border-blue-500/30",
      headerColor: "bg-blue-500/10 text-blue-400",
      cards: [
        { company: "Cソリューションズ", person: "木村", time: "10分前", active: true },
      ]
    },
    {
      title: "AI対応中",
      count: 12,
      color: "border-emerald-500/30",
      headerColor: "bg-emerald-500/10 text-emerald-400",
      cards: [
        { company: "Dシステム", person: "高橋", time: "今すぐ" },
        { company: "Eコーポレーション", person: "鈴木", time: "5分前" },
      ]
    },
    {
      title: "商談予約",
      count: 5,
      color: "border-amber-500/30",
      headerColor: "bg-amber-500/10 text-amber-400",
      cards: [
        { company: "Fテクノロジー", person: "佐藤", time: "明日 14:00", highlight: true },
      ]
    }
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
                パイプライン・カンバンボード
              </div>
            </div>
          </div>

          {/* カンバン領域 */}
          <div className="flex-1 overflow-x-auto p-6 scrollbar-thin scrollbar-thumb-white/10">
            <div className="flex gap-6 h-full min-w-max">
              {columns.map((col, i) => (
                <div key={col.title} className={`w-64 flex flex-col rounded-2xl border ${col.color} bg-white/[0.02] shrink-0`}>
                  <div className={`p-3 rounded-t-2xl ${col.headerColor} flex justify-between items-center text-sm font-bold border-b ${col.color}`}>
                    <span>{col.title}</span>
                    <span className="bg-brand-dark px-2 py-0.5 rounded-full text-xs">{col.count}</span>
                  </div>
                  <div className="p-3 flex-1 flex flex-col gap-3 overflow-y-auto">
                    {col.cards.map((card, j) => (
                      <motion.div 
                        key={`mob-kan-${j}`}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: i * 0.1 + j * 0.1 }}
                        className={`bg-white/5 border ${card.highlight ? 'border-amber-500/50 shadow-[0_0_15px_rgba(245,158,11,0.2)]' : card.active ? 'border-blue-500/50' : 'border-white/10'} rounded-xl p-3 cursor-pointer hover:bg-white/10 transition-colors group relative`}
                      >
                        {card.active && (
                          <div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-blue-500 animate-pulse"></div>
                        )}
                        <h4 className="text-white text-sm font-bold mb-1">{card.company}</h4>
                        <p className="text-white/50 text-xs mb-3">{card.person} 様</p>
                        <div className="flex justify-between items-center text-xs">
                          <span className={`flex items-center gap-1 ${card.highlight ? 'text-amber-400' : 'text-white/40'}`}>
                            {card.highlight ? <Calendar size={12} /> : <MessageSquare size={12} />}
                            {card.time}
                          </span>
                          <ChevronRight size={14} className="text-white/20 group-hover:text-white/60" />
                        </div>
                      </motion.div>
                    ))}
                    
                    <div className="border-2 border-dashed border-white/5 rounded-xl h-20 flex items-center justify-center mt-auto">
                      <span className="text-white/20 text-xs font-bold">+ 追加</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
