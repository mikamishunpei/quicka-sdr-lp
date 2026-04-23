import { ClinicHero } from '@/components/clinic/ClinicHero';
import { ClinicProblem } from '@/components/clinic/ClinicProblem';
import { ClinicSolution } from '@/components/clinic/ClinicSolution';
import { ClinicComparison } from '@/components/clinic/ClinicComparison';
import { ClinicPricing } from '@/components/clinic/ClinicPricing';
import { ClinicBento } from '@/components/clinic/ClinicBento';
import { Footer } from '@/components/ui/cta';
import { motion } from 'framer-motion';

function Clinic() {
  return (
    <div className="font-sans antialiased text-gray-900 bg-white min-h-screen flex flex-col">
      {/* ヒーローセクション（独自の背景グラデーション） */}
      <div 
        className="flex flex-col relative overflow-hidden"
        style={{
          background: 'linear-gradient(135deg, #fdfbfb 0%, #ebedee 100%)'
        }}
      >
        {/* Navbar */}
        <nav className="container mx-auto px-8 py-6 flex items-center justify-between z-10 relative">
          <div className="flex items-center gap-2">
            <a href="/" className="flex items-center gap-1.5 hover:opacity-80 transition-opacity">
              <svg width="28" height="28" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M16 0C16 8.83656 8.83656 16 0 16C8.83656 16 16 23.1634 16 32C16 23.1634 23.1634 16 32 16C23.1634 16 16 8.83656 16 0Z" fill="#111827"/>
                <path d="M24 8C24 12.4183 20.4183 16 16 16C20.4183 16 24 19.5817 24 24C24 19.5817 27.5817 16 32 16C27.5817 16 24 12.4183 24 8Z" fill="#111827" opacity="0.8"/>
              </svg>
              <span className="text-2xl font-bold tracking-tight text-gray-900">Quicka</span>
            </a>
          </div>
          <div>
            <a href="/contact" className="bg-gray-900 text-white px-5 py-2.5 rounded-full text-[15px] font-medium hover:bg-gray-800 transition-colors">
              無料で試す
            </a>
          </div>
        </nav>

        <ClinicHero />
      </div>

      <main>
        <ClinicProblem />
        
        {/* セクション間の視覚的トランジション（課題 -> 解決策） */}
        <div className="relative w-full flex flex-col items-center justify-center -my-12 md:-my-16 z-20 pointer-events-none">
          {/* 背景の巨大な透かし矢印 */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 opacity-[0.03]">
            <svg className="w-64 h-64 md:w-96 md:h-96" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={0.5} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
            </svg>
          </div>

          {/* アニメーションする繊細なラインと矢印 */}
          <motion.div 
            initial={{ opacity: 0, y: -20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8 }}
            className="flex flex-col items-center"
          >
            <div className="bg-white/90 backdrop-blur-md px-6 py-2.5 rounded-full border border-gray-200 shadow-sm mb-4 relative z-10 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-brand-gold animate-pulse" />
              <span className="text-[13px] font-black text-brand-gold tracking-[0.2em] uppercase">
                新しい集客のカタチ
              </span>
            </div>
            <svg width="40" height="100" viewBox="0 0 40 100" fill="none" xmlns="http://www.w3.org/2000/svg">
              <motion.path 
                initial={{ pathLength: 0 }}
                whileInView={{ pathLength: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.5, ease: "easeOut" }}
                d="M20 0V96M20 96L10 86M20 96L30 86" 
                stroke="url(#paint0_linear)" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              />
              <defs>
                <linearGradient id="paint0_linear" x1="20" y1="0" x2="20" y2="100" gradientUnits="userSpaceOnUse">
                  <stop stopColor="#D4AF37" stopOpacity="0"/>
                  <stop offset="0.3" stopColor="#D4AF37" stopOpacity="0.8"/>
                  <stop offset="1" stopColor="#D4AF37" stopOpacity="1"/>
                </linearGradient>
              </defs>
            </svg>
          </motion.div>
        </div>

        <ClinicSolution />
        
        <ClinicBento />
        <ClinicComparison />
        <ClinicPricing />
      </main>

      <Footer />
    </div>
  );
}

export default Clinic;
