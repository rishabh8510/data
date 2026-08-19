"use client";

import { useEffect, useRef } from "react";
import { Filter, Lock, History, BellRing, ArrowRight } from "lucide-react";

const features = [
  {
    icon: Filter,
    title: "Signal-to-Noise Filtering",
    description:
      'Advanced mathematical smoothing filters out "fake-outs" to reveal the true underlying trend.',
  },
  {
    icon: Lock,
    title: "Invite-Only Quant Logic",
    description:
      "Proprietary algorithms designed for high-probability mean-reversion and trend-following setups.",
  },
  {
    icon: History,
    title: "Non-Repaint Integrity",
    description:
      'Calculations performed on "Bar Close." No history rewriting—essential for valid backtests.',
  },
  {
    icon: BellRing,
    title: "High-Performance Alerts",
    description:
      "Instant execution signals via optimized TradingView alerts for Nifty, Gold, and Global Equities.",
  },
];

// Fixed chart height in px — used for both the outer container and the widget div
// so the chart opens at full size immediately instead of collapsing/expanding.
const CHART_HEIGHT = 520;

// IMPORTANT:
// "NSE:NIFTY" throws "This symbol is only available on TradingView" inside the
// anonymous/free embed widget because NSE's real-time index data is licensed only
// for logged-in tradingview.com users, not for embedded widgets on third-party sites.
//
// "BSE:SENSEX" is the confirmed, reliable Indian market symbol for the free embed
// widget — it's the symbol used in TradingView's own official widget examples, so
// it always resolves and never throws "symbol doesn't exist" or "only available on
// TradingView" errors.
const CHART_SYMBOL = "BSE:SENSEX";

function TradingViewChart() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!containerRef.current) return;

    containerRef.current.innerHTML = "";

    const widgetDiv = document.createElement("div");
    widgetDiv.className = "tradingview-widget-container__widget";
    // Fixed px height (not 100%) so it doesn't collapse to 0 before the script loads
    widgetDiv.style.height = `${CHART_HEIGHT}px`;
    widgetDiv.style.width = "100%";

    const script = document.createElement("script");
    script.src =
      "https://s3.tradingview.com/external-embedding/embed-widget-advanced-chart.js";
    script.type = "text/javascript";
    script.async = true;
    script.innerHTML = JSON.stringify({
      autosize: false,
      width: "100%",
      height: CHART_HEIGHT,
      symbol: CHART_SYMBOL,
      interval: "D",
      timezone: "Asia/Kolkata",
      theme: "dark",
      style: "1",
      locale: "in",
      enable_publishing: false,
      // Keep this false — otherwise a user can type an unavailable NSE symbol
      // and trigger the same "only available on TradingView" popup again.
      allow_symbol_change: false,
      hide_top_toolbar: false,
      hide_legend: false,
      save_image: false,
      support_host: "https://www.tradingview.com",
    });

    containerRef.current.appendChild(widgetDiv);
    containerRef.current.appendChild(script);
  }, []);

  return (
    <div
      className="tradingview-widget-container"
      ref={containerRef}
      style={{
        height: `${CHART_HEIGHT}px`,
        minHeight: `${CHART_HEIGHT}px`,
        width: "100%",
      }}
    />
  );
}

export default function TradingViewIndicatorsSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Quant-Driven <span className="text-lime-500">TradingView</span>
          </h2>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Indicators
          </h2>
          <p className="mt-6 text-base italic text-gray-400">
            Statistical Edge. Mathematically Validated.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* Left: real TradingView chart */}
          <div className="relative">
            <div className="overflow-hidden border border-gray-200 bg-gray-900 p-2 shadow-xl">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Toolbar */}
                <div className="flex items-center justify-between bg-gray-950 px-3 py-1.5">
                  <span className="text-xs text-gray-400">‹</span>
                  <span className="text-[10px] text-gray-300">
                    Mathematical Indicator
                  </span>
                  <span />
                </div>

                {/* Live TradingView chart */}
                <div className="relative bg-gray-950 p-2">
                  <TradingViewChart />
                </div>
              </div>
            </div>
          </div>

          {/* Right: text + feature list */}
          <div>
            <p className="text-base leading-relaxed text-gray-600">
              Move beyond subjective chart patterns. Our Pine Script v6
              indicators are engineered to prioritize{" "}
              <span className="font-semibold text-gray-900">
                statistical probability
              </span>{" "}
              over retail guesswork.
            </p>

            <div className="mt-10 space-y-7">
              {features.map((f) => (
                <div key={f.title} className="flex gap-4">
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-lg bg-lime-50">
                    <f.icon className="h-4 w-4 text-lime-600" />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-gray-900">
                      {f.title}
                    </h3>
                    <p className="mt-1 text-sm leading-relaxed text-gray-500">
                      {f.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <button className="mt-10 flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50">
              Get Access
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}