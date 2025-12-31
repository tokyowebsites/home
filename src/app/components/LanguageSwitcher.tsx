import { Globe } from 'lucide-react';
import { useTranslation } from '../lib/TranslationContext';
import { Language } from '../lib/translations';

export function LanguageSwitcher() {
  const { language, setLanguage } = useTranslation();

  const languages: { code: Language; label: string; flag: string }[] = [
    { code: 'ja', label: '日本語', flag: '🇯🇵' },
    { code: 'en', label: 'English', flag: '🇺🇸' },
    { code: 'ko', label: '한국어', flag: '🇰🇷' },
  ];

  return (
    <div className="relative group">
      <button
        className="flex items-center gap-2 px-3 py-2 rounded-full bg-white border border-gray-200 hover:border-emerald-300 hover:bg-emerald-50 transition-colors text-sm font-bold text-gray-700"
        style={{ fontWeight: 600 }}
      >
        <Globe size={16} />
        <span>{languages.find(l => l.code === language)?.flag}</span>
        <span className="hidden sm:inline">{languages.find(l => l.code === language)?.label}</span>
      </button>
      
      <div className="absolute top-full right-0 mt-2 w-40 bg-white border border-gray-200 rounded-xl shadow-lg opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all z-50">
        {languages.map((lang) => (
          <button
            key={lang.code}
            onClick={() => setLanguage(lang.code)}
            className={`w-full text-left px-4 py-2 flex items-center gap-2 hover:bg-emerald-50 transition-colors first:rounded-t-xl last:rounded-b-xl ${
              language === lang.code ? 'bg-emerald-50 font-bold' : ''
            }`}
          >
            <span>{lang.flag}</span>
            <span className="text-sm">{lang.label}</span>
          </button>
        ))}
      </div>
    </div>
  );
}

