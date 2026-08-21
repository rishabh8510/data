import Link from "next/link";
import Image from "next/image";
import { FaYoutube, FaDiscord, FaInstagram, FaArrowUpRightFromSquare } from "react-icons/fa6";

export default function Footer() {
  return (
    <footer className="border-t border-slate-800 bg-slate-950 text-white">
      <div className="mx-auto max-w-7xl px-6 py-16 lg:px-8">
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand */}
          <div>
        <Link href="/" className="relative z-10 flex items-center">
          <Image
            src="/logo.png"
            alt="PointAlgo"
            width={200}
            height={40}
            priority
          />
        </Link>
            <p className="mt-4 max-w-xs text-xs tracking-wide text-slate-500">
              ADVANCED QUANTITATIVE INTELLIGENCE SYSTEMS.
            </p>
          </div>

          {/* Platform */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-400">
              PLATFORM
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/" className="text-sm text-slate-300 hover:text-white">
                Home
              </Link>
              <Link href="/market-and-strategy" className="text-sm text-slate-300 hover:text-white">
                Market &amp; Strategy
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center gap-1 text-sm font-medium text-lime-400 hover:text-lime-300"
              >
                Contact Us
                <FaArrowUpRightFromSquare className="h-3 w-3" />
              </Link>
            </div>
          </div>

          {/* Legal & Compliance */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-400">
              LEGAL &amp; COMPLIANCE
            </h3>
            <div className="mt-4 flex flex-col gap-3">
              <Link href="/terms" className="text-sm text-slate-300 hover:text-white">
                Terms &amp; Conditions
              </Link>
              <Link href="/privacy" className="text-sm text-slate-300 hover:text-white">
                Privacy Policy
              </Link>
              <Link href="/refund" className="text-sm text-slate-300 hover:text-white">
                Refund &amp; Cancellation
              </Link>
              <Link href="/about" className="text-sm text-slate-300 hover:text-white">
                About Us
              </Link>
            </div>
          </div>

          {/* Connect */}
          <div>
            <h3 className="text-xs font-semibold tracking-wider text-slate-400">
              CONNECT
            </h3>

            <p className="mt-4 text-[11px] font-semibold tracking-wider text-slate-500">
              INQUIRIES
            </p>
            <p className="mt-1 text-sm text-white">info.supremedatatech@gmail.com</p>

            <p className="mt-4 text-[11px] font-semibold tracking-wider text-slate-500">
              SUPPORT
            </p>
            <p className="mt-1 text-sm text-white">+91 9770435842</p>

            <p className="mt-4 text-sm italic text-slate-400">
              Manyata Business Tech Park Bengaluru, Karnataka (560045)
            </p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-slate-800 pt-6 text-center">
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} Suprem DataTech. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}