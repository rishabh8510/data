"use client";

import Image from "next/image";

const tools = [
  {
    image: "/images/first-chart.gif",
    title: "PointAlgo Quant AI Engine",
    description:
      "analyzes liquidity, volume, volatility squeeze, and Z-Score to detect hidden structure, momentum, and a real-time bullish or bearish bias for disciplined trading.",
  },
  {
    image: "/images/second-chart.gif",
    title: "Order Flow Tensor Matrix",
    description:
      "analyzes cumulative delta, liquidity vacuums, and structural pivots to detect hidden market manipulation. It reveals trapped traders, institutional order flow shifts, and high-probability liquidity targets in real time.",
  },
  {
    image: "/images/third-chart.gif",
    title: "Market Sentiment & Flow Imbalance",
    description:
      "tracks real-time bid-ask imbalances and aggressive market orders to identify shifts in market control. It highlights hidden accumulation or distribution zones before price moves.",
  },
  {
    image: "/images/fourth-chart.gif",
    title: "Adaptive Smart Quants",
    description:
      "analyzes market behavior by comparing discretionary and algorithmic order flow. The system dynamically switches between following smart quant momentum or fading overextended quant activity based on market conditions.",
  },
  {
    image: "/images/fifth-chart.gif",
    title: "POP (Price of Probability)",
    description:
      "identifies high-probability trade zones where price is statistically likely to expand or reverse. It combines structure, momentum, and probability models to capture disciplined breakout and continuation opportunities.",
  },
  {
    image: "/images/six-chart.gif",
    title: "Gann-Pi Matrix Strategy",
    description:
      "combines price geometry with Pi-based market cycles to detect structural turning points. It identifies high-probability trend and expansion zones using mathematical market symmetry.",
  },
];

export default function ToolkitSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto px-6 py-20 lg:px-8">
        <div className="text-center">
          <div className="inline-flex items-center gap-2">
            <span className="h-0.5 w-5 rounded-full bg-gray-400" />
            <span className="text-xs font-semibold tracking-wider text-gray-400">
              LIVE TOOLKIT
            </span>
          </div>
          <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
            Institutional <span className="gradient-text">Toolkit</span>
          </h2>
        </div>

        <div className="group mt-14 overflow-hidden">
          <div className="flex w-max animate-toolkit-scroll gap-5 group-hover:[animation-play-state:paused]">
            {[...tools, ...tools].map((tool, idx) => (
              <div
                key={idx}
                className="flex w-82 shrink-0 flex-col overflow-hidden"
              >
                <div className="relative h-48 w-full bg-slate-900">
                  <Image
                    src={tool.image}
                    alt={tool.title}
                    fill
                    className="object-cover"
                    sizes="288px"
                  />
                </div>
                <div className="flex-1 bg-linear-to-b from-teal-500 to-purple-300 p-5">
                  <p className="text-sm leading-relaxed text-white">
                    <span className="font-bold">{tool.title}</span>{" "}
                    {tool.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style jsx>{`
        @keyframes toolkit-scroll {
          from {
            transform: translateX(0);
          }
          to {
            transform: translateX(-50%);
          }
        }
        .animate-toolkit-scroll {
          animation: toolkit-scroll 35s linear infinite;
        }
      `}</style>
    </section>
  );
}