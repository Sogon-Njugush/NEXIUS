"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Menu, X, Sun, Moon, Layers } from "lucide-react";
import { useTheme } from "./ThemeProvider";

export default function Navbar() {
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const pathname = usePathname();

  // Handle scroll effect for navbar background
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setIsMobileOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Services", href: "/services" },
    { name: "Events", href: "/events" },
    { name: "About", href: "/about" },
    { name: "Insights", href: "/insights" },
  ];

  const isActive = (path: string) => pathname === path;

  return (
    <nav
      className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        scrolled
          ? "bg-white/90 dark:bg-[#050a14]/90 backdrop-blur-md border-b border-slate-200 dark:border-slate-800 shadow-sm"
          : "bg-transparent py-2"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16 md:h-20">
          {/* Logo */}
          <Link
            href="/"
            className="flex items-center gap-2 group relative z-10"
          >
            <div className="w-9 h-9 bg-orange-600 rounded-lg flex items-center justify-center text-white shadow-lg group-hover:scale-105 transition-transform">
              <Layers className="h-5 w-5" />
            </div>
            <span className="text-xl font-extrabold tracking-tight text-slate-900 dark:text-white">
              NEXIUS
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.name}
                href={link.href}
                className={`px-4 py-2 text-sm font-bold rounded-full transition-all ${
                  isActive(link.href)
                    ? "text-orange-600 bg-orange-50 dark:bg-orange-900/20"
                    : "text-slate-600 dark:text-slate-400 hover:text-orange-600 dark:hover:text-white hover:bg-slate-100 dark:hover:bg-slate-800"
                }`}
              >
                {link.name}
              </Link>
            ))}
          </div>

          {/* Desktop Right Section (Theme + CTA) */}
          <div className="hidden md:flex items-center gap-4">
            {/* Theme Toggle */}
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all"
              aria-label="Toggle Theme"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>

            {/* CTA */}
            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-orange-600 hover:bg-orange-700 text-white text-sm font-bold transition-all shadow-md hover:shadow-lg transform hover:-translate-y-0.5"
            >
              Contact Sales
            </Link>
          </div>

          {/* Mobile Menu Button */}
          <div className="flex items-center gap-2 md:hidden">
            <button
              onClick={toggleTheme}
              className="p-2 rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-600 dark:text-slate-400 transition-all"
            >
              {theme === "light" ? (
                <Moon className="h-5 w-5" />
              ) : (
                <Sun className="h-5 w-5" />
              )}
            </button>
            <button
              onClick={() => setIsMobileOpen(!isMobileOpen)}
              className="p-2 rounded-md text-slate-900 dark:text-white hover:bg-slate-100 dark:hover:bg-slate-800 transition-colors z-20 relative"
              aria-label="Toggle Menu"
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

      {/* Mobile Menu Overlay */}
      <div
        className={`fixed inset-0 bg-white dark:bg-[#050a14] z-0 pt-24 px-6 transition-all duration-300 md:hidden ${
          isMobileOpen
            ? "opacity-100 visible"
            : "opacity-0 invisible pointer-events-none"
        }`}
      >
        <div className="flex flex-col space-y-4">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              href={link.href}
              className={`text-2xl font-bold py-2 border-b border-slate-100 dark:border-slate-800 ${
                isActive(link.href)
                  ? "text-orange-600"
                  : "text-slate-900 dark:text-white"
              }`}
            >
              {link.name}
            </Link>
          ))}
          <Link
            href="/contact"
            className="mt-8 w-full py-4 rounded-lg bg-orange-600 text-white text-center text-lg font-bold shadow-lg"
          >
            Contact Sales
          </Link>
        </div>
      </div>
    </nav>
  );
}
