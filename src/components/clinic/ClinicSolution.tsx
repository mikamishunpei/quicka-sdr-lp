"use client";

import { HeroMonochrome } from "@/components/ui/hero-monochrome";
import { Zap, MousePointerClick, Gift, Bell, User } from "lucide-react";

export function ClinicSolution() {
  return (
    <HeroMonochrome
      title={
        <>
          AIでLINE運用を<br className="md:hidden" />完全自動化<br />
          来院に繋げる<br className="md:hidden" />4つの機能
        </>
      }
      description={
        <>
          <span className="hidden md:block">
            Quickaは、御院のLINEアカウントに無限に働くAIスタッフを配備。<br />
            段階的にアプローチが強力になる「何層にもわたる追客設計」により、<br />
            獲得したリストを1件も無駄にしません。<br />
            プロでも不可能な24時間体制の個別対応を実現します。
          </span>
          <span className="block md:hidden">
            Quickaは、御院のLINEアカウントに<br />
            無限に働くAIスタッフを配備。<br />
            「何層にもわたる追客設計」により、<br />
            獲得したリストを1件も無駄にしません。
          </span>
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
          targetStateEmoji: "🙎‍♀️✨",
          targetStateText: "「すぐに対応してくれて信頼できる！」",
          heatLevel: 3,
          description: "日々の質問やお問い合わせに、AIが24時間体制で即時返信。深夜のお問い合わせにも一瞬で対応し、見込み客の熱量を逃しません。",
          icon: <Zap className="w-6 h-6 text-brand-gold" />,
          imageSrc: "/solution_step_1.png",
          isScreenshot: true,
          customContent: (
            <div className="w-full h-full bg-[#90B4D6] px-[3cqw] pt-[15cqw] pb-[4cqw] rounded-t-[1.4rem] relative">
              {/* Massive dark overlay triggered by group-hover */}
              <div className="absolute -inset-[1000px] bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-40 pointer-events-none" />

              {/* User Message (Right) */}
              <div className="flex justify-end mb-[4cqw]">
                <div className="flex items-end max-w-[85cqw]">
                  <div className="mr-[1.5cqw] text-[2.5cqw] text-gray-600 text-right leading-tight mb-[1cqw] flex-shrink-0">
                    既読<br/>16:29
                  </div>
                  <div className="bg-[#85E249] rounded-[4cqw] rounded-tr-none px-[3.5cqw] py-[2.5cqw] text-gray-900 shadow-sm">
                    <p className="text-[3.5cqw] leading-[1.5] font-medium">
                      肌のシミに悩んでいるんですが、どんな施術がおすすめですか？
                    </p>
                  </div>
                </div>
              </div>

              {/* AI Message (Left) */}
              <div className="flex items-start relative z-50 transform origin-top-left transition-all duration-700 ease-out group-hover:scale-[1.35] group-hover:-translate-y-[18cqw] group-hover:-translate-x-[16cqw]">
                <div className="w-[10cqw] h-[10cqw] rounded-full bg-[#D9E2F1] flex-shrink-0 mr-[2cqw] flex items-center justify-center mt-[1cqw] overflow-hidden">
                  <img src="/hero_clinic_receptionist.png" alt="AI コンシェルジュ" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex items-end max-w-[82cqw]">
                  <div className="bg-white rounded-[4cqw] rounded-tl-none px-[3.5cqw] py-[3cqw] shadow-sm group-hover:shadow-2xl transition-shadow duration-700">
                    <div className="text-[3.5cqw] text-gray-800 leading-[1.6] font-medium">
                      しゅんぺい様、シミについてお悩みとのこと、ご相談いただきありがとうございます😊<br /><br />
                      当院では、シミの種類や状態に合わせて様々な治療法をご用意しております。シミ取りレーザーや、エレクトロポレーションのシミ・くすみ・肝斑セットなどがございます。<br /><br />
                      しゅんぺい様に最も適したプランをご提案させていただくため、差し支えなければ、どのようなシミが一番気になっていらっしゃるか、もう少し詳しく教えていただけますでしょうか？✨
                    </div>
                  </div>
                  <div className="ml-[1.5cqw] text-[2.5cqw] text-gray-600 mb-[1cqw] flex-shrink-0 group-hover:opacity-0 transition-opacity duration-300">
                    16:30
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "アクションを検知し話しかける",
          targetStateEmoji: "🙎‍♀️💡",
          targetStateText: "「ちょうど気になってたタイミング！」",
          heatLevel: 3,
          description: "リッチメニューのタップなどの行動（アクション）をAIが自動検知。「何かお探しですか？」と、スタッフのような自然なトーンで話しかけます。",
          icon: <MousePointerClick className="w-6 h-6 text-brand-gold" />,
          imageSrc: "/solution_step_2.png",
          isScreenshot: true,
          customContent: (
            <div className="w-full h-full bg-[#90B4D6] px-[3cqw] pt-[15cqw] pb-[4cqw] rounded-t-[1.4rem] relative">
              {/* Massive dark overlay triggered by group-hover */}
              <div className="absolute -inset-[1000px] bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-40 pointer-events-none" />

              {/* AI Message (Left) */}
              <div className="flex items-start mt-[4cqw] relative z-50 transform origin-top-left transition-all duration-700 ease-out group-hover:scale-[1.5] group-hover:-translate-y-[4cqw] group-hover:-translate-x-[20cqw]">
                <div className="w-[10cqw] h-[10cqw] rounded-full bg-[#D9E2F1] flex-shrink-0 mr-[2cqw] flex items-center justify-center mt-[1cqw] overflow-hidden">
                  <img src="/hero_clinic_receptionist.png" alt="AI コンシェルジュ" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex items-end max-w-[82cqw]">
                  <div className="bg-white rounded-[4cqw] rounded-tl-none px-[3.5cqw] py-[3cqw] shadow-sm group-hover:shadow-2xl transition-shadow duration-700">
                    <div className="text-[3.5cqw] text-gray-800 leading-[1.6] font-medium">
                      しゅんぺい様<br />
                      当クリニックのキャンペーンについてご確認いただきありがとうございます。<br /><br />
                      キャンペーンの対象となる施術の詳細や効果など、少しでも気になる点がございましたら、いつでもお気軽にご相談ください😊
                    </div>
                  </div>
                  <div className="ml-[1.5cqw] text-[2.5cqw] text-gray-600 mb-[1cqw] flex-shrink-0 group-hover:opacity-0 transition-opacity duration-300">
                    11:39
                  </div>
                </div>
              </div>
            </div>
          )
        },
        {
          title: "専用の特別クーポンを発行",
          targetStateEmoji: "🙎‍♀️💖",
          targetStateText: "「以前の相談、覚えていてくれた！」",
          heatLevel: 3,
          description: "過去の会話で関心や悩みを強く表していたメッセージを引用し、それに合わせた特別オファーを送信して休眠リードを強力に掘り起こします。",
          icon: <Gift className="w-6 h-6 text-brand-gold" />,
          imageSrc: "/solution_step_3.png",
          isScreenshot: true,
          customContent: (
            <div className="w-full h-full bg-[#90B4D6] px-[4cqw] pt-[15cqw] pb-[4cqw] rounded-t-[1.4rem] relative">
              {/* Massive dark overlay triggered by group-hover */}
              <div className="absolute -inset-[1000px] bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-40 pointer-events-none" />

              <div className="flex items-start relative z-50 transform origin-top-left transition-all duration-700 ease-out group-hover:scale-[1.3] group-hover:-translate-y-[16cqw] group-hover:-translate-x-[12cqw]">
                <div className="w-[12cqw] h-[12cqw] rounded-full bg-[#D9E2F1] flex-shrink-0 mr-[2cqw] flex items-center justify-center mt-[1cqw] overflow-hidden">
                  <img src="/hero_clinic_receptionist.png" alt="AI コンシェルジュ" className="w-full h-full object-cover" />
                </div>
                
                <div className="bg-white rounded-[4cqw] rounded-tl-none flex-1 overflow-hidden shadow-sm group-hover:shadow-2xl transition-shadow duration-700">
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
          targetStateEmoji: "🙎‍♀️🏃‍♀️",
          targetStateText: "「せっかくの機会だし、予約しよう！」",
          heatLevel: 3,
          description: "「クーポンの有効期限が明日までとなっております」など、適切なタイミングで期限をリマインド。忘れがちな特典の利用を促し、確実に来院へと繋げます。",
          icon: <Bell className="w-6 h-6 text-brand-gold" />,
          imageSrc: "/solution_step_4.png",
          isScreenshot: true,
          customContent: (
            <div className="w-full h-full bg-[#90B4D6] px-[3cqw] pt-[15cqw] pb-[4cqw] rounded-t-[1.4rem] relative">
              {/* Massive dark overlay triggered by group-hover */}
              <div className="absolute -inset-[1000px] bg-slate-900/60 opacity-0 group-hover:opacity-100 transition-opacity duration-700 z-40 pointer-events-none" />

              {/* Normal AI Message (Left) */}
              <div className="flex items-start mt-[4cqw] relative z-50 transform origin-top-left transition-all duration-700 ease-out group-hover:scale-[1.5] group-hover:-translate-y-[4cqw] group-hover:-translate-x-[20cqw]">
                <div className="w-[10cqw] h-[10cqw] rounded-full bg-[#D9E2F1] flex-shrink-0 mr-[2cqw] flex items-center justify-center mt-[1cqw] overflow-hidden">
                  <img src="/hero_clinic_receptionist.png" alt="AI コンシェルジュ" className="w-full h-full object-cover" />
                </div>
                
                <div className="flex items-end max-w-[82cqw]">
                  <div className="bg-white rounded-[4cqw] rounded-tl-none px-[3.5cqw] py-[3cqw] shadow-sm group-hover:shadow-2xl transition-shadow duration-700">
                    <div className="text-[3.5cqw] text-gray-800 leading-[1.6] font-medium">
                      【お知らせ】<br />
                      しゅんぺい様、以前お渡しした「🎁 初回来院クーポン」の有効期限が、残り1週間となっております！<br /><br />
                      期限：6月24日 19:01まで<br /><br />
                      ぜひこの機会にご相談やご予約をお待ちしております😊
                    </div>
                  </div>
                  <div className="ml-[1.5cqw] text-[2.5cqw] text-gray-600 mb-[1cqw] flex-shrink-0 group-hover:opacity-0 transition-opacity duration-300">
                    7:01
                  </div>
                </div>
              </div>
            </div>
          )
        }
      ]}
      hideThemeToggle={true}
      forceTheme="light"
    />
  );
}
