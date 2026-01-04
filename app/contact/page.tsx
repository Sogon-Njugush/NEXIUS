"use client";

import React, { useState } from "react";
import {
  Mail,
  MapPin,
  Send,
  Phone,
  CheckCircle2,
  AlertCircle,
} from "lucide-react";

export default function Contact() {
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    subject: "General Inquiry",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");

    //  Get the base URL from .env, or default to localhost
    const baseUrl = process.env.NEXT_PUBLIC_API_URL || "http://localhost:4000";

    try {
      // Use the variable in the fetch call
      const response = await fetch(`${baseUrl}/contact`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!response.ok) throw new Error("Failed");

      setStatus("success");
      setFormData({
        fullName: "",
        email: "",
        subject: "General Inquiry",
        message: "",
      });
      setTimeout(() => setStatus("idle"), 5000);
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-[#050a14] overflow-hidden">
      <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16">
        {/* Left: Info */}
        <div data-aos="fade-right">
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white mb-6">
            Let's Talk <br />{" "}
            <span className="text-orange-600">Transformation.</span>
          </h1>
          <p className="text-lg text-slate-600 dark:text-slate-400 mb-12">
            Whether you are a developer with a question or an enterprise looking
            for a platform demo, our team is ready to help.
          </p>

          <div className="space-y-6">
            {[
              { icon: Mail, title: "Email Sales", val: "sales@nexius.com" },
              { icon: Phone, title: "Call Support", val: "+1 (800) 123-4567" },
              {
                icon: MapPin,
                title: "Global HQ",
                val: "789 Tech Boulevard, Austin, TX",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="flex items-start gap-4 p-6 bg-white dark:bg-slate-900 rounded-xl border border-slate-200 dark:border-slate-800 shadow-sm"
              >
                <div className="p-3 bg-orange-100 dark:bg-orange-900/20 text-orange-600 rounded-lg">
                  <item.icon className="h-6 w-6" />
                </div>
                <div>
                  <h4 className="font-bold text-slate-900 dark:text-white">
                    {item.title}
                  </h4>
                  <p className="text-slate-600 dark:text-slate-400">
                    {item.val}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Right: Form */}
        <div
          className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800"
          data-aos="fade-left"
        >
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-8">
            Send us a message
          </h2>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  required
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="John Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Work Email
                </label>
                <input
                  type="email"
                  id="email"
                  required
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                  placeholder="john@company.com"
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="subject"
                className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
              >
                Topic
              </label>
              <select
                id="subject"
                value={formData.subject}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
              >
                <option>General Inquiry</option>
                <option>Request Demo</option>
                <option>Support</option>
                <option>Partnership</option>
              </select>
            </div>

            <div>
              <label
                htmlFor="message"
                className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
              >
                Message
              </label>
              <textarea
                id="message"
                rows={4}
                required
                value={formData.message}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:ring-2 focus:ring-orange-500 outline-none"
                placeholder="How can we help?"
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-lg bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === "loading" ? "Sending..." : "Send Message"}
              {!status.includes("loading") && <Send className="h-5 w-5" />}
            </button>

            {status === "success" && (
              <div className="flex items-center gap-2 text-green-600 dark:text-green-400 bg-green-50 dark:bg-green-900/20 p-4 rounded-lg">
                <CheckCircle2 className="h-5 w-5" />
                <span className="font-medium">Message sent successfully!</span>
              </div>
            )}
            {status === "error" && (
              <div className="flex items-center gap-2 text-red-600 dark:text-red-400 bg-red-50 dark:bg-red-900/20 p-4 rounded-lg">
                <AlertCircle className="h-5 w-5" />
                <span className="font-medium">
                  Failed to send message. Please try again.
                </span>
              </div>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
