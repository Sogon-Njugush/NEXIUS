"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";
import {
  Menu,
  X,
  Sun,
  Moon,
  Layers,
  ChevronDown,
  BarChart3,
  ShieldCheck,
  Zap,
  Globe,
  Users,
  FileText,
  Truck,
  Building2,
  ArrowRight,
  Check,
} from "lucide-react";
import { useTheme } from "./ThemeProvider";
import { useTranslations, useLocale } from "next-intl";

// Define supported languages
const languages = [
  { code: "en", name: "English", flag: "🇺🇸" },
  { code: "de", name: "Deutsch", flag: "🇩🇪" },
  { code: "fr", name: "Français", flag: "🇫🇷" },
];

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isLangMenuOpen, setIsLangMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const { theme, toggleTheme } = useTheme();

  // 1. Get current locale and translation hook
  const t = useTranslations("Navbar");
  const currentLocale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  // 2. Function to switch language via URL
  const switchLanguage = (newLang: string) => {
    // Replace the locale segment in the URL (e.g., /en/about -> /de/about)
    const newPath = pathname.replace(`/${currentLocale}`, `/${newLang}`);
    router.push(newPath);
    setIsLangMenuOpen(false);
    setIsMobileOpen(false);
  };

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  // 3. Dynamic Navigation Structure using Translations
  const navStructure = {
    [t("platform")]: [
      {
        name: t("governance"),
        desc: t("governanceDesc"),
        icon: ShieldCheck,
        href: "/platform#governance",
      },
      {
        name: t("dataNetwork"),
        desc: t("dataNetworkDesc"),
        icon: Globe,
        href: "/platform#network",
      },
      {
        name: t("risk"),
        desc: t("riskDesc"),
        icon: Zap,
        href: "/platform#risk",
      },
      {
        name: t("reporting"),
        desc: t("reportingDesc"),
        icon: FileText,
        href: "/platform#reporting",
      },
    ],
    [t("solutions")]: [
      {
        name: t("enterprises"),
        desc: t("enterprisesDesc"),
        icon: Building2,
        href: "/solutions#enterprise",
      },
      {
        name: t("fintech"),
        desc: t("fintechDesc"),
        icon: BarChart3,
        href: "/solutions#fintech",
      },
      {
        name: t("logistics"),
        desc: t("logisticsDesc"),
        icon: Truck,
        href: "/solutions#logistics",
      },
    ],
    [t("resources")]: [
      {
        name: t("blog"),
        desc: t("blogDesc"),
        icon: Layers,
        href: "/insights",
      },
      {
        name: t("events"),
        desc: t("eventsDesc"),
        icon: Users,
        href: "/events",
      },
    ],
    [t("company")]: [
      {
        name: t("about"),
        desc: t("aboutDesc"),
        icon: Users,
        href: "/about",
      },
      {
        name: t("careers"),
        desc: t("careersDesc"),
        icon: Zap,
        href: "/careers",
        badge: t("hiring"),
      },
      {
        name: t("contact"),
        desc: t("contactDesc"),
        icon: Users,
        href: "/contact",
      },
    ],
  };

  return (
    <>
      <nav
        className={`fixed top-0 w-full z-50 transition-all duration-300 ${
          scrolled || isMobileOpen
            ? "bg-white/90 dark:bg-[#050a14]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
            : "bg-transparent py-4"
        }`}
        onMouseLeave={() => {
          setActiveDropdown(null);
          setIsLangMenuOpen(false);
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">
            {/* Logo */}
            <Link
              href="/"
              className="flex items-center gap-2 group relative z-50"
              onClick={() => setIsMobileOpen(false)}
            >
              <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
                <Layers className="h-5 w-5" />
              </div>
              <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
                NEXIUS
              </span>
            </Link>

            {/* Desktop Navigation */}
            <div className="hidden md:flex items-center gap-8">
              {Object.keys(navStructure).map((key) => (
                <div
                  key={key}
                  className="relative h-full flex items-center py-4"
                  onMouseEnter={() => {
                    setActiveDropdown(key);
                    setIsLangMenuOpen(false);
                  }}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-bold transition-colors ${
                      activeDropdown === key
                        ? "text-orange-600"
                        : "text-slate-600 dark:text-slate-300 hover:text-orange-600"
                    }`}
                  >
                    {key}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Desktop Dropdown Panel */}
                  {activeDropdown === key && (
                    <div className="absolute top-full left-1/2 -translate-x-1/2 pt-2 w-[380px]">
                      <div className="bg-white dark:bg-[#0b1221] rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-3 grid gap-1">
                        {navStructure[key as keyof typeof navStructure].map(
                          (item: any) => (
                            <Link
                              key={item.name}
                              href={item.href}
                              className="flex items-start gap-4 p-3 rounded-xl hover:bg-slate-50 dark:hover:bg-slate-800/50 transition-colors group"
                            >
                              <div className="mt-1 p-2 bg-slate-100 dark:bg-slate-800 rounded-lg text-slate-500 group-hover:text-orange-600 group-hover:bg-orange-50 dark:group-hover:bg-orange-900/20 transition-colors">
                                <item.icon className="h-5 w-5" />
                              </div>
                              <div>
                                <div className="flex items-center gap-2">
                                  <span className="font-bold text-slate-900 dark:text-white text-sm">
                                    {item.name}
                                  </span>
                                  {item.badge && (
                                    <span className="px-1.5 py-0.5 rounded-md bg-purple-600 text-white text-[9px] font-bold uppercase tracking-wider">
                                      {item.badge}
                                    </span>
                                  )}
                                </div>
                                <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5">
                                  {item.desc}
                                </p>
                              </div>
                            </Link>
                          ),
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions (Language + Theme + CTA) */}
            <div className="hidden md:flex items-center gap-3">
              {/* LANGUAGE SWITCHER */}
              <div
                className="relative"
                onMouseEnter={() => {
                  setIsLangMenuOpen(true);
                  setActiveDropdown(null);
                }}
              >
                <button className="flex items-center gap-1.5 p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 font-bold text-sm transition-colors">
                  <Globe className="h-4 w-4" />
                  <span className="uppercase">{currentLocale}</span>
                  <ChevronDown
                    className={`h-3 w-3 transition-transform ${
                      isLangMenuOpen ? "rotate-180" : ""
                    }`}
                  />
                </button>

                {isLangMenuOpen && (
                  <div className="absolute top-full right-0 pt-2 w-40">
                    <div className="bg-white dark:bg-[#0b1221] rounded-xl shadow-xl border border-slate-200 dark:border-slate-800 p-1 overflow-hidden">
                      {languages.map((lang) => (
                        <button
                          key={lang.code}
                          onClick={() => switchLanguage(lang.code)}
                          className={`w-full flex items-center justify-between px-3 py-2 text-sm rounded-lg transition-colors ${
                            currentLocale === lang.code
                              ? "bg-orange-50 dark:bg-orange-900/20 text-orange-600"
                              : "text-slate-600 dark:text-slate-400 hover:bg-slate-50 dark:hover:bg-slate-800"
                          }`}
                        >
                          <span className="flex items-center gap-2">
                            <span>{lang.flag}</span> {lang.name}
                          </span>
                          {currentLocale === lang.code && (
                            <Check className="h-3 w-3" />
                          )}
                        </button>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              {/* Theme Toggle */}
              <button
                onClick={toggleTheme}
                className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-colors"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>

              <Link
                href="/book-demo"
                className="ml-2 px-5 py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                {t("bookDemo")}
              </Link>
            </div>

            {/* Mobile Actions & Toggle */}
            <div className="flex items-center gap-4 md:hidden z-50">
              <button
                onClick={() => setIsMobileOpen(!isMobileOpen)}
                className="p-2 text-slate-900 dark:text-white"
              >
                {isMobileOpen ? (
                  <X className="h-6 w-6" />
                ) : (
                  <Menu className="h-6 w-6" />
                )}
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* ==============================
          MOBILE MENU OVERLAY
      ============================== */}
      <div
        className={`fixed inset-0 z-40 bg-white dark:bg-[#050a14] pt-24 px-6 overflow-y-auto transition-transform duration-300 ease-in-out md:hidden ${
          isMobileOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col gap-8 pb-10">
          {/* Mobile Links */}
          {Object.keys(navStructure).map((category) => (
            <div key={category}>
              <h3 className="text-xs font-bold text-slate-400 uppercase tracking-widest mb-4">
                {category}
              </h3>
              <div className="grid gap-3">
                {navStructure[category as keyof typeof navStructure].map(
                  (item: any) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      onClick={() => setIsMobileOpen(false)}
                      className="flex items-center gap-4 p-3 rounded-xl bg-slate-50 dark:bg-slate-900/50 border border-slate-100 dark:border-slate-800 active:scale-[0.98] transition-all"
                    >
                      <div className="p-2 bg-white dark:bg-slate-800 rounded-lg text-orange-600 shadow-sm">
                        <item.icon className="h-5 w-5" />
                      </div>
                      <div>
                        <div className="flex items-center gap-2">
                          <span className="font-bold text-slate-900 dark:text-white">
                            {item.name}
                          </span>
                          {item.badge && (
                            <span className="px-1.5 py-0.5 rounded bg-purple-600 text-white text-[9px] font-bold uppercase">
                              {item.badge}
                            </span>
                          )}
                        </div>
                        <p className="text-xs text-slate-500 dark:text-slate-400 mt-0.5 line-clamp-1">
                          {item.desc}
                        </p>
                      </div>
                    </Link>
                  ),
                )}
              </div>
            </div>
          ))}

          {/* Mobile Utility Section (Theme + Language) */}
          <div className="border-t border-slate-100 dark:border-slate-800 pt-6">
            <div className="flex items-center justify-between mb-6">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {t("appearance")}
              </span>
              <button
                onClick={toggleTheme}
                className="flex items-center gap-2 px-4 py-2 rounded-lg bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white font-medium text-sm"
              >
                {theme === "light" ? (
                  <>
                    <Moon className="h-4 w-4" /> Dark Mode
                  </>
                ) : (
                  <>
                    <Sun className="h-4 w-4" /> Light Mode
                  </>
                )}
              </button>
            </div>

            <div className="space-y-3">
              <span className="text-sm font-bold text-slate-900 dark:text-white">
                {t("language")}
              </span>
              <div className="grid grid-cols-3 gap-2">
                {languages.map((lang) => (
                  <button
                    key={lang.code}
                    onClick={() => switchLanguage(lang.code)}
                    className={`flex flex-col items-center justify-center p-3 rounded-xl border transition-all ${
                      currentLocale === lang.code
                        ? "bg-orange-50 dark:bg-orange-900/20 border-orange-200 dark:border-orange-800 text-orange-700 dark:text-orange-400"
                        : "bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400"
                    }`}
                  >
                    <span className="text-xl mb-1">{lang.flag}</span>
                    <span className="text-xs font-bold">
                      {lang.code.toUpperCase()}
                    </span>
                  </button>
                ))}
              </div>
            </div>
          </div>

          <div className="pt-2">
            <Link
              href="/book-demo"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-orange-600 text-white font-bold text-lg shadow-lg active:scale-95 transition-transform"
            >
              {t("bookDemo")} <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
