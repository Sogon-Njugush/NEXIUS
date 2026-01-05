"use client";

import React from "react";
import Link from "next/link";
import {
  Building2,
  Landmark,
  Truck,
  ArrowRight,
  Shield,
  Activity,
  Users,
  Globe,
} from "lucide-react";

export default function Solutions() {
  return (
    <div className="flex flex-col w-full bg-white dark:bg-[#050a14] overflow-hidden scroll-smooth">
      {/* 1. HERO */}
      <section className="pt-32 pb-20 px-6 text-center bg-slate-900 text-white">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <p className="text-orange-400 font-bold uppercase tracking-widest text-sm mb-6">
            Tailored Architectures
          </p>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Solutions Built for <br /> Your Industry.
          </h1>
          <p className="text-xl text-slate-400 max-w-2xl mx-auto">
            Compliance and data requirements vary by sector. Nexius comes
            pre-configured with the frameworks and integrations you need.
          </p>
        </div>
      </section>

      {/* 2. ENTERPRISE (#enterprise) */}
      <section
        id="enterprise"
        className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-blue-100 dark:bg-blue-900/20 text-blue-700 dark:text-blue-400 font-bold mb-6">
              <Building2 className="h-5 w-5" /> Enterprise
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Global Scale & Governance
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              For organizations with 10k+ employees and fragmented data
              landscapes. We unify your internal developer platforms and enforce
              governance across business units.
            </p>
            <div className="grid grid-cols-2 gap-6 mb-8">
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-3xl font-bold text-blue-600">99.99%</p>
                <p className="text-sm text-slate-500">SLA Uptime</p>
              </div>
              <div className="bg-white dark:bg-slate-900 p-4 rounded-xl border border-slate-200 dark:border-slate-800">
                <p className="text-3xl font-bold text-blue-600">SOC2</p>
                <p className="text-sm text-slate-500">Type II Ready</p>
              </div>
            </div>
            <Link
              href="/book-demo"
              className="text-blue-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Book Enterprise Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div
            className="flex-1 w-full h-80 bg-gradient-to-br from-blue-500/10 to-purple-500/10 rounded-3xl border border-blue-100 dark:border-slate-800 flex items-center justify-center relative overflow-hidden"
            data-aos="fade-left"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay"></div>
            <Building2 className="h-32 w-32 text-blue-600/20" />
          </div>
        </div>
      </section>

      {/* 3. FINTECH (#fintech) */}
      <section id="fintech" className="py-24 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse gap-16 items-center">
          <div className="flex-1" data-aos="fade-left">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-green-100 dark:bg-green-900/20 text-green-700 dark:text-green-400 font-bold mb-6">
              <Landmark className="h-5 w-5" /> Financial Services
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Banking-Grade Security
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Modernize legacy cores and enable Open Banking APIs. Our platform
              comes with native support for ISO 20022 messaging and real-time
              fraud detection pipelines.
            </p>
            <ul className="space-y-4 mb-8">
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Shield className="h-5 w-5 text-green-500" /> PCI DSS Level 1
                Certified
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Shield className="h-5 w-5 text-green-500" /> PSD2 / Open
                Banking Compliant
              </li>
              <li className="flex items-center gap-3 text-slate-700 dark:text-slate-300">
                <Shield className="h-5 w-5 text-green-500" /> Real-time
                Transaction Monitoring
              </li>
            </ul>
            <Link
              href="/book-demo"
              className="text-green-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Book FinTech Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div
            className="flex-1 w-full h-80 bg-gradient-to-br from-green-500/10 to-teal-500/10 rounded-3xl border border-green-100 dark:border-slate-800 flex items-center justify-center relative overflow-hidden"
            data-aos="fade-right"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1565514020175-0517fd43b94d?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay"></div>
            <Landmark className="h-32 w-32 text-green-600/20" />
          </div>
        </div>
      </section>

      {/* 4. LOGISTICS (#logistics) */}
      <section
        id="logistics"
        className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]"
      >
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row gap-16 items-center">
          <div className="flex-1" data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-orange-100 dark:bg-orange-900/20 text-orange-700 dark:text-orange-400 font-bold mb-6">
              <Truck className="h-5 w-5" /> Supply Chain & Logistics
            </div>
            <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Resilient Supply Chains
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Gain total visibility from factory floor to last mile. Integrate
              IoT sensor data with ERPs to predict disruptions and automate
              re-routing.
            </p>
            <div className="p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 mb-8">
              <div className="flex items-center gap-4 mb-4">
                <Activity className="h-6 w-6 text-orange-500" />
                <h4 className="font-bold text-slate-900 dark:text-white">
                  Predictive Maintenance
                </h4>
              </div>
              <p className="text-sm text-slate-500">
                Reduce downtime by 40% with AI-driven equipment monitoring.
              </p>
            </div>
            <Link
              href="/book-demo"
              className="text-orange-600 font-bold flex items-center gap-2 hover:gap-3 transition-all"
            >
              Book Logistics Demo <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
          <div
            className="flex-1 w-full h-80 bg-gradient-to-br from-orange-500/10 to-red-500/10 rounded-3xl border border-orange-100 dark:border-slate-800 flex items-center justify-center relative overflow-hidden"
            data-aos="fade-left"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?q=80&w=1000&auto=format&fit=crop')] bg-cover opacity-10 mix-blend-overlay"></div>
            <Truck className="h-32 w-32 text-orange-600/20" />
          </div>
        </div>
      </section>

      {/* 5. CTA SECTION */}
      <section className="py-20 bg-slate-900 text-white text-center px-6">
        <div className="max-w-3xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-6">Don't see your industry?</h2>
          <p className="text-slate-400 mb-10">
            Our platform is flexible enough for Healthcare, Retail, and Public
            Sector. Let's discuss your specific requirements.
          </p>
          <Link
            href="/contact"
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors inline-block"
          >
            Contact Sales
          </Link>
        </div>
      </section>
    </div>
  );
}
