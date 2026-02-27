export default async function ErrorHandlePage() {
  // Prerendering happens during build; checking for a header
  // ensures this only runs on the actual Vercel server.
  const isPrerendering = process.env.NEXT_PHASE === "phase-production-build";

  if (!isPrerendering) {
    throw new Error("Server-side explosion!");
  }

  return null;
}
