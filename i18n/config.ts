// i18n/config.ts
export const locales = ["en", "de", "fr"] as const;
export const defaultLocale = "en" as const;
export type Locale = (typeof locales)[number];
