import Image from "next/image";
import { FaCircle, FaArrowRight, FaBook } from "react-icons/fa";

export default function MarketHero() {
  return (
    <section className="relative overflow-hidden">
      {/* ambient glow */}
      <div className="pointer-events-none absolute left-1/3 top-0 h-72 w-32rem -translate-y-1/3 rounded-full bg-lime-200/40 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
              <FaCircle className="h-1.5 w-1.5 text-emerald-500" />
              <span className="text-xs font-semibold tracking-wider text-emerald-700">
                PROFESSIONAL QUANT TRADING SYSTEMS
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.1] tracking-tight text-slate-900 sm:text-6xl">
              Suprem DataTech
              <br />
              Trading <span className="text-lime-500">Framework</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600">
              Professional  trading systems designed for Equity,
              Options, Futures, Forex, Commodity &amp; Crypto markets.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              Access professional signal systems through private TradingView
              invite-only scripts designed for disciplined and structured
              trading.
            </p>

            <p className="mt-6 text-base italic text-orange-500">
              Built as complete frameworks — not standalone indicators.
            </p>

            <div className="mt-10 flex flex-wrap items-center gap-4">
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-lime-300"
              >
                Get Access Now
                <FaArrowRight className="h-3.5 w-3.5" />
              </button>
              <button
                type="button"
                className="inline-flex items-center gap-2 rounded-full border border-slate-200 bg-white px-6 py-3 text-sm font-semibold text-slate-700 transition-colors hover:bg-slate-50"
              >
                <FaBook className="h-3.5 w-3.5" />
                Documentation
              </button>
            </div>
          </div>

          {/* Right column - plain image */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/first.gif"
              alt="PointAlgo dashboard preview"
              fill
              priority
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}