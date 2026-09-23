"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { faqList } from "@/data/checklistData";

export default function FAQ() {
  // Store which FAQ item is currently expanded. Default to index 0 like in the reference image
  const [openIndex, setOpenIndex] = useState(0);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section id="faq" className="py-12 sm:py-16 bg-white border-t border-slate-100">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Heading */}
        <div className="mb-6 sm:mb-10 text-left sm:text-center">
          <h2 className="text-xl sm:text-3xl font-extrabold text-slate-900 tracking-tight">
            FAQ
          </h2>
          <p className="hidden sm:block mt-2 text-sm text-slate-500">
            Frequently asked questions about forklift inspections and compliance.
          </p>
        </div>

        {/* Accordion List */}
        <div className="divide-y divide-slate-100 border-t border-b border-slate-100">
          {faqList.map((item, index) => {
            const isOpen = openIndex === index;

            return (
              <div key={index} className="transition-colors">
                <button
                  type="button"
                  onClick={() => toggleFAQ(index)}
                  className="w-full text-left py-3.5 sm:py-4 flex items-center justify-between gap-4 hover:text-blue-600 transition-colors"
                  aria-expanded={isOpen}
                >
                  <span className="text-xs sm:text-sm font-bold text-slate-900 leading-snug">
                    {item.question}
                  </span>
                  <ChevronDown
                    className={`w-4 h-4 text-slate-400 shrink-0 transition-transform duration-200 ${
                      isOpen ? "rotate-180 text-blue-600" : ""
                    }`}
                  />
                </button>

                {isOpen && (
                  <div className="pb-4 pt-1 text-[11px] sm:text-xs text-slate-600 leading-relaxed">
                    {item.answer}
                  </div>
                )}
              </div>
            );
          })}
        </div>

      </div>
    </section>
  );
}
