import Link from "next/link";
import { ChevronDown } from "lucide-react";

export default function Header() {
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
            className="text-sm font-medium text-lime-600 transition hover:text-lime-700"
          >
            Home
          </Link>

          <Link
            href="/indicator-and-strategy"
            className="text-sm font-medium text-gray-600 transition hover:text-gray-900"
          >
            Indicator and Strategy
          </Link>

          <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gray-900">
            Resources
            <ChevronDown className="h-4 w-4" />
          </button>

          <button className="flex items-center gap-1 text-sm font-medium text-gray-600 transition hover:text-gray-900">
            Community
            <ChevronDown className="h-4 w-4" />
          </button>
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