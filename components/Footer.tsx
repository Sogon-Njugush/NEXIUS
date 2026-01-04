import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-100 dark:bg-slate-950 border-t border-slate-200 dark:border-slate-800 pt-16 pb-8">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid md:grid-cols-4 gap-12 mb-12">
          <div className="col-span-1 md:col-span-2">
            <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-4">
              NEXIUS
            </h2>
            <p className="text-slate-600 dark:text-slate-400 max-w-sm">
              Empowering the world's most ambitious companies with
              next-generation technology solutions.
            </p>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">
              Company
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  href="/about"
                  className="hover:text-indigo-600 dark:hover:text-cyan-400"
                >
                  About Us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="hover:text-indigo-600 dark:hover:text-cyan-400"
                >
                  Careers
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="hover:text-indigo-600 dark:hover:text-cyan-400"
                >
                  Press
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold text-slate-900 dark:text-white mb-4">
              Legal
            </h3>
            <ul className="space-y-3 text-slate-600 dark:text-slate-400">
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-600 dark:hover:text-cyan-400"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="hover:text-indigo-600 dark:hover:text-cyan-400"
                >
                  Terms of Service
                </Link>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-slate-200 dark:border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-slate-500">
          <p>&copy; 2024 Nexius Systems Inc. All rights reserved.</p>
          <div className="flex gap-6">
            <span>Twitter</span>
            <span>LinkedIn</span>
            <span>GitHub</span>
          </div>
        </div>
      </div>
    </footer>
  );
}
