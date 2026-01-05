"use client";

import React, { useState } from "react";
import { CheckCircle2, Calendar, ArrowRight } from "lucide-react";

export default function BookDemo() {
  const [submitted, setSubmitted] = useState(false);
  const [status, setStatus] = useState<"idle" | "loading" | "error">("idle");

  // 1. Use State to track input values
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    workEmail: "",
    companyName: "",
  });

  // 2. Handle text changes safely
  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    // 3. Get API URL from env or fallback
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

    try {
      const response = await fetch(`${baseUrl}/demo`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("idle");
      setSubmitted(true);
    } catch (err) {
      console.error(err);
      setStatus("error");
    }
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-[#050a14]">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
        {/* Left: Value Prop */}
        <div data-aos="fade-right">
          <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-900/20 text-orange-600 font-bold text-xs uppercase mb-6">
            <Calendar className="h-3 w-3" /> Schedule a Call
          </div>
          <h1 className="text-5xl font-extrabold text-slate-900 dark:text-white mb-6 leading-tight">
            See Nexius in <br />{" "}
            <span className="text-orange-600">Action.</span>
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-8">
            Book a personalized walkthrough of the Nexius platform. We'll show
            you how to automate your compliance workflow in 30 minutes.
          </p>

          <div className="space-y-4">
            {[
              "Automated Regulatory Reporting",
              "Real-time Risk Dashboards",
              "API & Data Network Integration",
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-3">
                <CheckCircle2 className="h-6 w-6 text-green-500 shrink-0" />
                <span className="text-lg text-slate-700 dark:text-slate-300 font-medium">
                  {item}
                </span>
              </div>
            ))}
          </div>

          <div className="mt-12 p-6 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="h-12 w-12 rounded-full bg-slate-200 dark:bg-slate-700 overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&w=200&auto=format&fit=crop"
                  alt="Sales Rep"
                />
              </div>
              <div>
                <p className="text-sm text-slate-500 dark:text-slate-400 italic">
                  "The demo completely changed how we view data governance. It's
                  shockingly fast."
                </p>
                <p className="text-xs font-bold text-slate-900 dark:text-white mt-1">
                  — Sarah J., CTO at FinCorp
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Right: Booking Form */}
        <div
          className="bg-white dark:bg-slate-900 p-8 md:p-10 rounded-3xl shadow-2xl border border-slate-200 dark:border-slate-800 relative overflow-hidden"
          data-aos="fade-left"
        >
          {!submitted ? (
            <form onSubmit={handleSubmit} className="space-y-5 relative z-10">
              <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-2">
                Your Information
              </h3>

              <div className="grid grid-cols-2 gap-4">
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    First Name
                  </label>
                  <input
                    type="text"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none text-slate-900 dark:text-white"
                    placeholder="Jane"
                    required
                  />
                </div>
                <div>
                  <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                    Last Name
                  </label>
                  <input
                    type="text"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none text-slate-900 dark:text-white"
                    placeholder="Doe"
                    required
                  />
                </div>
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Work Email
                </label>
                <input
                  type="email"
                  name="workEmail"
                  value={formData.workEmail}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none text-slate-900 dark:text-white"
                  placeholder="jane@company.com"
                  required
                />
              </div>

              <div>
                <label className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2">
                  Company Name
                </label>
                <input
                  type="text"
                  name="companyName"
                  value={formData.companyName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none text-slate-900 dark:text-white"
                  placeholder="Acme Inc."
                  required
                />
              </div>

              <button
                type="submit"
                disabled={status === "loading"}
                className="w-full py-4 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 mt-4 disabled:opacity-70"
              >
                {status === "loading" ? "Scheduling..." : "Schedule Demo"}
                {!status.includes("loading") && (
                  <ArrowRight className="h-5 w-5" />
                )}
              </button>

              {status === "error" && (
                <p className="text-center text-red-500 font-bold bg-red-50 p-2 rounded-lg">
                  Failed to submit. Please try again.
                </p>
              )}
            </form>
          ) : (
            <div className="text-center py-20">
              <div className="w-20 h-20 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
                <CheckCircle2 className="h-10 w-10" />
              </div>
              <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                Request Received!
              </h3>
              <p className="text-slate-600 dark:text-slate-400 mb-8">
                Our team will contact you shortly to confirm a time that works
                best for you.
              </p>
              <button
                onClick={() => setSubmitted(false)}
                className="text-orange-600 font-bold hover:underline"
              >
                Book another?
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
