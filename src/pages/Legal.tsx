import './Legal.css';
import { Footer } from '@/components/ui/cta';
import { SubPageHeader } from '@/components/ui/header';

export default function Legal() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SubPageHeader />
      <div className="flex-grow">
        <div className="legal-container text-gray-800 text-left leading-relaxed font-sans">
          <h1>特定商取引法に基づく表記</h1>
          <h2>事業者名</h2>
          <p>三上　峻平</p>
          <h2>運営責任者</h2>
          <p>三上　峻平</p>
          <h2>事業者の所在地</h2>
          <p>北海道札幌市中央区北1条東8-84-8　402号室<br />※事業者の住所については、請求があった場合、遅滞なく開示いたします。</p>
          <h2>事業者の連絡先</h2>
          <p>
            電話番号：080-4501-4372<br />※電話番号については、請求があった場合、遅滞なく開示いたします。<br />
            メールアドレス：contact@quicka.jp<br />
            受付時間：10:00-18:00（土日祝を除く）
          </p>
          <h2>役務の対価</h2>
          <p>先行導入プラン：獲得したアポイントメント1件につき15,000円（税込）</p>
          <h2>対価以外に必要となる費用</h2>
          <p>なし</p>
          <h2>支払方法</h2>
          <p>銀行振込、クレジットカード</p>
          <h2>支払時期</h2>
          <p>月末締め、翌月15日払い。</p>
          <h2>役務の提供時期</h2>
          <p>ご契約後、初期設定が完了次第、速やかにサービスの提供を開始いたします。</p>
          <h2>解約・返金ポリシー</h2>
          <p>サービスの性質上、返金は原則として致しません。解約に関する条件は、別途定める利用規約をご確認ください。</p>
          <p className="footer-text">制定日：2025/10/27</p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
