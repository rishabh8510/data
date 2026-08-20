import Image from "next/image";
import { GiMonumentValley } from "react-icons/gi";
import { SiFiles, SiDeviantart } from "react-icons/si";
import { RiChatSearchFill } from "react-icons/ri";

const features = [
  {
    icon: GiMonumentValley,
    title: "Invite-Only Indicators (TV)",
    description:
      "Suite of Pine Script v6 tools built on statistical models for non-repainting execution zones.",
  },
  {
    icon: SiFiles,
    title: "Systematic Files (MT5)",
    description:
      "Execution-ready .ex5 files. Deploy hardcoded quantitative logic directly to your MT5 environment.",
  },
  {
    icon: SiDeviantart,
    title: "Bespoke Quant Dev",
    description:
      "Expert Pine Script & MQL5 engineers to transform your proprietary ideas into production algorithms.",
  },
  {
    icon: RiChatSearchFill,
    title: "Validation & Research",
    description:
      "Rigorous backtesting and logic transparency to verify your mathematical edge before deployment.",
  },
];

export default function InfrastructureSection() {
  return (
    <section className="relative overflow-hidden py-24">
      <div className="relative mx-auto max-w-6xl px-6 lg:px-8">
        {/* Heading */}
        <div className="text-center">
          <h2 className="text-4xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
            High-Performance
          </h2>
          <h2 className="mt-2 text-4xl font-extrabold tracking-tight gradient-text sm:text-5xl">
            Infrastructure
          </h2>
          <p className="mx-auto mt-6 max-w-2xl text-base text-gray-500">
            We provide the mathematical frameworks and technical files
            required to run a disciplined, quantitative trading business.
          </p>
        </div>

        {/* Content grid */}
        <div className="mt-20 grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
          {/* Left: single image from public folder */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/infrastruture.jpg"
              alt="High-performance trading infrastructure dashboard"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 100vw, 50vw"
              priority
            />
          </div>

          {/* Right: feature list */}
          <div className="space-y-8">
            {features.map((f) => (
              <div key={f.title} className="flex gap-4">
                <div
                  className={`flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-primary/10`}
                >
                  <f.icon className={`h-5 w-5 text-primary`} />
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
        </div>
      </div>
    </section>
  );
}