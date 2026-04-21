// app/components/Navbar.jsx
"use client";
import { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname, useRouter } from "next/navigation";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const router = useRouter();

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setIsOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home",               href: "/",   sectionId: "hero" },
    { name: "About Us",           href: "/",   sectionId: "about" },
    { name: "Services",           href: "/",   sectionId: "services" },
    { name: "Features",           href: "/",   sectionId: "features" },
    { name: "FAQ",                href: "/",   sectionId: "faq" },
    { name: "Contact Us",         href: "/",   sectionId: "contact" },
    { name: "Terms & Conditions", href: "/tc", sectionId: null },
  ];

  const handleNavClick = (e, link) => {
    if (link.href === "/tc") {
      setIsOpen(false);
      return;
    }
    e.preventDefault();
    setIsOpen(false);

    const scrollToSection = () => {
      const el = document.getElementById(link.sectionId);
      if (el) {
        const top = el.getBoundingClientRect().top + window.scrollY - 80;
        window.scrollTo({ top, behavior: "smooth" });
      }
    };

    if (pathname === "/") {
      scrollToSection();
    } else {
      router.push("/");
      setTimeout(scrollToSection, 400);
    }
  };

  return (
    <>
      <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: translateX(-20px); }
          to   { opacity: 1; transform: translateX(0); }
        }
      `}</style>

      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ${
          scrolled
            ? "bg-white/98 backdrop-blur-md shadow-lg border-b border-gray-100"
            : "bg-white shadow-sm border-b border-gray-100"
        }`}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-16 lg:h-20">

            {/* Logo */}
            <Link href="/" className="flex items-center gap-2.5 group relative">
              <div className="relative">
                <div className="absolute inset-0 bg-blue-600 rounded-xl blur-md opacity-20 group-hover:opacity-40 transition-opacity duration-300"></div>
                <div className="relative w-9 h-9 bg-gradient-to-br from-blue-600 to-indigo-600 rounded-xl flex items-center justify-center shadow-md group-hover:shadow-lg transition-all duration-300 group-hover:scale-105">
                  <span className="text-white font-bold text-xl">N</span>
                </div>
              </div>
              <div>
                <span className="text-xl font-bold text-gray-900 tracking-tight">
                  Nexus<span className="text-blue-600">Core</span>
                </span>
                <span className="hidden lg:block text-[10px] font-medium text-gray-400 tracking-wide -mt-1">
                  PhD Research Assistance
                </span>
              </div>
            </Link>

            {/* Desktop Nav Links */}
            <div className="hidden lg:flex items-center gap-1 bg-gray-50/50 rounded-full p-1">
              {navLinks.map((link) =>
                link.href === "/tc" ? (
                  <Link
                    key={link.name}
                    href="/tc"
                    className={`px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full ${
                      pathname === "/tc"
                        ? "text-white bg-gradient-to-r from-blue-600 to-indigo-600 shadow-md"
                        : "text-gray-600 hover:text-gray-900 hover:bg-white/50"
                    }`}
                  >
                    {link.name}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={(e) => handleNavClick(e, link)}
                    className="px-5 py-2 text-sm font-medium transition-all duration-300 rounded-full text-gray-600 hover:text-gray-900 hover:bg-white/50 cursor-pointer"
                  >
                    {link.name}
                  </button>
                )
              )}
            </div>

            {/* Desktop Right Buttons */}
            <div className="hidden lg:flex items-center gap-3">
              <a
                href="tel:+919385364005"
                className="px-5 py-2 text-sm font-medium text-gray-600 hover:text-gray-900 transition-all duration-200 rounded-lg hover:bg-gray-50"
              >
                Call Us
              </a>
              <button
                onClick={(e) => handleNavClick(e, { sectionId: "contact", href: "/" })}
                className="px-6 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg transition-all duration-300 hover:shadow-lg hover:shadow-blue-500/25 hover:scale-105 cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Hamburger */}
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden relative w-10 h-10 rounded-xl bg-gray-50 hover:bg-gray-100 text-gray-700 hover:text-blue-600 transition-all duration-200 flex items-center justify-center group"
              aria-label="Toggle menu"
            >
              <svg
                className="w-5 h-5 transition-transform duration-200 group-hover:scale-110"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                {isOpen ? (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                ) : (
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                )}
              </svg>
            </button>
          </div>
        </div>

        {/* Mobile Dropdown */}
        <div
          className={`lg:hidden fixed inset-x-0 top-16 bg-white shadow-2xl transition-all duration-500 ease-in-out z-40 ${
            isOpen
              ? "opacity-100 translate-y-0 visible"
              : "opacity-0 -translate-y-10 invisible"
          }`}
          style={{ maxHeight: "calc(100vh - 64px)", overflowY: "auto" }}
        >
          <div className="px-4 py-6 space-y-6">

            {/* Quick Actions */}
            <div className="grid grid-cols-2 gap-3 pb-4 border-b border-gray-100">
              <a
                href="tel:+919385364005"
                className="text-center px-4 py-2.5 text-sm font-medium text-gray-700 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
              >
                Call Us
              </a>
              <button
                onClick={(e) => handleNavClick(e, { sectionId: "contact", href: "/" })}
                className="text-center px-4 py-2.5 text-sm font-medium text-white bg-gradient-to-r from-blue-600 to-indigo-600 rounded-xl shadow-md hover:shadow-lg transition-all cursor-pointer"
              >
                Get Started
              </button>
            </div>

            {/* Mobile Nav Links */}
            <div className="space-y-1">
              {navLinks.map((link, index) =>
                link.href === "/tc" ? (
                  <Link
                    key={link.name}
                    href="/tc"
                    onClick={() => setIsOpen(false)}
                    className={`flex items-center justify-between px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 ${
                      pathname === "/tc"
                        ? "text-blue-600 bg-blue-50"
                        : "text-gray-700 hover:text-blue-600 hover:bg-gray-50"
                    }`}
                    style={{
                      animation: isOpen
                        ? `slideIn 0.4s ease-out ${index * 0.03}s both`
                        : "none",
                    }}
                  >
                    <span>{link.name}</span>
                    {pathname === "/tc" && (
                      <svg
                        className="w-4 h-4 text-blue-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth={2}
                          d="M9 5l7 7-7 7"
                        />
                      </svg>
                    )}
                  </Link>
                ) : (
                  <button
                    key={link.name}
                    onClick={(e) => handleNavClick(e, link)}
                    className="w-full flex items-center px-4 py-3 text-base font-medium rounded-xl transition-all duration-300 text-gray-700 hover:text-blue-600 hover:bg-gray-50 cursor-pointer"
                    style={{
                      animation: isOpen
                        ? `slideIn 0.4s ease-out ${index * 0.03}s both`
                        : "none",
                    }}
                  >
                    {link.name}
                  </button>
                )
              )}
            </div>

            {/* Help Card */}
            <div className="pt-4 border-t border-gray-100">
              <div className="bg-gradient-to-r from-blue-50 to-indigo-50 rounded-xl p-4">
                <p className="text-xs text-gray-600 text-center">
                  Need help?{" "}
                  <button
                    onClick={(e) =>
                      handleNavClick(e, { sectionId: "contact", href: "/" })
                    }
                    className="text-blue-600 font-semibold hover:underline cursor-pointer"
                  >
                    Contact Support
                  </button>
                </p>
              </div>
            </div>

          </div>
        </div>
      </header>

      {/* Mobile Overlay — outside header */}
      {isOpen && (
        <div
          className="lg:hidden fixed inset-0 bg-black/20 backdrop-blur-sm z-30"
          onClick={() => setIsOpen(false)}
        />
      )}

      {/* Spacer — outside header */}
      <div className="h-16 lg:h-20" />
    </>
  );
}




// git remote add origin https://github.com/Mohithh/NexusCore.git
// git branch -M main
// git push -u origin main