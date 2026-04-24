"use client";

import { HeroMonochrome } from "@/components/ui/hero-monochrome";
import { Megaphone, MessageCircle, CalendarCheck } from "lucide-react";

export function ClinicSolution() {
  return (
    <HeroMonochrome
      title={
        <>
          「比較される集客」から抜け出し、<br />
          「御院だけ」が選ばれるVIP集客へ。
        </>
      }
      description={
        <>
          ホームページから逃がしていた95%の患者様を、他院が見えないクローズドな「VIPラウンジ（LINE）」へご招待します。そこでAIコンシェルジュが24時間寄り添い、「御院だから行きたい」というファンへと育て上げます。
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
          title: "95%の「囲い込み」",
          description: "他院が少数の「今すぐ客」を安さで取り合っている中、「まずは相談」という低いハードルで残りの95%を囲い込みます。",
          icon: <Megaphone className="w-6 h-6" />,
          imageSrc: "/step_1_invitation.png"
        },
        {
          title: "24時間即レスの個別対応",
          description: "専門知識を持ったAIが24時間体制でお悩みに寄り添い、信頼関係を築きながら自然な流れで来院へと誘導します。",
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
