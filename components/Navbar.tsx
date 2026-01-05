"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
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
} from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent scrolling when mobile menu is open
  useEffect(() => {
    if (isMobileOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
  }, [isMobileOpen]);

  const navStructure = {
    Platform: [
      {
        name: "Automated Governance",
        desc: "Fast-track compliance with AI.",
        icon: ShieldCheck,
        href: "/platform#governance",
      },
      {
        name: "Data Network",
        desc: "Connect data across your value chain.",
        icon: Globe,
        href: "/platform#network",
      },
      {
        name: "Risk Intelligence",
        desc: "Identify multi-vector risks.",
        icon: Zap,
        href: "/platform#risk",
      },
      {
        name: "Reporting Engine",
        desc: "Generate audit-ready reports.",
        icon: FileText,
        href: "/platform#reporting",
      },
    ],
    Solutions: [
      {
        name: "For Enterprises",
        desc: "Streamlined compliance at scale.",
        icon: Building2,
        href: "/solutions#enterprise",
      },
      {
        name: "For FinTech",
        desc: "End-to-end regulatory coverage.",
        icon: BarChart3,
        href: "/solutions#fintech",
      },
      {
        name: "For Logistics",
        desc: "Supply chain visibility.",
        icon: Truck,
        href: "/solutions#logistics",
      },
    ],
    Resources: [
      {
        name: "Insights Blog",
        desc: "Trends in digital reporting.",
        icon: Layers,
        href: "/insights",
      },
      {
        name: "Events & Webinars",
        desc: "Upcoming summits.",
        icon: Users,
        href: "/events",
      },
    ],
    Company: [
      {
        name: "About Us",
        desc: "Our mission and history.",
        icon: Users,
        href: "/about",
      },
      {
        name: "Careers",
        desc: "Join the team.",
        icon: Zap,
        href: "/careers",
        badge: "WE'RE HIRING",
      },
      {
        name: "Contact Support",
        desc: "Get technical help.",
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
        onMouseLeave={() => setActiveDropdown(null)}
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
                  onMouseEnter={() => setActiveDropdown(key)}
                >
                  <button
                    className={`flex items-center gap-1 text-sm font-bold transition-colors ${
                      activeDropdown === key
                        ? "text-orange-600"
                        : "text-slate-600 dark:text-slate-300 hover:text-orange-600"
                    }`}
                  >
                    {key}{" "}
                    <ChevronDown
                      className={`h-4 w-4 transition-transform ${
                        activeDropdown === key ? "rotate-180" : ""
                      }`}
                    />
                  </button>

                  {/* Dropdown Panel */}
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
                          )
                        )}
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>

            {/* Desktop Actions */}
            <div className="hidden md:flex items-center gap-4">
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
                className="px-6 py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold transition-all shadow-md hover:-translate-y-0.5"
              >
                Book a Demo
              </Link>
            </div>

            {/* Mobile Actions & Toggle */}
            <div className="flex items-center gap-4 md:hidden z-50">
              <button
                onClick={toggleTheme}
                className="p-2 text-slate-600 dark:text-slate-400"
              >
                {theme === "light" ? (
                  <Moon className="h-5 w-5" />
                ) : (
                  <Sun className="h-5 w-5" />
                )}
              </button>
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
                  )
                )}
              </div>
            </div>
          ))}

          <div className="mt-4 pt-6 border-t border-slate-100 dark:border-slate-800">
            <Link
              href="/book-demo"
              onClick={() => setIsMobileOpen(false)}
              className="flex items-center justify-center gap-2 w-full py-4 rounded-xl bg-orange-600 text-white font-bold text-lg shadow-lg active:scale-95 transition-transform"
            >
              Book a Demo <ArrowRight className="h-5 w-5" />
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
