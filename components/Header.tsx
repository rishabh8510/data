"use client";

import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import Button from "./Button";

const navLinks = [
  {
    label: "Home",
    href: "/",
  },
  {
    label: "About",
    href: "/about",
  },
  {
    label: "Market and Strategy",
    href: "/market-and-strategy",
  },
  {
    label: "Contact",
    href: "/contact",
  },
];

export default function Header() {
  const pathname = usePathname();

  // Check if the current link is active
  const isActive = (path: string) => {
    if (path === "/") {
      return pathname === "/";
    }

    return pathname?.startsWith(path);
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 border-b border-gray-200 bg-white">
      <div className="relative mx-auto flex h-16 max-w-7xl items-center justify-between px-4 sm:px-6 lg:px-8">
        {/* Blurred glow accent */}
        <div
          aria-hidden
          className="pointer-events-none absolute left-1/3 top-1/2 h-16 w-24 -translate-y-1/2 rounded-full opacity-60 blur-2xl"
          style={{
            background:
              "radial-gradient(circle, rgba(190,242,100,0.55) 0%, rgba(190,242,100,0) 70%)",
          }}
        />

        {/* Logo */}
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/logo.png"
            alt="PointAlgo"
            width={200}
            height={40}
            priority
          />
        </Link>

        {/* Navigation */}
        <nav className="relative z-10 hidden items-center gap-8 md:flex">
          {navLinks.map((link) => {
            const active = isActive(link.href);

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`text-sm font-medium transition ${
                  active
                    ? "primary-color"
                    : "text-gray-600 hover:text-gray-900"
                }`}
              >
                {link.label}
              </Link>
            );
          })}
        </nav>
        <Button variant="gradient" className="">Get Access</Button>
      </div>
    </header>
  );
}
