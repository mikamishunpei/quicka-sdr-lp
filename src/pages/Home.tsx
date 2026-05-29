import { Zap } from 'lucide-react';
import { ProblemSection } from '@/components/ui/problem';
import { SolutionSection } from '@/components/ui/solution';
import { HowItWorksSection } from '@/components/ui/feature';

import { ComparisonSection } from '@/components/ui/comparison';
import { PricingSection } from '@/components/ui/pricing';
import { FinalCTA, Footer } from '@/components/ui/cta';

function Home() {
  return (
    <div className="font-sans antialiased text-white">
      <div 
        className="min-h-screen flex flex-col relative overflow-hidden text-gray-900"
        style={{
          background: 'linear-gradient(135deg, #ffffff 0%, #f9fafb 100%)'
        }}
      >
        {/* Optional: Desert landscape silhouette at the bottom to match the vibe */}
        <div 
          className="absolute bottom-0 left-0 w-full h-[30vh] opacity-40 pointer-events-none"
          style={{
            background: 'linear-gradient(to top, #ffffff 0%, transparent 100%)',
            maskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\' preserveAspectRatio=\'none\'%3E%3Cpath fill=\'black\' fill-opacity=\'1\' d=\'M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            WebkitMaskImage: 'url("data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 1440 320\' preserveAspectRatio=\'none\'%3E%3Cpath fill=\'black\' fill-opacity=\'1\' d=\'M0,224L48,213.3C96,203,192,181,288,186.7C384,192,480,224,576,218.7C672,213,768,171,864,165.3C960,160,1056,192,1152,197.3C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z\'%3E%3C/path%3E%3C/svg%3E")',
            WebkitMaskSize: 'cover',
            WebkitMaskPosition: 'bottom'
          }}
        />



        {/* Navbar */}
        <nav className="container mx-auto px-8 py-6 flex items-center justify-between z-10 relative">
          <div className="flex items-center gap-2">
            {/* Logo */}
            <a href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C16 8.83656 8.83656 16 0 16C8.83656 16 16 23.1634 16 32C16 23.1634 23.1634 16 32 16C23.1634 16 16 8.83656 16 0Z" fill="#111827"/>
                <path d="M24 8C24 12.4183 20.4183 16 16 16C20.4183 16 24 19.5817 24 24C24 19.5817 27.5817 16 32 16C27.5817 16 24 12.4183 24 8Z" fill="#111827" opacity="0.8"/>
              </svg>
              <span className="text-2xl font-bold tracking-tight text-gray-900">Quicka</span>
            </a>
          </div>
          
          <div className="hidden md:flex items-center gap-8 text-[15px] font-bold">
             <a href="/" className="text-gray-900 hover:text-gray-600 transition-colors relative after:absolute after:-bottom-1.5 after:left-0 after:w-full after:h-0.5 after:bg-gray-900 after:rounded-full">BtoB 営業支援</a>
             <a href="/clinic" className="text-gray-500 hover:text-gray-900 transition-colors">自由診療クリニック</a>
          </div>

          <div>
            <button className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-gray-800 transition-colors">
              Get started
            </button>
          </div>
        </nav>

        {/* Hero Section */}
        <div className="container mx-auto px-6 md:px-8 pt-12 pb-24 md:pt-16 md:pb-32 flex flex-col lg:flex-row items-center gap-12 lg:gap-12 flex-1 z-10 relative">
          {/* Left Column */}
          <div className="flex-1 max-w-2xl lg:max-w-4xl w-full">
            <h1 className="text-[7.5vw] sm:text-[5.5vw] md:text-[5.8vw] lg:text-[3.8vw] xl:text-[4.2rem] font-bold tracking-tight mb-8 md:mb-10 leading-[1.2] text-gray-900">
              <span className="block whitespace-nowrap">質の良い商談が増える</span>
              <span className="block whitespace-nowrap text-[#7a5c48]">御社専属のAI営業マン。</span>
            </h1>
            
            <div className="h-px w-full max-w-[320px] bg-gray-900/10 mb-8 md:mb-10"></div>
            
            
            <div className="mb-8 md:mb-10 max-w-[420px]">
              <ul className="space-y-3 mb-6">
                {[
                  "新規開拓のアプローチ",
                  "お問合せへの即レス",
                  "継続的なフォローアップ"
                ].map((item, i) => (
                  <li key={i} className="flex items-center gap-3 text-lg lg:text-[1.15rem] font-bold text-gray-800">
                    <div className="flex items-center justify-center w-5 h-5 rounded-full bg-gray-900/5 border border-gray-900/10 text-gray-900 shrink-0">
                      <svg className="w-3 h-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <p className="text-base md:text-[1.05rem] text-gray-600 leading-relaxed font-medium">
                この3つの業務を完全に自動化。どんなに見込み客が増えても一切の漏れなく対応し、全自動で商談を獲得します。
              </p>
            </div>
            
            <button className="bg-gray-900 text-white px-10 py-4 rounded-full text-[15px] font-bold hover:scale-105 hover:bg-gray-800 transition-all shadow-xl shadow-gray-900/20">
              今すぐ「採用」する
            </button>
          </div>

          {/* Right Column (Video Area) */}
          <div className="flex-1 w-full flex justify-center lg:justify-end relative">
            <div className="aspect-[3/4] rounded-[2rem] bg-black/20 backdrop-blur-md border border-white/10 w-full max-w-[460px] shadow-2xl relative overflow-hidden">
              
              {/* Video Element */}
              <video 
                className="absolute inset-0 w-full h-full object-cover bg-[#1a1a1a]"
                style={{ objectPosition: 'center 15%' }}
                autoPlay 
                loop 
                muted 
                playsInline
                preload="auto"
                poster="/hero-poster.jpg"
                src="/Man_in_business_suit_smiling_delpmaspu_.mp4" 
              />

              {/* Top Left Badges */}
              <div className="absolute top-6 left-6 flex flex-col gap-2 z-10">
                <div className="bg-white/90 backdrop-blur-md text-gray-900 text-[13px] font-bold px-4 py-1.5 rounded-full border border-gray-200/50 w-fit shadow-sm">
                  AI営業マン
                </div>
                <div className="bg-white/90 backdrop-blur-md text-gray-900 text-[13px] font-bold px-4 py-1.5 rounded-full border border-gray-200/50 flex items-center gap-1.5 w-fit shadow-sm">
                  <Zap className="w-3.5 h-3.5 text-amber-500" fill="currentColor" />
                  オートパイロット稼働中
                </div>
              </div>
              
              {/* Bottom Message Overlay */}
              <div className="absolute bottom-4 left-4 right-4 md:bottom-6 md:left-6 md:right-6 bg-white/95 backdrop-blur-xl border border-gray-200/50 rounded-2xl p-3 md:p-4 flex items-center gap-3 md:gap-4 z-10 shadow-lg">
                <div className="w-[40px] h-[40px] md:w-[46px] md:h-[46px] bg-gradient-to-b from-[#47A1FF] to-[#007AFF] rounded-[12px] md:rounded-[14px] flex items-center justify-center shrink-0 shadow-md border border-gray-200/50">
                  <svg width="22" height="16" viewBox="0 0 26 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-[20px] md:w-[26px]">
                    <rect width="26" height="20" rx="4" fill="white"/>
                    <path d="M2 4.5L11.5 10.5C12.4 11.068 13.6 11.068 14.5 10.5L24 4.5" stroke="#007AFF" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </div>
                <div>
                  <div className="text-gray-900 font-bold text-[13px] md:text-[15px] mb-0.5">AI営業マン</div>
                  <div className="text-gray-600 text-[12px] md:text-[14px] leading-tight">〇〇様、御社の課題に合わせたご提案動画を作成しました。</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <main>
        {/* ① 課題提起 */}
        <ProblemSection />

        {/* ② 解決策 */}
        <SolutionSection />

        {/* ③ 仕組み（自動分岐フロー） */}
        <HowItWorksSection />

        {/* ⑤ 比較 */}
        <ComparisonSection />

        {/* ⑥ 料金 */}
        <PricingSection />

        {/* ⑦ 行動喚起 */}
        <FinalCTA />
      </main>

      {/* ⑧ フッター */}
      <Footer />
    </div>
  );
}

export default Home;
