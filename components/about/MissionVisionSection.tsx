import { FaCheckCircle } from "react-icons/fa";

const cards = [
  {
    title: "Our Mission",
    description:
      "To empower organizations with intelligent data solutions that transform raw information into actionable insights, driving innovation and sustainable growth through advanced analytics and AI technologies.",
    points: ["Real-time data processing & analytics.", "AI-powered predictive modeling."],
  },
  {
    title: "Our Vision",
    description:
      "To become the global leader in data-driven innovation, creating a future where every business harnesses the full potential of their data through cutting-edge AI, machine learning, and scalable data infrastructure.",
    points: ["Revolutionizing data intelligence for enterprises worldwide."],
  },
];

export default function MissionVisionSection() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 lg:px-8">
        <div className="grid grid-cols-1 gap-6 md:grid-cols-2">
          {cards.map((card) => (
            <div
              key={card.title}
              className="rounded-3xl border border-slate-200 bg-slate-50/60 p-8 shadow-sm sm:p-10"
            >
              <h3 className="text-3xl font-extrabold tracking-tight text-slate-900">
                {card.title}
              </h3>

              <p className="mt-5 text-base leading-relaxed text-slate-600">
                {card.description}
              </p>

              <ul className="mt-6 space-y-4">
                {card.points.map((point) => (
                  <li key={point} className="flex items-start gap-3">
                    <FaCheckCircle className="mt-0.5 h-5 w-5 shrink-0 text-teal-500" />
                    <span className="text-sm font-medium text-slate-700">
                      {point}
                    </span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}