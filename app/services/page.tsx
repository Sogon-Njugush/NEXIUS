"use client";

import React from "react";
import Link from "next/link";
import {
  Layers,
  Shield,
  Cpu,
  BarChart3,
  Check,
  ArrowRight,
  Server,
  Cloud,
  Code,
} from "lucide-react";

export default function Services() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. Services Hero */}
      <section className="relative pt-24 pb-20 px-6 bg-slate-900 dark:bg-[#050a14] text-white text-center">
        <div className="max-w-4xl mx-auto z-10 relative" data-aos="fade-up">
          <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
            A Complete Suite for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-red-500">
              Digital Transformation
            </span>
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto mb-10">
            From API Management to Identity Security, our platform provides the
            building blocks for a modern, agile enterprise.
          </p>
        </div>
        {/* Background Abstract */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-orange-600/10 rounded-full blur-[100px] -z-0" />
      </section>

      {/* 2. Capability Grid */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-3 gap-8">
            {/* API & Integration */}
            <div
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
              data-aos="fade-up"
              data-aos-delay="0"
            >
              <div className="h-14 w-14 rounded-xl bg-orange-100 dark:bg-orange-900/20 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
                <Layers className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                API Management & Integration
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Connect disparate systems and expose data securely. We build the
                bridges that let your applications talk to each other.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Full Lifecycle API Management",
                  "Microservices Architecture",
                  "Legacy System Modernization",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Check className="h-4 w-4 text-orange-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Discuss Integration <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Identity & Security */}
            <div
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
              data-aos="fade-up"
              data-aos-delay="100"
            >
              <div className="h-14 w-14 rounded-xl bg-blue-100 dark:bg-blue-900/20 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
                <Shield className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Identity & Access Management (IAM)
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Secure your digital ecosystem. We implement Customer IAM (CIAM)
                and workforce identity solutions that scale.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Single Sign-On (SSO)",
                  "Multi-Factor Authentication",
                  "Adaptive Risk-Based Access",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Check className="h-4 w-4 text-blue-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Secure Your Apps <ArrowRight className="h-4 w-4" />
              </Link>
            </div>

            {/* Cloud & DevOps */}
            <div
              className="bg-white dark:bg-slate-900 rounded-2xl p-8 border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
              data-aos="fade-up"
              data-aos-delay="200"
            >
              <div className="h-14 w-14 rounded-xl bg-purple-100 dark:bg-purple-900/20 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
                <Cloud className="h-7 w-7" />
              </div>
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
                Cloud Native & DevOps
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-6">
                Accelerate delivery with internal developer platforms. We
                optimize your Kubernetes, CI/CD, and cloud infrastructure.
              </p>
              <ul className="space-y-3 mb-8">
                {[
                  "Platform Engineering",
                  "Kubernetes Orchestration",
                  "Serverless Computing",
                ].map((item, i) => (
                  <li
                    key={i}
                    className="flex items-center gap-3 text-sm text-slate-700 dark:text-slate-300"
                  >
                    <Check className="h-4 w-4 text-purple-500" /> {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/contact"
                className="text-purple-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
              >
                Optimize Infrastructure <ArrowRight className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* 3. Technology Stack */}
      <section className="py-20 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Powered by Best-in-Class Tech
          </h2>
          <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
            {/* Placeholders for tech logos */}
            {[Server, Code, Cloud, Cpu, Shield, Layers].map((Icon, i) => (
              <div key={i} className="flex flex-col items-center gap-2 group">
                <div className="p-4 bg-slate-100 dark:bg-slate-800 rounded-full group-hover:bg-orange-100 dark:group-hover:bg-orange-900/30 transition-colors">
                  <Icon className="h-8 w-8 text-slate-600 dark:text-slate-400 group-hover:text-orange-600" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Bottom CTA */}
      <section className="py-20 bg-orange-600 text-white text-center px-6">
        <div className="max-w-4xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Architect Your Future?
          </h2>
          <p className="text-orange-100 text-lg mb-8">
            Join 500+ enterprises building on our platform.
          </p>
          <Link
            href="/contact"
            className="inline-block px-8 py-4 bg-white text-orange-700 font-bold rounded-lg shadow-lg hover:bg-slate-100 transition-colors"
          >
            Talk to an Expert
          </Link>
        </div>
      </section>
    </div>
  );
}
