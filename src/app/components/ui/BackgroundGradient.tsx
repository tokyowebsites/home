import React from "react";

export function BackgroundGradient({ className = "" }: { className?: string }) {
  return (
    <div className={`absolute inset-0 overflow-hidden pointer-events-none ${className}`}>
      <div 
        className="animate-blob-1 absolute -top-[30%] -left-[20%] w-[90%] h-[90%] bg-gradient-to-br from-[#059669] via-emerald-500 to-transparent blur-[140px] opacity-50 mix-blend-multiply"
      />
      <div 
        className="animate-blob-2 absolute top-[10%] -right-[20%] w-[80%] h-[80%] bg-gradient-to-bl from-[#0f172a] via-[#1e40af] to-transparent blur-[120px] opacity-60 mix-blend-multiply"
      />
      <div 
        className="animate-blob-3 absolute bottom-[-20%] left-[20%] w-[60%] h-[60%] bg-white blur-[90px] opacity-70"
      />
      <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.org/noise.svg')] opacity-30 brightness-100 contrast-150 mix-blend-overlay"></div>
    </div>
  );
}
