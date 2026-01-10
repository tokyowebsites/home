import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown, Check } from 'lucide-react';
import { useTranslation } from '../lib/TranslationContext';
import { Language } from '../lib/translations';
import { useIsMobile } from './ui/use-mobile';
import { Drawer, DrawerContent, DrawerTrigger, DrawerTitle, DrawerHeader } from './ui/drawer';

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);
  const isMobile = useIsMobile();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  // Close dropdown when clicking outside (Desktop)
  useEffect(() => {
    if (isMobile) return;

    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen, isMobile]);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === language);

  if (isMobile) {
    return (
      <Drawer open={isOpen} onOpenChange={setIsOpen}>
        <DrawerTrigger asChild>
          <button
            className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 hover:border-[#5C81D9] hover:bg-[#5C81D9]/5 active:bg-[#5C81D9]/10 transition-all text-sm font-bold text-gray-700"
          >
            <Globe size={16} />
            <span>{currentLang?.flag}</span>
            <ChevronDown size={14} className="opacity-50" />
          </button>
        </DrawerTrigger>
        <DrawerContent className="bg-white">
          <DrawerHeader className="text-left pb-4">
            <DrawerTitle className="text-gray-900">Select Language</DrawerTitle>
          </DrawerHeader>
          <div className="p-4 pt-0 pb-10 space-y-3">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={() => handleLanguageChange(lang.code)}
                className={`w-full flex items-center justify-between p-5 rounded-2xl border-2 transition-all active:scale-[0.98] ${
                  language === lang.code 
                    ? "bg-[#5C81D9]/5 border-[#5C81D9] text-[#5C81D9] shadow-sm" 
                    : "bg-white border-gray-100 text-gray-700 shadow-sm"
                }`}
              >
                <div className="flex items-center gap-4">
                  <span className="text-3xl">{lang.flag}</span>
                  <span className="font-bold text-lg">{lang.label}</span>
                </div>
                {language === lang.code && (
                  <div className="bg-[#5C81D9] text-white p-1 rounded-full">
                    <Check size={18} strokeWidth={3} />
                  </div>
                )}
              </button>
            ))}
          </div>
        </DrawerContent>
      </Drawer>
    );
  }

  return (
    <div className="relative" ref={dropdownRef} style={{ zIndex: 10000 }}>
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 hover:border-[#5C81D9] hover:bg-[#5C81D9]/5 active:bg-[#5C81D9]/10 transition-all duration-200 text-sm font-bold text-gray-700 shadow-sm"
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe size={16} />
        <span>{currentLang?.flag}</span>
        <span className="hidden lg:inline">{currentLang?.label}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-2 w-48 bg-white border border-gray-100 rounded-2xl shadow-[0_10px_40px_rgba(0,0,0,0.12)] overflow-hidden animate-in fade-in zoom-in-95 duration-200"
          style={{ zIndex: 10001 }}
        >
          <div className="p-1.5 space-y-0.5">
            {languages.map((lang) => (
              <button
                key={lang.code}
                onClick={(e) => {
                  e.preventDefault();
                  e.stopPropagation();
                  handleLanguageChange(lang.code);
                }}
                className={`w-full text-left px-4 py-3 flex items-center gap-3 rounded-xl transition-all ${
                  language === lang.code 
                    ? 'bg-[#5C81D9]/10 font-bold text-[#5C81D9]' 
                    : 'text-gray-600 hover:bg-gray-50 hover:text-gray-900'
                }`}
              >
                <span className="text-xl">{lang.flag}</span>
                <span className="text-sm flex-1 font-bold">{lang.label}</span>
                {language === lang.code && (
                  <Check size={16} strokeWidth={3} className="text-[#5C81D9]" />
                )}
              </button>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}
