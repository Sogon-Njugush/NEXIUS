// i18n.ts (at root)
import { getRequestConfig } from "next-intl/server";
import { notFound } from "next/navigation";

const locales = ["en", "de", "fr"];

export default getRequestConfig(async ({ locale }) => {
  console.log("=== i18n.ts DEBUG ===");
  console.log("Requested locale:", locale);
  console.log("Is locale valid?", locales.includes(locale as any));

  // Validate the locale
  if (!locale || !locales.includes(locale as any)) {
    notFound();
  }

  try {
    // Try to import the messages
    const messages = (await import(`./messages/${locale}.json`)).default;
    console.log(`Successfully loaded ${locale}.json`);
    console.log("Message keys:", Object.keys(messages));
    console.log("Navbar.platform:", messages.Navbar?.platform);
    console.log("=== END DEBUG ===");

    return {
      locale,
      messages,
    };
  } catch (error) {
    console.error(`Failed to load messages for locale ${locale}:`, error);
    console.log("=== END DEBUG ===");
    throw error;
  }
});
