"use client";

import React from "react";
import Link from "next/link";
import {
  ShieldCheck,
  Database,
  FileText,
  Zap,
  CheckCircle2,
  Server,
  Lock,
  ArrowRight,
  Activity,
  Globe,
} from "lucide-react";

export default function Platform() {
  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#050a14] overflow-hidden scroll-smooth">
      {/* 1. HERO SECTION */}
      <section className="pt-32 pb-20 px-6 text-center bg-white dark:bg-[#050a14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-100 dark:bg-purple-900/20 text-purple-600 font-bold text-xs uppercase mb-6">
            Nexius OS v2.4
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            The Operating System for <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-600 to-blue-600">
              Intelligent Governance.
            </span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto mb-10">
            A unified platform to collect, manage, and report on non-financial
            data across your entire value chain.
          </p>
          <div className="flex justify-center gap-4">
            <Link
              href="/book-demo"
              className="px-8 py-4 bg-purple-600 hover:bg-purple-700 text-white font-bold rounded-full transition-all shadow-lg hover:-translate-y-1"
            >
              See Platform Demo
            </Link>
          </div>
        </div>
      </section>

      {/* 2. AUTOMATED GOVERNANCE (#governance) */}
      <section
        id="governance"
        className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]"
      >
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="p-3 bg-blue-100 dark:bg-blue-900/20 text-blue-600 rounded-xl w-fit mb-6">
              <ShieldCheck className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Automated Governance
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Stop relying on manual spreadsheets for compliance. Nexius uses AI
              agents to continuously monitor your API traffic, cloud
              infrastructure, and data pipelines against global standards.
            </p>
            <ul className="space-y-4">
              {[
                "Real-time PII/PHI Redaction",
                "Automated ISO 27001 Evidence Collection",
                "Policy-as-Code Enforcement",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3 font-medium text-slate-700 dark:text-slate-300"
                >
                  <CheckCircle2 className="h-5 w-5 text-blue-500" /> {item}
                </li>
              ))}
            </ul>
          </div>
          {/* Abstract UI Representation */}
          <div
            className="bg-white dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 h-80 relative overflow-hidden"
            data-aos="fade-left"
          >
            <div className="absolute top-4 left-4 right-4 h-2 bg-slate-100 dark:bg-slate-800 rounded-full overflow-hidden">
              <div className="w-2/3 h-full bg-blue-500"></div>
            </div>
            <div className="mt-8 space-y-3">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-3 bg-slate-50 dark:bg-slate-800 rounded-lg"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
                    <div className="w-32 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                  </div>
                  <div className="w-12 h-2 bg-slate-200 dark:bg-slate-700 rounded"></div>
                </div>
              ))}
            </div>
            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-white dark:from-slate-900 to-transparent"></div>
          </div>
        </div>
      </section>

      {/* 3. DATA NETWORK (#network) */}
      <section id="network" className="py-24 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center md:flex-row-reverse">
          {/* UI Representation (Right side on desktop) */}
          <div
            className="order-2 md:order-1 bg-slate-50 dark:bg-slate-900 rounded-2xl shadow-xl border border-slate-200 dark:border-slate-800 p-8 h-80 flex items-center justify-center relative"
            data-aos="fade-right"
          >
            <Globe className="h-32 w-32 text-orange-100 dark:text-slate-800 absolute" />
            <div className="relative z-10 grid grid-cols-2 gap-4">
              <div className="p-4 bg-white dark:bg-black rounded-lg shadow-lg text-center">
                <Database className="h-6 w-6 mx-auto text-orange-500 mb-2" />
                <span className="text-xs font-bold text-slate-500">ERP</span>
              </div>
              <div className="p-4 bg-white dark:bg-black rounded-lg shadow-lg text-center">
                <Server className="h-6 w-6 mx-auto text-blue-500 mb-2" />
                <span className="text-xs font-bold text-slate-500">Cloud</span>
              </div>
            </div>
          </div>

          <div className="order-1 md:order-2" data-aos="fade-left">
            <div className="p-3 bg-orange-100 dark:bg-orange-900/20 text-orange-600 rounded-xl w-fit mb-6">
              <Database className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Universal Data Network
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Data silos are the enemy of intelligence. Nexius acts as a
              semantic layer on top of your existing stack, connecting SQL
              databases, NoSQL stores, and legacy mainframes into a single
              graph.
            </p>
            <Link
              href="/contact"
              className="text-orange-600 font-bold hover:gap-2 gap-1 flex items-center transition-all"
            >
              View Integrations <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* 4. RISK INTELLIGENCE (#risk) */}
      <section id="risk" className="py-24 px-6 bg-slate-900 text-white">
        <div className="max-w-7xl mx-auto text-center" data-aos="fade-up">
          <div className="inline-block p-4 bg-white/10 rounded-full mb-8">
            <Zap className="h-10 w-10 text-yellow-400" />
          </div>
          <h2 className="text-4xl font-bold mb-6">
            Predictive Risk Intelligence
          </h2>
          <p className="text-xl text-slate-400 max-w-3xl mx-auto mb-16">
            Don't just react to incidents; prevent them. Our Risk Engine uses
            generative models to simulate attack vectors and supply chain
            disruptions before they happen.
          </p>

          <div className="grid md:grid-cols-3 gap-8 text-left">
            {[
              {
                title: "Supply Chain",
                desc: "Monitor vendor API uptime and security scores automatically.",
              },
              {
                title: "Cybersecurity",
                desc: "Detect anomalous data access patterns in real-time.",
              },
              {
                title: "Regulatory",
                desc: "Get alerts when new laws (e.g. EU AI Act) impact your stack.",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="bg-white/5 border border-white/10 p-8 rounded-2xl hover:bg-white/10 transition-colors"
              >
                <h3 className="text-xl font-bold text-white mb-3">
                  {item.title}
                </h3>
                <p className="text-slate-400">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 5. REPORTING ENGINE (#reporting) */}
      <section
        id="reporting"
        className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]"
      >
        <div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div data-aos="fade-right">
            <div className="p-3 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-xl w-fit mb-6">
              <FileText className="h-8 w-8" />
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-6">
              Audit-Ready Reporting
            </h2>
            <p className="text-lg text-slate-600 dark:text-slate-400 mb-8 leading-relaxed">
              Generate comprehensive PDF reports for stakeholders, auditors, and
              board members with one click. Trace every data point back to its
              raw source.
            </p>
            <button className="px-6 py-3 bg-white border border-slate-300 dark:bg-slate-800 dark:border-slate-700 rounded-lg font-bold text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors">
              Download Sample Report
            </button>
          </div>

          <div className="relative group" data-aos="zoom-in">
            <div className="absolute inset-0 bg-green-500/20 blur-3xl rounded-full"></div>
            <div className="relative bg-white dark:bg-slate-900 p-8 rounded-xl border border-slate-200 dark:border-slate-800 shadow-2xl rotate-3 group-hover:rotate-0 transition-transform duration-500">
              <div className="h-4 w-1/3 bg-slate-200 dark:bg-slate-700 rounded mb-6"></div>
              <div className="space-y-4">
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                <div className="h-2 w-full bg-slate-100 dark:bg-slate-800 rounded"></div>
                <div className="h-2 w-2/3 bg-slate-100 dark:bg-slate-800 rounded"></div>
              </div>
              <div className="mt-8 flex justify-end">
                <div className="h-10 w-10 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center text-green-600">
                  <CheckCircle2 className="h-6 w-6" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
