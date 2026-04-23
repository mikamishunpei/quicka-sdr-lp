import './ZoomGuide.css';
import { Footer } from '@/components/ui/cta';
import { SubPageHeader } from '@/components/ui/header';

export default function ZoomGuide() {
  return (
    <div className="min-h-screen bg-[#f9f9f9] flex flex-col">
      <SubPageHeader />
      <div className="flex-grow">
        <div className="guide-wrapper text-left">
          <div className="guide-container">
            <h1>Quicka Zoom連携ガイド<br /><span style={{ fontSize: '16px', color: '#777', fontWeight: 'normal' }}>Quicka Zoom Integration Guide</span></h1>

            <p>このページでは、QuickaとZoomを連携させて、日程調整時に自動でWeb会議URLを発行する方法を説明します。<br />
            <span className="en-text">This page explains how to integrate Quicka with Zoom to automatically generate meeting URLs.</span></p>

            <h2>1. インストール方法 (Installation)</h2>
            
            <div className="step">
                <h3>Step 1: 設定画面へのアクセス</h3>
                <p>Quickaの管理画面にログインし、左側メニューの「アプリ (Apps)」をクリックしてください。<br />
                <span className="en-text">Log in to Quicka, and click "Apps" in the left sidebar.</span></p>
            </div>

            <div className="step">
                <h3>Step 2: Zoomアプリの選択</h3>
                <p>アプリ一覧の中から「Zoom Video」を探し、「詳細を見る」または「インストール」をクリックします。<br />
                <span className="en-text">Find "Zoom Video" in the app list and click details or install.</span></p>
            </div>

            <div className="step">
                <h3>Step 3: 連携の承認</h3>
                <p>「インストール (Connect/Install)」ボタンをクリックするとZoomの認証画面が開きます。「許可 (Allow)」をクリックして連携を完了させてください。<br />
                <span className="en-text">Click the "Install" button. You will be redirected to Zoom. Click "Allow" to authorize the integration.</span></p>
            </div>

            <h2>2. 使い方 (Usage)</h2>
            <p>連携が完了すると、自動的に有効になります。特別な操作は必要ありません。<br />
            <span className="en-text">Once connected, it works automatically. No further action is required.</span></p>
            <ul>
                <li>Quickaの予約ページで日程が選択されると、Zoomミーティングが自動作成されます。<br />
                <span className="en-text">A Zoom meeting is created automatically when a booking is made on Quicka.</span></li>
                <li>発行されたURLは、予約確認メールおよびカレンダーの予定に記載されます。<br />
                <span className="en-text">The meeting URL will be included in the confirmation email and calendar event.</span></li>
            </ul>

            <h2>3. アンインストール方法 (Uninstallation)</h2>
            <p>連携を解除したい場合は、以下の手順を行ってください。<br />
            <span className="en-text">To disconnect the integration, please follow these steps:</span></p>

            <div className="step">
                <p>1. Quickaの「アプリ (Apps)」画面を開きます。<br />
                <span className="en-text">1. Go to the "Apps" page in Quicka.</span></p>
                
                <p>2. 「Zoom Video」を選択します。<br />
                <span className="en-text">2. Select "Zoom Video".</span></p>
                
                <p>3. 「解除 (Uninstall / Disconnect)」ボタンをクリックしてください。<br />
                <span className="en-text">3. Click the "Uninstall" or "Disconnect" button.</span></p>
            </div>

            <h2>お問い合わせ (Support)</h2>
            <p>ご不明な点がございましたら、サポートまでお問い合わせください。<br />
            <span className="en-text">If you have any questions, please contact our support team.</span></p>
            
            {/* お問い合わせボタン */}
            <a href="/contact" className="btn">お問い合わせフォームへ (Contact Support)</a>

          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
}
