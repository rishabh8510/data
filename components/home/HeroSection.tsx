// import Image from "next/image";
// import { ArrowRight, BookOpen, Circle } from "lucide-react";

// export default function HeroSection() {
//   return (
//     <section className="relative overflow-hidden">
//       {/* Soft color glows */}
//       <div
//         aria-hidden
//         className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-lime-200/50 blur-3xl"
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
//       />
//       <div
//         aria-hidden
//         className="pointer-events-none absolute left-1/2 top-96 h-56 w-56 -translate-x-1/2 rounded-full bg-rose-100/50 blur-3xl"
//       />

//       <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-32 lg:grid-cols-2 lg:px-8">
//         {/* Left column */}
//         <div>
//           {/* Badge */}
//           <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-emerald-200 bg-emerald-50 px-4 py-2 text-xs font-semibold tracking-wider text-emerald-700">
//             <Circle className="h-2 w-2 fill-emerald-500 text-emerald-500" />
//             INSTITUTIONAL-GRADE QUANT INTELLIGENCE
//           </div>

//           {/* Headline */}
//           <h1 className="text-4xl font-extrabold leading-tight tracking-tight text-gray-900 sm:text-5xl lg:text-6xl">
//             <span className="whitespace-nowrap">Trade with Structure.</span>
//             <br />
//             <span className="whitespace-nowrap text-lime-500">Execute with</span>
//             <br />
//             <span className="text-lime-500">Precision</span>
//           </h1>

//           {/* Subtext */}
//           <p className="mt-6 max-w-md text-lg text-gray-600">
//             A complete quant trading infrastructure to build, deploy, and
//             automate disciplined strategies.
//           </p>

//           {/* Buttons */}
//           <div className="mt-8 flex flex-wrap items-center gap-4">
//             <button className="flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-gray-900  transition hover:bg-lime-500">
//               Get Access
//               <ArrowRight className="h-4 w-4" />
//             </button>
//             <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800  transition hover:bg-gray-50">
//               <BookOpen className="h-4 w-4" />
//               Documentation
//             </button>
//           </div>

//           {/* Stats row */}
//           <div className="mt-16 grid grid-cols-2 gap-8 sm:grid-cols-4">
//             <div>
//               <p className="text-2xl font-bold text-gray-900">
//                 Pine <span className="text-lime-500">v6</span>
//               </p>
//               <p className="mt-1 text-xs tracking-wider text-gray-500">
//                 SCRIPT ENGINE
//               </p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-gray-900">
//                 MT5 <span className="text-lime-500">EA</span>
//               </p>
//               <p className="mt-1 text-xs tracking-wider text-gray-500">
//                 AUTO EXECUTION
//               </p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-gray-900">
//                 24<span className="text-lime-500">/7</span>
//               </p>
//               <p className="mt-1 text-xs tracking-wider text-gray-500">
//                 LIVE SIGNALS
//               </p>
//             </div>
//             <div>
//               <p className="text-2xl font-bold text-gray-900">
//                 0<span className="text-lime-500">%</span>
//               </p>
//               <p className="mt-1 text-xs tracking-wider text-gray-500">
//                 REPAINT
//               </p>
//             </div>
//           </div>
//         </div>

//         {/* Right column — just an image, no mockup widgets */}
//         <div className="relative hidden lg:flex lg:items-center lg:justify-center">
//           <Image
//             src="/images/first.gif"
//             alt="Trading dashboard preview"
//             width={1200}
//             height={900}
//             priority
//             className="w-full max-w-162.5  object-cover"
//           />
//         </div>
//       </div>
//     </section>
//   );
// }



import Image from "next/image";
import { ArrowRight, BookOpen, Circle } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-screen">
      {/* Soft color glows */}
      <div
        aria-hidden
        className="pointer-events-none absolute -left-20 top-10 h-72 w-72 rounded-full bg-lime-200/50 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-emerald-200/40 blur-3xl"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-96 h-56 w-56 -translate-x-1/2 rounded-full bg-rose-100/50 blur-3xl"
      />

      {/* Full-bleed image — top/bottom full, right edge full, connects to text with no gap */}
      <div className="pointer-events-none absolute inset-y-0 right-0 hidden w-1/2 lg:block">
        <Image
          src="/images/first.gif"
          alt="Trading dashboard preview"
          fill
          priority
          className="object-"
        />
      </div>

      {/* Content — stays constrained to max-w-7xl */}
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 gap-12 px-6 pb-24 pt-32 lg:grid-cols-2 lg:px-8">
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
            <span className="whitespace-nowrap text-lime-500">Execute with</span>
            <br />
            <span className="text-lime-500">Precision</span>
          </h1>

          {/* Subtext */}
          <p className="mt-6 max-w-md text-lg text-gray-600">
            A complete quant trading infrastructure to build, deploy, and
            automate disciplined strategies.
          </p>

          {/* Buttons */}
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <button className="flex items-center gap-2 rounded-lg bg-lime-400 px-6 py-3 text-sm font-semibold text-gray-900 transition hover:bg-lime-500">
              Get Access
              <ArrowRight className="h-4 w-4" />
            </button>
            <button className="flex items-center gap-2 rounded-lg border border-gray-300 bg-white px-6 py-3 text-sm font-semibold text-gray-800 transition hover:bg-gray-50">
              <BookOpen className="h-4 w-4" />
              Documentation
            </button>
          </div>
        </div>

        {/* Right column — empty spacer, keeps grid width so text doesn't overlap image */}
        <div className="hidden lg:block" />
      </div>
    </section>
  );
}