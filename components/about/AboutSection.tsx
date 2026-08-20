import Image from "next/image";
import { FaCheckCircle, FaArrowRight } from "react-icons/fa";

const highlights = [
  "Real-Time Data Analytics",
  "AI-Powered Predictive Insights",
  "Scalable Data Infrastructure",
];

export default function AboutSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-16 lg:grid-cols-2">
          {/* Left column - plain image */}
          <div className="relative aspect-4/3 w-full overflow-hidden">
            <Image
              src="/images/about-section.jpeg"
              alt="Supreme Datatech overview"
              fill
              className="object-cover"
              sizes="(min-width: 1024px) 50vw, 100vw"
            />
          </div>

          {/* Right column - content */}
          <div>
            <span className="text-xs font-semibold tracking-wider text-gray-400">
              ABOUT DATATECH
            </span>

            <h2 className="mt-4 text-4xl font-extrabold leading-tight tracking-tight text-slate-900 sm:text-5xl">
              Supreme Datatech Provides{" "}
              <span className="gradient-text">Advanced Data Solutions.</span>
            </h2>

            <p className="mt-6 text-base leading-relaxed text-slate-600">
              Transform raw data into actionable insights with Supreme
              Datatech&apos;s advanced analytics platform, enabling businesses
              to make smarter decisions, optimize operations, and drive
              innovation through AI and real-time data processing
              technologies.
            </p>

            <ul className="mt-8 space-y-4">
              {highlights.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <FaCheckCircle className="h-5 w-5 shrink-0 primary-color" />
                  <span className="text-sm font-medium text-slate-700">
                    {item}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}