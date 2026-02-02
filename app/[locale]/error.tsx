"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertTriangle, RefreshCcw, Home } from "lucide-react";
import Link from "next/link";

export default function Error({
  // Renamed from GlobalError to avoid confusion
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error("Application Error:", error);
  }, [error]);

  return (
    // Changed from <html> to <div>
    <div className="flex min-h-[70vh] w-full flex-col items-center justify-center px-6 text-center font-sans">
      <div className="mb-8 flex h-24 w-24 items-center justify-center rounded-full bg-red-100 dark:bg-red-900/20 border border-red-200 dark:border-red-900/50">
        <AlertTriangle className="h-10 w-10 text-red-600 dark:text-red-500" />
      </div>

      <h1 className="text-3xl font-bold tracking-tight text-slate-900 dark:text-white sm:text-4xl mb-3">
        Something went wrong!
      </h1>

      <p className="max-w-md text-slate-600 dark:text-slate-400 mb-8 text-lg">
        We encountered an unexpected error while processing your request.
      </p>

      <div className="w-full max-w-lg rounded-lg border border-red-200 bg-white p-4 text-left dark:border-red-900/50 dark:bg-red-950/30 mb-8 shadow-sm overflow-hidden">
        <code className="block text-xs font-mono text-red-600 dark:text-red-400 break-all bg-red-50 dark:bg-red-900/20 p-2 rounded">
          {error.message || "Unknown Error Occurred"}
        </code>
      </div>

      <div className="flex flex-col sm:flex-row gap-4">
        <Button
          onClick={() => reset()}
          size="lg"
          className="bg-orange-600 hover:bg-orange-700"
        >
          <RefreshCcw className="mr-2 h-4 w-4" /> Try Again
        </Button>
        {/* <Button variant="outline" size="lg" asChild>
          <Link href="/">
            <Home className="mr-2 h-4 w-4" /> Return Home
          </Link>
        </Button> */}
      </div>
    </div>
  );
}
