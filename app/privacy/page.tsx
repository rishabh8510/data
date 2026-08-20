const sections = [
  {
    title: "1. Information We Collect",
    intro: "To provide you with our services, we collect the following types of information:",
    bullets: [
      {
        label: "Personal Identification Data:",
        text: " Your name, email address, and contact details provided during checkout or account registration.",
      },
      {
        label: "Trading Platform Data:",
        text: " Your TradingView username, which is strictly required to grant you access to our invite-only scripts and indicators.",
      },
      {
        label: "Financial Data:",
        text: " Transaction details. Please note that Suprem Datatech does not store your credit card or bank details directly; all payments are processed securely through our authorized third-party payment gateways (e.g., Stripe, Razorpay).",
      },
      {
        label: "Technical Data:",
        text: " IP addresses, browser types, and general site usage analytics to help us optimize the performance of Suprem Datatech.com.",
      },
    ],
  },
  {
    title: "2. How We Use Your Information",
    intro: "Your data is used strictly to enhance your experience and fulfill our services:",
    plainBullets: [
      "To activate, manage, and verify your subscription access on TradingView.",
      "To send important administrative emails, such as payment receipts, subscription renewals, or critical script updates.",
      "To provide customer support and troubleshoot technical issues related to our indicators.",
      "To prevent fraudulent transactions and unauthorized distribution of our intellectual property.",
    ],
  },
  {
    title: "3. Information Sharing & Third Parties",
    intro: (
      <>
        <span className="font-semibold text-slate-900">
          We do not sell, rent, or trade your personal information.
        </span>{" "}
        We only share necessary data with trusted third parties to facilitate our services:
      </>
    ),
    bullets: [
      { label: "TradingView:", text: " We use your provided username to authorize access to our scripts on their platform." },
      { label: "Payment Processors:", text: " Necessary transaction data is shared securely with our payment gateways to process your subscriptions." },
      { label: "Legal Compliance:", text: " We may disclose information if required by law or in response to valid requests by public authorities." },
    ],
  },
  {
    title: "4. Data Security",
    intro:
      "We implement industry-standard security measures, including SSL encryption, to protect your personal data during transmission. While we strive to use commercially acceptable means to protect your personal information, no method of transmission over the internet or electronic storage is 100% secure.",
  },
  {
    title: "5. Cookies and Tracking",
    intro:
      "Suprem Datatech.com uses cookies to enhance user experience, remember your preferences, and analyze site traffic. You can instruct your browser to refuse all cookies or to indicate when a cookie is being sent. However, if you do not accept cookies, some portions of our site may not function properly.",
  },
  {
    title: "6. Your Rights",
    intro:
      "You have the right to request access to the personal data we hold about you, request corrections to inaccurate data, or request the deletion of your account and associated data (subject to legal and billing retention requirements).",
  },
];

export default function PrivacyPolicyPage() {
  return (
    <section className="relative overflow-hidden">
      <div className="relative mx-auto max-w-7xl px-6 py-20 sm:py-28 lg:px-8">
        <span className="text-xs font-semibold tracking-wider text-emerald-600">
          LEGAL COMPLIANCE
        </span>

        <h1 className="mt-4 text-4xl font-extrabold tracking-tight text-slate-900 sm:text-5xl">
          Privacy Policy
        </h1>

        <div className="mt-8 rounded-2xl border border-lime-200 bg-lime-50 p-6">
          <p className="text-sm leading-relaxed text-slate-700">
            At Suprem Datatech, we prioritize the security and privacy of our
            users. This Privacy Policy outlines how we collect, use, and
            protect your personal information when you interact with our
            website, services, and proprietary indicators.
          </p>
        </div>

        <div className="mt-12 space-y-12">
          {sections.map((section) => (
            <div key={section.title}>
              <h2 className="text-lg font-bold tracking-tight text-slate-900">
                {section.title}
              </h2>

              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                {section.intro}
              </p>

              {section.bullets && (
                <ul className="mt-4 space-y-3 pl-1">
                  {section.bullets.map((bullet) => (
                    <li
                      key={bullet.label}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                      <span>
                        <span className="font-semibold text-slate-900">
                          {bullet.label}
                        </span>
                        {bullet.text}
                      </span>
                    </li>
                  ))}
                </ul>
              )}

              {section.plainBullets && (
                <ul className="mt-4 space-y-3 pl-1">
                  {section.plainBullets.map((point) => (
                    <li
                      key={point}
                      className="flex items-start gap-2 text-sm leading-relaxed text-slate-600"
                    >
                      <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-slate-400" />
                      {point}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          ))}
        </div>

        <div className="mt-14 rounded-2xl border border-slate-200 bg-slate-50 p-6">
          <p className="text-[11px] font-semibold tracking-wider text-slate-400">
            PRIVACY INQUIRIES?
          </p>
          <p className="mt-2 text-sm text-slate-600">
            If you have any questions about this Privacy Policy, contact us at{" "}
            <span className="font-semibold text-slate-900">
              info.supremedatatech@gmail.com
            </span>
          </p>
        </div>
      </div>
    </section>
  );
}