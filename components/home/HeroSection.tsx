import Image from "next/image";
import { Circle } from "lucide-react";
import Button from "../Button";
import { MdArrowOutward } from "react-icons/md";
import { FaBookOpen } from "react-icons/fa6";
import { FaBullseye, FaBolt, FaBrain } from "react-icons/fa";

export default function HeroSection() {
  return (
    <section className="relative flex min-h-screen items-center overflow-hidden">
      {/* Content — stays constrained to max-w-7xl, vertically centered */}
      <div className="relative mx-auto grid w-full max-w-7xl grid-cols-1 items-center gap-12 px-6 lg:grid-cols-2 lg:px-8">
        {/* Left column */}
        <div>
          {/* Badge */}
          <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700">
            <Circle className="h-2 w-2 fill-emerald-500 primary-color" />
            AI-POWERED TRADING INTELLIGENCE
          </div>

          {/* Headline */}
          <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
            <span className="whitespace-nowrap">Ab Smart Trading</span>
            <br />
            <span className="whitespace-nowrap gradient-text">Hoga Easy</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-md text-lg text-gray-600">
            India&apos;s Next-Generation AI-Powered Trading Software
          </p>
          <p className="mt-2 text-md text-gray-500">
            Automated. Intelligent. Effortless. Let the Algo Analyze, Decide & 
            Execute — You Focus on the Bigger Picture.
          </p>

          {/* Feature bullets */}
          <div className="mt-6 space-y-3">
            <div className="flex items-start gap-3">
              <FaBullseye className="mt-1 h-5 w-5 primary-color hrink-0" />
              <div>
                <span className="font-semibold text-gray-900">AI-Powered Algo Decides Entry, Exit & Stop-Loss</span>
                <p className="text-sm text-gray-600">No guesswork. The software analyzes the market and automatically determines key trading points.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaBolt className="mt-1 h-5 w-5 primary-color shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">One-Click Execution, Fully Automated</span>
                <p className="text-sm text-gray-600">Once enabled, the algo can manage trade execution seamlessly through a single platform—no need to sit in front of the screen.</p>
              </div>
            </div>
            <div className="flex items-start gap-3">
              <FaBrain className="mt-1 h-5 w-5 primary-color shrink-0" />
              <div>
                <span className="font-semibold text-gray-900">40+ Years of Human Expertise + AI</span>
                <p className="text-sm text-gray-600">Proven trading expertise fused with artificial intelligence to power a smarter, automated trading experience.</p>
              </div>
            </div>
          </div>

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

        {/* Right column — relative container for absolute positioning */}
        <div className="relative hidden lg:block -top-30">
          {/* GIF - absolutely positioned */}
          <div className="absolute -top-16 right-3 h-64 w-full max-w-120">
            <Image
              src="/images/first.gif"
              alt="Animated overlay"
              fill
              className="rounded-tl-2xl rounded-tr-2xl"
            />
          </div>

          {/* PNG - absolutely positioned below GIF */}
          <div className="absolute top-32 right-0.5 h-78 w-full max-w-125">
            <Image
              src="/images/hero-section-first.svg"
              alt="Trading dashboard preview"
              fill
              priority
              className=""
            />
          </div>
        </div>
      </div>
    </section>
  );
}