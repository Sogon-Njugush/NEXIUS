// components/LanguageSwitcher.tsx
"use client";

import { useState, useTransition } from "react";
import { useRouter, usePathname } from "next/navigation";
import { useLocale } from "next-intl";
import { Globe, ChevronDown, Check, Loader2 } from "lucide-react";

const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export default function LanguageSwitcher() {
  const [isOpen, setIsOpen] = useState(false);
  const [isPending, startTransition] = useTransition();

  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const switchLanguage = (newLocale: string) => {
    if (newLocale === currentLocale) {
      setIsOpen(false);
      return;
    }

    startTransition(() => {
      // Remove current locale prefix from pathname
      let newPath = pathname;

      // Match any of our supported locales at the beginning of the path
      const locales = ["en", "de", "fr"];
      const regex = new RegExp(`^/(${locales.join("|")})`);
      const match = pathname.match(regex);

      if (match) {
        // Remove the locale part
        newPath = pathname.substring(match[0].length);
      }

      // Ensure path starts with /
      if (!newPath.startsWith("/")) {
        newPath = "/" + newPath;
      }

      // If path is empty, set to root
      if (newPath === "/") {
        newPath = "";
      }

      // Navigate to new URL
      router.push(`/${newLocale}${newPath}`);
      setIsOpen(false);
    });
  };

  const currentLanguage = languages.find((lang) => lang.code === currentLocale);

  return (
    <div className="relative" onMouseLeave={() => setIsOpen(false)}>
      <button
        onClick={() => setIsOpen(!isOpen)}
        onMouseEnter={() => setIsOpen(true)}
        className="flex items-center gap-2 px-3 py-2 rounded-lg hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors text-slate-700 dark:text-slate-300"
        disabled={isPending}
      >
        {isPending ? (
          <Loader2 className="h-4 w-4 animate-spin" />
        ) : (
          <>
            <Globe className="h-4 w-4" />
            <span className="text-sm font-medium">
              {currentLanguage?.code.toUpperCase() || "EN"}
            </span>
            <ChevronDown
              className={`h-3 w-3 transition-transform ${
                isOpen ? "rotate-180" : ""
              }`}
            />
          </>
        )}
      </button>

      {isOpen && !isPending && (
        <div className="absolute right-0 mt-2 w-48 bg-white dark:bg-slate-900 rounded-lg shadow-lg border border-slate-200 dark:border-slate-700 z-50">
          <div className="p-2">
            <p className="text-xs font-semibold text-slate-500 dark:text-slate-400 px-2 py-1 uppercase tracking-wider">
              Select Language
            </p>
            <div className="space-y-1">
              {languages.map((lang) => (
                <button
                  key={lang.code}
                  onClick={() => switchLanguage(lang.code)}
                  className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-md transition-colors ${
                    currentLocale === lang.code
                      ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600 dark:text-orange-400 font-medium"
                      : "text-slate-700 dark:text-slate-300 hover:bg-slate-50 dark:hover:bg-slate-800"
                  }`}
                >
                  <div className="flex items-center gap-3">
                    <span className="text-lg">{lang.flag}</span>
                    <span>{lang.name}</span>
                  </div>
                  {currentLocale === lang.code && <Check className="h-3 w-3" />}
                </button>
              ))}
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
