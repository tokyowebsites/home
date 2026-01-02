import { useState, useRef, useEffect } from 'react';
import { Globe } from 'lucide-react';
import { useTranslation } from '../lib/TranslationContext';
import { Language } from '../lib/translations';

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  // Close dropdown when clicking outside
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target as Node)) {
        setIsOpen(false);
      }
    };

    if (isOpen) {
      document.addEventListener('mousedown', handleClickOutside);
      document.addEventListener('touchstart', handleClickOutside);
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

  return (
    <div className="relative" ref={dropdownRef}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 hover:border-[#5C81D9] hover:bg-[#5C81D9]/5 transition-colors text-sm font-bold text-gray-700"
        style={{ fontWeight: 600 }}
        aria-label="Change language"
        aria-expanded={isOpen}
      >
        <Globe size={16} />
        <span>{languages.find(l => l.code === language)?.flag}</span>
        <span className="hidden sm:inline">{languages.find(l => l.code === language)?.label}</span>
      </button>
      
      {isOpen && (
        <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg z-[9999]">
          {languages.map((lang) => (
            <button
              key={lang.code}
              onClick={() => handleLanguageChange(lang.code)}
              className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-[#5C81D9]/10 active:bg-[#5C81D9]/20 transition-colors first:rounded-t-xl last:rounded-b-xl ${
                language === lang.code ? 'bg-[#5C81D9]/10 font-bold' : ''
              }`}
            >
              <span>{lang.flag}</span>
              <span className="text-sm">{lang.label}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  );
}

