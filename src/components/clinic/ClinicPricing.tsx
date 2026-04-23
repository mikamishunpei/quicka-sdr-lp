"use client";

import { motion } from "framer-motion";

export function ClinicPricing() {
  return (
    <section className="py-28 bg-white text-gray-900" id="pricing">
      <div className="max-w-4xl mx-auto px-6">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-brand-gold text-xs font-bold uppercase tracking-widest mb-6">
            料金プラン・保証
          </p>
          <h2 className="text-3xl md:text-5xl font-black tracking-tight leading-tight mb-6">
            完全ノーリスクで<br className="md:hidden"/>お試しください
          </h2>
          <p className="text-gray-600 text-lg max-w-xl mx-auto leading-relaxed font-medium">
            「本当に予約が増えるのか？」<br />
            その疑問にお答えするため、極限まで導入ハードルを下げました。
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.15 }}
          className="bg-white rounded-[32px] shadow-2xl overflow-hidden border border-gray-100"
        >
          <div className="p-10 md:p-14">
            
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8 mb-12">
              <div>
                <div className="inline-flex items-center gap-2 rounded-full border border-brand-gold/50 bg-brand-gold/10 px-4 py-1.5 text-xs font-bold tracking-widest text-brand-gold mb-4 animate-pulse">
                  期間限定キラーオファー
                </div>
                <h3 className="text-2xl md:text-3xl font-black tracking-tight text-gray-900">
                  効果検証テストプラン
                </h3>
              </div>
              <div className="text-left md:text-right">
                <p className="text-xs text-gray-400 font-bold tracking-widest mb-2">
                  通常月額利用料: ¥80,000
                </p>
                <p className="text-4xl md:text-5xl font-black tracking-tight text-gray-900">
                  初月無料
                </p>
              </div>
            </div>

            <div className="bg-gray-50 rounded-2xl p-6 md:p-8 mb-12 border border-gray-100">
              <h4 className="text-lg font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="w-1.5 h-6 bg-brand-gold rounded-full block"></span>
                完全ノーリスク保証
              </h4>
              <p className="text-gray-600 font-medium leading-relaxed mb-4">
                先生、今だけ効果検証のため<span className="text-gray-900 font-bold border-b border-brand-gold">『初期費用無料・初月無料』</span>とします。
                そして最初の1ヶ月で「予約が1件も増えない」「スタッフの負担が減っていない」と感じたら、即解約していただいて構いません。
              </p>
              <div className="bg-white p-4 rounded-xl border border-gray-200">
                <p className="text-sm font-bold text-gray-800 mb-2">唯一の条件：</p>
                <p className="text-sm text-gray-600 font-medium">効果を出すために『Instagramのリンクや広告の着地先を、このAI相談LINEに変えること』だけはお約束ください。それさえやっていただければ、私たちは結果を出す自信があります。</p>
              </div>
            </div>

            <div className="border-t border-gray-100 pt-10 flex flex-col md:flex-row items-center justify-between gap-8">
              <div>
                <p className="text-xs font-bold text-gray-400 mb-2 tracking-widest">
                  初期費用（RAG構築・AI学習）
                </p>
                <div className="flex items-end gap-4">
                  <p className="text-2xl font-bold text-gray-300 line-through tracking-tight">¥500,000</p>
                  <p className="text-4xl font-black text-brand-gold tracking-tight">無料</p>
                </div>
              </div>
              <a 
                href="/contact"
                className="bg-gray-900 text-white px-10 py-5 rounded-full text-lg font-bold tracking-wide hover:scale-[1.03] hover:bg-gray-800 transition-all w-full md:w-auto shadow-xl text-center block"
              >
                無料で1ヶ月試してみる
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
