"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({
  children,
}: {
  children: React.ReactNode;
}) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Animation duration
      once: true, // Whether animation should happen only once - while scrolling down
      easing: "ease-out-cubic",
      offset: 50, // Offset (in px) from the original trigger point
    });
  }, []);

  return <>{children}</>;
}
