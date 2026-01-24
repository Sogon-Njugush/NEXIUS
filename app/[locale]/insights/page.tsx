import React from "react";
import Link from "next/link";
import { ArrowRight, Calendar, Tag } from "lucide-react";

// Dummy data for blog posts
const insights = [
  {
    id: 1,
    title: "The Future of Enterprise AI Agents",
    excerpt:
      "How autonomous agents are moving beyond simple chatbots to handle complex, multi-step business workflows securely.",
    category: "Artificial Intelligence",
    date: "Oct 12, 2025",
    image:
      "https://images.unsplash.com/photo-1677442136019-21780ecad995?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 2,
    title: "Navigating the API Sprawl",
    excerpt:
      "Strategies for governing hundreds of microservices and internal APIs without slowing down developer velocity.",
    category: "API Management",
    date: "Sep 28, 2025",
    image:
      "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 3,
    title: "Zero Trust Meets CIAM",
    excerpt:
      "Why modern customer identity solutions must adopt zero trust principles to combat sophisticated account takeovers.",
    category: "Security & Identity",
    date: "Sep 15, 2025",
    image:
      "https://images.unsplash.com/photo-1614064641938-3bbee52942c7?q=80&w=1000&auto=format&fit=crop",
  },
  {
    id: 4,
    title: "Platform Engineering trends for 2026",
    excerpt:
      "Moving beyond Kubernetes: How internal developer platforms (IDPs) are becoming the new standard for DevOps maturity.",
    category: "DevOps",
    date: "Aug 30, 2025",
    image:
      "https://images.unsplash.com/photo-1661956602116-aa6865609028?q=80&w=1000&auto=format&fit=crop",
  },
];

export default function Insights() {
  return (
    <div className="flex flex-col w-full overflow-hidden bg-slate-50 dark:bg-[#050a14]">
      {/* 1. Hero Section */}
      <section className="pt-32 pb-20 px-6 text-center bg-white dark:bg-[#050a14] border-b border-slate-200 dark:border-slate-800">
        <div className="max-w-4xl mx-auto" data-aos="fade-up">
          <p className="font-bold text-orange-600 uppercase tracking-widest text-sm mb-4">
            Thought Leadership
          </p>
          <h1 className="text-5xl md:text-6xl font-extrabold text-slate-900 dark:text-white mb-6">
            Insights & News
          </h1>
          <p className="text-xl text-slate-600 dark:text-slate-400 max-w-2xl mx-auto leading-relaxed">
            Analysis, trends, and best practices for digital leaders building
            the next generation of enterprise platforms.
          </p>
        </div>
      </section>

      {/* 2. Article Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {insights.map((post, i) => (
              <article
                key={post.id}
                className="flex flex-col bg-white dark:bg-slate-900 rounded-2xl overflow-hidden border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-xl transition-all group"
                data-aos="fade-up"
                data-aos-delay={i * 100}
              >
                {/* Image Container */}
                <div className="relative h-64 overflow-hidden">
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute top-4 left-4 inline-flex items-center gap-1 px-3 py-1 rounded-full bg-orange-600 text-white text-xs font-bold uppercase tracking-wider">
                    <Tag className="h-3 w-3" /> {post.category}
                  </div>
                </div>

                {/* Content */}
                <div className="flex flex-col flex-grow p-8">
                  <div className="flex items-center gap-2 text-sm text-slate-500 dark:text-slate-400 mb-4">
                    <Calendar className="h-4 w-4 text-orange-500" />
                    {post.date}
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4 leading-tight group-hover:text-orange-600 transition-colors">
                    {post.title}
                  </h2>

                  <p className="text-slate-600 dark:text-slate-400 mb-8 line-clamp-3 flex-grow leading-relaxed">
                    {post.excerpt}
                  </p>

                  <Link
                    href={`/insights/${post.id}`}
                    className="inline-flex items-center gap-2 font-bold text-orange-600 hover:gap-3 transition-all mt-auto"
                  >
                    Read Article <ArrowRight className="h-4 w-4" />
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Newsletter CTA */}
      <section className="py-20 bg-slate-900 dark:bg-[#02040a] text-white text-center px-6">
        <div className="max-w-3xl mx-auto" data-aos="zoom-in">
          <h2 className="text-3xl font-bold mb-4">Stay Ahead of the Curve</h2>
          <p className="text-slate-300 mb-8">
            Subscribe to get the latest integration and AI insights delivered to
            your inbox.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="px-6 py-4 rounded-full bg-white/10 border border-white/20 text-white placeholder:text-slate-400 outline-none focus:ring-2 focus:ring-orange-500 flex-grow"
            />
            <button className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold transition-all">
              Subscribe
            </button>
          </div>
        </div>
      </section>
    </div>
  );
}
