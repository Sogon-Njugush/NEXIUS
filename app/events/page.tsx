"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import {
  Calendar,
  MapPin,
  Clock,
  ArrowRight,
  Video,
  Users,
  Mic2,
} from "lucide-react";

// --- Event Data (You can later fetch this from your backend) ---
const EVENTS = [
  {
    id: 1,
    title: "Nexius Summit 2026: The AI Enterprise",
    category: "Conference",
    date: "March 15, 2026",
    time: "09:00 AM - 05:00 PM",
    location: "Berlin, Germany",
    image:
      "https://images.unsplash.com/photo-1544531586-fde5298cdd40?q=80&w=2070&auto=format&fit=crop",
    type: "upcoming",
    featured: true,
    desc: "Join 500+ industry leaders for a deep dive into generative AI strategies for the modern enterprise.",
  },
  {
    id: 2,
    title: "Mastering API Security in the Cloud",
    category: "Webinar",
    date: "April 02, 2026",
    time: "02:00 PM CET",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    type: "upcoming",
    featured: false,
    desc: "Learn how to secure your microservices architecture against the latest OWASP threats.",
  },
  {
    id: 3,
    title: "DevOps World Tour: London",
    category: "Workshop",
    date: "April 10, 2026",
    time: "10:00 AM - 04:00 PM",
    location: "London, UK",
    image:
      "https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&w=2070&auto=format&fit=crop",
    type: "upcoming",
    featured: false,
    desc: "A hands-on workshop on Kubernetes orchestration and CI/CD pipelines.",
  },
  {
    id: 4,
    title: "Identity Management for FinTech",
    category: "Webinar",
    date: "JAN 01, 2026",
    time: "11:00 AM CET",
    location: "Online",
    image:
      "https://images.unsplash.com/photo-1563986768609-322da13575f3?q=80&w=1470&auto=format&fit=crop",
    type: "past",
    featured: false,
    desc: "Watch the recording of our deep dive into CIAM for banking applications.",
  },
];

export default function Events() {
  const [filter, setFilter] = useState<"upcoming" | "past" | "all">("upcoming");

  const filteredEvents = EVENTS.filter((event) => {
    if (filter === "all") return true;
    return event.type === filter;
  });

  const featuredEvent = EVENTS.find((e) => e.featured);

  return (
    <div className="flex flex-col w-full bg-slate-50 dark:bg-[#050a14] min-h-screen">
      {/* 1. Page Header */}
      <section className="pt-32 pb-12 px-6 bg-white dark:bg-[#050a14] text-center border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <p className="text-orange-600 font-bold uppercase tracking-widest text-sm mb-4">
            Connect & Learn
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Events & Webinars
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Join our community of developers, architects, and industry leaders
            to explore the future of digital platforms.
          </p>
        </div>
      </section>

      {/* 2. Featured Event Hero */}
      {featuredEvent && (
        <section className="py-12 px-6">
          <div className="max-w-7xl mx-auto">
            <div
              className="relative rounded-3xl overflow-hidden bg-slate-900 shadow-2xl group"
              data-aos="zoom-in"
            >
              {/* Background Image with Overlay */}
              <div className="absolute inset-0">
                <Image
                  src={featuredEvent.image}
                  alt={featuredEvent.title}
                  fill
                  className="object-cover opacity-60 group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-slate-900 via-slate-900/90 to-transparent" />
              </div>

              {/* Content */}
              <div className="relative z-10 p-8 md:p-16 max-w-3xl">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase mb-6 shadow-lg">
                  Featured Event
                </div>
                <h2 className="text-3xl md:text-5xl font-bold text-white mb-6 leading-tight">
                  {featuredEvent.title}
                </h2>
                <p className="text-lg text-slate-300 mb-8 max-w-xl">
                  {featuredEvent.desc}
                </p>

                <div className="flex flex-wrap gap-6 text-white mb-10 font-medium">
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <Calendar className="h-5 w-5 text-orange-500" />
                    <span>{featuredEvent.date}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <Clock className="h-5 w-5 text-orange-500" />
                    <span>{featuredEvent.time}</span>
                  </div>
                  <div className="flex items-center gap-2 bg-white/10 px-4 py-2 rounded-lg backdrop-blur-sm">
                    <MapPin className="h-5 w-5 text-orange-500" />
                    <span>{featuredEvent.location}</span>
                  </div>
                </div>

                <div className="flex gap-4">
                  <button className="px-8 py-4 bg-white text-slate-900 font-bold rounded-full hover:bg-slate-200 transition-colors shadow-lg">
                    Register Now
                  </button>
                  <button className="px-8 py-4 border border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-colors backdrop-blur-sm">
                    View Agenda
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* 3. Event Filters & Grid */}
      <section className="py-16 px-6">
        <div className="max-w-7xl mx-auto">
          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12" data-aos="fade-up">
            {["upcoming", "past", "all"].map((tab) => (
              <button
                key={tab}
                onClick={() => setFilter(tab as any)}
                className={`px-6 py-2 rounded-full font-bold capitalize transition-all border ${
                  filter === tab
                    ? "bg-orange-600 border-orange-600 text-white shadow-lg"
                    : "bg-white dark:bg-slate-900 border-slate-200 dark:border-slate-800 text-slate-600 dark:text-slate-400 hover:border-orange-500 hover:text-orange-500"
                }`}
              >
                {tab} Events
              </button>
            ))}
          </div>

          {/* Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredEvents.map((event, i) => (
              <div
                key={event.id}
                className="group flex flex-col bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Image */}
                <div className="relative h-56 overflow-hidden">
                  <Image
                    src={event.image}
                    alt={event.title}
                    fill
                    className="object-cover group-hover:scale-110 transition-transform duration-700"
                  />
                  <div className="absolute top-4 left-4 bg-white/90 dark:bg-slate-900/90 backdrop-blur text-slate-900 dark:text-white text-xs font-bold px-3 py-1 rounded-full uppercase shadow-sm">
                    {event.category}
                  </div>
                </div>

                {/* Details */}
                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center gap-2 text-sm text-orange-600 font-bold mb-3 uppercase tracking-wide">
                    <Calendar className="h-4 w-4" />
                    {event.date}
                  </div>

                  <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-3 line-clamp-2 group-hover:text-orange-600 transition-colors">
                    {event.title}
                  </h3>

                  <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 line-clamp-2">
                    {event.desc}
                  </p>

                  <div className="mt-auto pt-6 border-t border-slate-100 dark:border-slate-800 flex justify-between items-center">
                    <div className="flex items-center gap-2 text-slate-500 dark:text-slate-400 text-sm">
                      {event.location === "Online" ? (
                        <Video className="h-4 w-4" />
                      ) : (
                        <MapPin className="h-4 w-4" />
                      )}
                      {event.location}
                    </div>

                    <Link
                      href={`/events/${event.id}`}
                      className="p-2 rounded-full bg-slate-100 dark:bg-slate-800 text-slate-900 dark:text-white group-hover:bg-orange-600 group-hover:text-white transition-colors"
                    >
                      <ArrowRight className="h-4 w-4" />
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {filteredEvents.length === 0 && (
            <div className="text-center py-20 bg-slate-100 dark:bg-slate-900 rounded-3xl">
              <p className="text-slate-500 text-lg">
                No events found for this category.
              </p>
              <button
                onClick={() => setFilter("all")}
                className="mt-4 text-orange-600 font-bold hover:underline"
              >
                View all events
              </button>
            </div>
          )}
        </div>
      </section>

      {/* 4. Host Your Own Event / CTA */}
      <section className="py-20 bg-slate-100 dark:bg-[#0b1221] px-6">
        <div
          className="max-w-5xl mx-auto bg-white dark:bg-slate-900 rounded-3xl p-12 shadow-sm border border-slate-200 dark:border-slate-800 flex flex-col md:flex-row items-center gap-12"
          data-aos="fade-up"
        >
          <div className="flex-1 text-center md:text-left">
            <div className="inline-flex p-4 bg-orange-100 dark:bg-orange-900/20 rounded-2xl text-orange-600 mb-6">
              <Mic2 className="h-8 w-8" />
            </div>
            <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
              Call for Speakers
            </h2>
            <p className="text-slate-600 dark:text-slate-400 mb-8 leading-relaxed text-lg">
              Are you an expert in API Management, AI, or Cloud Security? We are
              always looking for thought leaders to speak at our webinars and
              conferences.
            </p>
            <Link
              href="/contact"
              className="inline-block px-8 py-4 bg-slate-900 dark:bg-white text-white dark:text-black font-bold rounded-full hover:opacity-90 transition-opacity shadow-lg"
            >
              Apply to Speak
            </Link>
          </div>

          <div className="flex-1 w-full md:border-l border-slate-200 dark:border-slate-800 pl-0 md:pl-12">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white mb-6">
              Why Speak at Nexius?
            </h3>
            <ul className="space-y-6">
              {[
                "Reach a global audience of 50k+ developers",
                "Network with industry CTOs and Architects",
                "Full marketing support for your session",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-4 text-slate-700 dark:text-slate-300 font-medium"
                >
                  <div className="h-8 w-8 rounded-full bg-green-100 text-green-600 flex items-center justify-center shrink-0">
                    <Users className="h-4 w-4" />
                  </div>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </div>
  );
}
