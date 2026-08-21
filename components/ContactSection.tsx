"use client";

import {
  FaPhoneAlt,
  FaEnvelope,
  FaMapMarkerAlt,
  FaDiscord,
  FaYoutube,
  FaInstagram,
  FaTwitter,
  FaArrowRight,
  FaChevronDown,
} from "react-icons/fa";
import Button from "./Button";

const contactCards = [
  {
    icon: FaPhoneAlt,
    label: "CALL / WHATSAPP",
    value: "+91 9770435842",
  },
  {
    icon: FaEnvelope,
    label: "EMAIL SUPPORT",
    value: "info.supremedatatech@gmail.com",
  },
  {
    icon: FaMapMarkerAlt,
    label: "LOCATION",
    value: "Manyata Business Tech Park Bengaluru, Karnataka (560045)",
  },
  // {
  //   icon: FaDiscord,
  //   label: "COMMUNITY",
  //   value: "Join Discord Server",
  // },
];

// const socials = [
//   { icon: FaYoutube, label: "YOUTUBE" },
//   { icon: FaDiscord, label: "DISCORD" },
//   { icon: FaInstagram, label: "INSTAGRAM" },
//   { icon: FaTwitter, label: "TWITTER" },
// ];

export default function ContactSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
          {/* Left column */}
          <div>
            <div className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-4 py-1.5">
              <span className="h-1.5 w-1.5 rounded-full bg-primary" />
              <span className="text-xs font-semibold tracking-wider text-primary">
                DIRECT INQUIRY — RESPONSE WITHIN 24 HRS
              </span>
            </div>

            <h1 className="mt-6 text-5xl font-extrabold italic leading-[1.05] tracking-tight text-slate-900 sm:text-6xl">
              GET IN <span className="gradient-text">TOUCH.</span>
            </h1>

            <p className="mt-6 max-w-md text-sm italic leading-relaxed text-slate-500">
              Quant intelligence requires precision support. Reach out for
              deployment, subscription, or custom development.
            </p>

            {/* Contact cards */}
            <div className="mt-10 space-y-4">
              {contactCards.map(({ icon: Icon, label, value }) => (
                <div
                  key={label}
                  className="flex items-center gap-4 rounded-2xl border border-slate-200 bg-slate-50/60 p-5 shadow-sm"
                >
                  <div
                    className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-primary/10`}
                  >
                    <Icon className={`h-5 w-5 text-primary`} />
                  </div>
                  <div>
                    <p className="text-[11px] font-semibold tracking-wider text-slate-400">
                      {label}
                    </p>
                    <p className="mt-1 text-sm font-semibold text-slate-900">
                      {value}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - form */}
          <div className="relative overflow-hidden rounded-3xl border border-slate-200 bg-slate-50/60 p-6 shadow-sm sm:p-8">
            <FaEnvelope className="pointer-events-none absolute -right-4 -top-4 h-32 w-32 text-primary/5" />

            <h2 className="relative text-lg font-extrabold italic tracking-tight text-slate-900">
              DIRECT INQUIRY
            </h2>

            <form className="relative mt-6 space-y-5">
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-[11px] font-semibold tracking-wider text-slate-400">
                    FULL NAME
                  </label>
                  <input
                    type="text"
                    placeholder="John Doe"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-wider text-slate-400">
                    MOBILE NUMBER
                  </label>
                  <input
                    type="text"
                    placeholder="+91 00000 00000"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                <div>
                  <label className="text-[11px] font-semibold tracking-wider text-slate-400">
                    EMAIL ADDRESS
                  </label>
                  <input
                    type="email"
                    placeholder="john@example.com"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
                <div>
                  <label className="text-[11px] font-semibold tracking-wider text-slate-400">
                    COUNTRY
                  </label>
                  <input
                    type="text"
                    placeholder="India"
                    className="mt-2 w-full rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                  />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold tracking-wider text-slate-400">
                  INQUIRY TYPE / PLAN
                </label>
                <div className="relative mt-2">
                  <select className="w-full appearance-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20">
                    <option>Enterprise License</option>
                    <option>Custom Development</option>
                    <option>Subscription</option>
                  </select>
                  <FaChevronDown className="pointer-events-none absolute right-4 top-1/2 h-3.5 w-3.5 -translate-y-1/2 text-primary" />
                </div>
              </div>

              <div>
                <label className="text-[11px] font-semibold tracking-wider text-slate-400">
                  INQUIRY / GOALS
                </label>
                <textarea
                  rows={4}
                  placeholder="How can our quantitative tools help your trading?"
                  className="mt-2 w-full resize-none rounded-xl border border-slate-200 bg-white px-4 py-2.5 text-sm text-slate-900 placeholder-slate-400 outline-none focus:border-primary focus:ring-2 focus:ring-primary/20"
                />
              </div>

              <Button 
                variant="gradient"
                type="submit"
                className="flex w-full items-center justify-center gap-2 rounded-full bg-primary py-3 text-sm font-bold tracking-wide text-white transition-colors hover:bg-primary/90"
              >
                SUBMIT REQUEST
                <FaArrowRight className="h-4 w-4" />
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}