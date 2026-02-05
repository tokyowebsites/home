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

const jpyToUsd = 1 / 150;
const jpyToKrw = 9;

function convertFromJpy(amount: number, language: Language) {
  if (language === "en") return amount * jpyToUsd;
  if (language === "ko") return amount * jpyToKrw;
  return amount;
}

export function formatCurrency(amount: number, language: Language) {
  const locale = localeByLanguage[language];
  const currency = currencyByLanguage[language];
  const convertedAmount = convertFromJpy(amount, language);
  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    maximumFractionDigits: 0,
    minimumFractionDigits: 0,
  }).format(convertedAmount);
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
