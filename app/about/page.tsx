"use client";

import React from "react";
import Image from "next/image";
import {
  Target,
  Globe,
  Award,
  Users,
  ArrowRight,
  ShieldCheck,
  Zap,
} from "lucide-react";

export default function About() {
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#050a14] overflow-hidden">
      {/* 1. HERO: Manifesto Style */}
      <section className="pt-40 pb-20 px-6 text-center bg-white dark:bg-[#050a14]">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-600 dark:text-slate-300 font-bold text-xs uppercase mb-6 tracking-widest">
            Since 2012
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8 leading-tight">
            Building the <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-600 to-red-600">
              Intelligent Backbone
            </span>{" "}
            <br />
            of the Enterprise.
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Nexius was founded on a simple premise: Data shouldn't be a
            byproduct. It should be the product. We help the world's largest
            organizations turn compliance into a competitive advantage.
          </p>
        </div>
      </section>

      {/* 2. STATS GRID */}
      <section className="py-12 border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { label: "Data Points Processed", val: "20B+" },
            { label: "Enterprise Clients", val: "500+" },
            { label: "Global Offices", val: "12" },
            { label: "Team Members", val: "140" },
          ].map((stat, i) => (
            <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
              <div className="text-4xl font-extrabold text-slate-900 dark:text-white mb-2">
                {stat.val}
              </div>
              <div className="text-xs font-bold uppercase tracking-widest text-slate-500">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* 3. MISSION & VALUES (Bento Grid) */}
      <section className="py-24 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16 text-center">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
              Our DNA
            </h2>
            <p className="text-slate-500 mt-4">
              The principles that guide our engineering and strategy.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {/* Card 1: Large */}
            <div
              className="md:col-span-2 bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden group"
              data-aos="fade-right"
            >
              <div className="relative z-10">
                <div className="w-12 h-12 bg-orange-100 dark:bg-orange-900/20 text-orange-600 rounded-xl flex items-center justify-center mb-6">
                  <Target className="h-6 w-6" />
                </div>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                  Radical Transparency
                </h3>
                <p className="text-slate-600 dark:text-slate-400 max-w-md">
                  We believe that the best systems are open. Whether it's our
                  open-source contributions or our pricing model, we hide
                  nothing.
                </p>
              </div>
              <div className="absolute right-0 top-0 w-64 h-64 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-bl-full -mr-10 -mt-10 transition-transform group-hover:scale-110"></div>
            </div>

            {/* Card 2 */}
            <div
              className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800"
              data-aos="fade-left"
            >
              <div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-xl flex items-center justify-center mb-6">
                <ShieldCheck className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Security First
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                We don't bolt security on at the end. It's baked into every line
                of code we ship.
              </p>
            </div>

            {/* Card 3 */}
            <div
              className="bg-slate-50 dark:bg-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800"
              data-aos="fade-up"
            >
              <div className="w-12 h-12 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-xl flex items-center justify-center mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Velocity
              </h3>
              <p className="text-slate-600 dark:text-slate-400 text-sm">
                Speed matters. Our platforms are designed to deploy in days, not
                months.
              </p>
            </div>

            {/* Card 4: Large */}
            <div
              className="md:col-span-2 bg-slate-900 dark:bg-white text-white dark:text-slate-900 p-10 rounded-3xl border border-slate-200 dark:border-slate-800 relative overflow-hidden"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-8">
                <div>
                  <h3 className="text-2xl font-bold mb-2">Global by Design</h3>
                  <p className="opacity-80 max-w-md">
                    With offices in Berlin, Austin, and Singapore, we support
                    clients across every major time zone.
                  </p>
                </div>
                <Globe className="h-24 w-24 opacity-20" />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. LEADERSHIP TEAM */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12 text-center">
            Meet the Architects
          </h2>
          <div className="grid md:grid-cols-4 gap-8">
            {[
              {
                name: "Sarah Connor",
                role: "CEO & Founder",
                img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "David Chen",
                role: "CTO",
                img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "Elena Rodriguez",
                role: "VP Product",
                img: "https://images.unsplash.com/photo-1580489944761-15a19d654956?q=80&w=400&auto=format&fit=crop",
              },
              {
                name: "James Marcus",
                role: "Head of AI",
                img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&w=400&auto=format&fit=crop",
              },
            ].map((person, i) => (
              <div
                key={i}
                className="group text-center"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <div className="relative w-48 h-48 mx-auto rounded-full overflow-hidden mb-6 border-4 border-white dark:border-slate-800 shadow-xl">
                  <Image
                    src={person.img}
                    alt={person.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-500"
                  />
                </div>
                <h3 className="text-lg font-bold text-slate-900 dark:text-white">
                  {person.name}
                </h3>
                <p className="text-sm text-orange-600 font-medium">
                  {person.role}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
