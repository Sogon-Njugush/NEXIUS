"use client";

import Link from "next/link";
import {
  ArrowRight,
  Shield,
  Cpu,
  Layers,
  BarChart3,
  Globe,
  Frame,
} from "lucide-react";
import { useTranslations } from "next-intl";
import CountUp from "react-countup";
import Marquee from "react-fast-marquee";

const partners = [
  { name: "Acme Corp", icon: Layers },
  { name: "Quantum", icon: Cpu },
  { name: "Echo", icon: Shield },
  { name: "Nebula", icon: Globe },
  { name: "Vertex", icon: BarChart3 },
  { name: "Horizon", icon: Frame },
];

export default function Home() {
  const t = useTranslations("HomePage");

  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-white dark:bg-[#050a14]">
        <div
          className="max-w-7xl mx-auto text-center relative z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            {t("Hero.titleStart")} <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              {t("Hero.titleEnd")}
            </span>
          </h1>

          <p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            {t("Hero.subtitle")}
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1"
            >
              {t("Hero.ctaStart")}
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 bg-transparent text-slate-900 dark:text-white font-bold text-lg transition-all hover:-translate-y-1"
            >
              {t("Hero.ctaExplore")}
            </Link>
          </div>
        </div>

        {/* Background Gradient */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-orange-500/5 dark:bg-orange-600/10 rounded-full blur-[120px] -z-10"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
      </section>

      {/* STATS BAR (Updated Values + Animation) */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              // UPDATED STATS VALUES
              { value: 2500, suffix: "+", label: t("Stats.customers") },
              { value: 450, suffix: "M", label: t("Stats.transactions") },
              { value: 99, suffix: ".9%", label: "Uptime" },
              { value: 150, suffix: "+", label: t("Stats.countries") },
            ].map((stat, i) => (
              <div
                key={i}
                className="space-y-1"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <div className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white flex justify-center items-center gap-0.5">
                  <CountUp
                    end={stat.value}
                    duration={2.5}
                    separator=","
                    decimals={stat.value % 1 !== 0 ? 1 : 0}
                    enableScrollSpy={true}
                    scrollSpyOnce={true}
                  />
                  <span className="text-orange-600">{stat.suffix}</span>
                </div>
                <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CORE TECHNOLOGIES */}
      <section className="py-24 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              {t("Tech.title")}
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              {t("Tech.subtitle")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {[
              {
                icon: Layers,
                title: t("Tech.cards.apiTitle"),
                desc: t("Tech.cards.apiDesc"),
                color: "orange",
              },
              {
                icon: Cpu,
                title: t("Tech.cards.intTitle"),
                desc: t("Tech.cards.intDesc"),
                color: "blue",
              },
              {
                icon: Shield,
                title: t("Tech.cards.iamTitle"),
                desc: t("Tech.cards.iamDesc"),
                color: "teal",
              },
              {
                icon: BarChart3,
                title: t("Tech.cards.devTitle"),
                desc: t("Tech.cards.devDesc"),
                color: "purple",
              },
            ].map((card, i) => {
              const colors: any = {
                orange:
                  "text-orange-600 dark:text-orange-500 bg-orange-100 dark:bg-orange-900/20 hover:border-orange-500",
                blue: "text-blue-600 dark:text-blue-500 bg-blue-100 dark:bg-blue-900/20 hover:border-blue-500",
                teal: "text-teal-600 dark:text-teal-500 bg-teal-100 dark:bg-teal-900/20 hover:border-teal-500",
                purple:
                  "text-purple-600 dark:text-purple-500 bg-purple-100 dark:bg-purple-900/20 hover:border-purple-500",
              };
              return (
                <div
                  key={i}
                  className={`group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b1221] ${colors[
                    card.color
                  ]
                    .split(" ")
                    .pop()} transition-all hover:-translate-y-1 hover:shadow-xl`}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div
                    className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 ${colors[
                      card.color
                    ]
                      .split(" ")
                      .slice(0, 2)
                      .join(" ")}`}
                  >
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center font-bold hover:underline ${
                      colors[card.color].split(" ")[0]
                    }`}
                  >
                    {t("Tech.learnMore")}{" "}
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AI FEATURE SECTION */}
      <section className="py-24 px-6 bg-slate-900 dark:bg-[#02040a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase mb-6">
              {t("AI.badge")}
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              {t.rich("AI.title", { br: () => <br /> })}
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              {t("AI.subtitle")}
            </p>
            <ul className="space-y-4 mb-10">
              {[
                t("AI.list.connect"),
                t("AI.list.govern"),
                t("AI.list.automate"),
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors inline-block"
            >
              {t("AI.cta")}
            </Link>
          </div>

          <div
            className="relative h-[500px] w-full rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay scale-110 animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="text-center p-8 relative z-10 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-6xl font-extrabold text-white mb-2">10x</p>
              <p className="text-orange-400 uppercase tracking-widest font-bold">
                {t("AI.stat")}
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* INDUSTRY RECOGNITION */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            {t("Recognition.title")}
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                org: t("Recognition.cards.forresterOrg"),
                desc: t("Recognition.cards.forresterDesc"),
              },
              {
                org: t("Recognition.cards.kuppingerOrg"),
                desc: t("Recognition.cards.kuppingerDesc"),
              },
              {
                org: t("Recognition.cards.gartnerOrg"),
                desc: t("Recognition.cards.gartnerDesc"),
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-left"
                data-aos="flip-up"
                data-aos-delay={i * 100}
              >
                <div className="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded mb-6"></div>
                <p className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                  {item.org}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-orange-600 font-bold text-sm cursor-pointer hover:underline flex items-center gap-1">
                  {t("Recognition.readReport")}{" "}
                  <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            {t("CTA.title")}
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            {t("CTA.subtitle")}
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold hover:opacity-90 transition-opacity hover:-translate-y-1"
            >
              {t("CTA.contact")}
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-slate-900 dark:hover:border-white transition-all hover:-translate-y-1"
            >
              {t("CTA.try")}
            </Link>
          </div>
        </div>
      </section>
      {/* PARTNERS MARQUEE */}
      <section className="py-12 border-b border-slate-200 dark:border-slate-800 bg-white dark:bg-[#050a14]">
        <div
          className="max-w-7xl mx-auto px-6 mb-10 text-center"
          data-aos="fade-up"
        >
          <p className="text-sm font-bold text-slate-500 dark:text-slate-400 uppercase tracking-widest">
            {t("Partners.trustedBy")}
          </p>
        </div>

        {/* The Marquee Component */}
        <Marquee
          gradient={true}
          gradientColor="var(--background)"
          gradientWidth={100}
          speed={50}
          pauseOnHover={true}
          autoFill={true}
        >
          {partners.map((partner, i) => (
            <div
              key={i}
              className="flex items-center gap-3 mx-12 opacity-50 grayscale transition-all duration-300 hover:opacity-100 hover:grayscale-0 cursor-pointer"
            >
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white">
                <partner.icon className="h-6 w-6" />
              </div>
              <span className="text-xl font-bold text-slate-700 dark:text-slate-300">
                {partner.name}
              </span>
            </div>
          ))}
        </Marquee>
      </section>
    </div>
  );
}
