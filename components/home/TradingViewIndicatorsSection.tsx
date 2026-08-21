"use client";

import { useEffect, useRef } from "react";
import { IoColorFilter } from "react-icons/io5";
import { MdArrowOutward, MdVpnLock } from "react-icons/md";
import { SiClockify } from "react-icons/si";
import { HiMiniBellAlert } from "react-icons/hi2";
import Button from "../Button";

const features = [
  {
    icon: IoColorFilter,
    title: "Signal-to-Noise Filtering",
    description:
      'Advanced mathematical smoothing filters out "fake-outs" to reveal the true underlying trend.',
  },
  {
    icon: MdVpnLock,
    title: "Invite-Only Quant Logic",
    description:
      "Proprietary algorithms designed for high-probability mean-reversion and trend-following setups.",
  },
  {
    icon: SiClockify,
    title: "Non-Repaint Integrity",
    description:
      'Calculations performed on "Bar Close." No history rewriting—essential for valid backtests.',
  },
  {
    icon: HiMiniBellAlert,
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
      theme: "light", // Changed from "dark" to "light"
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
            Quant-Driven <span className="gradient-text">TradingView</span>
          </h2>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Indicators
          </h2>
          <p className="mt-6 text-base italic text-gray-400">
            Statistical Edge. Mathematically Validated.
          </p>
        </div>

        {/* Content grid - SWAPPED: Right section now comes first, Left (chart) comes second */}
        <div className="mt-16 grid grid-cols-1 items-start gap-12 lg:grid-cols-2">
          {/* RIGHT SECTION NOW ON LEFT SIDE */}
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
                  <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <f.icon className="h-4 w-4 text-primary" />
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
            <div className="mt-8 flex flex-wrap items-center gap-4">
              <Button variant="gradient" className="gap-2" href="/about">
                About Us
                <MdArrowOutward className="h-4 w-4" />
              </Button>
            </div>
          </div>

          {/* LEFT SECTION (CHART) NOW ON RIGHT SIDE - LIGHT MODE VERSION */}
          <div className="relative">
            <div className="overflow-hidden border border-gray-200 bg-white p-2">
              <div className="relative overflow-hidden rounded-2xl">
                {/* Toolbar - Light Mode */}
                <div className="flex items-center justify-between bg-gray-100 px-3 py-1.5">
                  <span className="text-xs text-gray-600">‹</span>
                  <span className="text-[10px] font-medium text-gray-700">
                    Mathematical Indicator
                  </span>
                  <span />
                </div>

                {/* Live TradingView chart - Light Mode wrapper */}
                <div className="relative bg-white p-2">
                  <TradingViewChart />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}