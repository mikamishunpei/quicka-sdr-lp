"use client";
import { Card, CardContent, CardHeader } from "@/components/ui/card";
import { TimelineContent } from "@/components/ui/timeline-animation";
import { VerticalCutReveal } from "@/components/ui/vertical-cut-reveal";
import { cn } from "@/lib/utils";
import NumberFlow from "@number-flow/react";
import { Briefcase, CheckCheck, Database, Server, Plus, Zap } from "lucide-react";
import { motion } from "framer-motion";
import { useRef, useState } from "react";

const plans = [
  {
    name: "インバウンド特化",
    description: "既存リードや問い合わせの取りこぼしをゼロにしたい企業様へ",
    price: 30000,
    yearlyPrice: 30000,
    priceLabel: "/ 月",
    subPriceText: "アウトバウンド機能なし",
    buttonText: "このプランで始める",
    buttonVariant: "outline" as const,
    features: [
      { text: "自然流入へのAI即レス (無制限)", icon: <CheckCheck size={20} /> },
      { text: "AI営業マンの育成 (RAG学習)", icon: <Server size={20} /> },
      { text: "専用ダッシュボード / CRM機能", icon: <Database size={20} /> },
    ],
    includes: [
      "月額基本料金に含まれるもの:",
      "パーソナライズ動画の即時合成",
      "自社データ解析・タグ自動生成",
      "導入までのオンボーディング支援",
    ],
  },
  {
    name: "ハイブリッド (送信成功課金)",
    description: "守りの即レスに加え、攻めの新規開拓も自動化したい企業様へ",
    price: 150000,
    yearlyPrice: 150000,
    priceLabel: "〜 (初月)",
    subPriceText: "内訳: 月額3万円 ＋ クレジット12万円",
    buttonText: "一番人気のプランで始める",
    buttonVariant: "default" as const,
    popular: true,
    features: [
      { text: "インバウンド特化の全機能", icon: <CheckCheck size={20} /> },
      { text: "新規開拓 3,000クレジット付与", icon: <Briefcase size={20} /> },
      { text: "送信成功分のみ消費・無期限繰越", icon: <Server size={20} /> },
    ],
    includes: [
      "アウトバウンド機能 (クレジット消費):",
      "AIによるターゲット企業の自動抽出",
      "複数キャンペーンの同時実行",
      "ABテストの自動最適化",
      "優先サポート対応",
    ],
  },
  {
    name: "完全成果報酬 (アポ獲得課金)",
    description: "アポが取れるまで費用ゼロ。ノーリスクで新規開拓を始めたい企業様へ",
    price: 150000,
    yearlyPrice: 150000,
    displayPrice: "15,000",
    priceLabel: "/ 1アポ",
    subPriceText: "※初期構築費として別途5万円",
    buttonText: "テスト枠の空きを確認する",
    buttonVariant: "outline" as const,
    isPerformanceBased: true,
    features: [
      { text: "アポ獲得時のみ自動決済 (Stripe)", icon: <Zap size={20} /> },
      { text: "インバウンド特化の全機能込み", icon: <CheckCheck size={20} /> },
      { text: "送信数無制限 (システムが自動調整)", icon: <Briefcase size={20} /> },
    ],
    includes: [
      "成果報酬プランの適用条件:",
      "専用カレンダー経由のアポのみ対象",
      "クレジットカードの事前登録必須",
      "※月間テスト枠に上限があります",
    ],
  },
];

const PricingSwitch = ({
  onSwitch,
  className,
}: {
  onSwitch: (value: string) => void;
  className?: string;
}) => {
  const [selected, setSelected] = useState("0");

  const handleSwitch = (value: string) => {
    setSelected(value);
    onSwitch(value);
  };

  return (
    <div className={cn("flex justify-center", className)}>
      <div className="relative z-10 mx-auto flex w-fit rounded-xl bg-neutral-50 border border-gray-200 p-1">
        <button
          onClick={() => handleSwitch("0")}
          className={cn(
            "relative z-10 w-fit cursor-pointer h-12 rounded-xl sm:px-6 px-3 sm:py-2 py-1 font-medium transition-colors sm:text-base text-sm",
            selected === "0"
              ? "text-white"
              : "text-muted-foreground hover:text-black",
          )}
        >
          {selected === "0" && (
            <motion.span
              layoutId={"switch"}
              className="absolute top-0 left-0 h-12 w-full rounded-xl border-4 shadow-sm shadow-orange-600 border-orange-600 bg-gradient-to-t from-orange-500 via-orange-400 to-orange-600"
              transition={{ type: "spring", stiffness: 500, damping: 30 }}
            />
          )}
          <span className="relative">テストマーケティング特別プラン</span>
        </button>
      </div>
    </div>
  );
};

export const Pricing = () => {
  const [isYearly, setIsYearly] = useState(false);
  const timelineRef = useRef(null);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 15,
      },
    },
  };

  return (
    <div className="py-24 bg-white" ref={timelineRef}>
      <div className="container mx-auto px-4 max-w-7xl">
        <div className="text-center mb-16">
          <VerticalCutReveal
            splitBy="words"
            staggerDuration={0.1}
            textClassName="justify-center text-4xl md:text-5xl font-bold tracking-tight mb-4 text-black"
          >
            リスクゼロのAI営業導入
          </VerticalCutReveal>
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="text-lg md:text-xl text-gray-500 max-w-3xl mx-auto mb-8 leading-relaxed"
          >
            お客様の導入ハードルを極限まで下げるため、3つのアプローチをご用意しました。<br className="hidden md:block" />
            特に「アポ獲得ごとの完全成果報酬プラン」は、パイロット期間のみの特別枠となります。
          </motion.p>
          <PricingSwitch onSwitch={(v) => setIsYearly(v === "1")} />
        </div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
          className="grid lg:grid-cols-3 gap-8 items-start"
        >
          {plans.map((plan, index) => (
            <TimelineContent
              key={index}
              animationNum={index}
              customVariants={itemVariants}
            >
              <Card
                className={cn(
                  "relative flex flex-col h-full overflow-hidden transition-all duration-300",
                  plan.popular
                    ? "border-orange-500 shadow-xl shadow-orange-500/10 scale-105 z-10"
                    : plan.isPerformanceBased 
                      ? "border-blue-300 hover:border-blue-500 hover:shadow-xl hover:shadow-blue-500/10 mt-0 lg:mt-4" 
                      : "border-gray-200 hover:border-gray-300 hover:shadow-lg mt-0 lg:mt-4"
                )}
              >
                {plan.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-orange-500 text-white text-center text-sm font-semibold py-1">
                    圧倒的推奨
                  </div>
                )}
                {plan.isPerformanceBased && !plan.popular && (
                  <div className="absolute top-0 right-0 left-0 bg-blue-500 text-white text-center text-sm font-semibold py-1">
                    最強のオファー
                  </div>
                )}
                <CardHeader className={cn("text-center pb-6 border-b border-gray-100", plan.popular || plan.isPerformanceBased ? "pt-12" : "pt-8")}>
                  <h3 className="text-xl font-bold mb-3">{plan.name}</h3>
                  <p className="text-gray-500 text-sm h-10 px-2 leading-relaxed">{plan.description}</p>
                  
                  <div className="mt-6">
                    <div className="flex items-end justify-center gap-1 mb-1">
                      <span className="text-gray-500 font-semibold mb-2">¥</span>
                      <span className="text-4xl md:text-5xl font-bold text-gray-900 tracking-tight">
                        {plan.displayPrice ? (
                          plan.displayPrice
                        ) : (
                          <NumberFlow
                            value={isYearly ? plan.yearlyPrice : plan.price}
                            format={{ style: "decimal" }}
                          />
                        )}
                      </span>
                      <span className="text-gray-500 font-medium mb-2 ml-1 whitespace-nowrap">{plan.priceLabel}</span>
                    </div>
                    <p className={cn("text-xs font-medium inline-block px-3 py-1 rounded-full mt-2", 
                      plan.isPerformanceBased ? "text-blue-700 bg-blue-50" : "text-orange-600 bg-orange-50"
                    )}>
                      {plan.subPriceText}
                    </p>
                  </div>
                </CardHeader>
                
                <CardContent className="flex-1 flex flex-col pt-6">
                  <div className="space-y-4 mb-8">
                    {plan.features.map((feature, i) => (
                      <div key={i} className="flex items-center gap-3">
                        <div className={cn("flex-shrink-0", plan.isPerformanceBased ? "text-blue-500" : (i === 0 ? "text-green-500" : "text-orange-500"))}>
                          {feature.icon}
                        </div>
                        <span className="text-gray-800 font-medium">{feature.text}</span>
                      </div>
                    ))}
                  </div>

                  <div className="bg-gray-50 rounded-xl p-5 flex-1 border border-gray-100">
                    <ul className="space-y-3">
                      {plan.includes.map((include, i) => (
                        <li key={i} className="flex items-start gap-2.5">
                          {i === 0 ? (
                            <span className="text-xs font-bold text-gray-500 uppercase tracking-wider mb-1 block w-full border-b border-gray-200 pb-2">
                              {include}
                            </span>
                          ) : (
                            <>
                              <Plus className="flex-shrink-0 w-4 h-4 text-gray-400 mt-0.5" />
                              <span className="text-sm text-gray-600 leading-snug">
                                {include}
                              </span>
                            </>
                          )}
                        </li>
                      ))}
                    </ul>
                  </div>

                  <div className="mt-6">
                    <button
                      className={cn(
                        "w-full py-4 rounded-xl font-bold transition-all duration-200 shadow-sm",
                        plan.buttonVariant === "default"
                          ? "bg-gray-900 text-white hover:bg-black hover:shadow-md"
                          : plan.isPerformanceBased
                            ? "bg-blue-50 text-blue-700 border-2 border-blue-200 hover:bg-blue-500 hover:text-white"
                            : "bg-white text-gray-900 border border-gray-200 hover:border-gray-400 hover:bg-gray-50"
                      )}
                    >
                      {plan.buttonText}
                    </button>
                  </div>
                </CardContent>
              </Card>
            </TimelineContent>
          ))}
        </motion.div>
      </div>
    </div>
  );
};
