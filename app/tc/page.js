// app/tc/page.js
import Link from "next/link";

export const metadata = {
  title: "Terms & Conditions | Scholar Paper",
  description: "Terms and conditions for using Scholar Paper PhD research assistance services.",
};

const sections = [
  {
    id: "terms-of-use",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
      </svg>
    ),
    color: "blue",
    title: "Terms of Use",
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        We recommend that the client go through our terms and conditions before placing the order
        and using the services provided by Scholar Paper. By using our services, you agree to the
        terms and conditions stated below. Scholar Paper can end services at any time if the
        contract is violated. We may amend or add any new terms or conditions to this contract in
        the future. If we do, the details will be provided to the client immediately.
      </p>
    ),
  },
  {
    id: "accepting-terms",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
      </svg>
    ),
    color: "indigo",
    title: "Accepting Terms",
    content: (
      <p className="text-gray-600 text-sm leading-relaxed">
        Your agreement to the latest terms is implied when you use our services. Terms and
        conditions can be changed periodically. It is your responsibility to frequently look for
        any updates. Continued use of our service following any modifications will signify your
        acceptance of the revised conditions.
      </p>
    ),
  },
  {
    id: "how-we-use-data",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4" />
      </svg>
    ),
    color: "purple",
    title: "How We Use Your Data",
    content: (
      <ul className="space-y-3">
        {[
          "To maintain and provide our service, which includes monitoring usage of our service.",
          "To manage your registration as a service user. As a registered user, the personal information you provide can allow you access to our various services.",
          "In the development of the contract, its compliance, and undertaking the services you have chosen or any other contract you have with us via our service.",
          "To contact you via phone calls, email, SMS, or any other type of communication to send you information about special offers, news, and general information regarding additional services and events that are similar to the ones that you have chosen or inquired about, unless you have chosen not to receive this information.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-3">
            <span className="w-5 h-5 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0 mt-0.5">
              <svg className="w-3 h-3 text-purple-600" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            </span>
            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ul>
    ),
  },
  {
    id: "deletion-process",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
      </svg>
    ),
    color: "green",
    title: "Deletion Process",
    content: (
      <>
        <p className="text-gray-600 text-sm leading-relaxed mb-4">
          You can make an inquiry to have Scholar Paper delete personal information about you from
          our databases in these circumstances:
        </p>
        <ul className="space-y-3">
          {[
            "If you accept that the user no longer manages your personal data.",
            "If you are looking to complete your research into Scholar Paper.",
            "If you are not attracted by ads and suggestions for improving the quality of doctoral news.",
            "If you think we have been manipulating your personal data illegally.",
          ].map((item, i) => (
            <li key={i} className="flex items-start gap-3">
              <span className="w-5 h-5 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 mt-0.5">
                <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                </svg>
              </span>
              <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
            </li>
          ))}
        </ul>
      </>
    ),
  },
  {
    id: "payment-process",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 10h18M7 15h1m4 0h1m-7 4h12a3 3 0 003-3V8a3 3 0 00-3-3H6a3 3 0 00-3 3v8a3 3 0 003 3z" />
      </svg>
    ),
    color: "orange",
    title: "Payment Process",
    content: (
      <ol className="space-y-4">
        {[
          "Payment is possible in two ways, as a whole payment or in part. When using the partial payment method, the customer is required to make a payment of a specified amount upon completion of the project or module or following publication of the document. When using the complete payment option, the client is required to pay a single amount for the entire project to avoid payment delays and other issues. We provide a full support service until the customer is completely satisfied and fully informed about the product.",
          "The company will not be accountable for any fraud.",
          "Online pay options, such as official bank transfer.",
          "We only recommend trusted third-party payment services to process debit or credit card transactions.",
        ].map((item, i) => (
          <li key={i} className="flex items-start gap-4">
            <span className="w-7 h-7 rounded-lg bg-orange-100 flex items-center justify-center flex-shrink-0 mt-0.5 text-orange-600 font-bold text-xs">
              {i + 1}
            </span>
            <span className="text-gray-600 text-sm leading-relaxed">{item}</span>
          </li>
        ))}
      </ol>
    ),
  },
  {
    id: "refund-policy",
    icon: (
      <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M16 15v-1a4 4 0 00-4-4H8m0 0l3 3m-3-3l3-3m9 14V5a2 2 0 00-2-2H6a2 2 0 00-2 2v16l4-2 4 2 4-2 4 2z" />
      </svg>
    ),
    color: "red",
    title: "Refund Policy",
    content: (
      <div className="flex items-start gap-4 p-4 bg-red-50 border border-red-100 rounded-xl">
        <div className="w-10 h-10 rounded-xl bg-red-100 flex items-center justify-center flex-shrink-0">
          <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
          </svg>
        </div>
        <div>
          <p className="text-red-700 font-semibold text-sm mb-1">No Refund Policy</p>
          <p className="text-red-600 text-sm leading-relaxed">
            There is no refund. Clients who have paid for their services are not refundable at any time.
          </p>
        </div>
      </div>
    ),
  },
];

const colorMap = {
  blue:   { icon: "bg-blue-600",   light: "bg-blue-50",   text: "text-blue-600",   border: "border-blue-100",   num: "bg-blue-100 text-blue-700" },
  indigo: { icon: "bg-indigo-600", light: "bg-indigo-50", text: "text-indigo-600", border: "border-indigo-100", num: "bg-indigo-100 text-indigo-700" },
  purple: { icon: "bg-purple-600", light: "bg-purple-50", text: "text-purple-600", border: "border-purple-100", num: "bg-purple-100 text-purple-700" },
  green:  { icon: "bg-green-600",  light: "bg-green-50",  text: "text-green-600",  border: "border-green-100",  num: "bg-green-100 text-green-700" },
  orange: { icon: "bg-orange-500", light: "bg-orange-50", text: "text-orange-600", border: "border-orange-100", num: "bg-orange-100 text-orange-700" },
  red:    { icon: "bg-red-500",    light: "bg-red-50",    text: "text-red-600",    border: "border-red-100",    num: "bg-red-100 text-red-700" },
  teal:   { icon: "bg-teal-600",   light: "bg-teal-50",   text: "text-teal-600",   border: "border-teal-100",   num: "bg-teal-100 text-teal-700" },
};

export default function TCPage() {
  return (
    <div className="min-h-screen bg-white">

      {/* Hero Banner */}
      <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-20 lg:py-28">
        {/* Grid pattern */}
        <div className="absolute inset-0 pointer-events-none">
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
          <div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-32 -left-32 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
        </div>

        <div className="relative max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-medium tracking-wide mb-6">
            <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
            </svg>
            Legal Agreement
          </div>
          <h1 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">
            Terms &amp;{" "}
            <span className="bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent">
              Conditions
            </span>
          </h1>
          <p className="text-blue-100/70 text-lg max-w-2xl mx-auto">
            Please read these terms carefully before using Scholar Paper services.
            By placing an order, you agree to be bound by these terms.
          </p>
          <p className="text-blue-300/50 text-xs mt-6">Last updated: January 2024</p>
        </div>
      </section>

      {/* Quick Nav */}
      <section className="border-b border-gray-100 bg-gray-50 sticky top-16 lg:top-20 z-10">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-1 overflow-x-auto py-3 scrollbar-hide">
            {sections.map((s) => {
              const c = colorMap[s.color];
              return (
                <a
                  key={s.id}
                  href={`#${s.id}`}
                  className={`flex-shrink-0 px-3 py-1.5 rounded-full text-xs font-medium transition-all duration-200 ${c.text} ${c.light} hover:opacity-80`}
                >
                  {s.title}
                </a>
              );
            })}
          </div>
        </div>
      </section>

      {/* Content Sections */}
      <section className="py-16">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">

          {/* Intro notice */}
          <div className="flex items-start gap-4 p-5 bg-blue-50 border border-blue-100 rounded-2xl mb-12">
            <div className="w-10 h-10 rounded-xl bg-blue-600 flex items-center justify-center flex-shrink-0">
              <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
            </div>
            <div>
              <p className="text-blue-800 font-semibold text-sm mb-1">Important Notice</p>
              <p className="text-blue-700 text-sm leading-relaxed">
                We recommend that the client go through our terms and conditions before placing the
                order and using the services provided by Scholar Paper. By using our services, you
                agree to the terms and conditions stated below.
              </p>
            </div>
          </div>

          {/* All Sections */}
          <div className="space-y-8">
            {sections.map((section, idx) => {
              const c = colorMap[section.color];
              return (
                <div
                  key={section.id}
                  id={section.id}
                  className="bg-white rounded-2xl border border-gray-100 hover:border-gray-200 hover:shadow-lg transition-all duration-300 overflow-hidden scroll-mt-32"
                >
                  {/* Section Header */}
                  <div className={`flex items-center gap-4 px-6 py-5 border-b ${c.border} ${c.light}`}>
                    <div className={`w-10 h-10 rounded-xl ${c.icon} flex items-center justify-center text-white flex-shrink-0`}>
                      {section.icon}
                    </div>
                    <div className="flex items-center gap-3">
                      <span className={`text-xs font-bold ${c.text} opacity-60`}>0{idx + 1}</span>
                      <h2 className={`text-base font-bold ${c.text}`}>{section.title}</h2>
                    </div>
                  </div>

                  {/* Section Body */}
                  <div className="px-6 py-6">
                    {section.content}
                  </div>
                </div>
              );
            })}
          </div>

          {/* Contact CTA */}
          <div className="mt-12 bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-center text-white relative overflow-hidden">
            <div className="absolute inset-0 opacity-10">
              <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                <defs>
                  <pattern id="dots2" width="20" height="20" patternUnits="userSpaceOnUse">
                    <circle cx="2" cy="2" r="1.5" fill="white"/>
                  </pattern>
                </defs>
                <rect width="100%" height="100%" fill="url(#dots2)" />
              </svg>
            </div>
            <div className="relative">
              <h3 className="text-xl font-bold mb-2">Have Questions About Our Terms?</h3>
              <p className="text-white/70 text-sm mb-6 max-w-md mx-auto">
                Our support team is available 24/7 to clarify any doubts about our terms and conditions.
              </p>
              <div className="flex flex-col sm:flex-row gap-3 justify-center">
                <a
                  href="mailto:scholarspaperin@gmail.com"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-white text-blue-600 text-sm font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                >
                  <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Email Us
                </a>
                <a
                  href="https://wa.me/917878830348"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-6 py-2.5 bg-green-500 text-white text-sm font-semibold rounded-xl hover:bg-green-400 transition-colors"
                >
                  <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771z" />
                  </svg>
                  WhatsApp Us
                </a>
              </div>
            </div>
          </div>

          {/* Back link */}
          <div className="text-center mt-8">
            <Link
              href="/"
              className="inline-flex items-center gap-2 text-gray-500 hover:text-blue-600 text-sm font-medium transition-colors"
            >
              <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
              </svg>
              Back to Home
            </Link>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">S</span>
              </div>
              <span className="font-bold text-sm">Scholar<span className="text-blue-400">Paper</span></span>
            </div>
            <p className="text-gray-400 text-sm">
               2024 Scholar Paper. All rights reserved.
            </p>
            <Link
              href="/"
              className="text-gray-400 hover:text-blue-400 text-sm transition-colors"
            >
              Back to Home
            </Link>
          </div>
        </div>
      </footer>
    </div>
  );
}


