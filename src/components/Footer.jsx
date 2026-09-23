"use client";

import { useState } from "react";
import { ChevronDown, Mail, Phone } from "lucide-react";

export default function Footer() {
  // Mobile accordion state for footer link columns
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (sectionName) => {
    setOpenSection(openSection === sectionName ? null : sectionName);
  };

  const footerGroups = [
    {
      title: "Product",
      links: [
        { label: "Features", href: "#features" },
        { label: "Templates", href: "#checklist" },
        { label: "Integrations", href: "#" },
        { label: "Changelog", href: "#" },
      ],
    },
    {
      title: "Solutions",
      links: [
        { label: "by Industry", href: "#industries" },
        { label: "by Function", href: "#" },
        { label: "Enterprise", href: "#" },
        { label: "Safety Officers", href: "#" },
      ],
    },
    {
      title: "Resources",
      links: [
        { label: "Blog", href: "#" },
        { label: "Help Center", href: "#" },
        { label: "API Documentation", href: "#" },
        { label: "OSHA Guidelines", href: "#" },
      ],
    },
    {
      title: "Company",
      links: [
        { label: "About", href: "#" },
        { label: "Careers", href: "#" },
        { label: "Contact", href: "#contact" },
        { label: "Press", href: "#" },
      ],
    },
  ];

  return (
    <footer id="contact" className="bg-[#071324] text-slate-400 pt-10 sm:pt-16 pb-10 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Desktop Layout (Hidden on Mobile) */}
        <div className="hidden sm:grid sm:grid-cols-12 gap-10 pb-12 border-b border-slate-800">
          {/* Brand Info & Contact (4 cols) */}
          <div className="sm:col-span-4 space-y-4">
            <div className="flex items-center gap-2.5">
              <div className="w-8 h-8 rounded-lg bg-blue-600 flex items-center justify-center text-white shadow-sm">
                <svg
                  className="w-5 h-5 text-white"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="m21.12 6.4-6.05-4.06a4.95 4.95 0 0 0-5.14 0L3.88 6.4A4.95 4.95 0 0 0 1.5 10.6v5.8a4.95 4.95 0 0 0 2.38 4.2l6.05 4.06a4.95 4.95 0 0 0 5.14 0l6.05-4.06a4.95 4.95 0 0 0 2.38-4.2V10.6a4.95 4.95 0 0 0-2.38-4.2Z" />
                  <path d="M12 22V12" />
                  <path d="m1.8 7 10.2 5 10.2-5" />
                </svg>
              </div>
              <span className="text-xl font-bold text-white tracking-tight">
                InspectPro
              </span>
            </div>

            <p className="text-xs sm:text-sm text-slate-400 max-w-sm leading-relaxed">
              InspectPro is a trusted company providing compliant equipment inspections and safety management software.
            </p>

            <div className="pt-2 space-y-2 text-xs text-slate-400">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-blue-400" />
                <span>+1 (800) 555-0199</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-blue-400" />
                <span>info@inspectpro.com</span>
              </div>
            </div>
          </div>

          {/* Links Columns (8 cols) */}
          <div className="sm:col-span-8 grid sm:grid-cols-4 gap-8">
            {footerGroups.map((group) => (
              <div key={group.title}>
                <h4 className="text-xs font-bold text-white uppercase tracking-wider mb-4">
                  {group.title}
                </h4>
                <ul className="space-y-2.5">
                  {group.links.map((link) => (
                    <li key={link.label}>
                      <a
                        href={link.href}
                        className="text-xs sm:text-sm hover:text-white transition-colors"
                      >
                        {link.label}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Mobile View Layout (Matches Screenshot Right Phone Frame Exactly) */}
        <div className="sm:hidden space-y-6">
          {/* Accordion groups: Product, Solutions, Resources */}
          <div className="divide-y divide-slate-800 border-b border-slate-800">
            {footerGroups.slice(0, 3).map((group) => {
              const isOpen = openSection === group.title;
              return (
                <div key={group.title}>
                  <button
                    type="button"
                    onClick={() => toggleSection(group.title)}
                    className="w-full py-3.5 flex items-center justify-between text-left text-xs font-medium text-slate-300"
                  >
                    <span>{group.title}</span>
                    <ChevronDown
                      className={`w-3.5 h-3.5 text-slate-500 transition-transform ${
                        isOpen ? "rotate-180 text-blue-400" : ""
                      }`}
                    />
                  </button>
                  {isOpen && (
                    <ul className="pb-3 space-y-2 pl-2">
                      {group.links.map((link) => (
                        <li key={link.label}>
                          <a
                            href={link.href}
                            className="text-[11px] text-slate-400 hover:text-white block py-0.5"
                          >
                            {link.label}
                          </a>
                        </li>
                      ))}
                    </ul>
                  )}
                </div>
              );
            })}
          </div>

          {/* Mobile Contact Information */}
          <div className="pt-1 space-y-1.5 text-xs text-slate-400">
            <h4 className="text-xs font-bold text-slate-300">Contact</h4>
            <p className="text-[11px] text-slate-400">+1 (800) 555-0199</p>
            <p className="text-[11px] text-slate-400">info@inspectpro.com</p>
          </div>
        </div>

        {/* Bottom copyright and legal */}
        <div className="pt-6 sm:pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] sm:text-xs text-slate-500">
          <p>© {new Date().getFullYear()} InspectPro Inc. All rights reserved.</p>
          <div className="hidden sm:flex items-center gap-6">
            <a href="#" className="hover:text-slate-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-slate-400 transition-colors">Security</a>
          </div>
        </div>

      </div>
    </footer>
  );
}
