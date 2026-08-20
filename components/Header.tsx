"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

export default function Header() {
  const pathname = usePathname();

  // Function to check if a link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === path;
    }
    return pathname?.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Blurred glow accent — light mode version of the dark screenshot's glow */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-1/2 h-16 w-24 -translate-y-1/2 rounded-full opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(190,242,100,0.55) 0%, rgba(190,242,100,0) 70%)",
          }}
        />

        {/* Logo */}
        <Link
          href="/"
          className="relative z-10 flex items-center gap-2 text-lg font-semibold text-gray-900"
        >
          <span className="flex h-6 w-6 items-center justify-center rounded-md border-2 border-gray-900">
            <span className="h-2.5 w-2.5 rotate-45 border border-gray-900" />
          </span>
          PointAlgo
        </Link>

        {/* Navigation */}
        <nav className="relative z-10 hidden items-center gap-8 md:flex">
          <Link
            href="/"
            className={`text-sm font-medium transition ${
              isActive("/")
                ? "text-lime-600 hover:text-lime-700"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Home
          </Link>

          <Link
            href="/about"
            className={`text-sm font-medium transition ${
              isActive("/about")
                ? "text-lime-600 hover:text-lime-700"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            About
          </Link>

          <Link
            href="/market-and-strategy"
            className={`text-sm font-medium transition ${
              isActive("/market-and-strategy")
                ? "text-lime-600 hover:text-lime-700"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Market and Strategy
          </Link>

          <Link
            href="/contact"
            className={`text-sm font-medium transition ${
              isActive("/contact")
                ? "text-lime-600 hover:text-lime-700"
                : "text-gray-600 hover:text-gray-900"
            }`}
          >
            Contact
          </Link>
        </nav>

        {/* Button */}
        <Link
          href="/get-access"
          className="relative z-10 hidden rounded-full bg-lime-300 px-5 py-2 text-sm font-semibold text-gray-900 transition hover:bg-lime-400 sm:block"
        >
          Get Access
        </Link>
      </div>
    </header>
  );
}