import './PrivacyPolicy.css';
import { Footer } from '@/components/ui/cta';
import { SubPageHeader } from '@/components/ui/header';

export default function PrivacyPolicy() {
  return (
    <div className="min-h-screen bg-gray-50 flex flex-col">
      <SubPageHeader />
      <div className="flex-grow">
        <div className="pp-wrapper">
          <div className="pp-container">
            <div className="pp-title">プライバシーポリシー（個人情報保護方針）</div>
            
            <div className="pp-text">Quicka（以下、「当サービス」）は、以下のとおり個人情報保護方針を定め、個人情報保護の仕組みを構築し、個人情報保護の重要性の認識と取組みを徹底させることにより、個人情報の保護を推進致します。</div>

            <div className="pp-heading-2">■個人情報の管理</div>
            <div className="pp-text">当サービスは、お客さまの個人情報を正確かつ最新の状態に保ち、個人情報への不正アクセス・紛失・破損・改ざん・漏洩などを防止するため、セキュリティシステムの維持・管理体制の整備等の必要な措置を講じ、安全対策を実施し個人情報の厳重な管理を行ないます。</div>

            <div className="pp-heading-2">■個人情報の利用目的</div>
            <div className="pp-text">お客さまからお預かりした個人情報は、以下の目的で利用いたします。</div>
            <div className="pp-list">
              <div className="pp-list-item">当サービスの提供・運営のため</div>
              <div className="pp-list-item">お客さまからのお問い合わせに回答するため（本人確認を行うことを含む）</div>
              <div className="pp-list-item">当サービスの新機能、更新情報、キャンペーン等及び当サービスが提供する他のサービスの案内のメールを送付するため</div>
              <div className="pp-list-item">メンテナンス、重要なお知らせなど必要に応じたご連絡のため</div>
              <div className="pp-list-item">上記の利用目的に付随する目的</div>
            </div>

            <div className="pp-heading-2">■外部サービスとの連携について</div>
            <div className="pp-text">当サービスは、Zoom Video Communications, Inc.が提供するサービス（以下「Zoom」）等の外部サービスと連携して機能を提供します。</div>
            
            <div className="pp-heading-3">1. Zoom連携機能について</div>
            <div className="pp-list">
              <div className="pp-list-item"><strong>取得する情報：</strong>ZoomミーティングのURL、パスワード、ホストおよび参加者の情報</div>
              <div className="pp-list-item"><strong>利用目的：</strong>商談予約完了時にZoomミーティングを自動作成し、予約者に通知するため</div>
              <div className="pp-list-item"><strong>データの保存・共有：</strong>取得したZoomの情報は、商談予約の管理および通知の目的以外に使用せず、法令に基づく場合を除き、第三者への提供や販売は行いません。</div>
            </div>

            <div className="pp-heading-2">■Googleユーザーデータの取り扱い（Google User Data Policy）</div>
            <div style={{ marginTop: '10px' }}>
              <div className="pp-text">当サービスは、Google APIを通じて取得したユーザーデータ（以下「Googleユーザーデータ」）を、以下の通り厳格に取り扱います。</div>

              <div className="pp-heading-3">1. アクセスするデータ（Data Accessed）</div>
              <div className="pp-text">当サービスは、ユーザーの明示的な許可（OAuth認証）を得た上で、以下のGoogleカレンダーデータにアクセスします。</div>
              <div className="pp-list">
                <div className="pp-list-item"><strong>カレンダーリスト：</strong>空き状況を確認すべきカレンダーを特定するため</div>
                <div className="pp-list-item"><strong>カレンダーイベント（予定）：</strong>重複予約の防止（空き状況の確認）および、予約確定時の予定作成のため</div>
              </div>

              <div className="pp-heading-3">2. データの利用目的（Data Usage）</div>
              <div className="pp-text">Googleユーザーデータは、当サービスの主要機能である「日程調整および予約の自動化」を提供するためにのみ使用されます。ユーザーのデータを広告の表示や、その他の目的で利用することはありません。</div>

              <div className="pp-heading-3">3. データの保存（Data Storage）</div>
              <div className="pp-text">取得したアクセストークンおよび予約関連データは、暗号化された安全なデータベースに保存されます。保存されたデータは、ユーザーが連携を解除するか、アカウントを削除するまで保持され、その後速やかに削除されます。</div>

              <div className="pp-heading-3">4. 第三者への共有・転送（Data Sharing & Transfers）</div>
              <div className="pp-text">当サービスは、Googleユーザーデータを第三者に販売、貸与、または共有することはありません。また、<strong>AI（人工知能）モデルのトレーニング目的でGoogleユーザーデータを使用または転送することは一切ありません。</strong></div>

              <div className="pp-heading-3">5. Limited Use Policyへの準拠</div>
              <div className="pp-text">当サービスがGoogle APIから受け取った情報の使用および他のアプリへの転送は、<a href="https://developers.google.com/terms/api-services-user-data-policy" target="_blank" rel="noopener noreferrer">Google API Services User Data Policy</a>（Limited Use要件を含む）を遵守します。</div>
            </div>

            <div className="pp-heading-2">■個人情報の第三者への開示・提供の禁止</div>
            <div className="pp-text">当サービスは、お客さまよりお預かりした個人情報を適切に管理し、次のいずれかに該当する場合を除き、個人情報を第三者に開示いたしません。</div>
            <div className="pp-list">
              <div className="pp-list-item">お客さまの同意がある場合</div>
              <div className="pp-list-item">法令に基づき開示することが必要である場合</div>
            </div>

            <div className="pp-heading-2">■個人情報の安全対策</div>
            <div className="pp-text">当サービスは、個人情報の正確性及び安全性確保のために、セキュリティに万全の対策を講じています。</div>

            <div className="pp-heading-2">■ご本人の照会</div>
            <div className="pp-text">お客さまがご本人の個人情報の照会・修正・削除などをご希望される場合には、ご本人であることを確認の上、対応させていただきます。</div>

            <div className="pp-heading-2">■法令、規範の遵守と見直し</div>
            <div className="pp-text">当サービスは、保有する個人情報に関して適用される日本の法令、その他規範を遵守するとともに、本ポリシーの内容を適宜見直し、その改善に努めます。</div>

            <div className="pp-heading-2">■アクセス解析ツールについて</div>
            <div className="pp-text">当サイトでは、Googleによるアクセス解析ツール「Googleアナリティクス」を利用しています。このGoogleアナリティクスはトラフィックデータの収集のためにCookieを使用しています。このトラフィックデータは匿名で収集されており、個人を特定するものではありません。この機能はCookieを無効にすることで収集を拒否することが出来ますので、お使いのブラウザの設定をご確認ください。</div>

            <div className="pp-heading-2">■お問い合わせ</div>
            <div className="pp-text">
              当サービスの個人情報の取扱に関するお問い合せは下記までご連絡ください。<br />
              <strong>事業者名：</strong> 三上　峻平<br />
              <strong>連絡先：</strong> contact@quicka.jp
            </div>
            <div className="pp-footer">改定日：2026/02/14<br />制定日：2025/10/27</div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
