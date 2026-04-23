"use client";

import { motion } from "framer-motion";
import { MessageSquare, Video, CalendarCheck, Database, ArrowDown } from "lucide-react";

export function HowItWorksSection() {
  return (
    <section className="py-16 md:py-28 bg-[#fafafa] text-[#0a0d0c]" id="flywheel">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            仕組み
          </p>
          <h2 className="text-3xl md:text-5xl font-bold tracking-tight leading-tight mb-6 text-[#0a0d0c]">
            AIは自ら新規リードを生み出し、育てます
          </h2>
          <p className="text-[#666] text-lg max-w-2xl mx-auto leading-relaxed tracking-wide">
            待っているだけのアシスタントではありません。AIが能動的にアプローチを開始し、毎月の新規リード獲得から商談化までを全自動で実行します。
          </p>
        </motion.div>

        {/* フローチャート領域 */}
        <div className="max-w-4xl mx-auto mb-24 relative">
          <div className="flex flex-col items-center">
            
            {/* Step 1 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="w-full md:w-[500px] bg-white border border-gray-200 shadow-sm rounded-[24px] p-6 relative z-10 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-green/10 flex items-center justify-center shrink-0">
                  <MessageSquare className="w-6 h-6 text-brand-green" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 mb-1">STEP 01</div>
                  <h3 className="text-xl font-bold mb-2">フォーム送信で「許可」を取る</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    AIが企業の問い合わせフォームへ自動アプローチ。いきなり売り込まず「御社向けの提案動画をお送りしてもよろしいですか？」と丁寧に許可を取ることで返信率を高めます。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* Arrow 1 */}
            <motion.div 
              initial={{ height: 0, opacity: 0 }}
              whileInView={{ height: 40, opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="w-px bg-gray-300 relative flex justify-center"
            >
              <div className="absolute bottom-0 translate-y-full text-gray-300">
                <ArrowDown size={16} />
              </div>
            </motion.div>

            {/* Step 2 */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="w-full md:w-[500px] bg-white border border-gray-200 shadow-sm rounded-[24px] p-6 relative z-10 mt-6 hover:shadow-md transition-shadow"
            >
              <div className="flex items-start gap-4">
                <div className="w-12 h-12 rounded-xl bg-brand-gold/10 flex items-center justify-center shrink-0">
                  <Video className="w-6 h-6 text-brand-gold" />
                </div>
                <div>
                  <div className="text-xs font-bold text-gray-400 mb-1">STEP 02</div>
                  <h3 className="text-xl font-bold mb-2">返信があったら動画即レス</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    返信を検知した瞬間、人間が作り込んだ訴求力の高い提案動画を送付。動画の冒頭には「相手企業のWebサイト」が自動合成されており、強烈な「自分ごと化」を引き起こします。
                  </p>
                </div>
              </div>
            </motion.div>

            {/* 分岐の線 (Desktop) */}
            <div className="w-full max-w-[800px] mx-auto hidden md:block">
              <div className="w-[calc(50%+2rem)] h-16 relative mt-6 mx-auto">
                {/* 上からの縦線（半分まで） */}
                <motion.div 
                  initial={{ height: 0 }} whileInView={{ height: "50%" }} viewport={{ once: true }} transition={{ delay: 0.4 }}
                  className="absolute left-1/2 top-0 w-px bg-gray-300 -translate-x-1/2"
                />
                {/* 横線 */}
                <motion.div 
                  initial={{ width: 0 }} whileInView={{ width: "100%" }} viewport={{ once: true }} transition={{ delay: 0.5 }}
                  className="absolute top-1/2 left-0 w-full h-px bg-gray-300"
                />
                {/* 左下への矢印 */}
                <motion.div 
                  initial={{ height: 0 }} whileInView={{ height: "50%" }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                  className="absolute top-1/2 left-0 w-px bg-gray-300"
                >
                  <div className="absolute bottom-0 translate-y-full -translate-x-[7.5px] text-gray-300"><ArrowDown size={16} /></div>
                </motion.div>
                {/* 右下への矢印 */}
                <motion.div 
                  initial={{ height: 0 }} whileInView={{ height: "50%" }} viewport={{ once: true }} transition={{ delay: 0.6 }}
                  className="absolute top-1/2 right-0 w-px bg-gray-300"
                >
                  <div className="absolute bottom-0 translate-y-full -translate-x-[7.5px] text-gray-300"><ArrowDown size={16} /></div>
                </motion.div>
              </div>
            </div>

            {/* 分岐の線 (Mobile) */}
            <div className="md:hidden w-px h-8 bg-gray-300 relative mt-6 mx-auto">
              <div className="absolute bottom-0 translate-y-full -translate-x-[7.5px] text-gray-300"><ArrowDown size={16} /></div>
            </div>

            {/* Branching Boxes */}
            <div className="w-full max-w-[800px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-16 mt-10 md:mt-2">
              
              {/* Success Branch */}
              <motion.div 
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-white border-2 border-amber-500/20 shadow-lg rounded-[24px] p-6 relative z-10"
              >
                <div className="absolute -top-3 left-6 bg-amber-100 text-amber-700 text-[10px] font-bold px-3 py-1 rounded-full">
                  商談化する場合
                </div>
                <div className="flex flex-col items-center text-center mt-2">
                  <div className="w-12 h-12 rounded-full bg-amber-50 flex items-center justify-center mb-4">
                    <CalendarCheck className="w-6 h-6 text-amber-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">カレンダーに自動追加</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    自然な会話の流れでカレンダー予約リンクへ誘導。日程調整とGoogleカレンダーへの追加を自動で完結させます。
                  </p>
                </div>
              </motion.div>

              {/* Nurturing Branch */}
              <motion.div 
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.7 }}
                className="bg-white border border-gray-200 shadow-sm rounded-[24px] p-6 relative z-10"
              >
                <div className="absolute -top-3 left-6 bg-gray-100 text-gray-600 text-[10px] font-bold px-3 py-1 rounded-full">
                  商談化しなくても
                </div>
                <div className="flex flex-col items-center text-center mt-2">
                  <div className="w-12 h-12 rounded-full bg-blue-50 flex items-center justify-center mb-4">
                    <Database className="w-6 h-6 text-blue-500" />
                  </div>
                  <h3 className="text-lg font-bold mb-2">CRM記録 & 再アプローチ</h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    担当者の連絡先をCRMに自動保存。適切な時期を見計らい、AIが切り口を変えて自動でナーチャリングを実行します。
                  </p>
                </div>
              </motion.div>

            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
