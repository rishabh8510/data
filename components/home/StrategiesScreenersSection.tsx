import Image from "next/image";
import { Check, ArrowRight } from "lucide-react";

const checklist = [
  "Pre-built strategies with proven backtested performance.",
  "Custom screeners for Price Action & Market Structure.",
  "Multi-asset: Stocks, Options, Forex, & Crypto.",
  "Optimized for real-time scanning and decision-making.",
];

export default function StrategiesScreenersSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto grid max-w-6xl grid-cols-1 items-stretch gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left column */}
        <div className="flex h-full flex-col items-start justify-center">
          {/* Eyebrow */}
          <div className="mb-4 flex items-center gap-2">
            <span className="h-px w-6 bg-gradient-to-r from-lime-400 to-transparent" />
            <span className="text-xs font-semibold tracking-widest text-gray-400">
              SCREENERS
            </span>
          </div>

          {/* Heading */}
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Strategies &amp; <span className="text-sky-500">Screeners</span>
          </h2>

          {/* Description */}
          <p className="mt-6 max-w-md text-base leading-relaxed text-gray-500">
            Ready-to-use frameworks and custom screeners tailored for your
            trading goals.
          </p>

          {/* Checklist */}
          <ul className="mt-8 space-y-3">
            {checklist.map((item) => (
              <li key={item} className="flex items-start gap-2.5">
                <span className="mt-0.5 flex h-4 w-4 shrink-0 items-center justify-center rounded-full bg-sky-100">
                  <Check className="h-2.5 w-2.5 text-sky-600" />
                </span>
                <span className="text-sm text-gray-600">{item}</span>
              </li>
            ))}
          </ul>

          {/* Button */}
          <button className="mt-10 flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 shadow-sm transition hover:bg-gray-50">
            Get Access
            <ArrowRight className="h-4 w-4" />
          </button>
        </div>

        {/* Right column: real image loaded from /public/images folder */}
        <div className="relative h-full min-h-[420px] w-full overflow-hidden lg:min-h-0">
          <Image
            src="/images/Strategies.jpg"
            alt="Strategies and screeners dashboard preview"
            fill
            className="object-cover"
          />
        </div>
      </div>
    </section>
  );
}