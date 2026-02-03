import { Language } from "./translations";

const localeByLanguage: Record<Language, string> = {
  ja: "ja-JP",
  en: "en-US",
  ko: "ko-KR",
};

const currencyByLanguage: Record<Language, string> = {
  ja: "JPY",
  en: "USD",
  ko: "KRW",
};

export function formatCurrency(amount: number, language: Language) {
  const locale = localeByLanguage[language];
  const currency = currencyByLanguage[language];
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(amount);
}

export function extractCurrencyAmount(text: string) {
  const match = text.match(/\d[\d,]*/);
  if (!match) return null;
  const amount = Number(match[0].replace(/,/g, ""));
  return Number.isNaN(amount) ? null : amount;
}

export function formatCurrencyInText(text: string, language: Language) {
  const cleaned = text.replace(/[¥$₩]/g, "");
  return cleaned.replace(/\d[\d,]*/g, (match) => {
    const amount = Number(match.replace(/,/g, ""));
    if (Number.isNaN(amount)) return match;
    return formatCurrency(amount, language);
  });
}
