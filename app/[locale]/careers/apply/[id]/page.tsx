"use client";

import React, { useState } from "react";
import { useParams, useRouter } from "next/navigation";
import {
  Send,
  UploadCloud,
  CheckCircle2,
  ArrowLeft,
  Linkedin,
} from "lucide-react";

export default function ApplyForJob() {
  const params = useParams();
  const router = useRouter();
  // Decode the job title from the URL (e.g., "Senior-Backend-Engineer")
  const jobTitle = decodeURIComponent(params.id as string).replace(/-/g, " ");

  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    linkedin: "",
    portfolio: "",
    coverLetter: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("loading");
    //Clean  the data
    const payload = {
      ...formData,
      jobTitle,
      // Only include portfolio if it's not empty string
      portfolio: formData.portfolio ? formData.portfolio : undefined,
    };

    const baseUrl = process.env.NEXT_PUBLIC_API_URL;

    try {
      const response = await fetch(`${baseUrl}/applications`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      // IMPROVED ERROR HANDLING
      if (!response.ok) {
        const errorData = await response.json();
        console.error("Backend Validation Errors:", errorData); // Look at this log!
        throw new Error(errorData.message || "Failed");
      }

      setStatus("success");
    } catch (error) {
      console.error(error);
      setStatus("error");
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  if (status === "success") {
    return (
      <div className="min-h-screen bg-slate-50 dark:bg-[#050a14] flex items-center justify-center px-6">
        <div className="max-w-md w-full bg-white dark:bg-slate-900 p-8 rounded-3xl shadow-xl text-center border border-slate-200 dark:border-slate-800">
          <div className="w-20 h-20 bg-green-100 dark:bg-green-900/20 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-10 w-10" />
          </div>
          <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
            Application Received!
          </h2>
          <p className="text-slate-600 dark:text-slate-400 mb-8">
            Thank you for applying to be a <strong>{jobTitle}</strong>. Our
            recruiting team will review your profile and get back to you
            shortly.
          </p>
          <button
            onClick={() => router.push("/careers")}
            className="px-6 py-3 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full"
          >
            Back to Careers
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen pt-32 pb-20 px-6 bg-slate-50 dark:bg-[#050a14]">
      <div className="max-w-3xl mx-auto">
        <button
          onClick={() => router.back()}
          className="flex items-center gap-2 text-slate-500 hover:text-orange-600 mb-8 transition-colors font-medium"
        >
          <ArrowLeft className="h-4 w-4" /> Back to Job Listings
        </button>

        <div className="bg-white dark:bg-slate-900 p-8 md:p-12 rounded-3xl shadow-xl border border-slate-200 dark:border-slate-800">
          <div className="mb-10 border-b border-slate-100 dark:border-slate-800 pb-8">
            <p className="text-orange-600 font-bold uppercase tracking-widest text-xs mb-2">
              Apply Now
            </p>
            <h1 className="text-3xl md:text-4xl font-extrabold text-slate-900 dark:text-white">
              {jobTitle}
            </h1>
          </div>

          <form onSubmit={handleSubmit} className="space-y-8">
            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="fullName"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Full Name *
                </label>
                <input
                  required
                  type="text"
                  id="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none dark:text-white"
                  placeholder="Jane Doe"
                />
              </div>
              <div>
                <label
                  htmlFor="email"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Email Address *
                </label>
                <input
                  required
                  type="email"
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none dark:text-white"
                  placeholder="jane@example.com"
                />
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div>
                <label
                  htmlFor="linkedin"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2 flex items-center gap-2"
                >
                  <Linkedin className="h-3 w-3" /> LinkedIn Profile *
                </label>
                <input
                  required
                  type="url"
                  id="linkedin"
                  value={formData.linkedin}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none dark:text-white"
                  placeholder="https://linkedin.com/in/..."
                />
              </div>
              <div>
                <label
                  htmlFor="portfolio"
                  className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
                >
                  Portfolio / GitHub
                </label>
                <input
                  type="url"
                  id="portfolio"
                  value={formData.portfolio}
                  onChange={handleChange}
                  className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none dark:text-white"
                  placeholder="https://github.com/..."
                />
              </div>
            </div>

            <div>
              <label
                htmlFor="coverLetter"
                className="block text-sm font-bold text-slate-700 dark:text-slate-300 mb-2"
              >
                Why are you a good fit?
              </label>
              <textarea
                id="coverLetter"
                rows={5}
                value={formData.coverLetter}
                onChange={handleChange}
                className="w-full px-4 py-3 rounded-lg bg-slate-50 dark:bg-slate-950 border border-slate-200 dark:border-slate-700 focus:ring-2 focus:ring-orange-500 outline-none dark:text-white"
                placeholder="Tell us about your experience..."
              />
            </div>

            <button
              type="submit"
              disabled={status === "loading"}
              className="w-full py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg shadow-lg transition-all flex items-center justify-center gap-2 disabled:opacity-70"
            >
              {status === "loading" ? "Submitting..." : "Submit Application"}
              {!status.includes("loading") && <Send className="h-5 w-5" />}
            </button>

            {status === "error" && (
              <p className="text-red-500 text-center font-bold bg-red-50 dark:bg-red-900/10 p-3 rounded-lg">
                Something went wrong. Please try again.
              </p>
            )}
          </form>
        </div>
      </div>
    </div>
  );
}
