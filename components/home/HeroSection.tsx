import Image from "next/image";
import { Circle } from "lucide-react";
import Button from "../Button";
import { MdArrowOutward } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Full-bleed image — top/bottom full, right edge full, connects to text with no gap */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/images/herosection.jpeg"
          alt="Trading dashboard preview"
          fill
          priority
          className=""
        />
      </div>

      {/* Content — stays constrained to max-w-7xl, vertically centered */}
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left column */}
        <div>
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700">
            <Circle className="h-2 w-2 fill-emerald-500 text-emerald-500" />
            INSTITUTIONAL-GRADE QUANT INTELLIGENCE
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="whitespace-nowrap">Trade with Structure.</span>
            <br />
            <span className="whitespace-nowrap gradient-text">
              Execute with
            </span>
            <br />
            <span className="gradient-text">Precision</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-md text-lg text-gray-600">
            A complete quant trading infrastructure to build, deploy, and
            automate disciplined strategies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <Button variant="gradient" className="gap-2">
              Get Access
              <MdArrowOutward className="h-4 w-4" />
            </Button>

            <Button variant="outline-primary" className="gap-2">
              <FaBookOpen className="h-4 w-4" />
              Documentation
            </Button>
          </div>
        </div>

        {/* Right column — empty spacer, keeps grid width so text doesn't overlap image */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}
