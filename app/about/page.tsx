"use client";

import React from "react";
import { Target, Globe, Award, Users, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function About() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Hero */}
      <section className="pt-32 pb-20 px-6 text-center bg-white dark:bg-[#050a14]">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <p className="font-bold text-orange-600 uppercase tracking-widest text-sm mb-4">
            Our Story
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-8">
            We Are the <br />
            <span className="text-slate-400">Open Platform Company.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Founded in 2012, Nexius has been democratizing secure digital
            experiences for the world's largest enterprises. We believe code is
            the catalyst for change.
          </p>
        </div>
      </section>

      {/* 2. Visual Story with Floating Cards */}
      <section className="py-20 px-6 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div className="relative" data-aos="fade-right">
            <div className="aspect-square rounded-3xl bg-gradient-to-br from-slate-200 to-slate-300 dark:from-slate-800 dark:to-slate-900 overflow-hidden relative">
              <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&w=1632&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-50"></div>
            </div>
            {/* Floating Stat Card */}
            <div
              className="absolute -bottom-10 -right-10 p-8 bg-white dark:bg-slate-800 rounded-xl shadow-2xl border border-slate-100 dark:border-slate-700 max-w-xs"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <p className="text-4xl font-bold text-orange-600 mb-2">#1</p>
              <p className="text-sm font-semibold text-slate-900 dark:text-white">
                Rated Integration Platform by Developers
              </p>
            </div>
          </div>

          <div data-aos="fade-left">
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-6">
              Our Mission
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
              To provide a flexible, powerful platform that enables
              organizations to integrate systems, manage APIs, and secure access
              for everyone, everywhere.
            </p>
            <div className="space-y-4">
              {[
                {
                  icon: Target,
                  title: "Innovation First",
                  desc: "We commit 40% of revenue back into R&D.",
                },
                {
                  icon: Globe,
                  title: "Open Source DNA",
                  desc: "Built on open standards to prevent vendor lock-in.",
                },
                {
                  icon: Users,
                  title: "Customer Obsessed",
                  desc: "24/7 support from engineers, not bots.",
                },
              ].map((item, i) => (
                <div key={i} className="flex gap-4">
                  <div className="p-3 bg-orange-100 dark:bg-orange-900/20 rounded-lg h-fit text-orange-600">
                    <item.icon className="h-6 w-6" />
                  </div>
                  <div>
                    <h4 className="font-bold text-slate-900 dark:text-white">
                      {item.title}
                    </h4>
                    <p className="text-sm text-slate-600 dark:text-slate-400">
                      {item.desc}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 3. Global Reach (Stats) */}
      <section className="py-20 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-16" data-aos="fade-up">
            Global Impact
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {[
              { val: "850+", label: "Employees" },
              { val: "90", label: "Countries" },
              { val: "20T+", label: "API Calls/Yr" },
              { val: "24/7", label: "Support" },
            ].map((stat, i) => (
              <div key={i} data-aos="fade-up" data-aos-delay={i * 100}>
                <p className="text-5xl font-extrabold text-white mb-2">
                  {stat.val}
                </p>
                <p className="text-orange-400 uppercase tracking-widest text-xs font-bold">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
