// app/[locale]/translation-test/page.tsx
"use client";

import { useTranslations, useLocale } from "next-intl";

export default function TranslationTest() {
  const locale = useLocale();
  const navT = useTranslations("Navbar");
  const homeT = useTranslations("HomePage.Hero");

  const translations = {
    nav: {
      platform: navT("platform"),
      solutions: navT("solutions"),
      company: navT("company"),
    },
    home: {
      titleStart: homeT("titleStart"),
      titleEnd: homeT("titleEnd"),
      subtitle: homeT("subtitle"),
    },
  };

  return (
    <div className="min-h-screen p-8">
      <h1 className="text-3xl font-bold mb-6">Translation Test</h1>

      <div className="mb-8">
        <h2 className="text-xl font-bold mb-2">
          Current Locale: <span className="text-blue-600">{locale}</span>
        </h2>
      </div>

      <div className="grid grid-cols-2 gap-8">
        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow border">
          <h2 className="text-xl font-bold mb-4 text-green-600">
            Actual Translations
          </h2>
          <div className="space-y-3">
            <p>
              <strong>Navbar Platform:</strong>{" "}
              <span className="text-blue-600">{translations.nav.platform}</span>
            </p>
            <p>
              <strong>Navbar Solutions:</strong>{" "}
              <span className="text-blue-600">
                {translations.nav.solutions}
              </span>
            </p>
            <p>
              <strong>Navbar Company:</strong>{" "}
              <span className="text-blue-600">{translations.nav.company}</span>
            </p>
            <p>
              <strong>Hero Title Start:</strong>{" "}
              <span className="text-blue-600">
                {translations.home.titleStart}
              </span>
            </p>
            <p>
              <strong>Hero Title End:</strong>{" "}
              <span className="text-blue-600">
                {translations.home.titleEnd}
              </span>
            </p>
          </div>
        </div>

        <div className="bg-white dark:bg-slate-800 p-6 rounded-lg shadow border">
          <h2 className="text-xl font-bold mb-4 text-orange-600">
            Expected (German)
          </h2>
          <div className="space-y-3">
            <p>
              <strong>Navbar Platform:</strong> Plattform
            </p>
            <p>
              <strong>Navbar Solutions:</strong> Lösungen
            </p>
            <p>
              <strong>Navbar Company:</strong> Unternehmen
            </p>
            <p>
              <strong>Hero Title Start:</strong> Erstellen Sie erstaunliche
            </p>
            <p>
              <strong>Hero Title End:</strong> Intelligente digitale Erlebnisse
            </p>
          </div>
        </div>
      </div>

      <div className="mt-8 p-4 bg-yellow-50 dark:bg-yellow-900/20 border border-yellow-200 dark:border-yellow-800 rounded">
        <h3 className="font-bold mb-2">Instructions:</h3>
        <ol className="list-decimal pl-5 space-y-1">
          <li>
            Visit this page at <code>/en/translation-test</code>
          </li>
          <li>Switch language using the navbar</li>
          <li>Check if translations update</li>
          <li>Check browser console for logs</li>
        </ol>
      </div>
    </div>
  );
}
