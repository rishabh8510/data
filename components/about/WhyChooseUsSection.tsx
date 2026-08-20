import Image from "next/image";
import { FaBuilding, FaRobot, FaChartPie } from "react-icons/fa";

const reasons = [
  {
    icon: FaBuilding,
    title: "Enterprise Data Solutions",
    description:
      "Scalable data infrastructure and real-time processing for organizations of all sizes.",
  },
  {
    icon: FaRobot,
    title: "AI-Powered Intelligence",
    description:
      "Cutting-edge machine learning and AI algorithms for predictive insights and automation.",
  },
  {
    icon: FaChartPie,
    title: "Advanced Analytics",
    description:
      "Actionable business intelligence through real-time dashboards and data visualization.",
  },
];

export default function WhyChooseUsSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column - content */}
          <div>
            <span className="text-xs font-semibold tracking-wider text-gray-400">
              WHY SUPREME DATATECH
            </span> 

            <h2 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
              Why <span className="gradient-text">Choose</span> Us?
            </h2>

            <p className="mt-6 max-w-lg text-base leading-relaxed text-slate-600">
              Transform your data into strategic advantage with Supreme
              Datatech&apos;s advanced analytics, AI solutions, and
              enterprise-grade infrastructure.
            </p>

            <div className="mt-10 space-y-8">
              {reasons.map(({ icon: Icon, title, description }) => (
                <div key={title} className="flex items-start gap-4">
                  <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Icon className="h-5 w-5 text-primary" />
                  </span>
                  <div>
                    <h3 className="text-lg font-bold text-slate-900">
                      {title}
                    </h3>
                    <p className="mt-1.5 text-sm leading-relaxed text-slate-600">
                      {description}
                    </p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right column - plain image */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/about-why.jpg"
              alt="Why choose Supreme Datatech"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>
        </div>
      </div>
    </section>
  );
}