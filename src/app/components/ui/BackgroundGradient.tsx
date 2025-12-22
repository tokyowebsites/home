import { motion } from "motion/react";

export function BackgroundGradient({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <motion.div 
        animate={{ 
          scale: [1, 1.4, 1.2, 1],
          rotate: [0, 15, -10, 5, 0],
          x: [0, 120, -60, 40, 0],
          y: [0, -60, 80, -30, 0],
        }}
        transition={{ 
          duration: 20, 
          repeat: Infinity,
          ease: [0.45, 0.05, 0.55, 0.95]
        }}
        className="absolute -top-[30%] -left-[20%] w-[90%] h-[90%] bg-gradient-to-br from-[#059669] via-emerald-500 to-transparent blur-[140px] opacity-50 mix-blend-multiply"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.5, 1.1, 1],
          rotate: [0, -15, 15, -5, 0],
          x: [0, -120, 70, -40, 0],
          y: [0, 80, -60, 40, 0],
        }}
        transition={{ 
          duration: 25, 
          repeat: Infinity,
          ease: [0.42, 0, 0.58, 1]
        }}
        className="absolute top-[10%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-bl from-[#0f172a] via-[#1e40af] to-transparent blur-[120px] opacity-60 mix-blend-multiply"
      />
      <motion.div 
        animate={{ 
          scale: [1, 1.3, 0.9, 1],
          rotate: [0, 10, -10, 0],
          y: [0, 120, -80, 0],
          x: [0, 40, -40, 0],
        }}
        transition={{ 
          duration: 22, 
          repeat: Infinity,
          ease: "easeInOut"
        }}
        className="absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-white blur-[90px] opacity-70"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.org/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
}
