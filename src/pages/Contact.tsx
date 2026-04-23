import { useState, useRef } from 'react';
import { Mail, MessageSquare, Building2, User, Phone, Send, CheckCircle2, Loader2 } from 'lucide-react';
import { Footer } from '@/components/ui/cta';
import { SubPageHeader } from '@/components/ui/header';

export default function Contact() {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');
  const formRef = useRef<HTMLFormElement>(null);

  const handleSubmit = async (e: React.FormEvent) => {
    // ... handling submit
    e.preventDefault();
    if (!formRef.current) return;

    setIsSubmitting(true);
    setErrorMessage('');

    const formData = new FormData(formRef.current);
    
    // Web3Formsのアクセスキーを追加 (.env ファイルで管理するか、ここに直接文字列を入れます)
    // 注意: ここに直接キーを書くこともできますが、環境変数推奨です。
    // 例: formData.append("access_key", "あなたのアクセスキー");
    const accessKey = import.meta.env.VITE_WEB3FORMS_ACCESS_KEY || '';
    formData.append("access_key", accessKey);

    // スパム対策の設定（ハニーポットはHTML側に設置）
    formData.append("subject", "Quicka Webサイトからのお問い合わせ");
    formData.append("from_name", "Quicka お問い合わせフォーム");

    try {
      const response = await fetch('https://api.web3forms.com/submit', {
        method: 'POST',
        body: formData
      });

      const data = await response.json();

      if (data.success) {
        setIsSubmitted(true);
        formRef.current.reset();
      } else {
        setErrorMessage('送信に失敗しました。時間をおいて再度お試しください。');
        console.error('Web3Forms Error:', data);
      }
    } catch (error) {
      setErrorMessage('通信エラーが発生しました。ネットワーク接続をご確認ください。');
      console.error('Submit Error:', error);
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col font-sans text-gray-800">
      <SubPageHeader />
      <div className="flex-grow pt-20 pb-24 px-6 relative">
        {/* 背景装飾 */}
        <div className="absolute top-0 left-0 w-full h-80 bg-brand-dark/5" style={{
          backgroundImage: 'radial-gradient(circle at 50% 0%, rgba(74, 51, 32, 0.1) 0%, transparent 70%)'
        }} />
        
        <div className="max-w-3xl mx-auto relative z-10">
          <div className="text-center mb-12">
            <h1 className="text-4xl font-bold tracking-tight mb-4 text-gray-900">お問い合わせ</h1>
            <p className="text-lg text-gray-600">
              サービスに関するご質問やご相談など、お気軽にお問い合わせください。<br className="hidden md:block" />
              担当者より、通常1〜2営業日以内にご返信いたします。
            </p>
          </div>

          <div className="bg-white rounded-2xl shadow-xl shadow-gray-200/50 p-8 md:p-12 border border-gray-100">
            {isSubmitted ? (
              <div className="text-center py-16">
                <div className="w-20 h-20 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-10 h-10" />
                </div>
                <h2 className="text-2xl font-bold text-gray-900 mb-4">送信が完了しました</h2>
                <p className="text-gray-600 mb-8">
                  お問い合わせいただき、誠にありがとうございます。<br />
                  内容を確認の上、担当者よりご連絡させていただきます。
                </p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-8">
                {/* スパム対策用の隠しフィールド (ハニーポット) */}
                <input type="checkbox" name="botcheck" className="hidden" style={{ display: 'none' }} />

                {/* 会社名・お名前 */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Building2 className="w-4 h-4 text-gray-400" />
                      会社名 <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">必須</span>
                    </label>
                    <input 
                      type="text" 
                      name="Company"
                      required
                      placeholder="株式会社〇〇"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 transition-all outline-none bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <User className="w-4 h-4 text-gray-400" />
                      お名前 <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">必須</span>
                    </label>
                    <input 
                      type="text" 
                      name="Name"
                      required
                      placeholder="山田 太郎"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 transition-all outline-none bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* メールアドレス・電話番号 */}
                <div className="grid md:grid-cols-2 gap-8">
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Mail className="w-4 h-4 text-gray-400" />
                      メールアドレス <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">必須</span>
                    </label>
                    <input 
                      type="email" 
                      name="Email"
                      required
                      placeholder="taro@example.com"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 transition-all outline-none bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                      <Phone className="w-4 h-4 text-gray-400" />
                      電話番号 <span className="text-xs font-normal text-gray-500 bg-gray-100 px-2 py-0.5 rounded">任意</span>
                    </label>
                    <input 
                      type="tel" 
                      name="Phone"
                      placeholder="03-0000-0000"
                      className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 transition-all outline-none bg-gray-50/50 focus:bg-white"
                    />
                  </div>
                </div>

                {/* お問い合わせ種別 */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700">お問い合わせ種別</label>
                  <select 
                    name="Inquiry_Type"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 transition-all outline-none bg-gray-50/50 focus:bg-white cursor-pointer appearance-none"
                  >
                    <option value="">選択してください</option>
                    <option value="デモの依頼・サービス詳細について">デモの依頼・サービス詳細について</option>
                    <option value="料金プランについて">料金プランについて</option>
                    <option value="パートナー・代理店のご相談">パートナー・代理店のご相談</option>
                    <option value="その他のお問い合わせ">その他のお問い合わせ</option>
                  </select>
                </div>

                {/* お問い合わせ内容 */}
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-gray-700 flex items-center gap-2">
                    <MessageSquare className="w-4 h-4 text-gray-400" />
                    お問い合わせ内容 <span className="text-xs font-bold text-red-500 bg-red-50 px-2 py-0.5 rounded">必須</span>
                  </label>
                  <textarea 
                    name="Message"
                    required
                    rows={6}
                    placeholder="具体的なご質問やご相談内容をご記入ください。"
                    className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:border-brand-dark focus:ring-2 focus:ring-brand-dark/20 transition-all outline-none bg-gray-50/50 focus:bg-white resize-y"
                  ></textarea>
                </div>

                {/* プライバシーポリシーの同意 */}
                <div className="flex items-start gap-3">
                  <div className="flex items-center h-6">
                    <input 
                      id="privacy" 
                      type="checkbox" 
                      required
                      className="w-5 h-5 rounded border-gray-300 text-brand-dark focus:ring-brand-dark cursor-pointer"
                    />
                  </div>
                  <label htmlFor="privacy" className="text-sm text-gray-600 leading-relaxed cursor-pointer">
                    <a href="/privacy-policy" className="text-brand-dark hover:underline font-medium" target="_blank">プライバシーポリシー</a>
                    の内容に同意します。
                  </label>
                </div>

                {/* エラーメッセージ */}
                {errorMessage && (
                  <div className="p-4 bg-red-50 text-red-600 rounded-lg text-sm font-medium">
                    {errorMessage}
                  </div>
                )}

                {/* 送信ボタン */}
                <div className="pt-4">
                  <button 
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-brand-dark hover:bg-black disabled:bg-gray-400 text-white font-bold py-4 px-8 rounded-lg shadow-lg hover:shadow-xl transition-all flex items-center justify-center gap-2 group"
                  >
                    {isSubmitting ? (
                      <>
                        <Loader2 className="w-5 h-5 animate-spin" />
                        <span>送信中...</span>
                      </>
                    ) : (
                      <>
                        <span>送信する</span>
                        <Send className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                      </>
                    )}
                  </button>
                </div>
              </form>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
