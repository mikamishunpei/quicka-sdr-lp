import { motion } from "framer-motion";
import { Search, Mail, Video, Calendar } from "lucide-react";

export function MockFunnelUI() {
  const stages = [
    {
      label: "CONTACTS FOUND",
      value: "8,754",
      subtext: "Total Qualified Prospects",
      icon: Search,
      color: "border-brand-gold/40 bg-brand-gold/10 text-brand-gold",
      textColor: "text-brand-gold",
      width: "w-[100%]",
      conv: "→ 47% Conv.",
    },
    {
      label: "EMAILS SENT",
      value: "4,112",
      subtext: "Outreach Campaigns",
      icon: Mail,
      color: "border-emerald-500/40 bg-emerald-500/10 text-emerald-500",
      textColor: "text-emerald-400",
      width: "w-[85%]",
      conv: "→ 35.5% Conv.",
    },
    {
      label: "VIDEOS GENERATED",
      value: "1,459",
      subtext: "AI Personalized Demos",
      icon: Video,
      color: "border-amber-500/40 bg-amber-500/10 text-amber-500",
      textColor: "text-amber-400",
      width: "w-[70%]",
      conv: "→ 21.8% Conv.",
    },
    {
      label: "MEETINGS BOOKED",
      value: "318",
      subtext: "Demos & Discovery Calls",
      icon: Calendar,
      color: "border-brand-green/40 bg-brand-green/10 text-brand-green",
      textColor: "text-white",
      width: "w-[55%]",
      conv: "",
    },
  ];

  return (
    <div className="w-full max-w-2xl mx-auto py-10 relative">
      {/* Background glow */}
      <div className="absolute inset-0 bg-brand-gold/5 blur-[100px] pointer-events-none rounded-full" />
      
      {/* Funnel container */}
      <div className="flex flex-col items-center gap-4 relative z-10">
        
        {/* Background funnel shape lines */}
        <div className="absolute inset-0 flex justify-center pointer-events-none opacity-20">
           <svg width="100%" height="100%" preserveAspectRatio="none">
             <path d="M10,0 L400,0 L250,500 L150,500 Z" fill="none" stroke="url(#goldGradient)" strokeWidth="2" />
             <defs>
               <linearGradient id="goldGradient" x1="0" y1="0" x2="0" y2="1">
                 <stop offset="0%" stopColor="#c5a059" />
                 <stop offset="100%" stopColor="#1a2b26" />
               </linearGradient>
             </defs>
           </svg>
        </div>

        {stages.map((stage, i) => (
          <div key={stage.label} className="w-full flex flex-col items-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.2 }}
              className={`relative ${stage.width} max-w-full backdrop-blur-md rounded-[20px] border ${stage.color} p-5 flex items-center justify-between shadow-lg overflow-hidden group`}
            >
              {/* Highlight sweep animation */}
              <div className="absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/5 to-transparent group-hover:animate-[shimmer_1.5s_infinite]" />

              <div className="flex items-center gap-4 z-10">
                <div className={`w-12 h-12 rounded-xl border border-white/20 bg-white/5 flex items-center justify-center shrink-0`}>
                   <stage.icon className="w-6 h-6" />
                </div>
                <div>
                  <div className="text-[10px] md:text-xs font-bold tracking-widest uppercase text-white/50 mb-0.5">
                    {stage.label}
                  </div>
                  <div className={`text-2xl md:text-4xl font-black tracking-tight ${stage.textColor}`}>
                    {stage.value}
                  </div>
                </div>
              </div>
              <div className="text-right hidden sm:block z-10">
                <div className="text-xs text-white/40 tracking-wide">{stage.subtext}</div>
              </div>
            </motion.div>

            {/* Connecting arrow/conversion text */}
            {stage.conv && (
              <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.2 + 0.3 }}
                className="py-3 text-[11px] font-mono text-brand-gold/60 tracking-widest flex items-center gap-2"
              >
                <div className="w-px h-6 bg-brand-gold/20"></div>
                {stage.conv}
                <div className="w-px h-6 bg-brand-gold/20"></div>
              </motion.div>
            )}
          </div>
        ))}
      </div>
    </div>
  );
}
