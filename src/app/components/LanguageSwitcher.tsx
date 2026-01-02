import { useState, useRef, useEffect } from 'react';
import { Globe, ChevronDown } from 'lucide-react';
import { useTranslation } from '../lib/TranslationContext';
import { Language } from '../lib/translations';

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const buttonRef = useRef<HTMLButtonElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent | TouchEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node) &&
          buttonRef.current && !buttonRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      // Use setTimeout to avoid immediate closure
      setTimeout(() => {
        document.addEventListener('mousedown', handleClickOutside);
        document.addEventListener('touchstart', handleClickOutside);
      }, 0);
    }

    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
      document.removeEventListener('touchstart', handleClickOutside);
    };
  }, [isOpen]);

  const handleLanguageChange = (langCode: Language) => {
    setLanguage(langCode);
    setIsOpen(false);
  };

  const currentLang = languages.find(l => l.code === language);

  return (
    <div className="relative" ref={dropdownRef} style={{ zIndex: 10000 }}>
      <button
        ref={buttonRef}
        onClick={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        onTouchEnd={(e) => {
          e.preventDefault();
          e.stopPropagation();
          setIsOpen(!isOpen);
        }}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 hover:border-[#5C81D9] hover:bg-[#5C81D9]/5 active:bg-[#5C81D9]/10 transition-all duration-200 text-sm font-bold text-gray-700"
        style={{ fontWeight: 600, WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
        aria-label="Change language"
        aria-expanded={isOpen}
        aria-haspopup="true"
      >
        <Globe size={16} />
        <span>{currentLang?.flag}</span>
        <span className="hidden sm:inline">{currentLang?.label}</span>
        <ChevronDown 
          size={14} 
          className={`transition-transform duration-200 ${isOpen ? 'rotate-180' : ''}`}
        />
      </button>
      
      {isOpen && (
        <div 
          className="absolute top-full right-0 mt-1 w-44 bg-white border border-gray-200 rounded-xl shadow-2xl"
          style={{ zIndex: 10001 }}
        >
          {languages.map((lang, index) => (
            <button
              key={lang.code}
              onClick={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageChange(lang.code);
              }}
              onTouchEnd={(e) => {
                e.preventDefault();
                e.stopPropagation();
                handleLanguageChange(lang.code);
              }}
              className={`w-full text-left px-4 py-3 flex items-center gap-3 hover:bg-[#5C81D9]/10 active:bg-[#5C81D9]/20 transition-colors duration-150 ${
                index === 0 ? 'rounded-t-xl' : ''
              } ${
                index === languages.length - 1 ? 'rounded-b-xl' : 'border-b border-gray-100'
              } ${
                language === lang.code ? 'bg-[#5C81D9]/10 font-bold' : ''
              }`}
              style={{ WebkitTapHighlightColor: 'transparent', touchAction: 'manipulation' }}
            >
              <span className="text-lg">{lang.flag}</span>
              <span className="text-sm flex-1">{lang.label}</span>
              {language === lang.code && (
                <span className="text-[#5C81D9] text-xs">✓</span>
              )}
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

