const sections = [
  {
    title: "1. Cancellation Policy",
    intro: (
      <>
        You have full control over your subscription.{" "}
        <span className="font-semibold text-slate-900">
          You may cancel your subscription at any time.
        </span>
      </>
    ),
    bullets: [
      "If you cancel your subscription, you will not be billed for any future billing cycles.",
      "Your access to the premium indicators on TradingView will remain active until the end of your currently paid billing period.",
      "Cancellations can be processed through your account dashboard or by contacting our support team directly.",
    ],
  },
  {
    title: "2. No Refund Policy on Indicators & Scripts",
    paragraphs: [
      "Because our products are digital, intangible goods (TradingView scripts, quantitative logic, and proprietary code algorithms), they cannot be \"returned\" once accessed. Therefore, we do not offer refunds once an indicator or subscription is sold and access is granted.",
      "We highly encourage all users to thoroughly review our free documentation, strategy logic, and open-source toolkit before committing to a premium purchase. By completing a transaction on Suprem Datatech, you explicitly agree to waive any right to a refund for digital access.",
    ],
  },
  {
    title: "3. Custom Solutions & Algo Development",
    paragraphs: [
      "Suprem Datatech occasionally provides bespoke algorithmic development, custom indicator logic, and specific automation systems for institutional clients or independent traders.",
    ],
    highlight:
      "For custom solutions, the refund and cancellation policy is strictly dictated by the terms provided at the time of sale. These specific terms will be outlined in the formal proposal or invoice sent to you via official email address (hello@Suprem Datatech.com) prior to the commencement of the project.",
  },
  {
    title: "4. Dispute Resolution",
    paragraphs: [
      "If you believe there has been a billing error (e.g., duplicate charge), please contact our support desk immediately. Fraudulent chargebacks filed against valid digital goods deliveries will result in a permanent ban from Suprem Datatech and the immediate revocation of all indicator access.",
    ],
  },
];

export default function RefundCancellationPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <span className="text-xs font-semibold tracking-wider text-emerald-600">
          LEGAL COMPLIANCE
        </span>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Refund &amp; Cancellation
        </h1>

        <div className="mt-8 rounded-2xl border border-rose-200 bg-rose-50 p-6">
          <p className="text-sm leading-relaxed text-slate-700">
            Due to the digital nature of our intellectual property and
            trading tools, please read our strict policy regarding
            cancellations and refunds before making a purchase.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold tracking-tight text-slate-900">
                {section.title}
              </h2>

              {section.intro && (
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {section.intro}
                </p>
              )}

              {section.paragraphs &&
                section.paragraphs.map((paragraph, idx) => (
                  <p
                    key={idx}
                    className="mt-3 text-sm leading-relaxed text-slate-600"
                  >
                    {paragraph}
                  </p>
                ))}

              {section.bullets && (
                <ul className="mt-4 space-y-3 pl-1">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                      {bullet}
                    </li>
                  ))}
                </ul>
              )}

              {section.highlight && (
                <p className="mt-4 text-sm font-medium leading-relaxed text-slate-800">
                  {section.highlight}
                </p>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-[11px] font-semibold tracking-wider text-slate-400">
            NEED TO MANAGE YOUR SUBSCRIPTION?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            Contact our support desk at{" "}
            <span className="font-semibold text-slate-900">
              info.supremedatatech@gmail.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}