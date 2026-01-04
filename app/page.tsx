import Link from "next/link";
import { ArrowRight, Shield, Cpu, Layers, BarChart3 } from "lucide-react";

export default function Home() {
  return (
    <div className="flex flex-col w-full overflow-hidden">
      {/* 1. HERO SECTION */}
      <section className="relative pt-32 pb-20 md:pt-40 md:pb-32 px-6 overflow-hidden bg-white dark:bg-[#050a14]">
        <div
          className="max-w-7xl mx-auto text-center relative z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight text-slate-900 dark:text-white mb-6 leading-tight">
            Create Awesome <br className="hidden md:block" />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-500 to-red-600">
              Intelligent Digital Experiences
            </span>
          </h1>

          <p
            className="text-xl text-slate-600 dark:text-slate-400 max-w-3xl mx-auto mb-10 leading-relaxed"
            data-aos="fade-up"
            data-aos-delay="200"
          >
            Digital experiences delivered as apps, agents, and automations
            require powerful cloud-native infrastructure. We handle the
            complexity so you can focus on innovation.
          </p>

          <div
            className="flex flex-col sm:flex-row justify-center gap-4"
            data-aos="fade-up"
            data-aos-delay="400"
          >
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-orange-600 hover:bg-orange-700 text-white font-bold text-lg transition-all shadow-lg hover:shadow-orange-500/25 hover:-translate-y-1"
            >
              Get Started
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-800 hover:border-orange-500 dark:hover:border-orange-500 bg-transparent text-slate-900 dark:text-white font-bold text-lg transition-all hover:-translate-y-1"
            >
              Explore Technologies
            </Link>
          </div>
        </div>

        {/* Abstract Background Gradient */}
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-[1200px] h-[800px] bg-orange-500/5 dark:bg-orange-600/10 rounded-full blur-[120px] -z-10"
          data-aos="zoom-in"
          data-aos-duration="1500"
        />
      </section>

      {/* 2. STATS BAR */}
      <section className="border-y border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-7xl mx-auto px-6 py-16">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "700+", label: "Direct Enterprise Customers" },
              { value: "60T+", label: "Transactions Processed" },
              { value: "1B+", label: "Identities Managed" },
              { value: "90+", label: "Countries Served" },
            ].map((stat, i) => (
              <div
                key={i}
                className="space-y-1"
                data-aos="zoom-in"
                data-aos-delay={i * 100}
              >
                <p className="text-4xl md:text-5xl font-extrabold text-slate-900 dark:text-white">
                  {stat.value}
                </p>
                <p className="text-sm font-bold text-orange-600 uppercase tracking-wider">
                  {stat.label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 3. CORE TECHNOLOGIES */}
      <section className="py-24 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16" data-aos="fade-up">
            <h2 className="text-3xl md:text-4xl font-bold text-slate-900 dark:text-white mb-4">
              Foundational Technology for Your Digital Platform
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-2xl mx-auto text-lg">
              Build, integrate, secure, and deploy digital services with our
              market-leading suite of solutions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Cards with staggered animation */}
            {[
              {
                icon: Layers,
                title: "API Management",
                desc: "A full lifecycle platform for building, integrating, and exposing digital services as managed APIs.",
                color: "orange",
              },
              {
                icon: Cpu,
                title: "Integration",
                desc: "Enterprise-grade technology to connect AI models, data sources, and legacy systems.",
                color: "blue",
              },
              {
                icon: Shield,
                title: "Identity & Access (IAM)",
                desc: "Secure and convenient access for consumers, business customers, and AI agents.",
                color: "teal",
              },
              {
                icon: BarChart3,
                title: "Developer Platform",
                desc: "Free your developers to be creative and deliver applications faster with self-service capabilities.",
                color: "purple",
              },
            ].map((card, i) => {
              const colors: any = {
                orange:
                  "text-orange-600 dark:text-orange-500 bg-orange-100 dark:bg-orange-900/20 hover:border-orange-500",
                blue: "text-blue-600 dark:text-blue-500 bg-blue-100 dark:bg-blue-900/20 hover:border-blue-500",
                teal: "text-teal-600 dark:text-teal-500 bg-teal-100 dark:bg-teal-900/20 hover:border-teal-500",
                purple:
                  "text-purple-600 dark:text-purple-500 bg-purple-100 dark:bg-purple-900/20 hover:border-purple-500",
              };
              return (
                <div
                  key={i}
                  className={`group p-8 rounded-2xl border border-slate-200 dark:border-slate-800 bg-slate-50 dark:bg-[#0b1221] ${colors[
                    card.color
                  ]
                    .split(" ")
                    .pop()} transition-all hover:-translate-y-1 hover:shadow-xl`}
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div
                    className={`h-14 w-14 rounded-xl flex items-center justify-center mb-6 ${colors[
                      card.color
                    ]
                      .split(" ")
                      .slice(0, 2)
                      .join(" ")}`}
                  >
                    <card.icon className="h-7 w-7" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900 dark:text-white mb-3">
                    {card.title}
                  </h3>
                  <p className="text-slate-600 dark:text-slate-400 mb-6 leading-relaxed">
                    {card.desc}
                  </p>
                  <Link
                    href="/services"
                    className={`inline-flex items-center font-bold hover:underline ${
                      colors[card.color].split(" ")[0]
                    }`}
                  >
                    Learn more <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* 4. AI FEATURE SECTION */}
      <section className="py-24 px-6 bg-slate-900 dark:bg-[#02040a] text-white overflow-hidden relative">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-orange-600/10 rounded-full blur-[150px] pointer-events-none" />

        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center relative z-10">
          <div data-aos="fade-right">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-bold uppercase mb-6">
              New Intelligence
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              AI at the Heart of <br /> Your Enterprise
            </h2>
            <p className="text-slate-300 text-lg mb-8 leading-relaxed">
              Seamlessly integrate AI into your enterprise with our open,
              scalable, and governed solutions. Build AI-native applications and
              empower your teams.
            </p>
            <ul className="space-y-4 mb-10">
              {[
                "Connect GenAI models to legacy data",
                "Govern AI agents with IAM policies",
                "Automate workflows with intelligent innovation",
              ].map((item, i) => (
                <li
                  key={i}
                  className="flex items-center gap-3"
                  data-aos="fade-up"
                  data-aos-delay={i * 100}
                >
                  <div className="h-2 w-2 rounded-full bg-orange-500" />
                  <span className="text-slate-200 font-medium">{item}</span>
                </li>
              ))}
            </ul>
            <Link
              href="/services"
              className="px-8 py-3 bg-white text-slate-900 font-bold rounded-lg hover:bg-slate-200 transition-colors inline-block"
            >
              Explore AI Solutions
            </Link>
          </div>

          {/* Visual Abstract Representation */}
          <div
            className="relative h-[500px] w-full rounded-3xl border border-white/10 flex items-center justify-center overflow-hidden"
            data-aos="fade-left"
            data-aos-delay="200"
          >
            <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1620712943543-bcc4688e7485?q=80&w=1965&auto=format&fit=crop')] bg-cover bg-center opacity-30 mix-blend-overlay scale-110 animate-pulse-slow" />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
            <div className="text-center p-8 relative z-10 bg-slate-900/50 backdrop-blur-md rounded-2xl border border-white/10">
              <p className="text-6xl font-extrabold text-white mb-2">10x</p>
              <p className="text-orange-400 uppercase tracking-widest font-bold">
                Faster Deployment
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 5. INDUSTRY RECOGNITION */}
      <section className="py-24 px-6 bg-slate-50 dark:bg-[#0b1221]">
        <div className="max-w-6xl mx-auto text-center" data-aos="fade-up">
          <h2 className="text-3xl font-bold text-slate-900 dark:text-white mb-12">
            Analyst Recognition
          </h2>

          <div className="grid md:grid-cols-3 gap-8">
            {/* Recognition Cards */}
            {[
              {
                org: "Forrester Wave™",
                desc: "Named a Leader in API Management Software, Q3 2024",
              },
              {
                org: "KuppingerCole",
                desc: "Overall Product & Innovation Leader in CIAM, 2024",
              },
              {
                org: "Gartner®",
                desc: "Customers' Choice for Full Life Cycle API Management",
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-8 bg-white dark:bg-slate-900 rounded-2xl border border-slate-200 dark:border-slate-800 shadow-sm hover:shadow-md transition-all text-left"
                data-aos="flip-up"
                data-aos-delay={i * 100}
              >
                <div className="h-8 w-8 bg-slate-100 dark:bg-slate-800 rounded mb-6"></div>
                <p className="font-bold text-lg text-slate-900 dark:text-white mb-4">
                  {item.org}
                </p>
                <p className="text-slate-600 dark:text-slate-400 text-sm mb-6 leading-relaxed">
                  {item.desc}
                </p>
                <span className="text-orange-600 font-bold text-sm cursor-pointer hover:underline flex items-center gap-1">
                  Read Report <ArrowRight className="h-3 w-3" />
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. CTA: Bottom of Funnel */}
      <section className="py-24 px-6 bg-white dark:bg-[#050a14]">
        <div className="max-w-4xl mx-auto text-center" data-aos="zoom-in">
          <h2 className="text-4xl font-bold text-slate-900 dark:text-white mb-6">
            Ready to Build Your Platform?
          </h2>
          <p className="text-xl text-slate-600 dark:text-slate-400 mb-10 max-w-2xl mx-auto">
            Join the world's best enterprises in delivering secure, intelligent
            digital experiences.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Link
              href="/contact"
              className="px-8 py-4 rounded-full bg-slate-900 dark:bg-white text-white dark:text-black font-bold hover:opacity-90 transition-opacity hover:-translate-y-1"
            >
              Contact Sales
            </Link>
            <Link
              href="/services"
              className="px-8 py-4 rounded-full border-2 border-slate-200 dark:border-slate-700 text-slate-700 dark:text-slate-300 font-bold hover:border-slate-900 dark:hover:border-white transition-all hover:-translate-y-1"
            >
              Try it Free
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
