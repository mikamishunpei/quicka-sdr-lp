"use client";

import { HeroMonochrome } from "@/components/ui/hero-monochrome";
import { Zap, MousePointerClick, Gift, Bell, User } from "lucide-react";

export function ClinicSolution() {
  return (
    <HeroMonochrome
      title={
        <>
          AIでLINE運用を完全自動化<br />
          来院に繋げる4つの機能
        </>
      }
      description={
        <>
          Quickaは、御院のLINEアカウントに無限に働くAIスタッフを配備。<br />
          LINEリストを常に監視し、プロでも不可能な24時間体制の個別対応を実現します。
        </>
      }
      badge={
        <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-brand-gold/30 shadow-sm relative z-10 flex items-center gap-2 mx-auto w-fit">
          <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
          <span className="text-[13px] font-black text-brand-gold tracking-[0.2em] uppercase">
            新しい集客の常識
          </span>
        </div>
      }
      primaryButtonText="VIPラウンジを構築する"
      primaryButtonHref="/contact"
      layout="centered"
      steps={[
        {
          title: "お問い合わせに即時返信",
          description: "日々の質問やお問い合わせに、AIが24時間体制で即時返信。深夜のお問い合わせにも一瞬で対応し、見込み客の熱量を逃しません。",
          icon: <Zap className="w-6 h-6 text-brand-gold" />,
          imageSrc: "/solution_step_1.png"
        },
        {
          title: "アクションを検知し話しかける",
          description: "リッチメニューのタップなどの行動（アクション）をAIが自動検知。「何かお探しですか？」と、スタッフのような自然なトーンで話しかけます。",
          icon: <MousePointerClick className="w-6 h-6 text-brand-gold" />,
          imageSrc: "/solution_step_2.png"
        },
        {
          title: "専用の特別クーポンを発行",
          description: "過去の会話内容を分析し、「〇〇でお悩みだった方へ」など、その人のためだけにパーソナライズされた特別なクーポンを自動で発行します。",
          icon: <Gift className="w-6 h-6 text-brand-gold" />,
          imageSrc: "/solution_step_3.png",
          isScreenshot: true,
          customContent: (
            <div className="w-full h-full bg-[#90B4D6] px-[4cqw] pt-[15cqw] pb-[4cqw] overflow-hidden relative">
              <div className="flex items-start">
                <div className="w-[12cqw] h-[12cqw] rounded-full bg-[#D9E2F1] flex-shrink-0 mr-[2cqw] flex items-center justify-center mt-[1cqw]">
                  <User className="w-[7cqw] h-[7cqw] text-white" />
                </div>
                
                <div className="bg-white rounded-[4cqw] rounded-tl-none flex-1 overflow-hidden shadow-sm">
                  <div className="p-[3cqw] border-b border-gray-100">
                    <div className="flex items-center mb-[1cqw]">
                      <div className="w-[7cqw] h-[7cqw] rounded-full bg-gray-200 overflow-hidden mr-[2cqw]">
                        <img src="https://images.unsplash.com/photo-1543466835-00a7907e9de1?w=100&h=100&fit=crop" alt="User" className="w-full h-full object-cover" />
                      </div>
                      <span className="font-bold text-gray-900 text-[4cqw] leading-none">しゅんぺい</span>
                    </div>
                    <p className="text-[3.5cqw] text-gray-600 pl-[9cqw] leading-[1.4]">
                      3万円以下でダウンタイムが短いやつを教えて欲しいです。
                    </p>
                  </div>
                  
                  <div className="p-[3cqw] text-[3.5cqw] text-gray-800 leading-[1.6] font-medium">
                    しゅんぺいさん<br />
                    以前お話しされていた3万円以下のダウンタイムが短い施術について、その後状況いかがですか？😊<br /><br />
                    より安心してご相談いただけるよう、今回特別にボトックスのみ50%OFFの枠をご案内できないか調整してみたのですが、いかがでしょうか？<br /><br />
                    少しでも気になることやご不安な点がございましたら、お気軽にご相談ください😊
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "使用期限を自動リマインド",
          description: "「クーポンの有効期限が明日までとなっております」など、適切なタイミングで期限をリマインド。忘れがちな特典の利用を促し、確実に来院へと繋げます。",
          icon: <Bell className="w-6 h-6 text-brand-gold" />,
          imageSrc: "/solution_step_4.png"
        }
      ]}
      hideThemeToggle={true}
      forceTheme="light"
    />
  );
}
