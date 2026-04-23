"use client";

import * as React from "react";
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
  Calendar,
  MessageCircle,
  Plus,
  BarChart,
  Zap,
} from "lucide-react";

const IntegrationsCard = () => (
  <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <CardHeader>
      <CardTitle className="text-lg">既存システム連携</CardTitle>
      <CardDescription>
        LINEやカレンダー、CRMなど様々なツールとシームレスに連携。
      </CardDescription>
    </CardHeader>
    <CardContent className="flex items-center justify-center gap-4">
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-gold/10">
        <MessageCircle className="h-6 w-6 text-brand-gold" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Calendar className="h-6 w-6 text-gray-500" />
      </div>
      <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gray-100">
        <Zap className="h-6 w-6 text-gray-500" />
      </div>
    </CardContent>
  </Card>
);

const FeatureTagsCard = () => (
  <Card className="h-full border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <CardContent className="flex h-full flex-col justify-center gap-3 p-6">
      <Badge
        variant="outline"
        className="w-fit items-center gap-1.5 border-brand-gold/30 py-1.5 px-3 text-brand-gold"
      >
        自動ヒアリング <Plus className="h-3 w-3" />
      </Badge>
      <Badge
        variant="secondary"
        className="w-fit items-center gap-1.5 bg-brand-gold/10 py-1.5 px-3 text-brand-gold hover:bg-brand-gold/20"
      >
        24時間365日対応
      </Badge>
      <Badge
        variant="outline"
        className="w-fit items-center gap-1.5 border-brand-gold/30 py-1.5 px-3 text-brand-gold"
      >
        パーソナライズ提案 <Plus className="h-3 w-3" />
      </Badge>
    </CardContent>
  </Card>
);

const MainFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-gray-200 shadow-sm">
    <div className="absolute top-6 left-6 z-10 rounded-xl bg-white/90 p-3 backdrop-blur-sm shadow-sm">
      <p className="text-xl font-black tracking-tight text-gray-900">AI Concierge</p>
      <p className="text-xs font-bold text-brand-gold mt-1">FOR CLINICS</p>
    </div>
    <img
      src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&q=80&w=1200"
      alt="クリニックのコンシェルジュ"
      className="h-full w-full object-cover"
    />
  </Card>
);

const StatCard = () => (
  <Card className="flex h-full flex-col justify-between bg-brand-gold/10 border-transparent p-6 shadow-sm">
    <BarChart className="h-8 w-8 text-brand-gold" />
    <div>
      <p className="text-5xl lg:text-6xl font-black text-gray-900">3.5<span className="text-3xl lg:text-4xl">x</span></p>
      <p className="text-sm text-gray-700 mt-2 font-medium">
        導入クリニックの平均予約コンバージョン率向上。
      </p>
    </div>
  </Card>
);

const SecondaryFeatureCard = () => (
  <Card className="relative h-full w-full overflow-hidden border-gray-200 shadow-sm">
    <img
      src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?ixlib=rb-4.1.0&auto=format&fit=crop&q=60&w=900"
      alt="医療現場"
      className="h-full min-h-[240px] w-full object-cover"
    />
    <div className="absolute inset-0 bg-gradient-to-t from-gray-900/80 via-gray-900/20 to-transparent" />
    <p className="absolute bottom-6 left-6 z-10 max-w-[80%] text-xl font-bold text-white [text-shadow:_0_1px_4px_rgb(0_0_0_/_30%)]">
      患者様に寄り添い、<br />確実な「指名買い」へ。
    </p>
  </Card>
);

const JourneyCard = () => (
  <Card className="relative h-full w-full overflow-hidden p-6 border-gray-200 shadow-sm hover:shadow-md transition-shadow">
    <CardTitle className="text-lg">専属サポート</CardTitle>
    <CardDescription className="mt-2 text-sm leading-relaxed">
      最短2週間で御院専用のAIモデルを学習し、本番稼働をスタート。
    </CardDescription>
    <div className="absolute -right-4 -bottom-4 h-48 w-48">
      <div className="absolute top-8 left-20">
        <Avatar className="h-12 w-12 border-2 border-white shadow-md">
          <AvatarImage src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-4.1.0&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          <AvatarFallback>A</AvatarFallback>
        </Avatar>
      </div>
      <div className="absolute top-24 left-8">
        <Avatar className="h-14 w-14 border-2 border-white shadow-md">
          <AvatarImage src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.1.0&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80" />
          <AvatarFallback>B</AvatarFallback>
        </Avatar>
      </div>
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
            Comprehensive Features
          </p>
          <h2 className="text-3xl md:text-4xl font-black tracking-tight text-gray-900 mb-4">
            すべてが揃う、完全なAIソリューション。
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl md:mx-auto">
            ヒアリングから予約獲得、既存システムとの連携まで。
            御院の集客プロセスを根底からアップグレードします。
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
