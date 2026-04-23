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
      badge="新しい集客の常識"
      subBadge="これからの集客モデル"
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
          title: "AIコンシェルジュの「VIP応対」",
          description: "専門知識を持ったAIが24時間体制でお悩みに寄り添い、信頼関係を築きながら自然な流れで来院へと誘導します。",
          icon: <MessageCircle className="w-6 h-6" />,
          imageSrc: "/step_2_ai_concierge.png"
        },
        {
          title: "比較の排除と「確実な来院」",
          description: "会話が途切れた際も、AIが最適なタイミングで個別フォローを送信。他院の広告が届かないクローズド空間で、比較されることなく「ここで受けたい」という確実な来院を実現します。",
          icon: <CalendarCheck className="w-6 h-6" />,
          imageSrc: "/step_3_conversion.png"
        }
      ]}
      hideThemeToggle={true}
    />
  );
}
