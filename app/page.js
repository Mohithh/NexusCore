// app/page.js
"use client";
import Link from "next/link";
import { useState } from "react";

export default function HomePage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [openFaq, setOpenFaq] = useState(null);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted:", formData);
    alert("Thank you for reaching out! We'll get back to you soon.");
    setFormData({ name: "", email: "", subject: "", message: "" });
  };

  const whatsappNumber = "917878830348";
  const phoneNumber = "+919385364005";

  const services = [
    {
      title: "Topic Selection & Paper Writing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M11 5H6a2 2 0 00-2 2v11a2 2 0 002 2h11a2 2 0 002-2v-5m-1.414-9.414a2 2 0 112.828 2.828L11.828 15H9v-2.828l8.586-8.586z" />
        </svg>
      ),
      color: "blue",
      features: [
        "Help in developing a research topic",
        "Write original, relevant & feasible PhD proposal",
        "Review literature & identify research gap",
        "Clear research problem and objectives",
        "In-depth methodology and reasoning",
        "Free unlimited revisions",
        "Direct communication with your expert",
      ],
    },
    {
      title: "Thesis Writing & Editing",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
        </svg>
      ),
      color: "indigo",
      features: [
        "Complete thesis from intro to conclusion",
        "Editing, proofreading & formatting",
        "Plagiarism checking & verification",
        "Ensure flawless & original thesis",
        "Ready for submission & evaluation",
        "Free unlimited revisions",
        "Only unique research",
      ],
    },
    {
      title: "Data Analysis",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
        </svg>
      ),
      color: "purple",
      features: [
        "Analyze & interpret your research data",
        "Advanced statistical tools & software",
        "Clear data visualization & reporting",
        "Detailed & accurate analysis report",
        "Free unlimited revisions",
        "Direct expert communication",
        "Only unique research",
      ],
    },
    {
      title: "PhD Guidance",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l9-5-9-5-9 5 9 5z" />
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
        </svg>
      ),
      color: "green",
      features: [
        "Enhance knowledge & skills in your field",
        "Comprehensive support to PhD candidates worldwide",
        "Personalized tutoring & mentoring sessions",
        "Full research proposal development",
        "Viva voce & defense preparation",
        "Constructive feedback & guidance",
        "Free unlimited revisions",
      ],
    },
    {
      title: "Journal Publication",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M19 20H5a2 2 0 01-2-2V6a2 2 0 012-2h10a2 2 0 012 2v1m2 13a2 2 0 01-2-2V7m2 13a2 2 0 002-2V9a2 2 0 00-2-2h-2m-4-3H9M7 16h6M7 8h6v4H7V8z" />
        </svg>
      ),
      color: "orange",
      features: [
        "Write journal paper based on your research",
        "Editing, proofreading & formatting",
        "Ensure journal standards & guidelines",
        "Journal submission assistance",
        "Follow-up with editors & reviewers",
        "Revision & resubmission support",
        "Support until acceptance",
      ],
    },
    {
      title: "Research Implementation",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
        </svg>
      ),
      color: "teal",
      features: [
        "Research problem statement development",
        "Tools: Matlab, Python, NS2, NS3, Java",
        "Test & evaluate research methods",
        "Appropriate datasets & metrics",
        "Results analysis & interpretation",
        "Own research implementation",
        "Comprehensive support",
      ],
    },
  ];

  const colorMap = {
    blue: {
      gradient: "from-blue-600 to-blue-700",
      light: "bg-blue-50",
      text: "text-blue-600",
      border: "border-blue-100",
      badge: "bg-blue-100 text-blue-700",
      hover: "hover:border-blue-200",
      icon: "bg-blue-600",
    },
    indigo: {
      gradient: "from-indigo-600 to-indigo-700",
      light: "bg-indigo-50",
      text: "text-indigo-600",
      border: "border-indigo-100",
      badge: "bg-indigo-100 text-indigo-700",
      hover: "hover:border-indigo-200",
      icon: "bg-indigo-600",
    },
    purple: {
      gradient: "from-purple-600 to-purple-700",
      light: "bg-purple-50",
      text: "text-purple-600",
      border: "border-purple-100",
      badge: "bg-purple-100 text-purple-700",
      hover: "hover:border-purple-200",
      icon: "bg-purple-600",
    },
    green: {
      gradient: "from-green-600 to-green-700",
      light: "bg-green-50",
      text: "text-green-600",
      border: "border-green-100",
      badge: "bg-green-100 text-green-700",
      hover: "hover:border-green-200",
      icon: "bg-green-600",
    },
    orange: {
      gradient: "from-orange-500 to-orange-600",
      light: "bg-orange-50",
      text: "text-orange-600",
      border: "border-orange-100",
      badge: "bg-orange-100 text-orange-700",
      hover: "hover:border-orange-200",
      icon: "bg-orange-500",
    },
    teal: {
      gradient: "from-teal-600 to-teal-700",
      light: "bg-teal-50",
      text: "text-teal-600",
      border: "border-teal-100",
      badge: "bg-teal-100 text-teal-700",
      hover: "hover:border-teal-200",
      icon: "bg-teal-600",
    },
  };

  const faqs = [
    {
      q: "How does our customized PhD assistance enhance the quality of your research work?",
      a: "Our customized research assistance services significantly enhance the quality of research work by providing: Expert insights and guidance for the formulation of research objectives, methodological support ensuring robustness in data collection and analysis, clarity in presentation of findings, proofreading and editing support, and assistance in adhering to specific formatting guidelines.",
    },
    {
      q: "Qualities to look for in our reliable research assistance service provider",
      a: "Nexus Paper has the following qualities: Expertise and experience of research professionals, transparent pricing and clear communication, adherence to strict deadlines, strong customer support, and positive reviews from previous clients.",
    },
    {
      q: "Benefits of utilizing our plagiarism check and formatting services",
      a: "Utilizing our services offers: Assurance of originality by eliminating plagiarism, formatting according to specific guidelines, improved readability and organization, and time-saving so you can focus on research content.",
    },
    {
      q: "How much do our top-notch PhD paper writing assistance services cost?",
      a: "The cost varies depending on the complexity of the research topic, scope of services required, and other factors. Contact us for a personalized quote tailored to your specific needs.",
    },
    {
      q: "What are the common language mistakes to avoid in PhD research papers?",
      a: "Common mistakes include: grammatical errors (subject-verb agreement, tense consistency), spelling mistakes, inconsistent academic vocabulary, and lack of clarity in expressing complex concepts.",
    },
  ];

  const features = [
    {
      title: "24/7 Research Support",
      desc: "Always ready to help with any issues or questions related to your PhD research process.",
      color: "blue",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Technical Discussion",
      desc: "Communicate directly with your assigned writer to clarify or discuss any paper details anytime.",
      color: "indigo",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
        </svg>
      ),
    },
    {
      title: "Timely Delivery",
      desc: "Strictly follow specified time frames. Your paper delivered on time without any setbacks.",
      color: "purple",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Affordability",
      desc: "Competitive prices with flexible payment options for your convenience and budget.",
      color: "green",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
        </svg>
      ),
    },
    {
      title: "Highly Qualified Experts",
      desc: "Top-notch research assistance tailored to your specific research requirements by PhD holders.",
      color: "orange",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
        </svg>
      ),
    },
    {
      title: "Confidentiality",
      desc: "Never share your details or work with third parties. Encrypted systems protect your data.",
      color: "teal",
      icon: (
        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" />
        </svg>
      ),
    },
  ];

  return (
    <div className="min-h-screen bg-white">

      {/* ===== HERO SECTION ===== */}
      <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-blue-950 to-indigo-900 py-24 lg:py-36">
        {/* Background decoration */}
        <div className="absolute inset-0 overflow-hidden pointer-events-none">
          <div className="absolute -top-40 -right-40 w-96 h-96 bg-blue-500/10 rounded-full blur-3xl"></div>
          <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl"></div>
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-600/5 rounded-full blur-3xl"></div>
          {/* Grid pattern */}
          <svg className="absolute inset-0 w-full h-full opacity-[0.04]" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="40" height="40" patternUnits="userSpaceOnUse">
                <path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"/>
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#grid)" />
          </svg>
        </div>

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-4xl mx-auto text-center">
            {/* Badge */}
            <div className="inline-flex items-center gap-2 px-4 py-2 bg-blue-500/10 border border-blue-400/20 rounded-full text-blue-300 text-xs font-medium tracking-wide mb-8">
              <span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-pulse"></span>
              Trusted by 500+ PhD Researchers Worldwide
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight tracking-tight">
              Trustworthy PhD Research
              <span className="block bg-gradient-to-r from-blue-400 to-indigo-400 bg-clip-text text-transparent mt-2">
                Assistance & Publication
              </span>
            </h1>

            <p className="text-lg sm:text-xl text-blue-100/70 max-w-2xl mx-auto mb-10 leading-relaxed">
              Get your research paper written by our PhD professionals in your field.
              From writing to publication — we handle every stage.
            </p>

            {/* Stats row */}
            <div className="flex flex-wrap justify-center gap-8 mb-12">
              {[
                { value: "500+", label: "Researchers Served" },
                { value: "4.9★", label: "Average Rating" },
                { value: "100%", label: "Plagiarism Free" },
                { value: "24/7", label: "Support Available" },
              ].map((stat, i) => (
                <div key={i} className="text-center">
                  <div className="text-2xl font-bold text-white">{stat.value}</div>
                  <div className="text-xs text-blue-300/70 mt-0.5">{stat.label}</div>
                </div>
              ))}
            </div>

            {/* CTA Buttons */}
            <div id="contect"  className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold rounded-xl hover:shadow-2xl hover:shadow-blue-500/30 hover:scale-105 transition-all duration-300 text-sm"
              >
                Get Started Free
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                </svg>
              </Link>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-green-500/10 border border-green-400/30 text-green-300 font-semibold rounded-xl hover:bg-green-500/20 hover:border-green-400/50 transition-all duration-300 text-sm"
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
                </svg>
                Chat Consultation
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* ===== ABOUT US SECTION ===== */}
      <section id="about" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-xs font-semibold tracking-wide mb-5 border border-blue-100">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              About Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Why Choose{" "}
              <span className="text-blue-600">Nexus Paper</span>
            </h2>
            <p className="text-gray-500 max-w-xl mx-auto">
              for your PhD Research Work
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-8 items-stretch">
            {/* Left - Key Points */}
            <div className="space-y-5">
              {[
                {
                  num: "1",
                  color: "blue",
                  title: "Qualified PhD expert in your domain",
                  desc: "We only collaborate with PhD experts in their domains for our paper or thesis writing services. Your order will be handled by our writer, who has the most relevant skills and experience in your field. With such an expert writing your proposal, we can assure you of the best quality and fast approval.",
                },
                {
                  num: "2",
                  color: "indigo",
                  title: "Original and human-written content guaranteed",
                  desc: "Our PhD paper writing & editing services ensure 100% uniqueness and no AI involvement. Our experts craft each paper from the beginning. We also verify it with sophisticated plagiarism and AI checkers before delivery.",
                },
                {
                  num: "3",
                  color: "purple",
                  title: "Confidentiality and Privacy",
                  desc: "Your research and personal information are treated with the utmost confidentiality. We follow strict data protection protocols to safeguard your intellectual property and maintain your trust in our services.",
                },
                {
                  num: "4",
                  color: "green",
                  title: "Free revisions until approval",
                  desc: "You are able to request as many revisions as needed before approval. Our PhD research proposal writing service provides unlimited amendments for free within 14 days after order delivery.",
                },
              ].map((point, idx) => {
                const c = colorMap[point.color];
                return (
                  <div
                    key={idx}
                    className={`group bg-white rounded-xl border border-gray-100 ${c.hover} hover:shadow-lg transition-all duration-300 p-6`}
                  >
                    <div className="flex items-start gap-4">
                      <div className={`w-10 h-10 rounded-xl ${c.light} flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        <span className={`${c.text} font-bold text-base`}>{point.num}</span>
                      </div>
                      <div>
                        <h3 className="text-sm font-semibold text-gray-900 mb-2">{point.title}</h3>
                        <p className="text-gray-500 text-sm leading-relaxed">{point.desc}</p>
                      </div>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* Right - Commitment Card */}
            <div className="bg-gradient-to-br from-blue-600 to-indigo-700 rounded-2xl p-8 text-white relative overflow-hidden">
              <div className="absolute inset-0 opacity-10">
                <svg width="100%" height="100%" xmlns="http://www.w3.org/2000/svg">
                  <defs>
                    <pattern id="dots" width="20" height="20" patternUnits="userSpaceOnUse">
                      <circle cx="2" cy="2" r="1.5" fill="white"/>
                    </pattern>
                  </defs>
                  <rect width="100%" height="100%" fill="url(#dots)" />
                </svg>
              </div>
              <div className="relative">
                <div className="flex items-center gap-3 mb-8">
                  <div className="w-10 h-10 rounded-xl bg-white/20 flex items-center justify-center">
                    <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                    </svg>
                  </div>
                  <h3 className="text-xl font-bold">Our Commitment to You</h3>
                </div>

                <ul className="space-y-4 mb-8">
                  {[
                    "100% Original Research – No plagiarism, no AI content",
                    "Free Unlimited Revisions within 14 days",
                    "On-Time Delivery – Always meet your deadline",
                    "Plagiarism-Free Guarantee with full Turnitin report",
                    "24/7 Customer Support via WhatsApp & Email",
                    "Appropriate Research Design for your field",
                    "Technical Editing & Professional Proofreading",
                  ].map((item, i) => (
                    <li key={i} className="flex items-start gap-3">
                      <div className="w-5 h-5 rounded-full bg-white/20 flex items-center justify-center flex-shrink-0 mt-0.5">
                        <svg className="w-3 h-3 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      </div>
                      <span className="text-white/90 text-sm leading-relaxed">{item}</span>
                    </li>
                  ))}
                </ul>

                <div className="pt-6 border-t border-white/20">
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-white/60 text-xs mb-1">Trusted by researchers worldwide</p>
                      <div className="flex items-center gap-1">
                        <span className="text-yellow-300 text-sm">★★★★★</span>
                        <span className="text-white/80 text-xs ml-1">4.9 / 5.0</span>
                      </div>
                    </div>
                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="px-5 py-2.5 bg-white text-blue-600 text-sm font-semibold rounded-xl hover:bg-blue-50 transition-colors"
                    >
                      Get Help Now
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== SERVICES SECTION ===== */}
      <section id="services" className="py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-xs font-semibold tracking-wide mb-5 border border-blue-100">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
              </svg>
              What We Offer
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Research Assistance &{" "}
              <span className="text-blue-600">Guidance Services</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We assist you in choosing a topic, generating research work, and finalizing your project
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, idx) => {
              const c = colorMap[service.color];
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 overflow-hidden flex flex-col"
                >
                  {/* Header */}
                  <div className={`p-5 bg-gradient-to-r ${c.light} border-b border-gray-100`}>
                    <div className="flex items-center gap-3">
                      <div className={`w-11 h-11 rounded-xl ${c.icon} flex items-center justify-center text-white flex-shrink-0 group-hover:scale-110 transition-transform duration-300`}>
                        {service.icon}
                      </div>
                      <h3 className={`text-sm font-bold ${c.text} leading-tight`}>
                        {service.title}
                      </h3>
                    </div>
                  </div>

                  {/* Body */}
                  <div className="p-5 flex-1 flex flex-col">
                    <ul className="space-y-2 flex-1">
                      {service.features.map((feature, fIdx) => (
                        <li key={fIdx} className="flex items-start gap-2.5 text-gray-600 text-xs leading-relaxed">
                          <svg className={`w-3.5 h-3.5 ${c.text} mt-0.5 flex-shrink-0`} fill="currentColor" viewBox="0 0 20 20">
                            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                          </svg>
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>

                    <a
                      href={`https://wa.me/${whatsappNumber}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`inline-flex items-center gap-1.5 ${c.text} text-xs font-semibold mt-5 pt-4 border-t border-gray-100 hover:gap-3 transition-all`}
                    >
                      Click to know more
                      <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                    </a>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Bottom CTA */}
          <div className="text-center mt-16 pt-10 border-t border-gray-200">
            <p className="text-gray-600 mb-6 text-base font-medium">
              Join the community of successful researchers today with Nexus Paper!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-7 py-3 bg-green-600 text-white text-sm font-semibold rounded-xl hover:bg-green-700 hover:shadow-lg hover:shadow-green-500/25 transition-all duration-300"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771z" />
                </svg>
                Start a Chat on WhatsApp
              </a>
              <Link
                href="/contact"
                className="inline-flex items-center gap-2 px-7 py-3 bg-gradient-to-r from-blue-600 to-indigo-600 text-white text-sm font-semibold rounded-xl hover:shadow-lg hover:shadow-blue-500/25 transition-all duration-300"
              >
                Request a Callback
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FEATURES SECTION ===== */}
      <section id="features" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-xs font-semibold tracking-wide mb-5 border border-blue-100">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M11.049 2.927c.3-.921 1.603-.921 1.902 0l1.519 4.674a1 1 0 00.95.69h4.915c.969 0 1.371 1.24.588 1.81l-3.976 2.888a1 1 0 00-.363 1.118l1.518 4.674c.3.922-.755 1.688-1.538 1.118l-3.976-2.888a1 1 0 00-1.176 0l-3.976 2.888c-.783.57-1.838-.197-1.538-1.118l1.518-4.674a1 1 0 00-.363-1.118l-3.976-2.888c-.784-.57-.38-1.81.588-1.81h4.914a1 1 0 00.951-.69l1.519-4.674z" />
              </svg>
              Why Choose Us
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              PhD Paper Writing &{" "}
              <span className="text-blue-600">Editing Features</span>
            </h2>
            <p className="text-gray-500 max-w-2xl mx-auto">
              We provide comprehensive support throughout your entire research journey
            </p>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-6"></div>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {features.map((feature, idx) => {
              const c = colorMap[feature.color];
              return (
                <div
                  key={idx}
                  className="group bg-white rounded-xl border border-gray-100 hover:border-transparent hover:shadow-xl transition-all duration-300 p-6"
                >
                  <div className={`w-12 h-12 rounded-xl ${c.icon} flex items-center justify-center text-white mb-5 group-hover:scale-110 transition-transform duration-300`}>
                    {feature.icon}
                  </div>
                  <h3 className={`text-base font-bold ${c.text} mb-2`}>
                    {feature.title}
                  </h3>
                  <p className="text-gray-500 text-sm leading-relaxed">
                    {feature.desc}
                  </p>
                </div>
              );
            })}
          </div>

          <p className="text-center text-xs text-gray-400 mt-10">
            All features included in every service package — no hidden charges
          </p>
        </div>
      </section>

      {/* ===== FAQ SECTION ===== */}
      <section id="faq" className="py-24 bg-gray-50">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-xs font-semibold tracking-wide mb-5 border border-blue-100">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8.228 9c.549-1.165 2.03-2 3.772-2 2.21 0 4 1.343 4 3 0 1.4-1.278 2.575-3.006 2.907-.542.104-.994.54-.994 1.093m0 3h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Frequently Asked{" "}
              <span className="text-blue-600">Questions</span>
            </h2>
            <div className="w-20 h-px bg-gradient-to-r from-transparent via-blue-400 to-transparent mx-auto mt-6"></div>
          </div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <div
                key={idx}
                className="bg-white rounded-xl border border-gray-100 overflow-hidden hover:border-blue-100 transition-colors duration-300"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full flex justify-between items-start gap-4 p-6 text-left"
                >
                  <span className="font-semibold text-gray-900 text-sm leading-relaxed">{faq.q}</span>
                  <span className={`flex-shrink-0 w-6 h-6 rounded-full bg-blue-50 flex items-center justify-center transition-transform duration-300 ${openFaq === idx ? "rotate-180" : ""}`}>
                    <svg className="w-3.5 h-3.5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2.5} d="M19 9l-7 7-7-7" />
                    </svg>
                  </span>
                </button>
                {openFaq === idx && (
                  <div className="px-6 pb-6 text-gray-600 text-sm leading-relaxed border-t border-gray-100 pt-4">
                    {faq.a}
                  </div>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CONTACT SECTION ===== */}
      <section id="contact" className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <span className="inline-flex items-center gap-2 px-4 py-1.5 bg-blue-50 rounded-full text-blue-600 text-xs font-semibold tracking-wide mb-5 border border-blue-100">
              <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z" />
              </svg>
              Get in touch
            </span>
            <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
              Let&apos;s start a{" "}
              <span className="text-blue-600">conversation</span>
            </h2>
            <p className="text-gray-500 max-w-md mx-auto">
              We&apos;d love to hear about your research needs and how we can help
            </p>
            <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-indigo-500 mx-auto mt-6 rounded-full"></div>
          </div>

          <div className="grid lg:grid-cols-2 gap-10">
            {/* Left - Contact Info */}
            <div className="space-y-5">
              {/* Call */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-blue-100 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1 font-medium">Call us</p>
                    <p className="text-gray-900 font-bold text-lg">{phoneNumber}</p>
                    <p className="text-xs text-green-600 mt-1 flex items-center gap-1.5 font-medium">
                      <span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                      Available 24/7
                    </p>
                  </div>
                </div>
              </div>

              {/* Email */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-indigo-100 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1 font-medium">Email us</p>
                    <p className="text-gray-900 font-semibold">Nexusspaperin@gmail.com</p>
                    <p className="text-xs text-gray-400 mt-1">We reply within 24 hours</p>
                  </div>
                </div>
              </div>

              {/* Address */}
              <div className="bg-white rounded-2xl border border-gray-100 p-6 hover:shadow-md hover:border-purple-100 transition-all duration-300">
                <div className="flex items-start gap-4">
                  <div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center flex-shrink-0">
                    <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-xs text-gray-400 uppercase tracking-wide mb-1 font-medium">Visit us</p>
                    <p className="text-gray-900 font-semibold">Bangalore, Karnataka</p>
                    <p className="text-xs text-gray-400 mt-1">Mon–Fri, 9am–6pm IST</p>
                  </div>
                </div>
              </div>

              {/* WhatsApp CTA */}
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-between bg-gradient-to-r from-green-50 to-emerald-50 border border-green-200 rounded-2xl p-5 hover:shadow-lg hover:shadow-green-500/10 transition-all duration-300 group"
              >
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-green-500 flex items-center justify-center">
                    <svg className="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771zm3.392 8.244c-.144.405-.837.774-1.17.824-.299.045-.677.063-1.092-.069-.252-.08-.575-.187-.988-.365-1.739-.751-2.874-2.502-2.961-2.617-.087-.116-.708-.94-.708-1.793s.448-1.273.607-1.446c.159-.173.346-.217.462-.217l.332.006c.106.005.249-.04.39.298.144.347.491 1.2.534 1.287.043.087.072.188.014.304-.058.116-.087.188-.173.289l-.26.304c-.087.086-.177.18-.076.354.101.174.449.741.964 1.201.662.591 1.221.774 1.394.86s.274.072.376-.043c.101-.116.433-.506.549-.68.116-.173.231-.145.39-.087s1.011.477 1.184.564c.173.087.289.129.332.202.043.073.043.423-.101.827z"/>
                    </svg>
                  </div>
                  <div>
                    <p className="text-sm font-bold text-gray-900">Chat on WhatsApp</p>
                    <p className="text-xs text-gray-500">Quick response guaranteed</p>
                  </div>
                </div>
                <svg className="w-5 h-5 text-green-600 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </a>
            </div>

            {/* Right - Contact Form */}
            <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8">
              <div className="mb-8">
                <h3 className="text-xl font-bold text-gray-900 mb-1">Send us a message</h3>
                <p className="text-sm text-gray-500">Fill out the form and we'll get back to you shortly</p>
              </div>

              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Full Name <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 text-sm placeholder:text-gray-300"
                      placeholder="John Doe"
                    />
                  </div>
                  <div>
                    <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                      Email Address <span className="text-red-400">*</span>
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 text-sm placeholder:text-gray-300"
                      placeholder="john@example.com"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Subject <span className="text-red-400">*</span>
                  </label>
                  <input
                    type="text"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 text-sm placeholder:text-gray-300"
                    placeholder="Research assistance needed"
                  />
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 mb-2 uppercase tracking-wide">
                    Message <span className="text-red-400">*</span>
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="5"
                    className="w-full px-4 py-3 border border-gray-200 rounded-xl focus:border-blue-400 focus:ring-2 focus:ring-blue-100 outline-none transition-all duration-300 text-gray-800 text-sm resize-none placeholder:text-gray-300"
                    placeholder="Tell us about your research needs, topic, deadline..."
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-blue-600 to-indigo-600 text-white font-semibold py-3.5 rounded-xl hover:from-blue-700 hover:to-indigo-700 hover:shadow-xl hover:shadow-blue-500/25 transition-all duration-300 flex items-center justify-center gap-2 group text-sm"
                >
                  <span>Send Message</span>
                  <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                  </svg>
                </button>

                <p className="text-xs text-gray-400 text-center">
                  🔒 We&apos;ll never share your information with anyone else
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FOOTER ===== */}
      <footer className="bg-gray-900 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            {/* Brand */}
            <div>
              <div className="flex items-center gap-2.5 mb-4">
                <div className="w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md">
                  <span className="text-white font-bold text-lg">N</span>
                </div>
                <span className="text-lg font-bold">Nexus<span className="text-blue-400">Core</span></span>
              </div>
              <p className="text-gray-400 text-sm leading-relaxed">
                Trustworthy PhD research assistance from writing to publication. Serving 500+ researchers worldwide.
              </p>
              <div className="flex items-center gap-1 mt-4">
                <span className="text-yellow-400 text-sm">★★★★★</span>
                <span className="text-gray-400 text-xs ml-1">4.9/5 by 500+ researchers</span>
              </div>
            </div>

            {/* Quick Links */}
            <div>
              <h4 className="text-sm font-bold mb-5 text-gray-100 uppercase tracking-wide">Quick Links</h4>
              <ul className="space-y-3">
                {[
                  { name: "About Us", href: "/about" },
                  { name: "Services", href: "/services" },
                  { name: "Features", href: "/features" },
                  { name: "FAQ", href: "/faq" },
                  { name: "Contact Us", href: "/contact" },
                  { name: "Terms & Conditions", href: "/terms" },
                ].map((link) => (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="text-gray-400 hover:text-blue-400 text-sm transition-colors duration-200 flex items-center gap-2 group"
                    >
                      <svg className="w-3 h-3 opacity-0 group-hover:opacity-100 -translate-x-1 group-hover:translate-x-0 transition-all text-blue-400" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                      </svg>
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Contact Info */}
            <div>
              <h4 className="text-sm font-bold mb-5 text-gray-100 uppercase tracking-wide">Contact Us</h4>
              <ul className="space-y-4">
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                  </svg>
                  {phoneNumber}
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  Nexusspaperin@gmail.com
                </li>
                <li className="flex items-center gap-3 text-gray-400 text-sm">
                  <svg className="w-4 h-4 text-blue-400 flex-shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                  </svg>
                  Bangalore, Karnataka
                </li>
                <li>
                  <a
                    href={`https://wa.me/${whatsappNumber}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 px-4 py-2 bg-green-600 hover:bg-green-500 text-white text-xs font-semibold rounded-lg transition-colors mt-2"
                  >
                    <svg className="w-3.5 h-3.5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M12.031 6.172c-3.181 0-5.767 2.586-5.768 5.766-.001 1.298.38 2.27 1.019 3.287l-.582 2.128 2.182-.573c.978.58 1.911.928 3.145.929 3.178 0 5.767-2.587 5.768-5.766.001-3.187-2.575-5.771-5.764-5.771z" />
                    </svg>
                    Chat on WhatsApp
                  </a>
                </li>
              </ul>
            </div>
          </div>

          <div className="border-t border-gray-800 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-gray-500 text-sm">
              &copy; 2024 Nexus Paper. All rights reserved.
            </p>
            <div className="flex items-center gap-6">
              <Link href="/terms" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Terms & Conditions</Link>
              <Link href="/contact" className="text-gray-500 hover:text-gray-300 text-xs transition-colors">Privacy Policy</Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}