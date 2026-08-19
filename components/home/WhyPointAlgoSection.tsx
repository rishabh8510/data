import { TrendingUp, Lock, Bot, GraduationCap } from "lucide-react";

const cards = [
  {
    icon: TrendingUp,
    iconBg: "bg-lime-50",
    iconColor: "text-lime-600",
    title: "Mathematically Validated",
    description:
      "Every indicator and strategy is grounded in statistical theory, not retail chart patterns.",
  },
  {
    icon: Lock,
    iconBg: "bg-teal-50",
    iconColor: "text-teal-600",
    title: "Invite-Only Access",
    description:
      "Proprietary Pine Script v6 logic — protected, non-repainting, institutional quality.",
  },
  {
    icon: Bot,
    iconBg: "bg-emerald-50",
    iconColor: "text-emerald-600",
    title: "Fully Automated",
    description:
      "MT5 Expert Advisors that execute 24/7 with zero emotion and zero delay.",
  },
  {
    icon: GraduationCap,
    iconBg: "bg-amber-50",
    iconColor: "text-amber-600",
    title: "Research-Backed",
    description:
      "In-depth performance reports for Indian and Global markets, updated continuously.",
  },
];

export default function WhyPointAlgoSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Eyebrow */}
        <div className="flex items-center justify-center gap-2">
          <span className="h-px w-6 bg-gradient-to-r from-lime-400 to-transparent" />
          <span className="text-xs font-semibold tracking-widest text-gray-400">
            WHY POINTALGO
          </span>
        </div>

        {/* Heading */}
        <h2 className="mt-4 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Built for the <span className="text-lime-500">Serious</span>
        </h2>
        <h2 className="mt-2 text-center text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
          Trader
        </h2>

        {/* Cards */}
        <div className="mt-16 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((c) => (
            <div
              key={c.title}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:shadow-md"
            >
              <div
                className={`flex h-11 w-11 items-center justify-center rounded-xl ${c.iconBg}`}
              >
                <c.icon className={`h-5 w-5 ${c.iconColor}`} />
              </div>
              <h3 className="mt-5 text-base font-semibold text-gray-900">
                {c.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-gray-500">
                {c.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}