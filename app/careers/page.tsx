"use client";

import React from "react";
import Link from "next/link";
import {
  Briefcase,
  Heart,
  Coffee,
  Monitor,
  ArrowRight,
  Check,
} from "lucide-react";

export default function Careers() {
  const jobs = [
    {
      title: "Senior Backend Engineer",
      dept: "Engineering",
      loc: "Remote (EU)",
      type: "Full-time",
    },
    {
      title: "Solutions Architect",
      dept: "Sales",
      loc: "Berlin, DE",
      type: "Full-time",
    },
    {
      title: "AI Research Scientist",
      dept: "R&D",
      loc: "Austin, TX",
      type: "Full-time",
    },
    {
      title: "Product Marketing Manager",
      dept: "Marketing",
      loc: "London, UK",
      type: "Full-time",
    },
  ];

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#050a14] min-h-screen">
      {/* 1. HERO */}
      <section className="pt-32 pb-20 px-6 bg-slate-900 text-white text-center relative overflow-hidden">
        {/* Abstract Background */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
          <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-orange-600/20 rounded-full blur-[100px]"></div>
          <div className="absolute bottom-[-20%] left-[-10%] w-[600px] h-[600px] bg-purple-600/20 rounded-full blur-[100px]"></div>
        </div>

        <div className="relative z-10 max-w-4xl mx-auto" data-aos="zoom-in">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 border border-white/20 text-white font-bold text-xs uppercase mb-8 backdrop-blur-md">
            We are hiring
          </div>
          <h1 className="text-5xl md:text-7xl font-extrabold mb-8">
            Do your life's <br />{" "}
            <span className="text-orange-500">best work.</span>
          </h1>
          <p className="text-xl text-slate-300 max-w-2xl mx-auto mb-10">
            Join a team of obsessive builders, thinkers, and problem solvers. We
            are redefining how the enterprise handles intelligence.
          </p>
          <button
            onClick={() =>
              document
                .getElementById("jobs")
                ?.scrollIntoView({ behavior: "smooth" })
            }
            className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors"
          >
            View Open Roles
          </button>
        </div>
      </section>

      {/* 2. BENEFITS */}
      <section className="py-24 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-16 text-center">
            Why Nexius?
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                icon: Monitor,
                title: "Remote-First",
                desc: "Work from anywhere. We measure output, not hours in a chair.",
              },
              {
                icon: Heart,
                title: "Premium Health",
                desc: "100% coverage for you and 50% for your dependents.",
              },
              {
                icon: Coffee,
                title: "Learning Budget",
                desc: "€2,000/year stipend for conferences, books, and courses.",
              },
            ].map((perk, i) => (
              <div
                key={i}
                className="p-8 bg-slate-50 dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                <perk.icon className="h-10 w-10 text-orange-600 mb-6" />
                <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3">
                  {perk.title}
                </h3>
                <p className="text-slate-600 dark:text-slate-400">
                  {perk.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. OPEN ROLES */}
      <section id="jobs" className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-5xl mx-auto">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Open Positions
          </h2>

          <div className="space-y-4">
            {jobs.map((job, i) => (
              <div
                key={i}
                className="group flex flex-col md:flex-row md:items-center justify-between p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 hover:border-orange-500 transition-all cursor-pointer shadow-sm hover:shadow-md"
                data-aos="fade-up"
                data-aos-delay={i * 50}
              >
                <div>
                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-1 group-hover:text-orange-600 transition-colors">
                    {job.title}
                  </h3>
                  <div className="flex gap-4 text-sm text-slate-500 dark:text-slate-400">
                    <span className="flex items-center gap-1">
                      <Briefcase className="h-3 w-3" /> {job.dept}
                    </span>
                    <span>•</span>
                    <span>{job.loc}</span>
                    <span>•</span>
                    <span>{job.type}</span>
                  </div>
                </div>
                <div className="mt-4 md:mt-0">
                  <Link
                    href={`/careers/apply/${encodeURIComponent(
                      job.title.replace(/ /g, "-")
                    )}`}
                    className="inline-flex items-center gap-2 font-bold text-slate-900..."
                  >
                    Apply Now <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div
            className="mt-12 p-8 bg-gradient-to-r from-orange-100 to-red-50 dark:from-slate-800 dark:to-slate-900 rounded-2xl border border-orange-200 dark:border-slate-700 flex flex-col md:flex-row items-center justify-between gap-6"
            data-aos="fade-up"
          >
            <div>
              <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-2">
                Don't see a fit?
              </h3>
              <p className="text-slate-600 dark:text-slate-400">
                We are always looking for talent. Send us your CV.
              </p>
            </div>
            <Link
              href="/contact"
              className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-lg hover:opacity-90 transition-opacity"
            >
              Email Us
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
