import Image from "next/image";
import { FaCheck, FaArrowRight } from "react-icons/fa";

const benefits = [
  "Multi-layer signal confirmation",
  "Strategy-based trading setups",
  "Cross-market adaptability",
  "Structured decision frameworks",
  "Alert-enabled execution systems",
];

export default function WhySection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column - plain image */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/3dorderflow.gif"
              alt="PointAlgo trading chart preview"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Right column - content */}
          <div>
            <div className="flex items-center gap-2">
              <span className="h-0.5 w-5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold tracking-wider text-emerald-600">
                CORE ADVANTAGE
              </span>
            </div>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Why <span className="text-teal-500">Suprem DataTech</span> Systems?
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Most traders rely on isolated indicators that generate
              conflicting signals.
            </p>
            <p className="mt-3 text-base leading-relaxed text-slate-600">
              Suprem Datatech systems are designed as{" "}
              <span className="font-semibold text-slate-900">
                structured trading frameworks
              </span>{" "}
              where multiple signals work together within defined market
              logic.
            </p>

            <p className="mt-8 text-sm font-bold tracking-wide text-orange-500">
              OUR INDICATOR PACKS PROVIDE:
            </p>

            <ul className="mt-4 space-y-3">
              {benefits.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500">
                    <FaCheck className="h-2.5 w-2.5 text-white" />
                  </span>
                  <span className="text-sm text-slate-700">{item}</span>
                </li>
              ))}
            </ul>

            <button
              type="button"
              className="mt-10 inline-flex items-center gap-2 rounded-full bg-lime-400 px-6 py-3 text-sm font-bold text-slate-900 transition-colors hover:bg-lime-300"
            >
              Get Access Now
              <FaArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}