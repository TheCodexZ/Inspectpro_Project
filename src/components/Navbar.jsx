"use client";

import { useState } from "react";
import { ChevronDown, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Smooth scroll helper that also closes mobile menu
  const handleNavClick = (e, targetId) => {
    e.preventDefault();
    setMobileMenuOpen(false);
    const element = document.getElementById(targetId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <header className="sticky top-0 z-50 bg-white border-b border-slate-100 shadow-[0_1px_3px_rgba(0,0,0,0.02)]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Brand Logo */}
          <a href="#" className="flex items-center gap-2.5 group">
            <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm transition-transform group-hover:scale-105">
              <svg 
                className="w-5 h-5 text-white" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2.2" 
                strokeLinecap="round" 
                strokeLinejoin="round"
              >
                <path d="m21.12 6.4-6.05-4.06a4.95 4.95 0 0 0-5.14 0L3.88 6.4A4.95 4.95 0 0 0 1.5 10.6v5.8a4.95 4.95 0 0 0 2.38 4.2l6.05 4.06a4.95 4.95 0 0 0 5.14 0l6.05-4.06a4.95 4.95 0 0 0 2.38-4.2v-5.8a4.95 4.95 0 0 0-2.38-4.2Z" />
                <path d="M12 22V12" />
                <path d="m1.8 7 10.2 5 10.2-5" />
              </svg>
            </div>
            <span className="text-xl font-bold text-slate-900 tracking-tight">
              InspectPro
            </span>
          </a>

          {/* Desktop Navigation Links */}
          <nav className="hidden md:flex items-center gap-8">
            <a 
              href="#features" 
              onClick={(e) => handleNavClick(e, "features")}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Products
            </a>
            <a 
              href="#industries" 
              onClick={(e) => handleNavClick(e, "industries")}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Solutions
            </a>
            <div 
              onClick={(e) => handleNavClick(e, "faq")}
              className="relative group flex items-center gap-1 cursor-pointer text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 text-slate-400 group-hover:text-blue-600 transition-transform group-hover:rotate-180" />
            </div>
            <a 
              href="#checklist" 
              onClick={(e) => handleNavClick(e, "checklist")}
              className="text-sm font-medium text-slate-700 hover:text-blue-600 transition-colors"
            >
              Pricing
            </a>
          </nav>

          {/* Desktop Right Action Buttons */}
          <div className="hidden md:flex items-center gap-5">
            <a 
              href="#login" 
              onClick={(e) => {
                e.preventDefault();
                alert("Login modal / redirect placeholder");
              }}
              className="text-sm font-medium text-slate-700 hover:text-slate-900 transition-colors"
            >
              Login
            </a>
            <a
              href="#checklist"
              onClick={(e) => handleNavClick(e, "checklist")}
              className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-[#1a66e5] hover:bg-blue-700 rounded-lg shadow-sm transition-colors"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger Button */}
          <div className="flex md:hidden">
            <button
              type="button"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 focus:outline-none"
              aria-label="Toggle navigation menu"
            >
              {mobileMenuOpen ? (
                <X className="w-6 h-6" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {mobileMenuOpen && (
        <div className="md:hidden border-b border-slate-200 bg-white px-4 pt-3 pb-6 space-y-4 shadow-xl">
          <nav className="flex flex-col space-y-2">
            <a
              href="#features"
              onClick={(e) => handleNavClick(e, "features")}
              className="px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50"
            >
              Products
            </a>
            <a
              href="#industries"
              onClick={(e) => handleNavClick(e, "industries")}
              className="px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50"
            >
              Solutions
            </a>
            <a
              href="#faq"
              onClick={(e) => handleNavClick(e, "faq")}
              className="px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50 flex items-center justify-between"
            >
              <span>Resources</span>
              <ChevronDown className="w-4 h-4 text-slate-400" />
            </a>
            <a
              href="#checklist"
              onClick={(e) => handleNavClick(e, "checklist")}
              className="px-3 py-2 text-base font-medium text-slate-800 rounded-md hover:bg-slate-50"
            >
              Pricing
            </a>
          </nav>

          <div className="pt-3 border-t border-slate-100 flex flex-col gap-3">
            <a
              href="#login"
              onClick={(e) => {
                e.preventDefault();
                setMobileMenuOpen(false);
                alert("Login modal / redirect placeholder");
              }}
              className="text-center w-full py-2.5 text-sm font-semibold text-slate-700 border border-slate-200 rounded-lg hover:bg-slate-50"
            >
              Login
            </a>
            <a
              href="#checklist"
              onClick={(e) => handleNavClick(e, "checklist")}
              className="text-center w-full py-2.5 text-sm font-semibold text-white bg-[#1a66e5] hover:bg-blue-700 rounded-lg shadow-sm"
            >
              Get Started
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
