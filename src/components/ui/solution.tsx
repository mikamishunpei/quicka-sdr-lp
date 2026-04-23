"use client";

import { motion } from "framer-motion";
import { Send, BrainCircuit, RefreshCw, ChevronRight, ChevronLeft } from "lucide-react";
import { MockDashboardUI } from "./mock-dashboard";
import { MockCRMTableUI } from "./mock-crm-table";
import { MockKanbanUI } from "./mock-kanban";
import { Feature108 } from "@/components/blocks/shadcnblocks-com-feature108";
import { useRef } from "react";

import { OutboundAnimation, KnowledgeAnimation, NurturingAnimation } from "./solution-animations";

const solutionTabs = [
  {
    value: "tab-1",
    icon: <Send className="h-auto w-4 shrink-0" />,
    label: "新規リードの獲得",
    content: {
      badge: "Lead Generation",
      title: "月3,000件のアプローチで新規リードを自動獲得",
      description:
        "AIがターゲット企業ごとに最適な文面を生成し、問い合わせフォームへ自動アプローチ。枯渇しがちな新規リードを毎月安定的に獲得し、商談機会を最大化します。",
      buttonText: "詳細を見る",
      visual: <OutboundAnimation />,
    },
  },
  {
    value: "tab-2",
    icon: <BrainCircuit className="h-auto w-4 shrink-0" />,
    label: "専門知識で即答",
    content: {
      badge: "AI Response",
      title: "御社のエース営業レベルの即時レスポンス",
      description:
        "御社のWebサイトや過去の提案資料を学習したAIが、技術的な質問や複雑な要件にも24時間365日即座に回答。見込み客の熱量が最も高い瞬間を逃さず商談へ繋げます。",
      buttonText: "AIを試す",
      visual: <KnowledgeAnimation />,
    },
  },
  {
    value: "tab-3",
    icon: <RefreshCw className="h-auto w-4 shrink-0" />,
    label: "自動ナーチャリング",
    content: {
      badge: "Nurturing",
      title: "休眠リストを資産に変える",
      description:
        "「今はタイミングが違う」で終わらせない。AIが過去の会話を完全記憶し、適切な時期に切り口を変えた追客を自動実行。放置されていた見込み客を商談化へ引き戻します。",
      buttonText: "仕組みを見る",
      visual: <NurturingAnimation />,
    },
  },
];

export function SolutionSection() {
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  const scrollLeft = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft <= 10) {
        scrollContainerRef.current.scrollTo({ left: scrollWidth, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: -clientWidth, behavior: "smooth" });
      }
    }
  };

  const scrollRight = () => {
    if (scrollContainerRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollContainerRef.current;
      if (scrollLeft + clientWidth >= scrollWidth - 10) {
        scrollContainerRef.current.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        scrollContainerRef.current.scrollBy({ left: clientWidth, behavior: "smooth" });
      }
    }
  };

  return (
    <section className="bg-[#fafafa] text-[#0a0d0c] pb-28" id="solution">
      {/* 新しいタブUI (Feature108) を上部に配置 */}
      <Feature108 
        badge="解決策"
        heading="営業のファーストタッチをAIに任せる"
        description="リスト作成・送信・返信・追客。人間が疲弊する反復作業を、AIが24時間365日、トップセールスの品質で代行します。"
        tabs={solutionTabs}
      />

      <div className="max-w-7xl mx-auto px-6 mt-12">

        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <div className="text-center mb-8">
            <h3 className="text-2xl font-bold tracking-tight text-[#0a0d0c] mb-4">
              すべてを一つの画面で可視化
            </h3>
            <p className="text-[#666] text-[15px] max-w-2xl mx-auto mb-6">
              SDR活動の全記録とROI（投資対効果）をリアルタイムで確認できる、Quicka内蔵のCRMダッシュボード。横にスクロールして各画面をご覧ください。
            </p>
            
            <div className="flex items-center justify-center gap-4 mb-2">
              <button onClick={scrollLeft} className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
                <ChevronLeft size={20} className="text-gray-600" />
              </button>
              <div className="flex gap-2">
                <div className="w-2 h-2 rounded-full bg-brand-gold"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
                <div className="w-2 h-2 rounded-full bg-gray-300"></div>
              </div>
              <button onClick={scrollRight} className="p-2 rounded-full bg-white border border-gray-200 shadow-sm hover:bg-gray-50 transition-colors">
                <ChevronRight size={20} className="text-gray-600" />
              </button>
            </div>
          </div>
          
          {/* 横スクロールコンテナ */}
          <div className="relative rounded-[36px] p-2 bg-gradient-to-b from-gray-200 to-gray-50 shadow-2xl">
            {/* 上部のブラウザヘッダー風装飾 */}
            <div className="absolute top-6 left-6 flex gap-2 z-20">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
              <div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
            </div>
            
            {/* スクロール領域 */}
            <div 
              ref={scrollContainerRef}
              className="bg-brand-dark rounded-[32px] pt-16 pb-12 overflow-x-auto flex snap-x snap-mandatory hide-scrollbar"
              style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
            >
              <div className="min-w-full flex-shrink-0 snap-center px-4 lg:px-8">
                <MockDashboardUI />
              </div>
              <div className="min-w-full flex-shrink-0 snap-center px-4 lg:px-8">
                <MockKanbanUI />
              </div>
              <div className="min-w-full flex-shrink-0 snap-center px-4 lg:px-8">
                <MockCRMTableUI />
              </div>
            </div>
          </div>
          <style dangerouslySetInnerHTML={{__html: `
            .hide-scrollbar::-webkit-scrollbar {
              display: none;
            }
          `}} />
        </motion.div>
      </div>
    </section>
  );
}
