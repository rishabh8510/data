import Image from "next/image";
import { FaMicrochip } from "react-icons/fa6";
import { GiCrackedShield } from "react-icons/gi";
import { SiThunderstore, SiCloudnativebuild } from "react-icons/si";
import Button from "../Button";
import { MdArrowOutward } from "react-icons/md";

const features = [
  {
    icon: FaMicrochip,
    title: "Algorithmic Consistency",
    description:
      "Remove the human element. Our .ex5 files execute rules with 100% mechanical consistency.",
  },
  {
    icon: GiCrackedShield,
    title: "Quantitative Risk Architecture",
    description:
      "Hardcoded management including volatility-based sizing and equity protection controls.",
  },
  {
    icon: SiThunderstore,
    title: "Low-Latency Infrastructure",
    description:
      "Optimized for speed. Built to ensure your orders hit the book the moment the quant logic triggers.",
  },
  {
    icon: SiCloudnativebuild,
    title: "SaaS Delivery Model",
    description:
      "Instant access to latest builds. Your tools stay updated in the cloud as we refine our models.",
  },
];

export default function MT5ExpertAdvisorsSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Algorithmic <span className="gradient-text">MT5</span> Expert
          </h2>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            Advisors
          </h2>
          <p className="mt-6 text-base italic text-gray-400">
            Quantitative Execution. Systematic Discipline.
          </p>
        </div>

        {/* Content grid — items-stretch so both columns match height */}
        <div className="mt-16 grid grid-cols-1 items-stretch gap-12 lg:grid-cols-2">
          {/* Left: real image loaded from /public/images folder, stretched to full column height */}
          <div className="relative h-full min-h-[420px] w-full overflow-hidden bg-slate-700 lg:min-h-0">
            <Image
              src="/images/algorithm.jpg"
              alt="Algorithmic MT5 Expert Advisor dashboard preview"
              fill
              className="object-cover"
              priority
            />
          </div>

          {/* Right: text + feature list */}
          <div className="flex h-full flex-col items-start justify-center">
            <p className="text-base leading-relaxed text-gray-600">
              Turn your quantitative edge into a 24/7 automated machine. Our
              EAs handle the heavy lifting of execution with{" "}
              <span className="font-semibold text-gray-900">
                millisecond precision
              </span>
              .
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
              <Button variant="gradient" className="gap-2" href="/market-and-strategy">
                Get Market & Strategy
                <MdArrowOutward className="h-4 w-4" />
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}