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
    <div className={`flex flex-col rounded-xl overflow-hidden border shadow-2xl ${className} ${dark ? "border-gray-700 bg-gray-900" : "border-gray-200 bg-white"}`}>
      {/* Browser Toolbar */}
      <div className={`flex items-center gap-1 sm:gap-2 px-2 sm:px-4 py-2 sm:py-3 border-b ${dark ? "bg-gray-800 border-gray-700" : "bg-gray-50 border-gray-200"}`}>
        <div className="flex gap-1 sm:gap-1.5 shrink-0">
          {/* macOS-style window controls */}
          <button 
            onClick={onClose}
            className={`w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full [background-color:#ff5f57] ${onClose ? 'hover:brightness-90 active:scale-90 transition-all cursor-pointer' : 'cursor-default'}`} 
            aria-label="close" 
          />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full [background-color:#febc2e]" aria-label="minimize" />
          <div className="w-2.5 h-2.5 sm:w-3 sm:h-3 rounded-full [background-color:#28c840]" aria-label="zoom" />
        </div>
        
        <div className="flex-1 ml-2 sm:ml-4 mr-1 sm:mr-2">
          <div className={`flex items-center px-2 sm:px-3 w-full max-w-md mx-auto h-6 sm:h-7 rounded-md border text-[10px] sm:text-xs font-medium ${dark ? "bg-gray-900 border-gray-700 text-gray-400" : "bg-white border-gray-200 text-gray-500"}`}>
            <div className="flex items-center truncate">
              {onBack && (
                <button 
                  onClick={onBack} 
                  className={`mr-1 sm:mr-2 p-0.5 rounded transition-colors ${dark ? "hover:bg-white/10" : "hover:bg-black/5"}`}
                  aria-label="戻る"
                >
                  <ArrowLeft size={12} className="sm:w-3.5 sm:h-3.5" />
                </button>
              )}
              <span className="opacity-50 text-[10px] sm:text-xs">🔒</span>
              <span className="ml-1 sm:ml-2 truncate">{url}</span>
            </div>
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
