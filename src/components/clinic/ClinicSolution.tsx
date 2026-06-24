"use client";

import { HeroMonochrome } from "@/components/ui/hero-monochrome";
import { Zap, MousePointerClick, Gift, Bell } from "lucide-react";

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
          icon: <Zap className="w-6 h-6 text-brand-gold" />
        },
        {
          title: "アクションを検知し話しかける",
          description: "リッチメニューのタップなどの行動（アクション）をAIが自動検知。「何かお探しですか？」と、スタッフのような自然なトーンで話しかけます。",
          icon: <MousePointerClick className="w-6 h-6 text-brand-gold" />
        },
        {
          title: "専用の特別クーポンを発行",
          description: "過去の会話内容を分析し、「〇〇でお悩みだった方へ」など、その人のためだけにパーソナライズされた特別なクーポンを自動で発行します。",
          icon: <Gift className="w-6 h-6 text-brand-gold" />
        },
        {
          title: "使用期限を自動リマインド",
          description: "「クーポンの有効期限が明日までとなっております」など、適切なタイミングで期限をリマインド。忘れがちな特典の利用を促し、確実に来院へと繋げます。",
          icon: <Bell className="w-6 h-6 text-brand-gold" />
        }
      ]}
      hideThemeToggle={true}
      forceTheme="light"
    />
  );
}
