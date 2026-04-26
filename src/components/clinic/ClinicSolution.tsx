"use client";

import { HeroMonochrome } from "@/components/ui/hero-monochrome";
import { Megaphone, MessageCircle, CalendarCheck } from "lucide-react";

export function ClinicSolution() {
  return (
    <HeroMonochrome
      title={
        <>
          「LINE誘導」だけでは、もう勝てない。<br />
          利益を最大化する「最強の受け皿」へ。
        </>
      }
      description={
        <>
          せっかくLINEへ誘導しても、単なる「予約受付」として放置していませんか？<br />
          Quickaは、あなたのLINEアカウントに専属のAIスタッフを配置。24時間365日の個別フォローで、バケツの穴から漏れていた「95%の見込み客」を自動で来院へと引き上げます。
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
          title: "休眠リストの「再活性化」",
          description: "LINEに登録したまま、色を失い放置されている「休眠顧客」たち。AIが一人ひとりの温度感に合わせて適切なタイミングでアプローチし、眠っているリストを確実な来院（資産）へと変えます。",
          icon: <Megaphone className="w-6 h-6" />,
          imageSrc: "/step_1_invitation.png"
        },
        {
          title: "自分だけの専属カウンセラー",
          description: "一斉送信ではなく、AIが一人ひとりの悩みや過去の会話を記憶して個別対応。「今すぐじゃない客」とも時間をかけて確かな信頼関係を構築します。",
          icon: <MessageCircle className="w-6 h-6" />,
          imageSrc: "/step_2_ai_concierge.png"
        },
        {
          title: "接触頻度で信頼される",
          description: "会話が途切れた際も、AIが最適なタイミングで個別フォローを送信。他院の広告が届かないクローズド空間で、比較されることなく「ここで受けたい」という確実な来院を実現します。",
          icon: <CalendarCheck className="w-6 h-6" />,
          imageSrc: "/step_3_conversion.png"
        }
      ]}
      hideThemeToggle={true}
      forceTheme="light"
    />
  );
}
