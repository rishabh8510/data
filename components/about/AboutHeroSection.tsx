import { FaDivide, FaChartLine, FaUniversity, FaRocket } from "react-icons/fa";

const features = [
  {
    icon: FaDivide,
    iconBg: "bg-emerald-100",
    iconColor: "text-emerald-600",
    title: "Research-First",
    description:
      "Quant frameworks designed from structure, probability, and repeatable market behavior.",
  },
  {
    icon: FaChartLine,
    iconBg: "bg-lime-100",
    iconColor: "text-lime-600",
    title: "Market Evolution",
    description:
      "A journey spanning discretionary trading, system design, model validation, and deployment.",
  },
  {
    icon: FaUniversity,
    iconBg: "bg-blue-100",
    iconColor: "text-blue-600",
    title: "Enterprise Ready",
    description:
      "Custom logic built for brokers, financial businesses, and serious market operators.",
  },
  {
    icon: FaRocket,
    iconBg: "bg-pink-100",
    iconColor: "text-pink-600",
    title: "Retail Access",
    description:
      "Institutional-style systems packaged for broader access without losing structure.",
  },
];

export default function AboutHeroSection() {
  return (
    <section className="relative overflow-hidden mt-20">
      {/* ambient glow */}
      <div className="pointer-events-none absolute right-0 top-1/3 h-72 w-[32rem] -translate-y-1/2 rounded-full bg-lime-200/40 blur-[100px]" />

      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        {/* FIX: Added items-center to vertically center both columns */}
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-500" />
              <span className="text-xs font-semibold tracking-wider text-emerald-700">
                THE EVOLUTION OF LOGIC
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              From Retail
              <br />
              Curiosity.
              <br />
              <span className="gradient-text">To Enterprise</span>
              <br />
              <span className="gradient-text">Quant</span>
              <br />
              <span className="gradient-text">Infrastructure.</span>
            </h1>

            <p className="mt-8 max-w-xl text-base leading-relaxed text-slate-600">
              Suprem Datatech is building a bridge between market intuition and
              institutional-grade quantitative execution. Our mission is to
              make disciplined, mathematically structured trading systems
              accessible beyond closed enterprise environments.
            </p>

            <p className="mt-5 max-w-xl text-base leading-relaxed text-slate-600">
              What began as a deep study of price behavior evolved into
              research-led model building, custom execution logic, and
              broker-ready deployment infrastructure.
            </p>

            <p className="mt-6 text-base italic text-orange-500">
              Built for speed. Built for accuracy. Built for logic.
            </p>
          </div>

          {/* Right column - feature cards */}
          <div className="relative rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm backdrop-blur-sm sm:p-8">
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
              {features.map(({ icon: Icon, iconBg, iconColor, title, description }) => (
                <div
                  key={title}
                  className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm"
                >
                  <div
                    className={`mb-4 inline-flex h-10 w-10 items-center justify-center rounded-xl ${iconBg}`}
                  >
                    <Icon className={`h-5 w-5 ${iconColor}`} />
                  </div>
                  <h3 className="text-base font-semibold text-slate-900">
                    {title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-500">
                    {description}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}