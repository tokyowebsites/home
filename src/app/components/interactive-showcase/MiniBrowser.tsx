import React from "react";
import { ArrowLeft } from "lucide-react";

interface MiniBrowserProps {
  url?: string;
  children: React.ReactNode;
  className?: string;
  dark?: boolean;
  onBack?: () => void;
  onClose?: () => void;
}

export function MiniBrowser({ 
  url = "tokyowebsites.com", 
  children, 
  className = "", 
  dark = false,
  onBack,
  onClose
}: MiniBrowserProps) {
  return (
    <div className={`flex flex-col rounded-xl md:rounded-2xl overflow-hidden border shadow-2xl ${className} ${dark ? "border-gray-800 bg-gray-900" : "border-gray-200 bg-white"}`}>
      {/* Browser Toolbar */}
      <div className={`flex items-center gap-3 px-4 py-3 border-b ${dark ? "bg-gray-800/50 border-gray-700" : "bg-gray-50/80 border-gray-200"} backdrop-blur-md`}>
        <div className="flex gap-2 shrink-0">
          {/* macOS-style window controls */}
          <div className="w-3 h-3 rounded-full bg-red-400 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-amber-400 opacity-80" />
          <div className="w-3 h-3 rounded-full bg-emerald-400 opacity-80" />
        </div>
        
        <div className="flex-1 px-4 max-w-md mx-auto">
          <div className={`flex items-center justify-center px-3 h-8 rounded-lg border text-xs font-bold tracking-tight transition-all ${
            dark 
              ? "bg-gray-900/50 border-gray-700 text-gray-400" 
              : "bg-white border-gray-200 text-gray-500 shadow-sm"
          }`}>
            <div className="flex items-center gap-2 truncate">
              {onBack && (
                <button 
                  onClick={onBack} 
                  className={`p-1 rounded-md transition-colors ${dark ? "hover:bg-white/10" : "hover:bg-black/5"}`}
                  aria-label="Back"
                >
                  <ArrowLeft size={14} />
                </button>
              )}
              <span className="text-[10px] opacity-60">https://</span>
              <span className="truncate">{url}</span>
            </div>
          </div>
        </div>

        <div className="flex gap-2 shrink-0">
           <div className={`w-6 h-6 rounded-md flex items-center justify-center ${dark ? "bg-gray-700/50" : "bg-gray-200/50"}`}>
             <div className="w-3 h-0.5 bg-current opacity-40 rounded-full" />
           </div>
        </div>
      </div>

      {/* Browser Content */}
      <div className="flex-1 relative overflow-hidden bg-white">
        {children}
      </div>
    </div>
  );
}
