import { FaCheck } from "react-icons/fa";

const plans = [
  {
    id: 1,
    title: "Elite Edition",
    price: "59,999",
    currency: "₹",
    period: "6 Months",
    trialText: "Semi-Automated Trading Software",
    features: [
      { name: "Minimum Capital: ₹1,00,000", available: true },
      { name: "Up to 5 Script Slots", available: true },
      { name: "Equity + F&O Segment Access", available: true },
      { name: "Standard Trade Execution", available: true },
      { name: "Basic Risk Management", available: true },
      { name: "Email Support", available: true },
      { name: "Software Installation Support", available: true },
      { name: "Validity: 6 Months", available: true }
    ],
    isPopular: false
  },
  {
    id: 2,
    title: "Prestige Edition",
    price: "99,999",
    currency: "₹",
    period: "1 Year",
    trialText: "Advanced Automated Trading Software",
    features: [
      { name: "Minimum Capital: ₹2,00,000", available: true },
      { name: "Up to 15 Script Slots", available: true },
      { name: "Equity + F&O Segment Access", available: true },
      { name: "Priority Trade Execution", available: true },
      { name: "Advanced Risk Management", available: true },
      { name: "Strategy Customization", available: true },
      { name: "Priority Customer Support", available: true },
      { name: "Account Setup + IP Protection", available: true },
      { name: "Free Software Updates", available: true },
      { name: "Validity: 1 Year", available: true }
    ],
    isPopular: true
  },
  {
    id: 3,
    title: "Royal Edition",
    price: "1,79,999",
    currency: "₹",
    period: "6 Months",
    trialText: "Fully Automated Trading Software",
    features: [
      { name: "Minimum Capital: ₹5,00,000", available: true },
      { name: "Unlimited Script Slots", available: true },
      { name: "Equity + F&O Segment Access", available: true },
      { name: "Priority Trade Execution", available: true },
      { name: "Dedicated Relationship Manager", available: true },
      { name: "Advanced Risk Management", available: true },
      { name: "Multi-Account Support", available: true },
      { name: "Premium Strategy Access", available: true },
      { name: "Account Setup + IP Protection", available: true },
      { name: "Free Strategy Updates", available: true },
      { name: "Validity: 6 Months", available: true }
    ],
    isPopular: false
  },
  {
    id: 4,
    title: "Empire Edition",
    price: "2,99,999",
    currency: "₹",
    period: "1 Year",
    trialText: "Fully Automated Trading Software",
    features: [
      { name: "Everything in Royal Edition", available: true },
      { name: "Minimum Capital: ₹10,00,000", available: true },
      { name: "Unlimited Script Slots", available: true },
      { name: "Unlimited Quantity", available: true },
      { name: "Equity + F&O Segment Access", available: true },
      { name: "VIP Priority Support (24×7)", available: true },
      { name: "Dedicated Relationship Manager", available: true },
      { name: "Personalized Portfolio Assistance", available: true },
      { name: "Exclusive Premium Strategies", available: true },
      { name: "Advanced Risk Management", available: true },
      { name: "Multi-Account Support", available: true },
      { name: "Annual Performance Review", available: true },
      { name: "Account Setup + IP Protection", available: true },
      { name: "Lifetime Priority Access During Validity", available: true },
      { name: "Free Premium Upgrades", available: true }
    ],
    isPopular: false
  }
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
            Choose Your <span className="gradient-text">Trading</span>
            <br />
            <span className="gradient-text">Framework</span>
          </h2>
          <p className="mx-auto mt-5 max-w-lg text-sm text-slate-500">
            Institutional-grade tools. Structured for every level of trader.
          </p>
        </div>

        <div className="mt-16 grid grid-cols-1 gap-6 lg:grid-cols-2 lg:items-stretch">
          {plans.map((plan) => (
            <div
              key={plan.id}
              className={`flex flex-col overflow-hidden rounded-2xl border shadow-sm ${
                plan.isPopular
                  ? "border-blue-200 lg:-translate-y-4 lg:shadow-lg"
                  : "border-slate-200"
              }`}
            >
              {plan.isPopular && (
                <div className="bg-blue-600 px-6 py-1.5 text-center text-xs font-semibold uppercase tracking-wider text-white">
                  Most Popular
                </div>
              )}
              <div className="bg-slate-50 px-6 py-4 text-center">
                <p className="text-sm font-semibold text-slate-800">
                  {plan.title}
                </p>
              </div>

              <div className="flex flex-1 flex-col px-6 pb-6 pt-6">
                <div
                  className={`rounded-xl border px-4 py-5 text-center ${
                    plan.isPopular ? "border-blue-200 bg-blue-50/50" : "border-slate-200 bg-slate-50"
                  }`}
                >
                  <span className="text-2xl font-extrabold text-slate-900">
                    {plan.currency}{plan.price}
                  </span>
                  <span className="ml-1 text-sm font-medium text-slate-500">
                    / {plan.period}
                  </span>
                </div>

                <p className="mt-4 text-center text-sm font-medium text-slate-600">
                  {plan.trialText}
                </p>

                {/* Features in Grid Layout */}
                <ul className="mt-6 grid grid-cols-1 gap-2.5 sm:grid-cols-2">
                  {plan.features.map((feature, index) => (
                    <li key={index} className="flex items-start gap-2 text-sm text-slate-700">
                      <FaCheck className="mt-0.5 h-3.5 w-3.5 shrink-0 text-teal-500" />
                      <span>{feature.name}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}