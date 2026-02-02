import Link from "next/link";
import { Button } from "@/components/ui/button";
import { FileQuestion, ArrowLeft, Search, ArrowRight } from "lucide-react";
import { Input } from "@/components/ui/input";

export default function NotFound() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-white dark:bg-[#050a14] px-4 text-center relative overflow-hidden">
      {/* Background Glow Effect */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-orange-500/5 rounded-full blur-[100px] -z-10" />

      {/* Visual Icon */}
      <div className="relative mb-8 group">
        <div className="absolute inset-0 bg-orange-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
        <div className="relative flex h-32 w-32 items-center justify-center rounded-[2rem] bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-800 shadow-2xl rotate-3 group-hover:rotate-6 transition-transform duration-500">
          <FileQuestion className="h-14 w-14 text-slate-400 dark:text-slate-500" />
        </div>
        <div className="absolute -bottom-4 -right-4 bg-orange-600 text-white text-sm font-bold px-3 py-1.5 rounded-lg shadow-lg rotate-[-5deg]">
          404 Error
        </div>
      </div>

      <h1 className="text-5xl font-extrabold tracking-tight text-slate-900 dark:text-white sm:text-7xl mb-6">
        Page not found
      </h1>

      <p className="max-w-lg text-lg text-slate-600 dark:text-slate-400 mb-10 leading-relaxed">
        Sorry, we couldn&apos;t find the page you&apos;re looking for. It might
        have been removed, renamed, or currently unavailable.
      </p>

      {/* Action Area */}
      <div className="flex flex-col items-center gap-6 w-full max-w-md">
        {/* Search Bar Placeholder */}
        <div className="flex w-full items-center space-x-2">
          <div className="relative w-full">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <Input
              type="text"
              placeholder="Search for pages..."
              className="pl-9 bg-slate-50 dark:bg-slate-900 border-slate-200 dark:border-slate-800"
            />
          </div>
          <Button
            size="icon"
            className="bg-orange-600 hover:bg-orange-700 text-white shrink-0"
          >
            <ArrowRight className="h-4 w-4" />
          </Button>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-4 w-full">
          <Button
            variant="default"
            size="lg"
            asChild
            className="w-full sm:w-auto bg-slate-900 dark:bg-white text-white dark:text-black hover:opacity-90"
          >
            <Link href="/">Go to Homepage</Link>
          </Button>
          <Button
            variant="outline"
            size="lg"
            asChild
            className="w-full sm:w-auto border-slate-200 dark:border-slate-800"
          >
            <Link href="/contact">Contact Support</Link>
          </Button>
        </div>
      </div>

      {/* Footer Meta */}
      <div className="mt-16 border-t border-slate-100 dark:border-slate-800 pt-8 w-full max-w-md flex justify-between text-xs text-slate-400 uppercase tracking-widest font-medium">
        <span>Code: 404</span>
        <Link href="#" className="hover:text-orange-600 transition-colors">
          System Status: Operational
        </Link>
      </div>
    </div>
  );
}
