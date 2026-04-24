"use client";

import * as React from "react";
import { motion } from "framer-motion";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { BentoGridShowcase } from "@/components/ui/bento-grid";
import {
  Database,
  Link as LinkIcon,
  Zap,
  ShieldAlert,
  Clock,
  ImageIcon,
  MessageCircle,
  Plus,
} from "lucide-react";
import { cn } from "@/lib/utils";

const IntegrationsCard = () => (
  <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <CardHeader>
      <CardTitle className="text-lg leading-tight">複雑なメニュー体系も<br />URL一つで完全記憶</CardTitle>
      <CardDescription className="mt-2">
        既存のクリニックHPや料金表を読み込ませるだけで、数千パターンの施術内容や料金を正確に案内するコンシェルジュが即座に完成します。
      </CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center gap-4 mt-2">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10">
        <LinkIcon className="h-6 w-6 text-brand-gold" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Database className="h-6 w-6 text-gray-500" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Zap className="h-6 w-6 text-gray-500" />
      </div>
    </CardContent>
  </Card>
);

const aiTasks = [
  "画像を解析中...",
  "ナレッジベースを検索中...",
  "最適な施術をマッチング中...",
  "応答メッセージを作成中...",
  "空き枠スケジュールを確認中...",
  "CRMのステータスを更新中...",
  "自動フォローアップを送信中...",
];

const FeatureTagsCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="absolute inset-0 bg-gradient-to-r from-white via-white to-transparent z-10 w-2/3" />
    <CardContent className="relative z-20 flex h-full items-center justify-center p-6 w-full md:w-1/2">
      {/* AIアバター（動画） - テキストを削除し大きく表示 */}
      <div className="relative w-28 h-28 md:w-36 md:h-36 rounded-full overflow-hidden shadow-xl shrink-0 border-4 border-white">
        <video
          src="/hero_video.mp4"
          autoPlay
          loop
          muted
          playsInline
          className="absolute inset-0 w-full h-full object-cover"
          style={{ objectPosition: 'center 25%' }}
        />
        <div className="absolute inset-0 rounded-full border border-black/5 pointer-events-none" />
        
        {/* 装飾用のパルスリング */}
        <div className="absolute inset-0 rounded-full border-2 border-brand-gold/30 animate-[ping_3s_cubic-bezier(0,0,0.2,1)_infinite]" />
      </div>
    </CardContent>

    {/* 右側の無限ループアニメーション */}
    <div className="absolute right-0 top-0 bottom-0 w-1/2 overflow-hidden flex flex-col justify-center pointer-events-none z-0">
      <div className="absolute inset-0 z-10 bg-gradient-to-b from-white via-transparent to-white pointer-events-none" />
      <div className="absolute inset-y-0 right-0 w-12 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      
      <motion.div
        animate={{ y: ["0%", "-50%"] }}
        transition={{
          repeat: Infinity,
          ease: "linear",
          duration: 15,
        }}
        className="flex flex-col gap-3 px-4 pt-4 whitespace-nowrap opacity-60"
      >
        {[...aiTasks, ...aiTasks].map((task, i) => (
          <div key={i} className="flex items-center gap-2 text-xs font-mono text-gray-500 bg-gray-50 border border-gray-100 rounded-md py-1.5 px-3 shadow-sm w-max ml-auto">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse" />
            {task}
          </div>
        ))}
      </motion.div>
    </div>
  </Card>
);

const MainFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-gray-200 shadow-sm bg-gradient-to-br from-gray-50 to-white">
    <div className="relative z-10 p-6 flex flex-col justify-center h-full">
      <div className="inline-flex items-center gap-2 rounded-full bg-brand-gold/10 px-3 py-1 text-xs font-bold text-brand-gold mb-4 border border-brand-gold/20 w-fit">
        <ImageIcon className="h-3 w-3" />
        <span>Visual RAG Pipeline</span>
      </div>
      <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900 leading-tight">
        画像付きの事前相談で、<br />スムーズな診察へ。
      </h3>
      <p className="mt-4 text-sm font-medium text-gray-600 leading-relaxed">
        患者様からの患部写真（シミやたるみ等）を受け取り、事前に必要な情報を丁寧にヒアリングします。<br /><br />
        <span className="font-bold text-brand-gold">※AIが診断を行うことは決してありません。</span><br />
        医師の診察へスムーズに繋げるための情報整理と自院メニューの案内に徹することで、医療リスクを完全に排除しながら患者様の来院ハードルを下げます。
      </p>
    </div>
    
    {/* 装飾的な背景要素 */}
    <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-brand-gold/5 rounded-full blur-3xl pointer-events-none" />
    <div className="absolute top-1/2 -right-4 transform -translate-y-1/2 w-48 h-48 bg-gray-100 rounded-full blur-2xl pointer-events-none opacity-50" />
  </Card>
);

const StatCard = () => (
  <Card className="flex h-full flex-col justify-between bg-gray-900 border-transparent p-6 shadow-sm relative overflow-hidden group">
    <div className="absolute inset-0 bg-brand-gold/10 opacity-0 transition duration-500 group-hover:opacity-100" />
    <Clock className="h-8 w-8 text-brand-gold relative z-10" />
    <div className="relative z-10 mt-4">
      <p className="text-5xl lg:text-6xl font-black text-white tracking-tighter">
        24<span className="text-3xl lg:text-4xl text-gray-400">/</span>365
      </p>
      <p className="text-sm text-gray-300 mt-3 font-medium leading-relaxed">
        深夜や休診日など、スタッフが対応できない時間帯の「今すぐ聞きたい」にも即座に対応。<br />
        <span className="text-brand-gold font-bold">機会損失を完全に防ぎます。</span>
      </p>
    </div>
  </Card>
);

const SecondaryFeatureCard = () => (
  <Card className="relative h-full w-full p-6 border-gray-200 shadow-sm flex flex-col justify-end bg-gradient-to-br from-brand-gold/10 to-transparent">
    <div className="absolute top-6 right-6 h-12 w-12 rounded-full bg-white flex items-center justify-center shadow-sm">
      <ShieldAlert className="h-6 w-6 text-brand-gold" />
    </div>
    <div className="relative z-10">
      <h3 className="text-xl font-black text-gray-900 mb-2">
        スタッフへ即時バトンタッチ<br />（安全なエスカレーション）
      </h3>
      <p className="text-sm font-medium text-gray-700 leading-relaxed">
        「医療的な判断が必要な相談」や「クレーム」をAIが即座に検知。自動応答を停止し、人間のスタッフへシームレスに引き継ぐことで、医療リスクを回避します。
      </p>
    </div>
  </Card>
);

const JourneyCard = () => (
  <Card className="relative h-full w-full overflow-hidden p-6 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <div className="flex items-center gap-2 mb-2">
      <MessageCircle className="h-5 w-5 text-brand-gold" />
      <CardTitle className="text-lg">文脈を読んだ自動フォロー</CardTitle>
    </div>
    <CardDescription className="mt-2 text-sm leading-relaxed text-gray-600 font-medium">
      「相談だけして離脱した」患者様のステータスを自動管理。<br />
      数日後に「ダウンタイムの不安は解消されましたか？」など、前回の相談内容を踏まえた自然なメッセージ（Nudge）を自動送信し、来院へ引き上げます。
    </CardDescription>
    <div className="mt-6 flex items-center gap-3">
      <div className="flex -space-x-3">
        <Avatar className="h-10 w-10 border-2 border-white shadow-sm">
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          <AvatarFallback>P</AvatarFallback>
        </Avatar>
        <div className="h-10 w-10 rounded-full border-2 border-white bg-brand-gold flex items-center justify-center shadow-sm z-10">
          <Zap className="h-4 w-4 text-white" />
        </div>
      </div>
      <p className="text-xs font-bold text-gray-500 uppercase tracking-wider">Automated Nudge</p>
    </div>
  </Card>
);

export function ClinicBento() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      <div className="max-w-6xl mx-auto px-6 relative z-10">
        <div className="mb-16 md:text-center">
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-4 md:justify-center flex items-center gap-2">
            <span className="w-1.5 h-1.5 rounded-full bg-brand-gold animate-pulse"></span>
            Professional AI Features
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-4">
            医療リスクを排除した、<br className="md:hidden" />安全で完全なAIソリューション。
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl md:mx-auto font-medium">
            画像対応の事前ヒアリングから、既存メニューのAI化、安全なエスカレーションまで。<br className="hidden md:block" />
            美容クリニックに特化した機能で、スタッフの負担と機会損失をゼロにします。
          </p>
        </div>

        <BentoGridShowcase
          integrations={<IntegrationsCard />}
          featureTags={<FeatureTagsCard />}
          mainFeature={<MainFeatureCard />}
          secondaryFeature={<SecondaryFeatureCard />}
          statistic={<StatCard />}
          journey={<JourneyCard />}
        />
      </div>
    </section>
  );
}
