import { FaCheck } from "react-icons/fa";

const plans = [
  {
    name: "Quant Starter Pack",
    price: "₹999",
    cadence: "Per Month",
    headerBg: "bg-slate-50",
    tagline: "Built for traders who want structured, disciplined market signals.",
    systemsLabel: "INCLUDES 3 TRADING SYSTEMS",
    systems: ["Equity Trading Indicator", "Options Scalping System", "Commodity / Crypto Indicator"],
    accessLabel: "ACCESS INCLUDES",
    access: ["TradingView invite-only indicators", "Alert-enabled signals", "Regular updates"],
    cta: "Get Access (₹999)",
    ctaStyle: "bg-lime-400 text-slate-900 hover:bg-lime-300",
    featured: false,
  },
  {
    name: "Quant Pro Pack",
    price: "₹1,999",
    priceColor: "text-teal-500",
    cadence: "Per Month",
    headerBg: "bg-blue-50",
    tagline: "Built for serious traders who operate across multiple markets.",
    systemsLabel: "INCLUDES 6 TRADING SYSTEMS",
    systems: [
      "Equity Intraday Trading System",
      "Options Buying System",
      "All Segment System",
      "Forex Trading System",
      "Commodity / Crypto Indicator",
      "Options Scalping System",
    ],
    accessLabel: "ACCESS INCLUDES",
    access: [
      "TradingView invite-only indicators",
      "Alert-enabled signals",
      "Multi-market trading frameworks",
      "Priority indicator updates",
      "Strategy usage guidance",
    ],
    cta: "Get Access (₹1999)",
    ctaStyle: "bg-lime-400 text-slate-900 hover:bg-lime-300",
    featured: true,
  },
  {
    name: "Enterprise Quant Suite",
    price: "₹4,999",
    cadence: "Per Month",
    headerBg: "bg-emerald-50",
    tagline: "Designed for professional traders, brokers, and institutions.",
    systemsLabel: "INCLUDES 9 TRADING SYSTEMS",
    systems: [
      "Equity Intraday Trading System",
      "Options Buying System",
      "Options Scalping System",
      "All Segment System",
      "Forex Trading System",
      "Commodity / Crypto Indicator",
      "Full indicator library access",
      "Custom strategy development",
      "Multi-market trading frameworks",
    ],
    accessLabel: "ACCESS INCLUDES",
    access: [
      "TradingView invite-only indicators",
      "Alert-enabled signals",
      "Custom deployment (AFL / MT5)",
      "Dedicated setup assistance",
      "Priority support and updates",
      "Direct strategist consultation",
      "Regular updates",
    ],
    cta: "Get Access (₹4999)",
    ctaStyle: "bg-slate-900 text-white hover:bg-slate-800",
    featured: false,
  },
];

export default function PricingSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-0.5 w-5 rounded-full bg-slate-400" />
            <span className="text-xs font-semibold tracking-wider text-slate-500">
              PRICING
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
            Choose Your <span className="text-lime-500">Trading</span>
            <br />
            <span className="text-lime-500">Framework</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm text-slate-500">
            Institutional-grade tools. Structured for every level of trader.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-3 lg:items-start">
          {plans.map((plan) => (
            <div
              key={plan.name}
              className={`flex flex-col overflow-hidden rounded-2xl border shadow-sm ${
                plan.featured
                  ? "border-blue-200 lg:-translate-y-4 lg:shadow-lg"
                  : "border-slate-200"
              }`}
            >
              <div className={`${plan.headerBg} px-6 py-4 text-center`}>
                <p className="text-sm font-semibold text-slate-800">
                  {plan.name}
                </p>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
                <div
                  className={`rounded-xl border px-4 py-5 text-center ${
                    plan.featured ? "border-blue-200 bg-blue-50/50" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <span
                    className={`text-2xl font-extrabold ${
                      plan.priceColor ?? "text-slate-900"
                    }`}
                  >
                    {plan.price}
                  </span>
                </div>

                <p className="mt-5 text-sm italic leading-relaxed text-slate-600">
                  {plan.tagline}
                </p>

                <p className="mt-6 text-[11px] font-semibold tracking-wider text-slate-400">
                  {plan.systemsLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {plan.systems.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <span className="mt-1.5 h-1 w-1 shrink-0 rounded-full bg-lime-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <p className="mt-6 text-[11px] font-semibold tracking-wider text-slate-400">
                  {plan.accessLabel}
                </p>
                <ul className="mt-3 space-y-2">
                  {plan.access.map((item) => (
                    <li key={item} className="flex items-start gap-2 text-sm text-slate-700">
                      <FaCheck className="mt-0.5 h-3 w-3 shrink-0 text-teal-500" />
                      {item}
                    </li>
                  ))}
                </ul>

                <div className="mt-auto pt-8">
                  <button
                    type="button"
                    className={`w-full rounded-xl py-3 text-sm font-bold transition-colors ${plan.ctaStyle}`}
                  >
                    {plan.cta}
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}